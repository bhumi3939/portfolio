'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedSection from '../AnimatedSection'

export default function About() {
  return (
    <section id="about" className="py-20 px-8 md:px-16 bg-netflix-black">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        About Me
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[400px] rounded-lg overflow-hidden"
        >
          <Image
            src="/images/1000043077.jpg" // Image from public directory
            alt="Profile Picture"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <AnimatedSection
            whileHover={{ scale: 1.02 }}
            className="netflix-card p-6"
          >
            <h3 className="text-2xl font-bold mb-4">Full Stack Engineer</h3>
            <p className="text-gray-300 mb-4">
            I'm a full-stack engineer with 2+ years of experience building fast, user-focused apps using React, Node.js, Python, and AWS.
            I work on solving real-world problems with clean code, automation, and AI-powered features.
            Currently focused on Eagerness to learn, build, grow, learn fast, and make everyday tasks effortless.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-netflix-red/20 text-netflix-red rounded-full text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-netflix-red/20 text-netflix-red rounded-full text-sm">
                TensorFlow
              </span>
              <span className="px-3 py-1 bg-netflix-red/20 text-netflix-red rounded-full text-sm">
                pytorch
              </span>
              <span className="px-3 py-1 bg-netflix-red/20 text-netflix-red rounded-full text-sm">
                LLM
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection
            whileHover={{ scale: 1.02 }}
            className="netflix-card p-6"
          >
            <h3 className="text-2xl font-bold mb-4">Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold">Full Stack Developer Intern</h4>
                <p className="text-netflix-red">2025 Feb - Present</p>
                <p className="text-gray-300">Leading development of enterprise applications</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Full Stack  Developer</h4>
                <p className="text-netflix-red">2022 - 2023</p>
                <p className="text-gray-300">Developed and deployed end-to-end AI-powered web applications</p>
              </div>
            </div>
          </AnimatedSection>
        </motion.div>
      </div>
    </section>
  )
} 