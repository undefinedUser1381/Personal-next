import type { Metadata } from "next";
import "./globals.css";

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
      <body className="">
        {children}
      </body>
    </html>
  );
}
