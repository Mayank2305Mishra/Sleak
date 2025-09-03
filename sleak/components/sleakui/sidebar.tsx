import Link from "next/link"
import { Home, Sparkles, Tag, Info, Rocket, Settings, NotebookIcon, Logs, Code } from "lucide-react"
import { cn } from "@/lib/utils"

export const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/code", label: "Code", icon: Code },
  { href: "/notes", label: "Notes", icon: NotebookIcon },
  { href: "/threads", label: "Threads", icon: Logs },
  { href: "/settings", label: "Settings", icon: Settings },
]

export function SleakSidebar() {
  return (
    <aside
      aria-label="Sleak sidebar"
      className={cn(
        // container
        "pointer-events-auto fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 md:flex",
        // safe area padding on the left (if any)
      )}
      style={{ paddingLeft: "max(env(safe-area-inset-left), 0px)" }}
    >
      <div
        className={cn(
          "rounded-2xl border bg-black/70 backdrop-blur-xl",
          "ring-1 ring-white/10 border border-white/5",
          "p-2",
        )}
        role="navigation"
      >
        <ul className="flex flex-col items-center gap-8">
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
                {/* label bubble on hover/focus */}
                <span
                  className={cn(
                    "pointer-events-none absolute left-full ml-2 top-1/2 -translate-y-1/2",
                    "rounded-full bg-black/90 border border-border/60 px-2.5 py-1",
                    "text-xs font-medium text-white/90 shadow-md shadow-black/5",
                    "opacity-0 translate-x-1 transition-all duration-150",
                    "group-hover:opacity-100 group-hover:translate-x-0",
                    "group-focus-visible:opacity-100 group-focus-visible:translate-x-0",
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
      </div>
    </aside>
  )
}
