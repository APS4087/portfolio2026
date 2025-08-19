import type { Metadata } from "next";
import { IBM_Plex_Mono, JetBrains_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

// IBM Plex Mono for Nothing-inspired display text
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

// JetBrains Mono for Nothing-style monospace
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// Space Mono for alternative monospace
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Aung Pyae (Bill) Soe - IT Administrator & Developer",
  description: "IT Administrator supporting global maritime operations with cloud infrastructure, automation, and modern web development expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${jetbrainsMono.variable} ${spaceMono.variable} antialiased font-mono`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
