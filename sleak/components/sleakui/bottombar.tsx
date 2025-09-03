import Link from "next/link"
import { Home, Sparkles, Tag, Info, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"
import { navItems } from "./sidebar"


export function SleakBottomBar() {
  return (
    <div
      aria-label="Sleak bottom navigation"
      className={cn("pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center md:hidden")}
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0px)" }}
    >
      <nav
        role="navigation"
        className={cn(
          "pointer-events-auto rounded-full border bg-black/70 backdrop-blur-xl",
          "ring-1 ring-white/10 border border-white/5",
          "px-2 py-2",
        )}
      >
        <ul className="flex items-center gap-4">
          {navItems.map(({ href, label, icon: Icon }) => (
            <li key={href} className="relative">
              <Link
                href={href}
                aria-label={label}
                className={cn(
                  "group inline-flex h-10 w-10 items-center justify-center rounded-full",
                  "text-white/80 hover:text-white transition-colors",
                  "hover:bg-white/5 focus-visible:bg-white/5",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60",
                )}
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} />
                {/* floating label bubble above on hover/focus */}
                <span
                  className={cn(
                    "pointer-events-none absolute -top-2 translate-y-[-100%] left-1/2 -translate-x-1/2",
                    "whitespace-nowrap rounded-full bg-black/90 border border-border/60 px-2.5 py-1",
                    "text-xs font-medium text-white/90 shadow-md shadow-black/5",
                    "opacity-0 transition-opacity duration-150",
                    "group-hover:opacity-100 group-focus-visible:opacity-100",
                  )}
                  role="tooltip"
                >
                  {label}
                </span>
                <span className="sr-only">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
