import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { smoothScroll } from "../utils/smoothScroll"

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center min-h-screen justify-center bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Image
            src="/WhatsApp Image 2024-11-01 at 14.59.48.jpeg?height=300&width=300"
            alt="Gunik Luthra"
            width={300}
            height={300}
            className="rounded-full mx-auto border-4 border-blue-500 shadow-lg"
          />
        </div>
        <h1 className="text-5xl font-bold mb-4 text-blue-600">Gunik Luthra</h1>
        <p className="text-2xl mb-6 text-gray-600">Computer Science Graduate Student</p>
        <div className="flex justify-center space-x-4 mb-8">
          <Button variant="outline" size="icon" asChild className="rounded-full">
            <a href="https://github.com/gun310801" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="rounded-full">
            <a href="https://www.linkedin.com/in/gunikluthra" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="rounded-full">
            <a href="mailto:gluthra@stevens.edu">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
        <p className="flex items-center justify-center text-gray-600 mb-8">
          <MapPin className="h-5 w-5 mr-2" />
          New York City Metropolitan Area
        </p>
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">Hi, I am Gunik</h2>
          <p className="text-xl mb-6 text-gray-700 leading-relaxed">
            A passionate Data Scientist and AI Engineer. I specialize in machine learning, building AI-powered
            solutions, and pushing the boundaries of what's possible with machine learning. I thrive on making data work
            smarter.
          </p>
        </div>
        <div className="flex justify-center space-x-6">
          <Link href="#projects" onClick={smoothScroll}>
            <Button variant="default" size="lg" className="rounded-full">
              Dive into my projects
            </Button>
          </Link>
          <Button variant="outline" size="lg" asChild className="rounded-full">
            <a href="/Gunik_Luthra_Resume_.pdf" target="_blank" rel="noopener noreferrer">
              My Resume
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

