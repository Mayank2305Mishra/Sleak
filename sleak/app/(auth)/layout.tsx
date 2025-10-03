'use client'
import React, { ReactNode, useEffect } from "react"
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";


const AuthLayout = ({ children }: { children: ReactNode }) => {
    const { user, loading } = useAuth();
    const router = useRouter();
    useEffect(() => {
        if (!loading && user) {
            // User is already logged in, redirect to home
            router.replace("/");
        }
    }, [user, loading, router]);
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    if (user) {
        return null;
    }
    return (
        <>
            {children}
        </>
    )
}

export default AuthLayout