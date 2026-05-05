import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keri Tech — Software for institutions that keep things running.",
  description:
    "Keri Tech builds operational software for Philippine government agencies and private enterprises — HRIS, ePRIME procurement, school management, command centers, POS.",
  metadataBase: new URL("https://keri.tech"),
  openGraph: {
    title: "Keri Tech",
    description:
      "Operational software for Philippine government agencies and private enterprises.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
