"use client";
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Blogstra - A simple blog made using Azure DAB</title>
        <meta name="description" content="An app developed by Abhijith Ganesh" />
      </head>
      <body className={`h-full bg-background text-white  ${inter.className}`}>{children}</body>
    </html>
  )
}
