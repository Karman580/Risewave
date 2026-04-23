import type { Metadata } from "next";
import { BRAND } from "./constants";

export const siteMetadata: Metadata = {
  title: {
    default: `${BRAND.name} | Next-Generation Security & Smart Connectivity`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "We design, install, and manage intelligent security and connectivity systems for homes and businesses. Professional CCTV, smart home automation, structured cabling, and network solutions.",
  keywords: [
    "security cameras",
    "CCTV installation",
    "smart home",
    "network setup",
    "structured cabling",
    "Brampton",
    "Ontario",
    "Canada",
    "home automation",
    "Wi-Fi cameras",
    "security systems",
  ],
  authors: [{ name: BRAND.name }],
  openGraph: {
    title: `${BRAND.name} | Next-Generation Security`,
    description:
      "Intelligent security and connectivity systems for homes and businesses.",
    type: "website",
    locale: "en_CA",
    siteName: BRAND.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};
