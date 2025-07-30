import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Technical Skills",
    skills: [
      { name: "Information Technology", level: 95 },
      { name: "Ruby on Rails", level: 90 },
      { name: "Full Stack Development", level: 90 },
      { name: "Network Security", level: 80 },
    ],
  },
  {
    title: "Leadership & Strategy",
    skills: [
      { name: "Strategic Leadership", level: 95 },
      { name: "Team Management", level: 90 },
      { name: "Innovation & Design Thinking", level: 90 },
      { name: "Business Transformation", level: 85 },
    ],
  },
  {
    title: "Languages & Communication",
    skills: [
      { name: "English", level: 95 },
      { name: "Hindi", level: 100 },
      { name: "French", level: 40 },
      { name: "Industry Podcasting", level: 85 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A combination of technical expertise and leadership skills developed through years of hands-on development
            and scaling a tech company.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl font-bold gradient-text">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-3 bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </Progress>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
