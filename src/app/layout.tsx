import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";

const rethink = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Agency",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rethink.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
