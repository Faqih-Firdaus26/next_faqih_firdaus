"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Smart Vertical Farm",
    description:
      "Vertical aeroponic farm system using IoT, Machine Learning, and solar panels.",
    image: "/projects/aeroponic.png",
    tags: ["IoT", "Machine Learning", "Solar Panel"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Smart Clinic",
    description: "Smart Prediction Lung Diese",
    image: "/projects/smart-clinic.jpg",
    tags: ["Python", "Machine Learning", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Silo Sirloin",
    description: "A silo and sirloin meat sales website",
    image: "/projects/silo-sirloin.jpg",
    tags: ["NextJS", "Tailwind CSS", "API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Jelajah Jawa",
    description: "a java island news portal website",
    image: "/projects/jelajah-jawa.jpg",
    tags: ["Laravel", "Tailwind CSS", "Blade"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Andalas News",
    description: "a Sumatran island news portal website",
    image: "/projects/andalas-news.jpg",
    tags: ["Laravel", "Tailwind CSS", "Blade"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Borneo Bulletin",
    description: "a kalimantan island news portal website",
    image: "/projects/borneo-bulletin.jpg",
    tags: ["Laravel", "Tailwind CSS", "Blade"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse move handler for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    if (!cardsRef.current) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    setHoveredCard(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="container mx-auto py-24 lg:py-32"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Parallax header */}
      <motion.div
        className="relative mb-16 overflow-hidden rounded-xl py-16"
        variants={itemVariants}
      >
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ y: 0 }}
          animate={{ y: scrollY * 0.3 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Projects background"
            className="h-[120%] w-full object-cover opacity-20"
          />
        </motion.div>

        <div className="relative z-10 text-center">
          <motion.h1
            className="mb-2 text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="mx-auto max-w-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A collection of my recent work and personal projects. Each project
            represents a unique challenge and solution.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        ref={cardsRef}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={itemVariants}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="group relative overflow-hidden rounded-lg border bg-card shadow-md transition-all duration-300 hover:shadow-xl"
            variants={itemVariants}
            onMouseMove={(e) => handleMouseMove(e, project.id)}
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={handleMouseLeave}
            style={{ transition: "transform 0.2s ease-out" }}
          >
            <div className="relative h-48 overflow-hidden">
              <motion.img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>

            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
              <p className="mb-4 text-muted-foreground">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="flex justify-between">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-primary hover:underline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                  <ExternalLink className="ml-1 h-4 w-4" />
                </motion.a>

                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary hover:underline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Source Code
                  <Github className="ml-1 h-4 w-4" />
                </motion.a>
              </div>
            </div>

            {/* 3D shadow effect */}
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-8 translate-y-full transform rounded-lg bg-black/10 blur-md transition-all duration-300 group-hover:translate-y-0"
              initial={{ opacity: 0, y: "100%" }}
              animate={{
                opacity: hoveredCard === project.id ? 0.2 : 0,
                y: hoveredCard === project.id ? 0 : "100%",
              }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
