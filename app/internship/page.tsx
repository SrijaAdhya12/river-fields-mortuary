import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { GraduationCap, Clock, Users, Award, BookOpen, Target, CheckCircle, Calendar } from "lucide-react"

export default function InternshipPage() {
  const programHighlights = [
    {
      title: "Hands-On Experience",
      description: "Work directly with experienced morticians and funeral directors",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Comprehensive Training",
      description: "Learn all aspects of mortuary science and funeral service operations",
      icon: <BookOpen className="h-8 w-8" />,
    },
    {
      title: "Mentorship Program",
      description: "Personal guidance from Raymond Delver and senior staff members",
      icon: <Award className="h-8 w-8" />,
    },
    {
      title: "Professional Development",
      description: "Build skills essential for a successful career in funeral services",
      icon: <Target className="h-8 w-8" />,
    },
  ]

  const learningObjectives = [
    "Embalming techniques and preservation methods",
    "Funeral service planning and coordination",
    "Grief counseling and family support",
    "Business operations and administration",
    "Legal and ethical considerations",
    "Cold storage and facility management",
    "Customer service in sensitive situations",
    "Professional communication skills",
  ]

  const requirements = [
    "Currently enrolled in mortuary science program or related field",
    "Minimum GPA of 3.0",
    "Strong academic standing",
    "Excellent communication skills",
    "Compassionate and professional demeanor",
    "Ability to work in challenging environments",
    "Commitment to learning and growth",
    "Background check clearance",
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="border-red-600 text-red-400 mb-6">
            Professional Development
          </Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-white">
            Internship <span className="text-red-600">Program</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Launch your career in mortuary science with our comprehensive 1-month internship program. Gain invaluable
            experience under the guidance of industry professionals.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>1-Month Program</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span>Certificate Provided</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Limited Spots</span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Program Overview</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our intensive internship program provides hands-on experience in all aspects of mortuary science and
              funeral service operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programHighlights.map((highlight, index) => (
              <Card key={index} className="bg-gray-900 border-red-900 hover:border-red-600 transition-all duration-300">
                <CardHeader>
                  <div className="text-red-600 mb-4">{highlight.icon}</div>
                  <CardTitle className="text-white text-xl font-serif">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{highlight.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Learning Objectives */}
            <Card className="bg-gray-900 border-red-900">
              <CardHeader>
                <CardTitle className="text-white text-2xl font-serif flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-red-600" />
                  Learning Objectives
                </CardTitle>
                <CardDescription className="text-gray-300">What you'll learn during your internship</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="bg-gray-900 border-red-900">
              <CardHeader>
                <CardTitle className="text-white text-2xl font-serif flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-red-600" />
                  Requirements
                </CardTitle>
                <CardDescription className="text-gray-300">Qualifications for program admission</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Schedule */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Program Schedule</h2>
            <p className="text-xl text-gray-300">A comprehensive 4-week journey through mortuary science</p>
          </div>

          <div className="space-y-8">
            {[
              {
                week: "Week 1",
                title: "Foundations & Orientation",
                topics: [
                  "Introduction to mortuary science",
                  "Facility tour and safety protocols",
                  "Basic embalming theory",
                  "Professional ethics and standards",
                ],
              },
              {
                week: "Week 2",
                title: "Hands-On Training",
                topics: [
                  "Embalming procedures observation",
                  "Body preparation techniques",
                  "Cold storage operations",
                  "Equipment maintenance",
                ],
              },
              {
                week: "Week 3",
                title: "Service Operations",
                topics: [
                  "Funeral planning process",
                  "Family consultation skills",
                  "Service coordination",
                  "Grief counseling basics",
                ],
              },
              {
                week: "Week 4",
                title: "Professional Practice",
                topics: [
                  "Business operations",
                  "Legal requirements",
                  "Final project presentation",
                  "Career guidance and certification",
                ],
              },
            ].map((week, index) => (
              <Card key={index} className="bg-gray-900 border-red-900">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl font-serif">
                        {week.week}: {week.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {week.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="border-red-600 text-red-400 mb-6">
                Expert Guidance
              </Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Learn from the Best</h2>
              <p className="text-xl text-gray-300 mb-8">
                Work directly with Raymond Delver, our Head Mortician, and other experienced professionals who will
                guide your development throughout the program.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-red-600" />
                  <span className="text-gray-300">One-on-one mentorship sessions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-red-600" />
                  <span className="text-gray-300">Small group learning environment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-red-600" />
                  <span className="text-gray-300">Personalized career guidance</span>
                </div>
              </div>
            </div>

            <Card className="bg-gray-900 border-red-900">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-red-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    RD
                  </div>
                  <h3 className="text-white text-xl font-semibold">Raymond Delver</h3>
                  <p className="text-red-400">Head Mortician & Program Director</p>
                </div>
                <blockquote className="text-gray-300 italic text-center">
                  "Our internship program is designed to identify and develop the next generation of mortuary
                  professionals. We seek individuals capable of handling the unique challenges of this sacred
                  profession."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Application Process</h2>
            <p className="text-xl text-gray-300">Ready to begin your journey in mortuary science?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: "1",
                title: "Submit Application",
                description: "Complete application form with transcripts and references",
              },
              {
                step: "2",
                title: "Interview Process",
                description: "Phone and in-person interviews with program staff",
              },
              {
                step: "3",
                title: "Program Acceptance",
                description: "Notification and program orientation scheduling",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <Card className="bg-gray-900 border-red-900">
            <CardContent className="p-8 text-center">
              <Calendar className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-white text-xl font-semibold mb-4">Next Program Dates</h3>
              <div className="space-y-2 text-gray-300 mb-6">
                <p>
                  <strong>Spring Session:</strong> March 1 - March 31
                </p>
                <p>
                  <strong>Summer Session:</strong> June 1 - June 30
                </p>
                <p>
                  <strong>Fall Session:</strong> September 1 - September 30
                </p>
              </div>
              <p className="text-red-400 text-sm mb-6">Applications due 30 days before program start date</p>
              <Button asChild size="lg" className="bg-red-800 hover:bg-red-700 text-white">
                <Link href="/contact">Apply Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
