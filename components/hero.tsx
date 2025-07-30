"use client"

import { ArrowDown, Linkedin, Mail, MapPin, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Modern Background with Geometric Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center pt-20 pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8 text-white">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
                    <span className="block text-white">Hello, I'm</span>
                    <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                      Rakshit Khandelwal
                    </span>
                  </h1>

                  <div className="space-y-2">
                    <h2 className="text-xl sm:text-2xl font-light text-gray-300">Visionary CEO & Tech Leader</h2>
                    <div className="flex items-center space-x-2 text-lg text-gray-400">
                      <MapPin className="h-5 w-5" />
                      <span>Indore, Madhya Pradesh, India</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                  Co-Founder & CEO of Protonshub Technologies, a CMMI Level 5 company. Stanford Design Thinking
                  certified leader passionate about fostering innovation and delivering cutting-edge solutions that
                  exceed client expectations.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">6+</div>
                  <div className="text-sm text-gray-400">Years as CEO</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">CMMI 5</div>
                  <div className="text-sm text-gray-400">Company Level</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">150+</div>
                  <div className="text-sm text-gray-400">Team Members</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={scrollToProjects}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0"
                >
                  View My Work
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 bg-transparent"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Watch Story
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6 pt-4">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/rakshit-khandelwal-1505", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:rakshit1505@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5 text-white group-hover:text-purple-300 transition-colors" />
                    <span className="sr-only">{label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative lg:block hidden">
              <div className="relative">
                {/* Floating Cards */}
                <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-white font-medium">Protonshub Technologies</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">CMMI Level 5 Certified</p>
                </div>

                <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-white font-medium">Stanford Certified</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">Design Thinking</p>
                </div>

                {/* Main Profile Card */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center">
                  <div className="relative w-52 h-52 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-spin-slow opacity-75" />
                    <div className="relative w-48 h-48 mx-auto mt-2 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                      <Image
                        src="/images/rakshit-profile.jpg"
                        alt="Rakshit Khandelwal"
                        fill
                        className="object-cover scale-100"
                        style={{ objectPosition: "50% 20%" }}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">Rakshit Khandelwal</h3>
                    <p className="text-gray-300">CEO & Co-Founder</p>
                    <div className="flex justify-center space-x-2">
                      <Badge className="bg-purple-500/20 text-purple-200 border-purple-500/30">Leadership</Badge>
                      <Badge className="bg-pink-500/20 text-pink-200 border-pink-500/30">Innovation</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 floating-animation">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-gray-400 font-medium">Scroll to explore</span>
              <ArrowDown className="h-6 w-6 text-gray-400 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
