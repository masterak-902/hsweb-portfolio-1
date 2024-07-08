import type { Metadata } from "next";
import { i18n, type Locale } from "../../i18n-config";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "HSWEB PORTFOLIO 1",
  description: "Created by masterak.jp",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
