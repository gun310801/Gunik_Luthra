"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

type Skill = string

type Project = {
  title: string
  description: string
  image: string
  link: string
  skills: Skill[]
}

const projects: Project[] = [
  {
    title: "Fin AI - Financial Report Generator",
    description: "AI-powered financial report generator using LangChain and custom tools.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    skills: ["LangChain", "OpenAI", "Python", "Financial Analysis"],
  },
  {
    title: "Real-Time Stock Data Analytics",
    description: "Real-time data pipeline for stock analysis using Kafka, AWS EMR, and Spark.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    skills: ["Apache Kafka", "AWS EMR", "PySpark", "Real-time Analytics"],
  },
  {
    title: "NYC Traffic Collision Analysis",
    description: "Data analysis and predictive modeling for NYC traffic collisions using MLlib.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    skills: ["Machine Learning", "MLlib", "Data Analysis", "Python"],
  },
  {
    title: "ChatML - Chat bot for Machine Learning",
    description: "End-to-end chatbot for machine learning using GPT-3.5 API and RAG techniques.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    skills: ["GPT-3.5", "RAG", "NLP", "Python"],
  },
  {
    title: "Sentiment Analysis Dashboard",
    description: "Real-time sentiment analysis dashboard for social media data using NLP techniques.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    skills: ["NLP", "React", "Flask", "Twitter API", "BERT"],
  },
  {
    title: "Computer Vision for Retail Analytics",
    description: "Deep learning model to analyze customer behavior in retail stores using security camera footage.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    skills: ["Computer Vision", "TensorFlow", "OpenCV", "CNN", "Object Detection"],
  },
  {
    title: "Predictive Maintenance System",
    description: "IoT-based predictive maintenance system for industrial equipment using time series analysis.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    skills: ["IoT", "Time Series Analysis", "Azure IoT Hub", "Prophet", "Power BI"],
  },
  {
    title: "Recommender System for E-commerce",
    description: "Collaborative filtering-based recommender system for personalized product recommendations.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    skills: ["Recommender Systems", "Collaborative Filtering", "PySpark", "AWS", "A/B Testing"],
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            <div
              className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 bg-white"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-600">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={`absolute inset-0 bg-blue-600 bg-opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-white ${
                  hoveredProject === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg text-center">{project.description}</p>
                <span className="mt-4 inline-block bg-white text-blue-600 px-4 py-2 rounded-full font-semibold">
                  View Project
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

