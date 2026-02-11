import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Portfolio`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | Portfolio`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Portfolio`,
    description: siteConfig.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main className="container-shell py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
