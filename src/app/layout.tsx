import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PointerTrail } from "@/components/PointerTrail";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Not On Line Yet | Websites & AI Call Answering for UK Tradespeople",
  description:
    "Simple, fast websites for tradespeople, plus an AI receptionist that answers every missed call. Built and hosted for you, live in days.",
  metadataBase: new URL("https://www.notonlineyet.co.uk"),
  openGraph: {
    title: "Not On Line Yet",
    description:
      "Simple, fast websites for tradespeople, plus an AI receptionist that answers every missed call.",
    url: "https://www.notonlineyet.co.uk",
    siteName: "Not On Line Yet",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base text-text">
        <PointerTrail />
        {children}
      </body>
    </html>
  );
}
