import type { Metadata } from "next";
import { main_font } from "@/config/fonts";
import "./globals.css";

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
    <html lang="en">
      <body className={`${main_font.className}`}>{children}</body>
    </html>
  );
}
