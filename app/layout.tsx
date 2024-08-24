import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ThirdwebProvider } from "thirdweb/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlappyQF",
  description:
    "FlappyQF is a platform that employes a Defi approach that ensures fair competition between projects while allowing users to interact with the iconic flappy birds as part of experience.",
  manifest: "/manifest.json",
  icons: [
    { rel: "apple-touch-icon", url: "icons/apple-touch-icon.png" },
    { rel: "icon", url: "icons/android-chrome-192x192.png" },
    { rel: "favicon", url: "favicon.ico" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>
          <Header />
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
