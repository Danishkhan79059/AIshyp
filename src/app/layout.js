import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppToaster from "./components/AppToaster";
import WhatsappButton from "./components/WhatsappButton";
import { ThemeProvider } from "../lib/ThemeProvider";
import { THEME_INIT_SCRIPT, THEME_LIGHT } from "../lib/theme";

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
    <html lang="en" className={THEME_LIGHT} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <AppToaster />
          <Header />
          {children}
          <Footer />
          <WhatsappButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
