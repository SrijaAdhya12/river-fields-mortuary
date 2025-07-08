import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "River Fields Mortuary - Serving with Dignity Since 1970 | Professional Funeral Services",
  description:
    "Professional funeral services in Milford since 1970. Embalming, burial, cremation, and grief counseling. At River Fields Mortuary, you are never alone. Expert care by Raymond Delver and team.",
  keywords:
    "mortuary, funeral services, embalming, burial, cremation, grief counseling, Milford, Raymond Delver, funeral home, memorial services",
  authors: [{ name: "River Fields Mortuary" }],
  creator: "River Fields Mortuary",
  publisher: "River Fields Mortuary",
  robots: "index, follow",
  openGraph: {
    title: "River Fields Mortuary - Professional Funeral Services Since 1970",
    description:
      "Serving families with dignity, compassion, and care. Professional funeral services including embalming, burial, cremation, and grief counseling.",
    url: "https://riverfields.com",
    siteName: "River Fields Mortuary",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "River Fields Mortuary - Professional Funeral Services",
    description: "Serving families with dignity and compassion since 1970. Professional funeral services in Milford.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
