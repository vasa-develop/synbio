import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Synthetic Biology (vasa)",
  description: "A list of synthetic biology resources built by vasa.",
  icons: "/synbio_favicon.ico",
  openGraph: {
    title: "Synthetic Biology Projects - Built by vasa",
    description: "A list of synthetic biology resources built by vasa.",
    url: "https://synbio.sh",
    images: [
      {
        url: "https://www.synbio.sh/banner.png",
        width: 1200,
        height: 630,
        alt: "Synthetic Biology Projects - Built by vasa",
      },
    ],
  },
  twitter: {
    site: "@vasa_develop",
    title: "Synthetic Biology Projects - Built by vasa",
    description: "A list of synthetic biology resources built by vasa.",
    images: "https://www.synbio.sh/banner.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
