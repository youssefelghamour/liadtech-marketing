import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nunito } from 'next/font/google'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LIADTECH",
  description: "LIADTECH Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${nunito.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
