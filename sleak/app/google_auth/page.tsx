'use client'
import { googleLogin } from '@/appwrite/user.action';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'
import { FaGoogle } from "react-icons/fa";


const page = () => {
    return (
        <div className='relative min-h-[100svh] flex items-center justify-center px-4 pb-[calc(env(safe-area-inset-bottom)+96px)] md:pb-[44vh]'>
            <div className="w-full max-w-sm mx-auto bg-black/80 border border-gray-700 rounded-2xl shadow-md p-6 flex flex-col items-center gap-6">
                <h2 className="text-lg sm:text-xl font-semibold text-white text-center">
                    Sign in to Continue
                </h2>
                <p className="text-gray-200 text-sm text-center">
                    Use your Google account to get started quickly and securely.
                </p>
                <Button
                    onClick={googleLogin}
                    variant={'default'}
                    className="flex items-center justify-center gap-2 sm:gap-3 bg-white text-gray-700 
                   px-4 py-2 sm:px-5 sm:py-3 rounded-xl shadow-md border border-gray-200 
                   hover:shadow-lg hover:bg-gray-50 transition-all duration-300 ease-in-out w-full"
                >
                    <FaGoogle className="text-xl sm:text-2xl" />
                    <span className="font-medium text-sm sm:text-base">
                        Authenticate with Google
                    </span>
                </Button>
            </div>
        </div>
    )
}

export default page