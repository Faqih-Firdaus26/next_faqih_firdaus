"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "Fullstack Developer Intern",
    company: "Gits ID",
    location: "Bandung",
    period: "September 2023 - Agustus 2023",
    description:
      "Learned and applied Laravel, API development, and database management to build scalable web applications.",
    achievements: [""],
  },
  {
    id: 2,
    role: "AI Trainer (Freelance)",
    company: "Outlier AI",
    location: "USA",
    period: "2024 - Present",
    description:
      "Worked on generative AI projects, training models with fact-checking, story-writing, and response evaluation.",
    achievements: [""],
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "FYP Media",
    location: "Tangerang Selatan",
    period: "Juni 2024 - Oktober 2024",
    description:
      "Developed web applications using Laravel for multiple provinces in Indonesia, collaborating with a team to implement new features and fix bugs.",
    achievements: [""],
  },
]

export default function ExperiencePage() {
  const [scrollY, setScrollY] = useState(0)
  const { scrollYProgress } = useScroll()
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className="container mx-auto py-24 lg:py-32"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Parallax header */}
      <motion.div className="relative mb-16 overflow-hidden rounded-xl py-16" variants={itemVariants}>
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Experience background"
            className="h-[120%] w-full object-cover opacity-10"
          />
        </div>

        <div className="relative z-10 text-center">
          <h1 className="mb-2 text-4xl font-bold">Work Experience</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">My professional journey and career highlights</p>
        </div>
      </motion.div>

      <motion.div className="relative" variants={itemVariants}>
        {/* Animated timeline */}
        <motion.div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary" style={{ height: lineHeight }} />

        <div className="relative space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="relative pl-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute -left-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.2, type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="text-xs font-bold">{experiences.length - index}</span>
              </motion.div>

              <motion.div
                className="rounded-lg bg-card p-6 shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h2 className="text-2xl font-bold text-primary">{experience.role}</h2>
                <h3 className="mb-2 text-lg font-medium">{experience.company}</h3>

                <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4 text-primary" />
                    {experience.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4 text-primary" />
                    {experience.period}
                  </div>
                </div>

                <p className="mb-4 text-muted-foreground">{experience.description}</p>

                <div>
                  <h4 className="mb-2 font-semibold text-primary">Key Achievements:</h4>
                  <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                    {experience.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + i * 0.1 + 0.3 }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="mt-16" variants={itemVariants}>
        <h2 className="mb-8 text-2xl font-bold text-primary">Education & Certifications</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            className="rounded-lg bg-card p-6 shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h3 className="mb-2 text-xl font-bold">Undergraduated Electrical Engineering</h3>
            <p className="text-muted-foreground">Singaperbangsa University of Karawang</p>
            <p className="mb-4 text-muted-foreground">2021 - 2025</p>
            <p className="text-muted-foreground">.....</p>
          </motion.div>

          <motion.div
            className="rounded-lg bg-card p-6 shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h3 className="mb-2 text-xl font-bold">Certifications</h3>
            <ul className="space-y-3 text-muted-foreground">
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                <div>
                  <p className="font-medium">AI & IoT bootcampt</p>
                  <p className="text-sm text-gray-600">Samsung Innovation Campus, 2024</p>
                </div>
              </motion.li>
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                <div>
                  <p className="font-medium">Fullstack Developer Certifications</p>
                  <p className="text-sm text-gray-600">Gits ID, 2023</p>
                </div>
              </motion.li>
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                <div>
                  <p className="font-medium">Intern Programmer Certification </p>
                  <p className="text-sm text-gray-600">FYP Media, 2024</p>
                </div>
              </motion.li>
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                <div>
                  <p className="font-medium">Membuat Aplikasi Web Dengan React </p>
                  <p className="text-sm text-gray-600">Dicoding, 2024</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

