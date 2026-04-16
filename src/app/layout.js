import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
 
  title: {
    default: "AIShyp - Reliable Courier & Logistics Solutions",
    template: "%s - AIShyp - Reliable Courier & Logistics Solutions",
  },

  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased theme-light`}
      >
       <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
