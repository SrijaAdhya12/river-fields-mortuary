import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Users, Heart, Shield, DollarSign, Clock, Award, CheckCircle } from "lucide-react"

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Assistant Mortician",
      department: "Mortuary Services",
      type: "Full-time",
      experience: "2+ years",
      description:
        "Join our team as an Assistant Mortician, working directly under Raymond Delver to provide exceptional funeral services.",
      requirements: [
        "Licensed Mortician certification",
        "2+ years of experience in mortuary services",
        "Strong attention to detail",
        "Compassionate demeanor with families",
        "Ability to work in challenging environments",
      ],
      responsibilities: [
        "Assist with embalming procedures",
        "Prepare deceased for viewing",
        "Support funeral service coordination",
        "Maintain facility cleanliness and organization",
      ],
    },
    {
      title: "Grief Counselor",
      department: "Support Services",
      type: "Part-time",
      experience: "3+ years",
      description: "Provide professional grief counseling services to families during their most difficult times.",
      requirements: [
        "Licensed Clinical Social Worker (LCSW) or equivalent",
        "3+ years of grief counseling experience",
        "Experience with bereavement support groups",
        "Excellent communication skills",
        "Empathetic and patient nature",
      ],
      responsibilities: [
        "Conduct individual counseling sessions",
        "Facilitate support groups",
        "Develop treatment plans",
        "Collaborate with funeral directors",
      ],
    },
    {
      title: "Funeral Director",
      department: "Client Services",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead funeral service planning and coordination, ensuring every detail meets our high standards.",
      requirements: [
        "Licensed Funeral Director",
        "5+ years of funeral service experience",
        "Strong organizational skills",
        "Excellent interpersonal abilities",
        "Knowledge of funeral regulations",
      ],
      responsibilities: [
        "Meet with families to plan services",
        "Coordinate all aspects of funeral arrangements",
        "Oversee service execution",
        "Manage vendor relationships",
      ],
    },
    {
      title: "Administrative Assistant",
      department: "Administration",
      type: "Full-time",
      experience: "1+ years",
      description:
        "Support our administrative operations with compassionate customer service and efficient office management.",
      requirements: [
        "High school diploma or equivalent",
        "1+ years of administrative experience",
        "Proficiency in office software",
        "Strong communication skills",
        "Sensitivity to grieving families",
      ],
      responsibilities: [
        "Answer phones and greet visitors",
        "Schedule appointments and services",
        "Maintain client records",
        "Process paperwork and documentation",
      ],
    },
  ]

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Above-market salaries with performance-based bonuses",
      icon: <DollarSign className="h-8 w-8" />,
    },
    {
      title: "Comprehensive Health Benefits",
      description: "Full medical, dental, and vision coverage for you and your family",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      title: "Professional Development",
      description: "Continuing education support and career advancement opportunities",
      icon: <Award className="h-8 w-8" />,
    },
    {
      title: "Flexible Scheduling",
      description: "Work-life balance with flexible hours and time-off policies",
      icon: <Clock className="h-8 w-8" />,
    },
    {
      title: "Meaningful Work",
      description: "Make a difference in people's lives during their most difficult times",
      icon: <Heart className="h-8 w-8" />,
    },
    {
      title: "Supportive Team",
      description: "Work alongside experienced professionals in a collaborative environment",
      icon: <Users className="h-8 w-8" />,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="border-red-600 text-red-400 mb-6">
            Join Our Team
          </Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-white">
            Career Opportunities at <span className="text-red-600">River Fields</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join a team dedicated to serving families with compassion, dignity, and professionalism. Build a meaningful
            career where you make a difference every day.
          </p>
          <div className="text-center text-gray-400 italic">
            <p className="text-lg">
              "Raymond Delver is in charge of finding employees he believes capable of combating the demons located
              there"
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Why Work With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At River Fields Mortuary, we believe our employees are our greatest asset. We foster a culture of respect,
              growth, and meaningful service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gray-900 border-red-900 hover:border-red-600 transition-all duration-300">
                <CardHeader>
                  <div className="text-red-600 mb-4">{benefit.icon}</div>
                  <CardTitle className="text-white text-xl font-serif">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Current Job Openings</h2>
            <p className="text-xl text-gray-300">
              Explore opportunities to join our compassionate team of professionals
            </p>
          </div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="bg-gray-900 border-red-900">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-white text-2xl font-serif mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-red-600 text-red-400">
                          {job.department}
                        </Badge>
                        <Badge variant="outline" className="border-red-600 text-red-400">
                          {job.type}
                        </Badge>
                        <Badge variant="outline" className="border-red-600 text-red-400">
                          {job.experience}
                        </Badge>
                      </div>
                    </div>
                    <Button className="bg-red-800 hover:bg-red-700 text-white">Apply Now</Button>
                  </div>
                  <CardDescription className="text-gray-300 text-base mt-4">{job.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3">Responsibilities:</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Application Process</h2>
            <p className="text-xl text-gray-300">
              Our hiring process is designed to find individuals who share our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Submit Application",
                description: "Send your resume and cover letter highlighting your experience and passion for service",
              },
              {
                step: "2",
                title: "Initial Screening",
                description: "Phone interview to discuss your background and interest in mortuary services",
              },
              {
                step: "3",
                title: "In-Person Interview",
                description: "Meet with Raymond Delver and our team to assess cultural fit and capabilities",
              },
              {
                step: "4",
                title: "Final Decision",
                description:
                  "Reference checks and final evaluation to ensure you're ready to combat the challenges ahead",
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our team of dedicated professionals and help families during their most important moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-800 hover:bg-red-700 text-white">
              <Link href="/contact">Apply Today</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-red-600 text-red-400 hover:bg-red-900 bg-transparent"
            >
              <Link href="/internship">Internship Program</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
