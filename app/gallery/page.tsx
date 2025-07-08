"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { IconCamera, IconUsers, IconBuilding, IconAward } from "@tabler/icons-react"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Photos", icon: <IconCamera className="h-4 w-4" /> },
    { id: "facility", label: "Our Facility", icon: <IconBuilding className="h-4 w-4" /> },
    { id: "staff", label: "Our Team", icon: <IconUsers className="h-4 w-4" /> },
    { id: "services", label: "Services", icon: <IconAward className="h-4 w-4" /> },
  ]

  const galleryItems = [
    {
      id: 1,
      title: "Main Entrance",
      category: "facility",
      description:
        "Welcoming entrance to River Fields Mortuary, designed with gothic elegance and professional dignity",
      image: "/images/main-entrance.jpg",
    },
    {
      id: 2,
      title: "Chapel Interior",
      category: "facility",
      description:
        "Peaceful chapel for memorial services, featuring stained glass windows and comfortable seating for 150 guests",
      image: "/images/chapel-interior.jpg",
    },
    {
      id: 3,
      title: "Raymond Delver",
      category: "staff",
      description: "Head Mortician and Primary Embalmer, with over 30 years of experience in mortuary science",
      image: "/placeholder.svg?height=400&width=600&text=Raymond+Delver",
    },
    {
      id: 4,
      title: "Preparation Room",
      category: "services",
      description: "State-of-the-art embalming facilities with advanced ventilation and professional equipment",
      image: "/images/preparation-room.jpg",
    },
    {
      id: 5,
      title: "Memorial Garden",
      category: "facility",
      description: "Tranquil outdoor space for reflection, featuring landscaped grounds and peaceful seating areas",
      image: "/images/memorial-garden.jpg",
    },
    {
      id: 6,
      title: "Consultation Room",
      category: "facility",
      description: "Private space for family meetings, designed for comfort and confidentiality during difficult times",
      image: "/images/consultation-room.jpg",
    },
    {
      id: 7,
      title: "Professional Team",
      category: "staff",
      description: "Our dedicated staff members, carefully selected for their compassion and professional expertise",
      image: "/placeholder.svg?height=400&width=600&text=Professional+Team",
    },
    {
      id: 8,
      title: "Cold Storage Facility",
      category: "services",
      description: "Temperature-controlled preservation with 24/7 monitoring and backup systems for optimal care",
      image: "/placeholder.svg?height=400&width=600&text=Cold+Storage",
    },
    {
      id: 9,
      title: "Reception Area",
      category: "facility",
      description: "Comfortable waiting area for families, featuring elegant furnishings and refreshment facilities",
      image: "/images/reception-area.jpg",
    },
    {
      id: 10,
      title: "Viewing Room",
      category: "facility",
      description: "Dignified space for final farewells, designed to provide comfort and privacy for grieving families",
      image: "/images/viewing-room.jpg",
    },
    {
      id: 11,
      title: "Grief Counseling Office",
      category: "services",
      description: "Professional support services office, providing a safe space for healing and emotional support",
      image: "/placeholder.svg?height=400&width=600&text=Counseling+Office",
    },
    {
      id: 12,
      title: "Administrative Office",
      category: "facility",
      description: "Business operations center where our staff handles arrangements with care and attention to detail",
      image: "/placeholder.svg?height=400&width=600&text=Admin+Office",
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background texture */}
      <div
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23dc143c' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="border-red-600 text-red-400 mb-6 hover:bg-red-900/20 transition-colors">
            Visual Tour
          </Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-white">
            Gallery & <span className="text-red-600">Facility Tour</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Explore our facilities, meet our professional team, and see the care and attention to detail that has made
            River Fields Mortuary a trusted name since 1970.
          </p>

          {/* Uncanny fact */}
          <div className="p-4 bg-black/40 border border-red-900/50 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-sm text-red-400 italic">
              Photography of the deceased was once a common practice in the Victorian era, often being the only
              photograph families would have of their loved ones.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-12 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`flex items-center gap-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-red-800 hover:bg-red-700 text-white shadow-lg shadow-red-900/50"
                    : "border-red-600 text-red-400 hover:bg-red-900 hover:shadow-lg hover:shadow-red-900/30"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.icon}
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative py-12 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="bg-gray-900/80 border-red-900 hover:border-red-600 transition-all duration-300 overflow-hidden group backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Description appears only on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-serif font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
                <CardContent className="p-6 group-hover:bg-gray-800/50 transition-colors duration-300">
                  <h3 className="text-white text-xl font-serif font-semibold mb-2 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">Hover to see details</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Our Facilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every aspect of our facility is designed with dignity, comfort, and professionalism in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Chapel",
                description: "Accommodates up to 150 guests with state-of-the-art audio/visual equipment",
                features: ["Comfortable seating", "Climate controlled", "Accessible entrance"],
              },
              {
                title: "Private Consultation Rooms",
                description: "Comfortable spaces for families to meet with our staff and plan services",
                features: ["Confidential meetings", "Comfortable furnishing", "Refreshment area"],
              },
              {
                title: "Preparation Facilities",
                description: "State-of-the-art embalming and preparation rooms with modern equipment",
                features: ["Advanced ventilation", "Professional equipment", "Sterile environment"],
              },
              {
                title: "Cold Storage",
                description: "Temperature-controlled storage facilities with 24/7 monitoring",
                features: ["Optimal preservation", "Secure access", "Backup systems"],
              },
              {
                title: "Memorial Garden",
                description: "Peaceful outdoor space for reflection and small gatherings",
                features: ["Landscaped grounds", "Seating areas", "Quiet atmosphere"],
              },
              {
                title: "Reception Area",
                description: "Welcoming space for families and visitors with comfortable amenities",
                features: ["Comfortable seating", "Refreshments", "Information displays"],
              },
            ].map((facility, index) => (
              <Card
                key={index}
                className="bg-gray-900/80 border-red-900 hover:border-red-600 transition-all duration-300 backdrop-blur-sm group"
              >
                <CardContent className="p-6">
                  <h3 className="text-white text-xl font-serif font-semibold mb-3 group-hover:text-red-400 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{facility.description}</p>
                  <ul className="space-y-1">
                    {facility.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-red-400 text-sm flex items-center gap-2">
                        <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white">Schedule a Personal Tour</h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience our facilities in person and meet our compassionate team. We're here to answer any questions and
            provide guidance during your visit.
          </p>

          {/* Another uncanny fact */}
          <div className="mb-8 p-4 bg-black/40 border border-red-900/50 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-sm text-red-400 italic">
              The tradition of viewing the deceased before burial dates back thousands of years, serving both as a way
              to confirm death and to provide closure for the living.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-red-800 hover:bg-red-700 text-white hover:shadow-lg hover:shadow-red-900/50 transition-all duration-300"
            >
              <a href="/contact">Schedule Tour</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-red-600 text-red-400 hover:bg-red-900 bg-transparent hover:shadow-lg hover:shadow-red-900/30 transition-all duration-300"
            >
              <a href="/services">View Services</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
