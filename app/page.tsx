"use client"

import { motion } from "framer-motion"
import Header from "./components/Header"
import Home from "./components/Home"
import Education from "./components/Education"
import Projects from "./components/Projects"
import WorkExperience from "./components/WorkExperience"
import Publications from "./components/Publications"
import ExtraCurriculars from "./components/ExtraCurriculars"
import Contact from "./components/Contact"

export default function Page() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-16 space-y-32">
        <section id="home">
          <Home />
        </section>
        <motion.section
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={sectionVariants}
        >
          <h2 className="text-4xl font-bold mb-8 text-blue-600 text-center">Education</h2>
          <Education />
        </motion.section>
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={sectionVariants}
        >
          <h2 className="text-4xl font-bold mb-8 text-blue-600 text-center">Projects</h2>
          <Projects />
        </motion.section>
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={sectionVariants}
        >
          <h2 className="text-4xl font-bold mb-8 text-blue-600 text-center">Experience</h2>
          <WorkExperience />
          <ExtraCurriculars />
        </motion.section>
        <motion.section
          id="publications"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={sectionVariants}
        >
          <h2 className="text-4xl font-bold mb-8 text-blue-600 text-center">Publications</h2>
          <Publications />
        </motion.section>
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={sectionVariants}
        >
          <h2 className="text-4xl font-bold mb-8 text-blue-600 text-center">Contact</h2>
          <Contact />
        </motion.section>
      </main>
    </div>
  )
}

