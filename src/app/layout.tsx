import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mac Greene — Software Engineer",
  description:
    "Software engineer based in Bozeman, MT. Building tools for the outdoors, geospatial intelligence, and the web.",
  openGraph: {
    title: "Mac Greene — Software Engineer",
    description:
      "Software engineer based in Bozeman, MT. Building tools for the outdoors, geospatial intelligence, and the web.",
    type: "website",
    url: "https://macgreene14.github.io",
  },
  metadataBase: new URL("https://macgreene14.github.io"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
