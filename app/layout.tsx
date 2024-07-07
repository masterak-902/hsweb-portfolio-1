import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HSWEB PORTFOLIO 1",
  description: "Created by masterak.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="flex flex-col bg-gray-100 text-customGray min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
