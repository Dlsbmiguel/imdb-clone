"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="dark:text-gray-200 dark:bg-gray-700 text-gray-700 transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
