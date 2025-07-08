"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { IconMenu2, IconPhone, IconSkull } from "@tabler/icons-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/careers", label: "Careers" },
    { href: "/internship", label: "Internship" },
    { href: "/tribute", label: "Tribute" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-red-900"
          : "bg-black/90 backdrop-blur-sm border-b border-red-900/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <IconSkull className="h-6 w-6 text-red-600 group-hover:animate-pulse transition-all duration-300" />
            <div className="text-2xl font-serif font-bold text-white group-hover:text-red-400 transition-colors duration-300">
              River Fields <span className="text-red-600">Mortuary</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Emergency Contact */}
          <div className="hidden md:flex items-center">
            <Button
              asChild
              size="sm"
              className="bg-red-800 hover:bg-red-700 text-white hover:shadow-lg hover:shadow-red-900/50 transition-all duration-300"
            >
              <Link href="tel:+1234567890" className="flex items-center gap-2">
                <IconPhone className="h-4 w-4" />
                Emergency
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-red-400 hover:bg-red-900/20 transition-all duration-300"
              >
                <IconMenu2 className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-red-900 backdrop-blur-md">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-medium text-lg py-2 border-b border-red-900/30 hover:border-red-600/50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="bg-red-800 hover:bg-red-700 text-white mt-4">
                  <Link href="tel:+1234567890" className="flex items-center gap-2">
                    <IconPhone className="h-4 w-4" />
                    Emergency Contact
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
