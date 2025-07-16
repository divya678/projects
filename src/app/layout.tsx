import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./compoenent/header";
import Sidebar from "./compoenent/sideBar";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import ThemeSwitch from "./compoenent/themeSwitch";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  icons: {
    icon: [
      {
        url: "/images/favicon.png",
        href: "/images/favicon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="tokyo_tm_all_wrap">
            <ThemeSwitch />
            <Header />
            <div className="main-container" style={{ display: "flex" }}>
              <Sidebar />

              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
