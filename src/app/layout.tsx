import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "سلام من عرفان هستم !",
  description: "به وبسایت من خوش امدید",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark">
      <body
        className={`${geistSans.variable} antialiased container mx-auto px-14`}
      >
        {children}
      </body>
    </html>
  );
}
