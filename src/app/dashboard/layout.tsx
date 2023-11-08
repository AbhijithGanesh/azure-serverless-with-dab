"use client";
import { Inter } from "next/font/google";
import { MdOutlineRocket, MdOutlineLogout } from "react-icons/md";

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
            <body className={`h-full bg-background text-white  ${inter.className}`}>
                <nav className="flex items-center justify-between px-4 py-2 border-b-[0.5px] border-b-slate-700">
                    <a href="/" className="p-2 hover:bg-slate-900 rounded-md">
                        <section className="flex items-center justify-center gap-2">
                            <MdOutlineRocket className="text-4xl" />
                            <span className="font-bold text-xl">Blogstra</span>
                        </section>
                    </a>
                    <section>
                        <MdOutlineLogout className="text-2xl" />
                    </section>
                </nav>
                {children}
            </body>
        </html>
    );
}
