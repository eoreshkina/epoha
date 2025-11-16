import type { Metadata } from "next";
import { Geist, Limelight, Montserrat } from "next/font/google";
import "@/styles/globals.css";
import MobileHeader from "@/components/header/MobileHeader";
import DesktopHeader from "@/components/header/DesktopHeader";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const limelight = Limelight({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-limelight",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300"],
  style: ["normal"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "EpoHa Studio",
  description:
    "Custom-made art pieces and products created with passion and imagination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-VR9NBQSQG7"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-VR9NBQSQG7');
              `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${limelight.variable} ${montserrat.variable} antialiased`}
      >
        <MobileHeader />
        <DesktopHeader />
        {children}
      </body>
    </html>
  );
}
