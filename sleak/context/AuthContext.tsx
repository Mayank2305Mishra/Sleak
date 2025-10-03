'use client'
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkDB, getAccount, getCurrentAccount, storeUser } from "@/lib/appwrite/user.action";
import { account } from "@/lib/appwrite/appwrite";

export const INITIAL_USER = {
    $id: "",
    name: "",
    email: "",
    avatarUrl: "",
}

export const INITIAL_STATE = {
    user: INITIAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser: () => { },
    setIsAuthenticated: () => { },
    checkAuthUser: async () => false as boolean,
    googleUserData: async () => { },
}

type ContextType = {
    user: User;
    isLoading: boolean;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    googleUserData: () => Promise<any>;
    checkAuthUser: () => Promise<boolean>;
};
const AuthContext = createContext<ContextType>(INITIAL_STATE)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const route = useRouter()
    const [user, setUser] = useState(INITIAL_USER)
    const [isLoading, setIsLoading] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const checkAuthUser = async () => {
        setIsLoading(true)
        try {
            const currentAccount = await getCurrentAccount()

            if (currentAccount) {
                setUser({
                    $id: currentAccount.$id,
                    name: currentAccount.name,
                    email: currentAccount.email,
                    avatarUrl: currentAccount.avatarUrl
                })
                setIsAuthenticated(true)
                return true
            }
            return false
        } catch (error) {
            console.log(error);
            return false
        } finally {
            setIsLoading(false)
        }
    }
    const googleUserData = async () => {
        try {
            const user = await account.get()
            const checking = await checkDB(user.email)
            if(checking== false){
                await storeUser()
            }

        } catch (error: any) {
            throw new Error(error)
        }
    }
    useEffect(() => {
        checkAuthUser();
    }, []);

    const values = {
        user,
        setUser,
        isLoading,
        isAuthenticated,
        setIsAuthenticated,
        googleUserData,
        checkAuthUser
    }
    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
