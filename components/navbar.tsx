"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Briefcase,
  FolderKanban,
  Mail,
  Github,
  Linkedin,
  Moon,
  Sun,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import MobileSidebar from "./mobile-sidebar";

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
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileSidebarToggle = () => {
    setIsMobileSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5",
          theme === "dark" ? "text-white" : "text-gray-900"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20 mr-3">
              <img
                src="/about/faqih.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-xl font-bold">Faqih Al Firdaus</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {routes.map((route) => {
              const isActive = pathname === route.path;

              return (
                <Link
                  key={route.path}
                  href={route.path}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-md group",
                    isActive
                      ? "text-primary"
                      : theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  <span className="relative z-10">{route.name}</span>

                  {/* Hover animation */}
                  <span
                    className={cn(
                      "absolute inset-0 rounded-md -z-0 transition-all duration-300 transform",
                      isActive
                        ? "bg-primary/10"
                        : "bg-transparent group-hover:bg-primary/5 scale-0 group-hover:scale-100"
                    )}
                  ></span>

                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Social links and theme toggle */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Faqih-Firdaus26"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden md:block transition-colors",
                theme === "dark"
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-faqih-al-firdaus-126a86223/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden md:block transition-colors",
                theme === "dark"
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={
                theme === "dark"
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden",
                theme === "dark"
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              )}
              onClick={handleMobileSidebarToggle}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </header>
      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onOpenChange={setIsMobileSidebarOpen}
      />
    </>
  );
}
