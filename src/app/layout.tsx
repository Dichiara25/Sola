import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/structure/Header";
import Footer from "./components/structure/Footer";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Sola",
  description: "An AI-driven quiz generation tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
