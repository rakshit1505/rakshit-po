import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Building } from "lucide-react"

const projects = [
  {
    title: "Protonshub Technologies",
    description:
      "Co-founded and led Protonshub Technologies to CMMI Level 5 certification. We provide top-quality custom application development services with comprehensive technology stacks covering the entire product development lifecycle. Our experienced engineering team specializes in full-stack web development, Ruby on Rails, and responsive websites with third-party API integrations.",
    image: "/images/protonshub-banner.jpg",
    technologies: ["Ruby on Rails", "React.js", "Mobile Development", "AI/ML", "Cloud Architecture"],
    liveUrl: "https://protonshub.com",
    githubUrl: "#",
    featured: true,
    isCompany: true,
  },
  {
    title: "Pivott.ai",
    description:
      "Revolutionary AI-powered platform that transforms business operations through intelligent automation and data-driven insights. Pivott.ai leverages cutting-edge machine learning algorithms to help businesses optimize their processes, enhance decision-making, and drive sustainable growth through advanced analytics and predictive modeling.",
    image: "/images/pivott-mockup.png",
    technologies: ["AI/ML", "Python", "React.js", "Data Analytics", "Cloud Computing"],
    liveUrl: "https://pivott.ai",
    githubUrl: "#",
    featured: true,
    isCompany: true,
  },
  {
    title: "Rules Engine Platform",
    description:
      "Custom rule evaluation engine for backend workflows, enabling dynamic business logic processing and automated decision-making in enterprise applications.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Ruby", "Backend Architecture", "API Design", "Business Logic"],
    liveUrl: "#",
    githubUrl: "https://github.com/rakshit1505/rules-engine",
    featured: false,
  },
  {
    title: "Zoom Integration App",
    description:
      "Integration application for Zoom platform, demonstrating API integration skills and real-time communication features for enhanced collaboration.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Ruby on Rails", "Zoom API", "Real-time Communication"],
    liveUrl: "#",
    githubUrl: "https://github.com/rakshit1505/zoom-app",
    featured: false,
  },
  {
    title: "Rails Boilerplate with Tiddle",
    description:
      "A Ruby on Rails boilerplate application with Tiddle authentication, providing a solid foundation for rapid application development with secure user management.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Ruby on Rails", "Authentication", "Boilerplate", "Security"],
    liveUrl: "#",
    githubUrl: "https://github.com/rakshit1505/boilerplate-tiddle-rails",
    featured: false,
  },
  {
    title: "Sudoku Solver",
    description:
      "An intelligent Sudoku solving application demonstrating algorithmic thinking and problem-solving skills through recursive backtracking implementation.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Algorithm Design", "Problem Solving", "Logic Implementation"],
    liveUrl: "#",
    githubUrl: "https://github.com/rakshit1505/sudoku-solver",
    featured: false,
  },
  {
    title: "Systango - Global Development Studio",
    description:
      "Software Engineer at a London-headquartered web and mobile development studio with global presence. Developed programs using latest technologies, analyzed designs and test plans, and determined operational feasibility through comprehensive solution development.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Web Development", "Mobile Development", "Software Design", "Solution Architecture"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isCompany: true,
  },
]

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From co-founding successful tech companies to building innovative AI-powered platforms, here's a showcase of
            my entrepreneurial and technical journey.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 border-0"
                    >
                      {project.isCompany ? "Company" : "Featured Project"}
                    </Badge>
                    {project.isCompany && <Building className="h-5 w-5 text-purple-600" />}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="px-3 py-1 text-sm font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {project.isCompany ? "Visit Website" : "Live Demo"}
                    </Link>
                  </Button>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
                  <Card className="relative overflow-hidden border-0 shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
