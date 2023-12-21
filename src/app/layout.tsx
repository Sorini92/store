import type { Metadata } from "next";
import "./globals.css";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export const metadata: Metadata = {
    title: "Home | Next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <TheHeader />
                <main className="container">{children}</main>
                <TheFooter />
            </body>
        </html>
    );
}
