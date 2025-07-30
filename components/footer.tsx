import Link from "next/link"
import { Linkedin, Mail, Building } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Rakshit Khandelwal</h3>
            <p className="text-gray-300 leading-relaxed">
              Co-Founder & CEO of Protonshub Technologies. Passionate about scaling tech companies and building
              innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#about" className="block text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#projects" className="block text-gray-300 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="block text-gray-300 hover:text-white transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Building className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">Protonshub Technologies</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">rakshit@protonshub.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Rakshit Khandelwal. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <Link
              href="https://linkedin.com/in/rakshit-khandelwal-1505"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:rakshit@protonshub.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
