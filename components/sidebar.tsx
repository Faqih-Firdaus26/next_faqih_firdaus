"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Briefcase, FolderKanban, Mail, Menu, X, Github, Linkedin, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"

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

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-40 rounded-md bg-primary p-2 text-white shadow-md lg:hidden"
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:shadow-none",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          {/* Close button (mobile only) */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 rounded-md p-1 text-gray-500 lg:hidden"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </button>

          {/* Profile section */}
          <div className="flex flex-col items-center p-6">
            <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-primary/20">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="mt-4 text-xl font-bold">John Doe</h1>
            <p className="text-sm text-gray-500">Full Stack Developer</p>
          </div>

          {/* Navigation */}
          <nav className="mt-6 flex-1 space-y-1 px-4">
            {routes.map((route) => {
              const isActive = pathname === route.path

              return (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center rounded-md px-4 py-3 text-sm font-medium transition-colors",
                    isActive ? "bg-primary text-white" : "text-gray-600 hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <route.icon className={cn("mr-3 h-5 w-5", isActive ? "text-white" : "text-primary")} />
                  {route.name}
                </Link>
              )
            })}
          </nav>

          {/* Social links */}
          <div className="mt-auto border-t p-4">
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500">© 2023 John Doe</p>
          </div>
        </div>
      </aside>
    </>
  )
}

