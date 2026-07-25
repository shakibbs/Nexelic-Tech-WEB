"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// Dark/light theme provider with system detection (SRS §2 — seamless light/dark mode)
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
