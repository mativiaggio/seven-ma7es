import type { Metadata } from "next";
import { main_font } from "@/config/fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
  title: "SEVENMATES",
  description: "Para las mejores charlas, unos buenos mates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${main_font.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* <h1>Proximamente</h1> */}
      </body>
    </html>
  );
}
