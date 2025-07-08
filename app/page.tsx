"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  IconHeart,
  IconShield,
  IconClock,
  IconUsers,
  IconPhone,
  IconMapPin,
  IconSkull,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react"

function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    {
      src: "/images/chapel-interior.jpg",
      alt: "Chapel Interior",
      title: "Sacred Chapel",
      description: "Our peaceful chapel accommodates up to 150 guests with elegant gothic architecture",
    },
    {
      src: "/images/memorial-garden.jpg",
      alt: "Memorial Garden",
      title: "Memorial Garden",
      description: "Tranquil outdoor space for reflection and remembrance ceremonies",
    },
    {
      src: "/images/consultation-room.jpg",
      alt: "Consultation Room",
      title: "Private Consultation",
      description: "Comfortable spaces for families to meet with our compassionate staff",
    },
    {
      src: "/images/reception-area.jpg",
      alt: "Reception Area",
      title: "Welcoming Reception",
      description: "Elegant reception area designed for comfort during difficult times",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden border border-red-900">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">{image.title}</h3>
              <p className="text-gray-300">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-red-600 shadow-lg shadow-red-600/50" : "bg-gray-600 hover:bg-red-400"
            }`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-900/50 text-white p-2 rounded-full transition-all duration-300"
      >
        <IconChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-900/50 text-white p-2 rounded-full transition-all duration-300"
      >
        <IconChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Easter egg trigger - clicking on the skull icon 3 times
  const [clickCount, setClickCount] = useState(0)
  const handleSkullClick = () => {
    setClickCount((prev) => prev + 1)
    if (clickCount >= 2) {
      setShowEasterEgg(true)
      setTimeout(() => setShowEasterEgg(false), 3000)
      setClickCount(0)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Fixed Background Image with Fade Effect */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: "url('/images/mortuary-background.jpg')",
          opacity: Math.min(scrollY / 800, 0.3),
          filter: "sepia(100%) hue-rotate(320deg) saturate(200%)",
        }}
      />

      {/* Mysterious Background Texture Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
      <div
        className="fixed inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23dc143c' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Easter Egg Modal */}
      {showEasterEgg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-in fade-in duration-300">
          <div className="bg-gray-900 border-2 border-red-600 rounded-lg p-8 text-center max-w-md mx-4">
            <IconSkull className="h-16 w-16 text-red-600 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-serif text-white mb-4">The Assistant's Secret</h3>
            <p className="text-gray-300 text-sm italic">
              "Some say the spirits of those we've cared for still wander these halls, guiding us in our sacred work..."
            </p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-gray-900/30 to-black/70"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div
            className="transform transition-all duration-1000"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: Math.max(1 - scrollY / 600, 0),
            }}
          >
            <div className="flex items-center justify-center mb-6">
              <IconSkull
                className="h-12 w-12 text-red-600 mr-4 cursor-pointer hover:animate-pulse transition-all duration-300"
                onClick={handleSkullClick}
              />
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-white drop-shadow-2xl">River Fields</h1>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-red-600 drop-shadow-2xl animate-in slide-in-from-bottom duration-1000">
              Mortuary
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-gray-300 font-light animate-in slide-in-from-bottom duration-1000 delay-300">
              "At River Fields Mortuary, you are never alone"
            </p>
            <p className="text-xl mb-8 text-gray-400 animate-in slide-in-from-bottom duration-1000 delay-500">
              We are always behind you
            </p>

            {/* Uncanny Fact */}
            <div className="mb-8 p-4 bg-black/50 border border-red-900 rounded-lg backdrop-blur-sm animate-in slide-in-from-bottom duration-1000 delay-700">
              <p className="text-sm text-red-400 italic">
                Did you know? The human body contains enough carbon to make 900 pencils, enough iron to make a nail, and
                enough phosphorus to make 2,200 match heads.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom duration-1000 delay-1000">
              <Button
                asChild
                size="lg"
                className="bg-red-800 hover:bg-red-700 text-white border-red-600 hover:shadow-lg hover:shadow-red-900/50 transition-all duration-300"
              >
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-red-600 text-red-400 hover:bg-red-900 bg-transparent hover:shadow-lg hover:shadow-red-900/30 transition-all duration-300"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-400 animate-in slide-in-from-bottom duration-1000 delay-1200">
              <div className="flex items-center gap-2 hover:text-red-400 transition-colors">
                <IconUsers className="h-4 w-4" />
                <span>1000+ Families Served</span>
              </div>
              <div className="flex items-center gap-2 hover:text-red-400 transition-colors">
                <IconClock className="h-4 w-4" />
                <span>Since 1970</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-600/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Our Sacred Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Serving the community with dignity, compassion, and care since 1970
            </p>

            {/* Another uncanny fact */}
            <div className="mt-8 p-3 bg-black/30 border border-red-900/50 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
              <p className="text-xs text-red-400 italic">
                Ancient Egyptians removed the brain through the nose during mummification, believing the heart was the
                center of intelligence.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Embalming Services",
                description: "Professional preservation with the highest standards of care and dignity",
                icon: <IconHeart className="h-8 w-8" />,
              },
              {
                title: "Burial Services",
                description: "Traditional burial services with personalized ceremonies",
                icon: <IconShield className="h-8 w-8" />,
              },
              {
                title: "Cremation Services",
                description: "Respectful cremation with various memorial options",
                icon: <IconClock className="h-8 w-8" />,
              },
              {
                title: "Grief Counseling",
                description: "Professional support during your time of need",
                icon: <IconUsers className="h-8 w-8" />,
              },
              {
                title: "Funeral Planning",
                description: "Complete planning process tailored to your wishes",
                icon: <IconPhone className="h-8 w-8" />,
              },
              {
                title: "Cold Storage",
                description: "State-of-the-art preservation facilities",
                icon: <IconMapPin className="h-8 w-8" />,
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gray-900/80 border-red-900 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20 backdrop-blur-sm group"
              >
                <CardHeader>
                  <div className="text-red-600 mb-4 group-hover:animate-pulse transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-white text-xl font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Our Facility</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take a visual journey through our professional facilities and see the care we put into every detail
            </p>
          </div>

          <ImageCarousel />
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black/80">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="border-red-600 text-red-400 mb-6 hover:bg-red-900/20 transition-colors">
            Established 1970
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white">Five Decades of Service</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Under the expert guidance of Head Mortician Raymond Delver, River Fields Mortuary has been serving families
            with unwavering dedication and professional excellence. Our transparent pricing ensures no hidden costs, and
            our customer satisfaction is guaranteed.
          </p>

          {/* Mortuary Assistant Easter Egg */}
          <div className="mb-8 p-4 bg-black/40 border border-red-900/50 rounded-lg backdrop-blur-sm">
            <p className="text-sm text-red-400 italic">
              "In the quiet hours of the night, when the facility is still, some say you can hear the whispers of those
              who have passed through our care..."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="text-3xl font-bold text-red-600 mb-2 group-hover:animate-pulse transition-all">1000+</div>
              <div className="text-gray-400">Satisfied Families</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-red-600 mb-2 group-hover:animate-pulse transition-all">50+</div>
              <div className="text-gray-400">Years of Service</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-red-600 mb-2 group-hover:animate-pulse transition-all">24/7</div>
              <div className="text-gray-400">Emergency Support</div>
            </div>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-red-800 hover:bg-red-700 text-white hover:shadow-lg hover:shadow-red-900/50 transition-all duration-300"
          >
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black/80 to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-white">
            Families We've Served
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Margaret Thompson",
                text: "River Fields Mortuary provided exceptional care during our most difficult time. Their professionalism and compassion were exactly what we needed.",
                service: "Burial Service",
              },
              {
                name: "Robert Chen",
                text: "The staff at River Fields treated our family with such dignity and respect. Raymond Delver personally ensured everything was perfect.",
                service: "Cremation Service",
              },
              {
                name: "Sarah Williams",
                text: "Transparent pricing and no hidden costs, just as promised. The grief counseling services were invaluable to our healing process.",
                service: "Full Service Package",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gray-900/80 border-red-900 backdrop-blur-sm hover:border-red-600 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4 italic group-hover:text-gray-200 transition-colors">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-red-900 pt-4">
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-red-400 text-sm">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white">We're Here When You Need Us</h2>
          <p className="text-xl text-gray-300 mb-8">
            Available 9:00 AM - 7:00 PM, Monday to Friday at 2960 Bullhurst Lane, Milford
          </p>

          {/* Final uncanny fact */}
          <div className="mb-8 p-4 bg-black/40 border border-red-900/50 rounded-lg backdrop-blur-sm">
            <p className="text-sm text-red-400 italic">
              The average human body decomposes four times faster in water than in soil, but in the right conditions,
              bodies can be preserved for centuries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-red-800 hover:bg-red-700 text-white hover:shadow-lg hover:shadow-red-900/50 transition-all duration-300"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-red-600 text-red-400 hover:bg-red-900 bg-transparent hover:shadow-lg hover:shadow-red-900/30 transition-all duration-300"
            >
              <Link href="/tribute">Create Tribute</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
