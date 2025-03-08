"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TypeAnimation } from "react-type-animation"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const parallaxRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Featured projects for 3D cards
  const featuredProjects = [
    {
      id: 1,
      title: "Smart Clinic",
      description: "Smart Prediction Lung Diese",
      image:
        "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Python", "Machine Learning", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Silo Sirloin",
      description: "A silo and sirloin meat sales website",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["NextJS", "Tailwind CSS", "API"],
    },
    {
      id: 3,
      title: "Jelajah Jawa",
      description: "a java island news portal website",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      tags: ["Laravel", "Tailwind CSS", "Blade"],
    },
  ]

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
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {/* Hero section with parallax */}
      <motion.section className="relative h-screen overflow-hidden" variants={itemVariants}>
        {/* Parallax background */}
        <motion.div
          ref={parallaxRef}
          className="absolute inset-0 z-0"
          initial={{ y: 0 }}
          animate={{ y: scrollY * 0.5 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <img
            src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Background pattern"
            className="h-[120%] w-full object-cover opacity-20"
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 pt-20 lg:pt-0">
          <div className="max-w-3xl text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">Hi, I'm Faqih Al Firdaus</span>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Electrical Engineering Student",
                  2000,
                  "IoT Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="mt-2 block text-primary"
                repeat={Number.POSITIVE_INFINITY}
              />
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I build exceptional and accessible digital experiences for the web. Focused on creating products that are
              inclusive, performant, and delightful.
            </motion.p>

            <motion.div
              className="mt-10 flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button asChild>
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact" className="group">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <div className="flex flex-col items-center">
            <span className="mb-2 text-sm font-medium text-gray-500">Scroll Down</span>
            <div className="h-10 w-6 rounded-full border-2 border-gray-400">
              <motion.div
                className="mx-auto mt-2 h-2 w-2 rounded-full bg-gray-400"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Featured projects with 3D cards */}
      <motion.section className="py-20 bg-muted/50 dark:bg-muted/20" variants={itemVariants}>
        <div className="container mx-auto px-6">
          <motion.h2
            className="mb-12 text-center text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <div ref={cardsRef} className="grid gap-8 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="card-3d group relative h-[400px] w-full cursor-pointer perspective">
                  <CardContent className="card-3d-content absolute inset-0 preserve-3d rounded-xl transition-transform duration-500 group-hover:rotate-y-6">
                    {/* Card front */}
                    <div className="card-front absolute inset-0 backface-hidden overflow-hidden rounded-xl border border-border bg-card">
                      <div className="relative h-1/2 overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                      </div>

                      <div className="p-6">
                        <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                        <p className="mb-4 text-muted-foreground">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card back - subtle shadow effect */}
                    <div className="card-back absolute inset-0 -z-10 translate-z-12 rounded-xl bg-primary/20 blur-sm"></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* About section with parallax */}
      <motion.section className="relative overflow-hidden py-20" variants={itemVariants}>
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ y: 0 }}
          animate={{ y: (scrollY - 800) * 0.2 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
            alt="Technology background"
            className="h-[120%] w-full object-cover opacity-5"
          />
        </motion.div>

        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-800">About Me</h2>
            <p className="mb-8 text-lg text-gray-600">
              I'm a passionate Full Stack Developer with over 2 years of experience building web applications. I
              specialize in JavaScript, React, NextJs, Laravel and modern web technologies.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:-translate-y-1"
            >
              Learn More About Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}

