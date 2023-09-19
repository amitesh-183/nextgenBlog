import Nav from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextGen App",
  description: "NextGen Blogs| Pioneering the Future of Online Content.",
  icons: "/assets/logo.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
