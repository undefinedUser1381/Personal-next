"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

interface ComponentChild {
  children: React.ReactNode;
}

function ThemeProvider({ children }: ComponentChild) {
  return (
    <NextThemeProvider
      defaultTheme="dark"
      enableSystem={false}
      attribute="class"
    >
      {children}
    </NextThemeProvider>
  );
}

export default ThemeProvider;
