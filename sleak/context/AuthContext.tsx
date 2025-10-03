"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { getCurrentAccount, getAccount, storeUser, checkDB } from "@/lib/appwrite/user.action";
import { Models } from "appwrite";

interface AuthContextType {
  user: Models.Document | null;
  loading: boolean;
  refreshUser: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  refreshUser: async () => {},
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Models.Document | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const isInitialized = useRef(false);

  const refreshUser = async () => {
    try {
      // Only show loading state on initial load
      if (!isInitialized.current) {
        setLoading(true);
      }
      
      const currentUser = await getCurrentAccount();
      
      if (currentUser) {
        setUser(currentUser);
      } else {
        // User is logged in to Appwrite but not in database
        const account = await getAccount();
        if (account) {
          const userExists = await checkDB(account.email);
          
          if (!userExists) {
            // Create user in database
            await storeUser();
            const newUser = await getCurrentAccount();
            setUser(newUser || null);
          }
        } else {
          setUser(null);
        }
      }
    } catch (error) {
      console.error("Error refreshing user:", error);
      setUser(null);
    } finally {
      setLoading(false);
      isInitialized.current = true;
    }
  };

  const logout = async () => {
    try {
      const { account } = await import("@/lib/appwrite/appwrite");
      await account.deleteSession("current");
      document.cookie = "is_logged_in=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      setUser(null);
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, refreshUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}