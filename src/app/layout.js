import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MatrixBackground } from "@/components/ui/MatrixBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://azam-portfolio.vercel.app'),
  title: "Azam Tajuddin | IT Support & Web Developer",
  description: "I build and maintain reliable web systems, network configurations, and full-stack applications.",
  openGraph: {
    title: "Azam Tajuddin | IT Support & Web Developer",
    description: "I build and maintain reliable web systems, network configurations, and full-stack applications.",
    url: "https://azam-portfolio.vercel.app", // Bro boleh tukar kalau dah beli domain sendiri
    siteName: "Azam Tajuddin Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Azam Tajuddin Portfolio Preview",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azam Tajuddin | IT Support & Web Developer",
    description: "I build and maintain reliable web systems, network configurations, and full-stack applications.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col text-secondary bg-transparent">
        <MatrixBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
