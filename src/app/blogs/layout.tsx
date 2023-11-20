"use client";
import { Inter } from "next/font/google";
import { MdOutlineRocket } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <title>Blogstra - A simple blog made using Azure DAB</title>
                <meta
                    name="description"
                    content="An app developed by Abhijith Ganesh"
                />
            </head>
            <body style={inter.style}>
                <nav className="border-slate-700 border-b-[1px] h-16 flex flex-1 justify-between items-center px-28">
                    <section className="flex items-center justify-start gap-2">
                        <MdOutlineRocket className="text-4xl" />
                        <section className="text-xl font-extrabold tracking-tight">Blogstra</section>
                    </section>
                    <section className="h-8 w-8"><img src="https://agcnwo.com/wp-content/uploads/2020/09/avatar-placeholder.png" /></section>
                </nav>
                {children}
            </body>
        </html>
    );
}
