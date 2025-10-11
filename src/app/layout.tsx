import "./globals.css";
import ThemeProvider from "../components/ThemeProvider/ThemeProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Erfan Ghezi | Front-End Developer",
  description:
    "Personal portfolio of Erfan Ghezi — Front-End Developer passionate about building modern, responsive, and user-friendly web applications.",
  keywords: [
    "Erfan Ghezi",
    "Front-End Developer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Erfan Ghezi" }],
  creator: "Erfan Ghezi",
  icons: {
    icon: "/images/fav/Code.png",
  },
  metadataBase: new URL("https://personal-next-ten.vercel.app"),
  openGraph: {
    title: "Erfan Ghezi | Front-End Developer",
    description:
      "Explore Erfan Ghezi’s personal portfolio — modern web projects built with React, Next.js, and TypeScript.",
    url: "https://personal-next-ten.vercel.app",
    siteName: "Erfan Ghezi Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="font-cascadia">
      <head>
       <meta name="google-site-verification" content="uJaqpm057RROXTwTZm3xJ8kLY8fAVRhCKCxiKC79g0M" />
      </head>
      <body className="bg-white dark:bg-bgDark">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
