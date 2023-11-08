"use client";

import { Inter_Tight } from 'next/font/google'

const inter = Inter_Tight({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`h-full bg-background text-white  ${inter.className}`}>{children}</body>
        </html>
    )
}
