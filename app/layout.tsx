import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "PadNetwork | Stocks, Forex & Crypto Learning Platform",
  description:
    "PadNetwork is a premium platform for Stocks, Forex, and Crypto learning, market insights, and financial growth.",

  keywords: [
    "PadNetwork",
    "Forex trading",
    "Stock market learning",
    "Crypto learning",
    "Trading education",
    "Stock analysis",
    "Forex analysis",
    "Crypto market insights",
    "Stock market",
    "Forex market",
    "Cryptocurrency",
    "forexpad56",
    "stockpad56",
    "cryptopad56",
  ],

  verification: {
    google: "v1PkSwMZ6jFlfoyAGuDAO1Q4YX0Ia8tMjK4Y41oIZC8",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}