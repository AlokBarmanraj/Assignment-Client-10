"use client";
import { ThemeProvider } from "next-themes";

const HeroThemeProvider = ({ children }) => {
    return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
    );
};

export default HeroThemeProvider;
