"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Briefcase, FolderKanban, Mail, Github, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useTheme } from "next-themes"

const routes = [
  {
    path: "/",
    name: "Home",
    icon: Home,
  },
  {
    path: "/about",
    name: "About",
    icon: User,
  },
  {
    path: "/projects",
    name: "Projects",
    icon: FolderKanban,
  },
  {
    path: "/experience",
    name: "Experience",
    icon: Briefcase,
  },
  {
    path: "/contact",
    name: "Contact",
    icon: Mail,
  },
]

interface MobileSidebarProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export default function MobileSidebar({ isOpen, onOpenChange }: MobileSidebarProps) {
  const pathname = usePathname()
  const { theme } = useTheme()

  useEffect(() => {
    const handleRouteChange = () => {
      onOpenChange(false)
    }

    window.addEventListener("popstate", handleRouteChange)
    return () => window.removeEventListener("popstate", handleRouteChange)
  }, [onOpenChange])

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className={cn("w-[300px] sm:w-[400px]", theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900")}
      >
        <SheetHeader>
          <SheetTitle className={theme === "dark" ? "text-white" : "text-gray-900"}>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-full">
          {/* Navigation */}
          <nav className="flex-1 mt-8">
            {routes.map((route) => {
              const isActive = pathname === route.path

              return (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={() => onOpenChange(false)}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm font-medium transition-colors rounded-md",
                    isActive
                      ? theme === "dark"
                        ? "bg-gray-800 text-white"
                        : "bg-gray-200 text-gray-900"
                      : theme === "dark"
                        ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                  )}
                >
                  <route.icon className="mr-3 h-5 w-5" />
                  {route.name}
                </Link>
              )
            })}
          </nav>

          {/* Social links */}
          <div className="mt-auto border-t py-4">
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/Faqih-Firdaus26"
                target="_blank"
                rel="noopener noreferrer"
                className={theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-faqih-al-firdaus-126a86223/"
                target="_blank"
                rel="noopener noreferrer"
                className={theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <p className={cn("mt-4 text-center text-xs", theme === "dark" ? "text-gray-400" : "text-gray-500")}>
              © {new Date().getFullYear()} Faqih Al Firdaus
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

