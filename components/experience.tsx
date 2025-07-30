"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "Protonshub Technologies",
    role: "Chief Executive Officer & Co-Founder",
    period: "October 2018 - Present (6+ years)",
    location: "Indore Area, India",
    type: "CMMI Level 5 Company",
    description:
      "Leading the development of company's short and long-term strategy, creating and implementing vision and mission. Evaluating executive leadership, formulating policies, and assessing risks while ensuring they are monitored and minimized.",
    highlights: [
      "Achieved CMMI Level 5 certification",
      "Built comprehensive technology stacks",
      "Led experienced engineering teams",
      "Specialized in full-stack web development and Ruby on Rails",
    ],
    current: true,
  },
  {
    company: "Dexbytes Infotech Pvt Ltd",
    role: "Lead & Partner",
    period: "December 2017 - June 2018 (7 months)",
    location: "Indore Area, India",
    type: "Leadership Role",
    description:
      "Developed team strategies, provided comprehensive training, and monitored team performance. Specialized in business applications, entertainment, gaming, e-magazines, utilities, and marketing tools.",
    highlights: [
      "Developed comprehensive team strategies",
      "Provided training and clear instructions",
      "Monitored team participation and performance",
      "Expertise in diverse application domains",
    ],
    current: false,
  },
  {
    company: "Systango",
    role: "Software Engineer",
    period: "May 2016 - December 2017 (1 year 8 months)",
    location: "Indore",
    type: "Global Development Studio",
    description:
      "Worked at a London-headquartered web and mobile development studio with global presence. Developed programs using latest technologies, analyzed designs and test plans, and determined operational feasibility.",
    highlights: [
      "Maintained knowledge on latest technologies",
      "Prepared code based on software designs",
      "Analyzed designs and test plans",
      "Determined operational feasibility",
    ],
    current: false,
  },
  {
    company: "ReHeight Inc.",
    role: "Associate Software Engineer",
    period: "August 2014 - April 2016 (1 year 9 months)",
    location: "Indore Area, India",
    type: "Software Development",
    description:
      "Started my professional journey in software development, building foundational skills and gaining experience in various programming technologies and development methodologies.",
    highlights: [
      "Built foundational software development skills",
      "Gained experience in programming technologies",
      "Learned development methodologies",
      "Established professional foundation",
    ],
    current: false,
  },
]

export function Experience() {
  return (
    <section className="pt-12 pb-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A decade-long journey from Associate Software Engineer to CEO, building expertise in technology leadership
            and business transformation.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block" />

                <Card
                  className={`ml-0 md:ml-16 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    exp.current
                      ? "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
                      : "bg-white/80 dark:bg-gray-800/80"
                  } backdrop-blur-sm`}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                          {exp.current && (
                            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                              Current
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-lg font-semibold text-purple-600 dark:text-purple-400">
                          <Building className="h-5 w-5" />
                          <span>{exp.company}</span>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {exp.type}
                        </Badge>
                      </div>

                      <div className="mt-4 lg:mt-0 space-y-2 text-right">
                        <div className="flex items-center justify-start lg:justify-end space-x-2 text-gray-600 dark:text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center justify-start lg:justify-end space-x-2 text-gray-600 dark:text-gray-400">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{exp.description}</p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
