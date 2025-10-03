"use client"
import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { useAuthContext } from "@/context/AuthContext"
import { useEffect } from "react"
import { getAccount } from "../../lib/appwrite/user.action"



export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { checkAuthUser, googleUserData } = useAuthContext()
    useEffect(() => {
        const data = googleUserData()
        const userstate = checkAuthUser()
    }, [])

    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 data-[orientation=vertical]:h-4"
                            />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="block">
                                        <BreadcrumbLink href="#">
                                            SLEAK - AI productivity app
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </header>
                    <div className="flex flex-col gap-4 p-4 pt-0 bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
                        {children}
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}