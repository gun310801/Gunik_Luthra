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
    image: "/finai-jpeg.webp?height=300&width=400",
    link: "https://github.com/gun310801/FinAI-Financial-Report-Generator",
    skills: ["LangChain", "OpenAI", "Python", "Financial Analysis","AI Agents"],
  },
  {
    title: "Real-Time Stock Data Analytics",
    description: "Real-time data pipeline for stock analysis using Kafka, AWS EMR, and Spark.",
    image: "/stock-data.jpg?height=300&width=400",
    link: "https://github.com/gun310801/Real-Time-Stock-Data-Analytics",
    skills: ["Apache Kafka", "AWS EMR", "PySpark", "Real-time Analytics","Streamlit"],
  },
  {
    title: "NYC Traffic Collision Analysis",
    description: "Data analysis and predictive modeling for NYC traffic collisions using MLlib.",
    image: "/new-york-map.jpg?height=300&width=400",
    link: "https://github.com/gun310801/NYC-Traffic-Collision-Analysis",
    skills: ["Pyspark","DataBricks","GCP Dataproc","Machine Learning", "MLlib", "Data Analysis"],
  },
  {
    title: "ChatML - Chat bot for Machine Learning",
    description: "End-to-end chatbot for machine learning using GPT-3.5 API and RAG techniques.",
    image: "/chatml.jpeg?height=300&width=400",
    link: "https://github.com/gun310801/CHATML",
    skills: ["RAG", "NLP", "Python","Vector Database","ChatBot"],
  },
  {
    title: "Comparing NER and LLM for analyzing VAERS Data",
    description: "Developed and optimized a preprocessing pipeline for VAERS text data, achieving a 31% efficiency boost, and demonstrated LLM-based symptom extraction's superior accuracy and performance through advanced temporal analysis techniques.",
    image: "/vaers.jpg",
    link: "https://github.com/gun310801/VAERS-SymptomExtractionwithAI",
    skills: ["NLP", "LLMs", "NER", "Apriori Algorithm", "kendal tau coefficient", "DTW", "LCS"],
  },
  {
    title: "Hands Free Mouse Control For Paraplegics and Paralytics",
    description: "Developed a hands-free mouse control system for paraplegics and paralytics using facial landmark detection and eye/mouth movement tracking, enabling cursor movement and clicks through facial gestures without additional hardware.",
    image: "/mouse_control.webp",
    link: "https://github.com/gun310801/HANDS-FREE-MOUSE-CONTROL-FOR-PARAPLEGICS-AND-PARALYTICS",
    skills: ["Computer Vision", "OpenCV","Human-Computer Interaction (HCI)", "dlib","PyAutoGUI"],
  },
  {
    title: "Network Intrustion Detection System Base Web Application",
    description: "Developed a Network Intrusion Detection System (NIDS) using machine learning classifiers, achieving 93.2% accuracy with Logistic Regression, and a Flask-based web application for real-time threat detection.",
    image: "/NIDS-Network-Intrusion-Detection-System.jpg?height=300&width=400",
    link: "https://github.com/gun310801/Network-Intrusion-Detection-System-Based-Web-Application",
    skills: ["Machine Learning", "Logistic Regression", "Feature Selection", "Classification Algorithms", "Flask"],
  },
  {
    title: "Predicting Diabetes In Patients Using AI Algorithms and Neural Networks",
    description: "Predicting diabetes in patients using AI algorithms and neural networks for improved diagnosis.",
    image: "/diabetes.png?height=300&width=400",
    link: "https://github.com/gun310801/Predicting-Diabetes-In-Patients-Using-AI-Algorithms-and-Neural-Networks",
    skills: ["Machine Learning (ML)", "Neural Networks", "Ensemble Models", "Gradient Boosting Classifier", "K-Nearest Neighbors (KNN)"],
  },
  {
    title: "Multimodal Fake News Detection",
    description: "Developed a multimodal fake news detection system using RoBERTa and RegNet models to analyze both textual and visual content, enhancing accuracy in identifying misinformation.",
    image: "/FakeNewsWeb.jpg?height=300&width=400",
    link: "https://github.com/gun310801/MultiModal-Fake-News-Detection",
    skills: ["Multimodal Learning", "RoBERTa", "RegNet", "NLP", "CNN"],
  },
  {
    title: "Colourization of Grayscale Images using Deep Learning",
    description: "Developed a deep learning model using convolutional neural networks to automatically colorize grayscale images, bringing new life to old photos and enhancing image analysis applications.",
    image: "/colorization.webp?height=300&width=400",
    link: "https://github.com/gun310801/Colourization-of-Grayscale-Images-Using-Deep-Learning",
    skills: ["Image Processing", "Deep Learning", "CNN", "TensorFlow", "Python"],
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

