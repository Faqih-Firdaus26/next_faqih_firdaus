"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: "/skills/javascript.png" },
  { name: "PHP", icon: "/skills/php.png" },
  { name: "React", icon: "/skills/react.png" },
  { name: "Laravel", icon: "/skills/laravel.png" },
  { name: "Next.js", icon: "/skills/nextjs.png" },
  { name: "Tailwind CSS", icon: "/skills/tailwind.jpeg" },
  { name: "MongoDB", icon: "/skills/mongodb.png" },
  { name: "MySql", icon: "/skills/mysql.png" },
];

const education = [
  {
    degree: "Electrical Engineering",
    school: "Singaperbangsa University of Karawang",
    year: "2025",
    description: "Focused on software engineering, IoT and web technologies.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1186&q=80",
  },
];

export default function AboutPage() {
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
            alt="About background"
            className="h-[120%] w-full object-cover opacity-10"
          />
        </motion.div>

        <div className="relative z-10 text-center">
          <motion.h1
            className="mb-2 text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="mx-auto max-w-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Learn more about my background, skills, and journey as a developer
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="grid gap-12 md:grid-cols-2"
        variants={itemVariants}
      >
        <motion.div
          className="perspective"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="preserve-3d transition-transform duration-500 hover:rotate-y-6"
            style={{
              transform: `rotateY(${scrollY * 0.02}deg)`,
              transition: "transform 0.1s ease-out",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="overflow-hidden rounded-lg bg-primary/10">
              <img
                src="/about/me.jpg"
                alt="Faqih Al Firdaus"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-lg bg-primary/20 blur-sm"></div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-2xl font-bold text-primary">Who I Am</h2>

          <motion.p
            className="mb-4 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I am a diligent and reliable Electrical Engineering student at
            Singaperbangsa University of Karawang, specializing in creating
            modern web applications. I am passionate about problem-solving and
            always strive to improve my skills in programming and teamwork.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div className="mt-16" variants={itemVariants}>
        <motion.h2
          className="mb-6 text-2xl font-bold text-primary text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="bg-card rounded-full p-4 shadow-lg mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={skill.icon || "/placeholder.svg"}
                  alt={skill.name}
                  className="h-12 w-12"
                />
              </motion.div>
              <p className="text-center text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="mt-16" variants={itemVariants}>
        <motion.h2
          className="mb-6 text-2xl font-bold text-primary text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="overflow-hidden rounded-lg bg-card shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-48">
                <img
                  src={edu.image || "/placeholder.svg"}
                  alt={edu.school}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/50"></div>
                <motion.div
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                >
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-white">
                    {edu.school} - {edu.year}
                  </p>
                </motion.div>
              </div>
              <motion.div
                className="p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
              >
                <p className="text-muted-foreground">{edu.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
