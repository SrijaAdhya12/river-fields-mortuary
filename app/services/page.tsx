import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  IconHeart,
  IconShield,
  IconFlame,
  IconUsers,
  IconFileText,
  IconSnowflake,
  IconClock,
  IconCurrencyDollar,
  IconCircleCheck,
} from "@tabler/icons-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Professional Embalming Services",
      description:
        "Our expert embalming services ensure the highest standards of preservation and presentation, allowing families to say their final goodbyes with dignity and peace of mind.",
      icon: <IconHeart className="h-12 w-12" />,
      features: [
        "State-of-the-art embalming techniques",
        "Cosmetic restoration services",
        "Preservation for extended viewing periods",
        "Respectful and dignified treatment",
      ],
      process:
        "Our certified embalmers follow strict protocols to ensure the deceased is treated with utmost respect while achieving natural-looking results.",
    },
    {
      title: "Traditional Burial Services",
      description:
        "Complete burial services tailored to honor your loved one's memory with traditional ceremonies and personalized touches that reflect their unique life.",
      icon: <IconShield className="h-12 w-12" />,
      features: [
        "Casket selection assistance",
        "Graveside ceremony coordination",
        "Burial plot arrangements",
        "Memorial service planning",
      ],
      process:
        "From selecting the perfect casket to coordinating with cemetery officials, we handle every detail of the burial process.",
    },
    {
      title: "Cremation Services",
      description:
        "Respectful cremation services with various memorial options, including urns, memorial jewelry, and scattering ceremonies.",
      icon: <IconFlame className="h-12 w-12" />,
      features: [
        "Individual cremation process",
        "Urn and memorial selection",
        "Ash scattering ceremonies",
        "Memorial keepsake options",
      ],
      process:
        "Our cremation process is conducted with the highest level of care, ensuring your loved one is treated with dignity throughout.",
    },
    {
      title: "Grief Counseling & Support",
      description:
        "Professional grief counseling services to help families navigate through their loss with compassionate support and guidance.",
      icon: <IconUsers className="h-12 w-12" />,
      features: [
        "Individual counseling sessions",
        "Group support meetings",
        "Family therapy options",
        "Long-term support programs",
      ],
      process:
        "Our licensed counselors provide ongoing support to help families process their grief and begin the healing journey.",
    },
    {
      title: "Complete Funeral Planning",
      description:
        "Comprehensive funeral planning services that handle every aspect of the ceremony, from logistics to personalization.",
      icon: <IconFileText className="h-12 w-12" />,
      features: [
        "Ceremony design and coordination",
        "Vendor management",
        "Timeline planning",
        "Personalization options",
      ],
      process:
        "We work closely with families to create meaningful ceremonies that celebrate life and provide comfort during difficult times.",
    },
    {
      title: "Cold Storage Facilities",
      description:
        "State-of-the-art refrigeration facilities that maintain optimal conditions for preservation while arrangements are being made.",
      icon: <IconSnowflake className="h-12 w-12" />,
      features: [
        "Temperature-controlled environment",
        "Secure storage facilities",
        "Extended storage options",
        "24/7 monitoring systems",
      ],
      process:
        "Our advanced cold storage systems ensure proper preservation while families take the time they need to make arrangements.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
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
            Professional Services
          </Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-white">Our Sacred Services</h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Comprehensive funeral services designed to honor your loved ones with dignity, compassion, and the highest
            professional standards. Serving families since 1970.
          </p>

          {/* Uncanny fact */}
          <div className="mb-8 p-4 bg-black/40 border border-red-900/50 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-sm text-red-400 italic">
              The practice of embalming dates back to ancient Egypt, where it was believed to preserve the body for the
              afterlife. Modern embalming serves both preservation and presentation purposes.
            </p>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <IconCircleCheck className="h-4 w-4 text-red-600" />
              <span>Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <IconCircleCheck className="h-4 w-4 text-red-600" />
              <span>No Hidden Costs</span>
            </div>
            <div className="flex items-center gap-2">
              <IconCircleCheck className="h-4 w-4 text-red-600" />
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-gray-900/80 border-red-900 hover:border-red-600 transition-all duration-300 backdrop-blur-sm group"
              >
                <CardHeader>
                  <div className="text-red-600 mb-4 group-hover:animate-pulse transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-white text-2xl font-serif mb-2 group-hover:text-red-400 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Service Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                          <IconCircleCheck className="h-4 w-4 text-red-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-red-900 pt-4">
                    <h4 className="text-white font-semibold mb-2">Our Process:</h4>
                    <p className="text-gray-300 text-sm">{service.process}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-red-600 mb-6">
            <IconCurrencyDollar className="h-16 w-16 mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white">Transparent Pricing Promise</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            At River Fields Mortuary, we believe in complete transparency. Our pricing is straightforward with no hidden
            costs or surprise fees. We provide detailed estimates upfront so families can make informed decisions during
            their time of need.
          </p>

          {/* Uncanny fact about pricing */}
          <div className="mb-8 p-4 bg-black/40 border border-red-900/50 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-sm text-red-400 italic">
              The Federal Trade Commission's Funeral Rule requires funeral homes to provide itemized price lists,
              ensuring transparency in an industry that was once shrouded in secrecy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="text-3xl font-bold text-red-600 mb-2 group-hover:animate-pulse transition-all">No</div>
              <div className="text-gray-400">Hidden Fees</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-red-600 mb-2 group-hover:animate-pulse transition-all">100%</div>
              <div className="text-gray-400">Transparent</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-red-600 mb-2 group-hover:animate-pulse transition-all">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-red-800 hover:bg-red-700 text-white hover:shadow-lg hover:shadow-red-900/50 transition-all duration-300"
          >
            <Link href="/contact">Request Pricing Information</Link>
          </Button>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="outline"
                className="border-red-600 text-red-400 mb-6 hover:bg-red-900/20 transition-colors"
              >
                Emergency Services
              </Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
                Available When You Need Us Most
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Death doesn't follow business hours, and neither do we. Our emergency services ensure that your loved
                one receives immediate, professional care regardless of when the need arises.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <IconClock className="h-5 w-5 text-red-600" />
                  <span className="text-gray-300">24/7 Emergency Response</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconShield className="h-5 w-5 text-red-600" />
                  <span className="text-gray-300">Immediate Transportation Services</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconHeart className="h-5 w-5 text-red-600" />
                  <span className="text-gray-300">Compassionate Support Staff</span>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-red-800 hover:bg-red-700 text-white hover:shadow-lg hover:shadow-red-900/50 transition-all duration-300"
              >
                <Link href="tel:+1234567890">Call Emergency Line</Link>
              </Button>
            </div>
            <div className="bg-gray-900/80 border border-red-900 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Emergency Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-red-400 font-semibold">Emergency Line:</div>
                  <div className="text-white text-xl">(123) 456-7890</div>
                </div>
                <div>
                  <div className="text-red-400 font-semibold">Available:</div>
                  <div className="text-white">24 Hours a Day, 7 Days a Week</div>
                </div>
                <div>
                  <div className="text-red-400 font-semibold">Response Time:</div>
                  <div className="text-white">Within 1 Hour of Contact</div>
                </div>
                <div>
                  <div className="text-red-400 font-semibold">Service Area:</div>
                  <div className="text-white">Milford and Surrounding Areas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
