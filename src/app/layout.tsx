import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTopComponent from "@/components/scrollToTop/scrollToTop";
import NavbarComponent from "@/components/navbar/navbar";
import ReduxUseClientProvider from "@/providers/reduxUseClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxUseClientProvider>
          <NavbarComponent />
          {children}
          <ScrollToTopComponent />
        </ReduxUseClientProvider>
      </body>
    </html>
  );
}
