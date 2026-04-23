import type { Metadata } from "next";
import { spaceGrotesk, inter } from "@/lib/fonts";
import { siteMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} dark`}
      suppressHydrationWarning
    >
      <body className="font-body">
        {/* Background glow orbs */}
        <div className="glow-orb glow-orb-1" aria-hidden="true" />
        <div className="glow-orb glow-orb-2" aria-hidden="true" />

        {children}
      </body>
    </html>
  );
}
