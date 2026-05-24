import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bark & Bathe Lounge | Premium Cage-Free & Fear-Free Pet Grooming",
  description: "A luxury pet grooming sanctuary in Flourtown, PA specializing in fear-free techniques, cage-free styling, organic treatments, and absolute comfort for your beloved dogs and cats.",
  metadataBase: new URL("https://barkbathelounge.com"),
  keywords: ["pet grooming", "dog salon", "cat grooming", "cage-free grooming", "fear-free pet styling", "luxury pet spa", "Flourtown pet grooming", "Bark and Bathe Lounge", "Cyvera Digitals"],
  authors: [{ name: "Cyvera Digitals" }],
  openGraph: {
    title: "Bark & Bathe Lounge | Luxury Cage-Free Pet Spa",
    description: "Treat your pet to an elite, stress-free grooming experience. Certified Fear-Free stylists and calming sensory care.",
    url: "https://barkbathelounge.com",
    siteName: "Bark & Bathe Lounge",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-dark">
        {/* Navigation Header */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow pt-24 pb-12">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
