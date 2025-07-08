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
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Heart, Star, Upload, Send } from "lucide-react"

export default function TributePage() {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [formData, setFormData] = useState({
    deceasedName: "",
    relationship: "",
    birthDate: "",
    deathDate: "",
    tributeMessage: "",
    favoriteMemory: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    serviceType: "",
    serviceDate: "",
    serviceTime: "",
    specialRequests: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Tribute form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="border-red-600 text-red-400 mb-6">
            Honor Their Memory
          </Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-white">
            Create a <span className="text-red-600">Lasting Tribute</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Honor your loved one's memory with a personalized tribute and schedule funeral services that celebrate their
            unique life and legacy.
          </p>
        </div>
      </section>

      {/* Tribute Form */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Deceased Information */}
            <Card className="bg-gray-900 border-red-900">
              <CardHeader>
                <CardTitle className="text-white text-2xl font-serif flex items-center gap-2">
                  <Heart className="h-6 w-6 text-red-600" />
                  About Your Loved One
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Share information about the person you're honoring
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="deceasedName" className="text-white">
                      Full Name *
                    </Label>
                    <Input
                      id="deceasedName"
                      value={formData.deceasedName}
                      onChange={(e) => handleInputChange("deceasedName", e.target.value)}
                      className="bg-black border-red-900 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="relationship" className="text-white">
                      Your Relationship *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("relationship", value)}>
                      <SelectTrigger className="bg-black border-red-900 text-white">
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-red-900">
                        <SelectItem value="spouse">Spouse</SelectItem>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="sibling">Sibling</SelectItem>
                        <SelectItem value="friend">Friend</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="birthDate" className="text-white">
                      Date of Birth
                    </Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => handleInputChange("birthDate", e.target.value)}
                      className="bg-black border-red-900 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="deathDate" className="text-white">
                      Date of Passing
                    </Label>
                    <Input
                      id="deathDate"
                      type="date"
                      value={formData.deathDate}
                      onChange={(e) => handleInputChange("deathDate", e.target.value)}
                      className="bg-black border-red-900 text-white"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tribute Message */}
            <Card className="bg-gray-900 border-red-900">
              <CardHeader>
                <CardTitle className="text-white text-2xl font-serif flex items-center gap-2">
                  <Star className="h-6 w-6 text-red-600" />
                  Tribute & Memories
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Share your memories and create a lasting tribute
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="tributeMessage" className="text-white">
                    Tribute Message *
                  </Label>
                  <Textarea
                    id="tributeMessage"
                    value={formData.tributeMessage}
                    onChange={(e) => handleInputChange("tributeMessage", e.target.value)}
                    className="bg-black border-red-900 text-white min-h-[120px]"
                    placeholder="Share what made your loved one special..."
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="favoriteMemory" className="text-white">
                    Favorite Memory
                  </Label>
                  <Textarea
                    id="favoriteMemory"
                    value={formData.favoriteMemory}
                    onChange={(e) => handleInputChange("favoriteMemory", e.target.value)}
                    className="bg-black border-red-900 text-white min-h-[120px]"
                    placeholder="Share a cherished memory..."
                  />
                </div>
                <div>
                  <Label className="text-white">Photo Upload</Label>
                  <div className="border-2 border-dashed border-red-900 rounded-lg p-8 text-center hover:border-red-600 transition-colors">
                    <Upload className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <p className="text-gray-300 mb-2">Upload photos to include in the tribute</p>
                    <p className="text-gray-500 text-sm">Drag and drop or click to browse</p>
                    <Button
                      variant="outline"
                      className="mt-4 border-red-600 text-red-400 hover:bg-red-900 bg-transparent"
                    >
                      Choose Files
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gray-900 border-red-900">
              <CardHeader>
                <CardTitle className="text-white text-2xl font-serif">Contact Information</CardTitle>
                <CardDescription className="text-gray-300">
                  How can we reach you regarding the tribute and services?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="contactName" className="text-white">
                      Your Name *
                    </Label>
                    <Input
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) => handleInputChange("contactName", e.target.value)}
                      className="bg-black border-red-900 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactEmail" className="text-white">
                      Email Address *
                    </Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                      className="bg-black border-red-900 text-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contactPhone" className="text-white">
                    Phone Number *
                  </Label>
                  <Input
                    id="contactPhone"
                    type="tel"
                    value={formData.contactPhone}
                    onChange={(e) => handleInputChange("contactPhone", e.target.value)}
                    className="bg-black border-red-900 text-white"
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Service Scheduling */}
            <Card className="bg-gray-900 border-red-900">
              <CardHeader>
                <CardTitle className="text-white text-2xl font-serif">Schedule Funeral Services</CardTitle>
                <CardDescription className="text-gray-300">Let us help you plan a meaningful service</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-white">Service Type *</Label>
                  <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                    <SelectTrigger className="bg-black border-red-900 text-white">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-red-900">
                      <SelectItem value="burial">Traditional Burial Service</SelectItem>
                      <SelectItem value="cremation">Cremation Service</SelectItem>
                      <SelectItem value="memorial">Memorial Service</SelectItem>
                      <SelectItem value="viewing">Viewing/Visitation Only</SelectItem>
                      <SelectItem value="consultation">Consultation First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-white">Preferred Service Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal bg-black border-red-900 text-white hover:bg-red-900"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-gray-900 border-red-900">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          initialFocus
                          className="bg-gray-900"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label htmlFor="serviceTime" className="text-white">
                      Preferred Time
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("serviceTime", value)}>
                      <SelectTrigger className="bg-black border-red-900 text-white">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-red-900">
                        <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12:00 PM - 4:00 PM)</SelectItem>
                        <SelectItem value="evening">Evening (4:00 PM - 7:00 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="specialRequests" className="text-white">
                    Special Requests or Notes
                  </Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                    className="bg-black border-red-900 text-white"
                    placeholder="Any special requests, religious considerations, or additional information..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" size="lg" className="bg-red-800 hover:bg-red-700 text-white px-12">
                <Send className="mr-2 h-5 w-5" />
                Submit Tribute & Schedule Service
              </Button>
              <p className="text-gray-400 text-sm mt-4">
                Our team will contact you within 24 hours to discuss your tribute and service arrangements.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Support Information */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white">We're Here to Help</h2>
          <p className="text-xl text-gray-300 mb-8">
            Creating a tribute and planning services can feel overwhelming. Our compassionate team is here to guide you
            through every step of the process.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-red-900">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-300 mb-4">
                  Our staff is available to help you create a meaningful tribute and plan services.
                </p>
                <Button asChild className="bg-red-800 hover:bg-red-700 text-white">
                  <a href="tel:+1234567890">Call (123) 456-7890</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-red-900">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Grief Support</h3>
                <p className="text-gray-300 mb-4">
                  Professional grief counseling services are available to help you through this difficult time.
                </p>
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
