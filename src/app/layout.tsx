import "./globals.css"
import ThemeProvider from "../components/ThemeProvider/ThemeProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Erfan Ghezi | Front-End Developer",
  description:
    "Explore the portfolio of Erfan Ghezi — a passionate Front-End Developer crafting modern web experiences with React, Next.js, and TypeScript.",
  icons: {
    icon: "/images/fav/Code.png",
  },
  openGraph: {
    title: "Erfan Ghezi | Front-End Developer",
    description:
      "Discover Erfan Ghezi’s work in modern front-end development. Focused on clean code, performance, and exceptional user experiences.",
    url: "https://your-domain.vercel.app",
    siteName: "Erfan Ghezi Portfolio",
    images: [
      {
        url: "/images/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Erfan Ghezi Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erfan Ghezi | Front-End Developer",
    description:
      "Front-End Developer specializing in React, Next.js, and modern web technologies.",
    images: ["/images/og-preview.png"],
  },
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
