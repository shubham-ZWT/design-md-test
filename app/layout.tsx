import type { Metadata } from "next";
import { Albert_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Design Test",
  description: "Premium blue-white design system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${albertSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
      style={{ fontFamily: "var(--font-albert-sans)" }}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
