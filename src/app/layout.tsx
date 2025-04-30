import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Our Design",
  description: "Connect with Quality Leads.",
};

const poppins = Poppins({
  weight: ["100", "200"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <div className="pt-[71.97px] flex-grow">{children}</div>
        <Footer />
        <Toaster position="top-right" closeButton />
      </body>
      <GoogleAnalytics gaId="G-P8RHE8QT3G" />
    </html>
  );
}
