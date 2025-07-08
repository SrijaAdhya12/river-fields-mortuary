import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Award, Users, Heart, Shield, Clock, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="border-red-600 text-red-400 mb-6">
            Since 1970
          </Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-white">
            Five Decades of <span className="text-red-600">Compassionate Service</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            River Fields Mortuary has been a cornerstone of the Milford community for over 50 years, providing families
            with dignified, professional funeral services during their most difficult times.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white">Our Story</h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Founded in 1970, River Fields Mortuary began as a small family-owned funeral home with a simple
                  mission: to serve grieving families with dignity, compassion, and unwavering professionalism.
                </p>
                <p className="text-lg">
                  Over the decades, we have grown to become one of the most trusted names in funeral services, having
                  served over 1,000 families throughout the Milford area. Our commitment to excellence has never
                  wavered, and our dedication to each family remains as strong today as it was on our first day.
                </p>
                <p className="text-lg">
                  Under the expert leadership of Head Mortician Raymond Delver, we continue to uphold the highest
                  standards of care while embracing modern techniques and technologies that enhance our ability to serve
                  families in their time of need.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="River Fields Mortuary Historical Building"
                width={500}
                height={600}
                className="rounded-lg border border-red-900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Raymond Delver Profile */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Meet Our Head Mortician</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading with expertise, compassion, and an unwavering commitment to excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Raymond Delver, Head Mortician"
                width={500}
                height={600}
                className="rounded-lg border border-red-900"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 p-4 rounded-lg">
                <div className="text-white font-bold text-xl">Raymond Delver</div>
                <div className="text-red-400">Head Mortician & Primary Embalmer</div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-serif font-bold mb-6 text-white">Raymond Delver</h3>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  With over three decades of experience in mortuary science, Raymond Delver has dedicated his career to
                  serving families with the highest level of professionalism and care. As our Head Mortician and Primary
                  Embalmer, Raymond oversees every aspect of our services.
                </p>
                <p className="text-lg">
                  Raymond's expertise extends beyond technical skills; he possesses a rare combination of scientific
                  precision and genuine compassion that makes him uniquely qualified to guide families through their
                  most difficult moments.
                </p>
                <p className="text-lg italic text-red-400">
                  "Raymond Delver is in charge of finding employees he believes capable of combating the demons located
                  there" - A testament to his discerning eye for exceptional talent.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900 border border-red-900 rounded-lg p-4">
                  <div className="text-red-600 mb-2">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="text-white font-semibold">Certifications</div>
                  <div className="text-gray-300 text-sm">Licensed Mortician & Embalmer</div>
                </div>
                <div className="bg-gray-900 border border-red-900 rounded-lg p-4">
                  <div className="text-red-600 mb-2">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="text-white font-semibold">Experience</div>
                  <div className="text-gray-300 text-sm">30+ Years in Mortuary Science</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Our Mission & Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Guiding principles that shape every interaction and service we provide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Compassionate Care",
                description:
                  "At River Fields Mortuary, you are never alone. We provide unwavering support and understanding during your time of need.",
                icon: <Heart className="h-8 w-8" />,
              },
              {
                title: "Professional Excellence",
                description:
                  "We maintain the highest standards of professional service, ensuring every detail is handled with precision and care.",
                icon: <Award className="h-8 w-8" />,
              },
              {
                title: "Dignity & Respect",
                description:
                  "Every individual is treated with the utmost dignity and respect, honoring their memory and supporting their loved ones.",
                icon: <Shield className="h-8 w-8" />,
              },
              {
                title: "Community Service",
                description:
                  "Serving the Milford community for over 50 years, we are committed to being a pillar of support for local families.",
                icon: <Users className="h-8 w-8" />,
              },
              {
                title: "Transparent Pricing",
                description:
                  "No hidden costs or surprise fees. We believe in honest, upfront pricing so families can make informed decisions.",
                icon: <Star className="h-8 w-8" />,
              },
              {
                title: "Always Available",
                description:
                  "We are always behind you, providing 24/7 emergency services and ongoing support whenever you need us.",
                icon: <Clock className="h-8 w-8" />,
              },
            ].map((value, index) => (
              <Card key={index} className="bg-gray-900 border-red-900 hover:border-red-600 transition-all duration-300">
                <CardHeader>
                  <div className="text-red-600 mb-4">{value.icon}</div>
                  <CardTitle className="text-white text-xl font-serif">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-white">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">1000+</div>
              <div className="text-gray-400">Families Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-gray-400">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-400">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white">
            Experience the River Fields Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover why families have trusted us for over five decades to provide compassionate, professional funeral
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-800 hover:bg-red-700 text-white">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-red-600 text-red-400 hover:bg-red-900 bg-transparent"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
