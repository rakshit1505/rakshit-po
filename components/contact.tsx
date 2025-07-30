"use client"
import { useActionState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Clock, Send, Building, Mic, ExternalLink, Play, CheckCircle, AlertCircle } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"

export function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "rakshit1505@gmail.com",
      description: "Best way to reach me",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Indore, Madhya Pradesh",
      description: "India (Open to remote)",
    },
    {
      icon: Clock,
      title: "Timezone",
      value: "IST (UTC +5:30)",
      description: "Available Mon-Fri, 9AM-7PM",
    },
    {
      icon: Building,
      title: "Company",
      value: "Protonshub Technologies",
      description: "Co-Founder & CEO",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Interested in collaboration, scaling your tech team, or discussing innovative projects? I'm always excited
            to connect with fellow entrepreneurs and developers.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Get in Touch</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Whether you're looking to scale your development team, need technical leadership, or want to discuss
                innovative projects, I'd love to hear from you. I'm also available for industry podcasts and thought
                leadership discussions.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, title, value, description }) => (
                <div key={title} className="group">
                  <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h4>
                      <p className="text-gray-900 dark:text-white font-medium mb-1">{value}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send a Message</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </div>

                {/* Status Messages */}
                {state && (
                  <div
                    className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
                      state.success
                        ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"
                        : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800"
                    }`}
                  >
                    {state.success ? (
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <span className="font-medium">{state.message}</span>
                  </div>
                )}

                <form action={formAction} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        className="h-12 border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 transition-colors"
                        placeholder="Your full name"
                        required
                        disabled={isPending}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        className="h-12 border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 transition-colors"
                        placeholder="your.email@example.com"
                        required
                        disabled={isPending}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      className="h-12 border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 transition-colors"
                      placeholder="What would you like to discuss?"
                      required
                      disabled={isPending}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 transition-colors resize-none"
                      placeholder="Tell me about your project, collaboration ideas, or any questions you have..."
                      required
                      disabled={isPending}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isPending ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Centered Podcast Section */}
        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200/30 dark:border-purple-700/30 text-center shadow-lg">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <Mic className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white text-xl">Podcast Appearances</h4>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                Available for industry podcasts, speaking engagements, and thought leadership discussions on technology,
                entrepreneurship, and business transformation.
              </p>

              <div className="space-y-6">
                <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <Play className="h-5 w-5 text-purple-500" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">Listen</span>
                    </div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                      The Leaders Roundtable by GoodFirms
                    </h5>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                      "Progressive Web Apps & Business Adoption"
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Discussing the rapid adoption of PWAs and their impact on modern businesses
                    </p>
                  </div>

                  <div className="text-center">
                    <a
                      href="https://music.amazon.in/podcasts/c4492973-df9f-4d3d-bb54-17a366fcc22d/episodes/853dcd80-8fc3-4254-aeed-8d0586c2bcdc/goodfirms-leaders-roundtable-what-are-progressive-web-apps-and-why-businesses-are-rapidly-adopting-them?referrer=https%3A%2F%2Fwww.linkedin.com%2F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors group"
                    >
                      <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      <span>Listen on Amazon Music</span>
                    </a>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    variant="outline"
                    className="border-purple-300 text-purple-700 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-900/30 bg-transparent px-8 py-3"
                  >
                    <Mic className="h-5 w-5 mr-2" />
                    Book a Podcast Appearance
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
