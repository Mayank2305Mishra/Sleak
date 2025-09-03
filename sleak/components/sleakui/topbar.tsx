"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { FaGoogle } from "react-icons/fa";

export function SleakTopbar({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "pointer-events-none fixed inset-x-0 top-2 z-50 flex justify-center px-3 md:top-4 md:px-4",
                className,
            )}
        >
            {/* Floating glass nav */}
            <nav
                aria-label="Main"
                className={cn(
                    "pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-2",
                    // Glassmorphism surface
                    "backdrop-blur-xl bg-black/30",
                    // Premium subtle border and ring
                    "ring-1 ring-white/10 border border-white/5",
                    // Shape and internal spacing
                    "rounded-full px-3 py-2 md:px-4 md:py-2.5",
                    // Depth (use standard shadows to avoid arbitrary values)
                    "shadow-lg md:shadow-xl shadow-black/10",
                )}
                role="navigation"
            >
                {/* Brand */}
                <div className="flex items-center gap-2">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full px-2 py-1 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
                        aria-label="Sleak home"
                    >
                        <Image src="/icon.png" height={30} width={30} alt="." />
                        <span className="text-base font-semibold tracking-tight text-neutral-100">Sleak</span>
                    </Link>
                </div>

                {/* Right actions */}
                <div className="flex items-center gap-1">


                    {/* CTA visible on md+ */}
                    <Link
                        href="/google_auth"
                        className="flex items-center justify-center gap-2 sm:gap-3 bg-white text-gray-700 
                 px-2 py-1 sm:px-1 sm:py-0.5 rounded-xl shadow-md border border-gray-200 
                 hover:shadow-lg hover:bg-gray-50 transition-all duration-300 ease-in-out w-full sm:w-auto"
                    >
                        <FaGoogle className="text-xl" />
                        <span className="font-medium text-sm sm:text-base">Authenticate</span>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
