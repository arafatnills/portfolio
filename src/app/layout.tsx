import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
    title: "Md Arafat Ali | Full-Stack Developer",
    description: "Experienced full-stack developer specializing in the MERN stack, Next.js, and Tailwind CSS.",
};

import CursorSpotlight from "@/components/ui/CursorSpotlight";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth ">
            <body className={`${inter.variable} ${firaCode.variable} bg-navy text-slate antialiased selection:bg-green selection:text-navy`}>
                <CursorSpotlight />
                {children}
            </body>
        </html>
    );
}
