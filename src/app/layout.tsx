import "./globals.css";
import ThemeProvider from "../components/ThemeProvider/ThemeProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Erfan Ghezi || Front-End Dev",
  description: "Welcome to my portfolio",
  icons : {
    icon : "/images/fav/Code.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="font-cascadia">
      <body className="bg-white dark:bg-bgDark">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
