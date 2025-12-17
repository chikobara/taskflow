import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TaskFlow - Modern Task Management for Teams",
  description:
    "TaskFlow helps teams manage projects, track progress, and collaborate seamlessly. Boost your productivity with our intuitive task management platform.",
  generator: "Next.js",
  keywords: ["task management", "project management", "team collaboration", "productivity"],
}

export const viewport: Viewport = {
  themeColor: "#18181b",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
