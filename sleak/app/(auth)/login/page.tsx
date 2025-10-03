'use client'

import { LoginForm } from "@/components/login-form"
import { Icon } from "@/components/icon"
import { getAccount } from "@/lib/appwrite/user.action"
import { useEffect } from "react"
import Link from "next/link"


export default function LoginPage() {
  const userData = async()=>{
    const user = await getAccount()
    console.log(user);
    
  }
  useEffect(() => {
    console.log(userData)
  }, [])
  
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
            <Icon h={120} w={120}/>
          </div>
          Sleak
        </Link>
        <LoginForm />
      </div>
    </div>
  )
}
