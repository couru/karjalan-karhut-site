import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;

  return {
    title: "Karjalan Karhut — Хоккейный клуб Карелии",
    description:
      "Официальный сайт хоккейного клуба Karjalan Karhut. Северный характер. Карельский хоккей.",
    icons: {
      icon: "/assets/karjalan-karhut-crest.png",
      shortcut: "/assets/karjalan-karhut-crest.png",
    },
    openGraph: {
      title: "Karjalan Karhut — Северный характер",
      description: "Хоккейный клуб Карелии · Петрозаводск",
      images: [{ url: socialImage, width: 1200, height: 630 }],
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Karjalan Karhut — Северный характер",
      description: "Хоккейный клуб Карелии · Петрозаводск",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
