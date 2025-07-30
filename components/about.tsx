import { Card, CardContent } from "@/components/ui/card"
import { Code2, Users, Award, Building, Lightbulb } from "lucide-react"

export function About() {
  const stats = [
    { number: "6+", label: "Years as CEO", icon: Award },
    { number: "10+", label: "Years Total Experience", icon: Users },
    { number: "CMMI 5", label: "Company Level", icon: Building },
  ]

  const highlights = [
    {
      icon: Building,
      title: "Strategic Leadership",
      description:
        "Leading a CMMI Level 5 certified company with comprehensive technology stacks and experienced engineering teams.",
    },
    {
      icon: Code2,
      title: "Technical Excellence",
      description:
        "Expert in Ruby on Rails, React.js, and building high-performance solutions across web and mobile platforms.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description:
        "Stanford Design Thinking certified, driving innovation through strategic decision-making and long-term vision.",
    },
    {
      icon: Users,
      title: "Industry Thought Leadership",
      description:
        "Active participant in industry podcasts, sharing expertise and staying at the forefront of emerging trends.",
    },
  ]

  return (
    <section
      id="about"
      className="pt-24 pb-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Entrepreneur and technologist passionate about building scalable solutions and leading high-performing
            teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">From Developer to CEO</h3>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  My journey began as an Associate Software Engineer at ReHeight Inc. in 2014, where I developed
                  foundational skills in software development. I then advanced to Software Engineer at Systango, a
                  global web and mobile development studio, where I honed my expertise in cutting-edge technologies.
                </p>
                <p>
                  In December 2017, I took on a leadership role as Lead & Partner at Dexbytes Infotech, gaining valuable
                  experience in team management and strategic planning. This prepared me for my current role as
                  Co-Founder & CEO of Protonshub Technologies, which I've led since October 2018.
                </p>
                <p>
                  At Protonshub, we've achieved CMMI Level 5 certification, demonstrating our commitment to excellence
                  in software development processes. I completed Stanford University's Design Thinking course in 2021,
                  which enhanced my problem-solving and innovation capabilities. I also actively participate in industry
                  podcasts, sharing insights and contributing to thought leadership.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map(({ number, label, icon: Icon }) => (
                <div key={label} className="text-center group">
                  <div className="mb-3 flex justify-center">
                    <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-1">{number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <Card
                key={title}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
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
