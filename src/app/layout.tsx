import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";
import FormPopupProvider from "@/components/FormPopup";

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
  icons: {
    icon: "/logos/logo.png",
    apple: "/logos/logo.png",
  },
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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5DFJ6J38');
        `}
        </Script>

        {/* Google Ads */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17743655397"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-17743655397');
        `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased min-h-screen flex flex-col`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5DFJ6J38"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <FormPopupProvider>
          <div className="pt-[71.97px] flex-grow">{children}</div>
        </FormPopupProvider>
        <Footer />
        <Toaster position="top-right" closeButton />
        <GoogleAnalytics gaId="G-P8RHE8QT3G" />
      </body>
    </html>
  );
}
