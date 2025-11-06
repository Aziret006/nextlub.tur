import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NEXTLUB - Премиум туры в Кыргызстане | Mountain Adventures",
  description:
    "Авторские туры и походы в Кыргызстане. Профессиональные гиды, горные пейзажи и незабываемые приключения.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`font-sans antialiased bg-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
