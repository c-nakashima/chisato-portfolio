import type { Metadata } from "next";
import { Playfair_Display, Roboto_Condensed } from "next/font/google";
import "./globals.css";
//Components
import { Header } from "@/components/ui";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-playfair",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: "Chisato Nakashima",
  description: "Chisato's Portfolio | Software Engineer, UIUX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${robotoCondensed.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
