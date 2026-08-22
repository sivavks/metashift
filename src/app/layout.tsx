import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://joinmetashift.com";
const description =
  "MetaShift helps you see the unconscious beliefs running your life — and consciously redesign them. Live by design. Not by default.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MetaShift — Live by Design, Not by Default",
    template: "%s — MetaShift",
  },
  description,
  keywords: [
    "MetaShift",
    "psychological transformation",
    "unconscious beliefs",
    "identity shift",
    "mental programming",
    "live by design not by default",
  ],
  authors: [{ name: "MetaShift" }],
  openGraph: {
    title: "MetaShift",
    description: "Most people don't need more motivation. They need a shift.",
    url: siteUrl,
    siteName: "MetaShift",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MetaShift",
    description: "Most people don't need more motivation. They need a shift.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0D",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MetaShift",
  url: siteUrl,
  description,
  slogan: "Live by design. Not by default.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="bg-background font-sans text-foreground antialiased selection:bg-gold selection:text-background">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
