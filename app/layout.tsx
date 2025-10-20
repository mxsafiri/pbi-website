import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Peace Building Initiative - Empowering Communities in Tarime, Musoma",
  description:
    "Peace Building Initiative is a nonprofit computer-assisted learning center in Tarime, Musoma, Tanzania. We empower communities through digital education and peace-building programs.",
  keywords: [
    "Peace Building",
    "Tanzania",
    "Tarime",
    "Musoma",
    "Digital Learning",
    "Education",
    "Computer Learning",
    "Youth Empowerment",
  ],
  authors: [{ name: "Peace Building Initiative" }],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: "Peace Building Initiative",
    description: "Empowering communities through education and technology in Tanzania",
    type: "website",
    locale: "en_US",
    images: ['/favicon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
