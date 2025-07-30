import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

const education = [
  {
    institution: "Stanford University",
    degree: "Design Thinking Certification",
    period: "2021",
    type: "Professional Certification",
    description:
      "Intensive course focusing on problem-solving and innovation methodologies, enhancing strategic thinking and creative solution development capabilities.",
    highlight: "Stanford GSB Design Thinking",
    featured: true,
  },
  {
    institution: "Shri G S Institute of Technology & Science",
    degree: "Bachelor's Degree, Information Technology",
    period: "2012 - 2016",
    type: "Undergraduate Degree",
    description:
      "Comprehensive study of information technology fundamentals, programming, systems analysis, and software development methodologies.",
    highlight: "Information Technology",
    featured: false,
  },
  {
    institution: "SICA School",
    degree: "High School",
    period: "2011",
    type: "Secondary Education",
    description: "Completed secondary education with strong foundation in mathematics and sciences.",
    highlight: "Secondary Education",
    featured: false,
  },
]

const achievements = [
  {
    title: "Stanford GSB Design Thinking",
    description: "Completed intensive design thinking course at Stanford University",
    year: "2021",
    type: "Certification",
  },
  {
    title: "National Science Olympiad",
    description: "Recognized for excellence in scientific knowledge and problem-solving",
    year: "Academic",
    type: "Award",
  },
]

export function Education() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and academic excellence, from foundational education to advanced certifications from
            world-renowned institutions.
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Academic Background</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  edu.featured
                    ? "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
                    : "bg-white/80 dark:bg-gray-800/80"
                } backdrop-blur-sm`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                            <GraduationCap className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                            {edu.featured && (
                              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                            {edu.institution}
                          </p>
                          <Badge variant="outline" className="mb-3">
                            {edu.type}
                          </Badge>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{edu.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-8 text-right">
                      <div className="flex items-center justify-start lg:justify-end space-x-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Certifications & Awards</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900 dark:text-white">{achievement.title}</h4>
                        <Badge variant="secondary">{achievement.type}</Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                      <p className="text-xs text-purple-600 dark:text-purple-400 font-medium mt-2">
                        {achievement.year}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
