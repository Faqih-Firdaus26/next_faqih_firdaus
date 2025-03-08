"use client"

import type React from "react"

import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import MobileSidebar from "@/components/mobile-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col bg-background">
            <Navbar />
            <MobileSidebar />
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

