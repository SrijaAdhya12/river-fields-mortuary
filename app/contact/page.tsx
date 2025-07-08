"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    urgency: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="border-red-600 text-red-400 mb-6">
            We're Here for You
          </Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-white">
            Contact <span className="text-red-600">River Fields Mortuary</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Available 24/7 for emergencies. During your time of need, we are always behind you with compassionate
            support and professional guidance.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Whether you need immediate assistance or want to plan ahead, our compassionate team is ready to help
                  you navigate this difficult time with dignity and care.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="bg-gray-900 border-red-900">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-red-600">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Our Location</h3>
                        <p className="text-gray-300">
                          2960 Bullhurst Lane
                          <br />
                          Milford
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-red-900">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-red-600">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Phone Numbers</h3>
                        <p className="text-gray-300">
                          Main Line: (123) 456-7890
                          <br />
                          Emergency: (123) 456-7890
                          <br />
                          <span className="text-red-400">Available 24/7</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-red-900">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-red-600">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Email</h3>
                        <p className="text-gray-300">
                          info@riverfields.com
                          <br />
                          emergency@riverfields.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-red-900">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-red-600">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Visiting Hours</h3>
                        <p className="text-gray-300">
                          Monday - Friday: 9:00 AM - 7:00 PM
                          <br />
                          <span className="text-red-400">Emergency services available 24/7</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Emergency Notice */}
              <Card className="bg-red-900/20 border-red-600">
                <CardContent className="p-6">
                  <h3 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Emergency Services
                  </h3>
                  <p className="text-gray-300">
                    If you need immediate assistance, please call our emergency line at (123) 456-7890. We respond to
                    all emergency calls within one hour.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-gray-900 border-red-900">
                <CardHeader>
                  <CardTitle className="text-white text-2xl font-serif">Send Us a Message</CardTitle>
                  <CardDescription className="text-gray-300">
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="bg-black border-red-900 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-black border-red-900 text-white"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-white">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-black border-red-900 text-white"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white">Service Type</Label>
                        <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                          <SelectTrigger className="bg-black border-red-900 text-white">
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-red-900">
                            <SelectItem value="burial">Burial Services</SelectItem>
                            <SelectItem value="cremation">Cremation Services</SelectItem>
                            <SelectItem value="embalming">Embalming Services</SelectItem>
                            <SelectItem value="counseling">Grief Counseling</SelectItem>
                            <SelectItem value="planning">Funeral Planning</SelectItem>
                            <SelectItem value="consultation">General Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-white">Urgency Level</Label>
                        <Select onValueChange={(value) => handleInputChange("urgency", value)}>
                          <SelectTrigger className="bg-black border-red-900 text-white">
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-red-900">
                            <SelectItem value="emergency">Emergency (Immediate)</SelectItem>
                            <SelectItem value="urgent">Urgent (Within 24 hours)</SelectItem>
                            <SelectItem value="normal">Normal (Within 48 hours)</SelectItem>
                            <SelectItem value="planning">Planning Ahead</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="bg-black border-red-900 text-white min-h-[120px]"
                        placeholder="Please describe how we can help you..."
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-red-800 hover:bg-red-700 text-white">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>

                    <p className="text-gray-400 text-sm text-center">
                      We typically respond to all inquiries within 2 hours during business hours. For emergencies,
                      please call our 24/7 hotline.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Visit Our Facility</h2>
            <p className="text-xl text-gray-300">
              Located in the heart of Milford, our facility has been serving the community since 1970
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Directions & Parking</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  River Fields Mortuary is conveniently located at 2960 Bullhurst Lane in Milford, easily accessible
                  from all major highways and public transportation routes.
                </p>
                <div className="space-y-2">
                  <p>
                    <strong className="text-white">From Downtown:</strong> Take Main Street north for 2 miles, turn
                    right on Bullhurst Lane
                  </p>
                  <p>
                    <strong className="text-white">From Highway 95:</strong> Exit at Milford Center, follow signs to
                    Bullhurst Lane
                  </p>
                  <p>
                    <strong className="text-white">Parking:</strong> Free parking available in our private lot
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-900 border border-red-900 rounded-lg">
                <h4 className="text-white font-semibold mb-4">Facility Features</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Wheelchair accessible entrance</li>
                  <li>• Private family consultation rooms</li>
                  <li>• Comfortable viewing areas</li>
                  <li>• On-site chapel for services</li>
                  <li>• Peaceful memorial garden</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900 border border-red-900 rounded-lg p-4">
              <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p>Interactive Map</p>
                  <p className="text-sm">2960 Bullhurst Lane, Milford</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white">How Can We Help You Today?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gray-900 border-red-900 hover:border-red-600 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Emergency Services</h3>
                <p className="text-gray-300 text-sm mb-4">24/7 emergency response for immediate needs</p>
                <Button asChild className="bg-red-800 hover:bg-red-700 text-white">
                  <a href="tel:+1234567890">Call Now</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-red-900 hover:border-red-600 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Schedule Consultation</h3>
                <p className="text-gray-300 text-sm mb-4">Plan ahead with our professional guidance</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-red-600 text-red-400 hover:bg-red-900 bg-transparent"
                >
                  <a href="/services">Book Appointment</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-red-900 hover:border-red-600 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Grief Support</h3>
                <p className="text-gray-300 text-sm mb-4">Professional counseling and support services</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-red-600 text-red-400 hover:bg-red-900 bg-transparent"
                >
                  <a href="/services">Learn More</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
