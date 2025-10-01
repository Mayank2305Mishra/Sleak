import React, { ReactNode } from "react"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Auth | Sleak",
    description: "AI agent based productivity app",
};

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {children}
        </>
    )
}

export default AuthLayout