import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { personJsonLd, resume, siteUrl } from "@/data/aboutMe/resume";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Anubhaw Dwivedi | Python Full Stack Developer & Software Engineer",
    template: "%s | Anubhaw Dwivedi",
  },
  description: resume.summary,
  keywords: [...resume.keywords],
  authors: [{ name: resume.name, url: siteUrl }],
  creator: resume.name,
  publisher: resume.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Anubhaw Dwivedi",
    title: "Anubhaw Dwivedi | Python Full Stack Developer",
    description: resume.summary,
    images: [
      {
        url: "/avatar.jpg",
        width: 1200,
        height: 1200,
        alt: "Anubhaw Dwivedi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anubhaw Dwivedi | Python Full Stack Developer",
    description: resume.summary,
    images: ["/avatar.jpg"],
    creator: "@anubhawdwd",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script> */}
      </head>
      <body className="bg-neutral-100 font-sans antialiased dark:bg-neutral-700">
        <Navbar />
        {children}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      <GoogleAnalytics gaId="G-Q170KNTHZ7" />
      </body>
    </html>
  );
}
