import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import TelemetryStrip from "@/components/TelemetryStrip";
import Header from "@/components/Header";
import PremiumFooter from "@/components/PremiumFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "C Data Systems | Precision Infrastructure & Oracle Systems Integration",
  description: "C Data Systems engineers fault-tolerant Oracle ERP migrations, multi-cloud architectures, and military-grade cyber defense with guaranteed 99.999% uptime.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Material Symbols Outlined for M3-style icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface font-sans text-on-surface antialiased overflow-x-hidden">
        {/* <TelemetryStrip /> */}
        <Header />
        <main className="flex-1 flex flex-col pt-16 sm:pt-20">{children}</main>
        <PremiumFooter />
      </body>
    </html>
  );
}
