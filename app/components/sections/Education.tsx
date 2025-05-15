'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../AnimatedSection'

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of Central Missouri',
    period: '2023 - 2024',
    location: 'Missouri, USA',
    description: [
      'Specialized in Artificial Intelligence and Machine Learning',
      'Research focus on Natural Language Processing',
      'Teaching Assistant for Advanced Web Technologies',
      'GPA: 3.5/4.0'
    ]
  },
  {
    degree: 'Bachelor of Engineering in Computer Science',
    school: 'Cambridge Institute of Technology',
    period: '2018 - 2022',
    location: 'Bengaluru, India',
    description: [
      'Major in Software Engineering with Minor in Data Science',
      'Dean\'s List for all semesters',
      'Led University Coding Club'
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export default function Education() {
  return (
    <section id="education" className="py-20 px-8 md:px-16 bg-netflix-dark">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Education
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
          >
            <AnimatedSection
              whileHover={{ scale: 1.02 }}
              className="netflix-card p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-2 h-full bg-netflix-red" />
              <div className="mr-4">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-white"
                >
                  {edu.degree}
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-netflix-red font-semibold mt-1"
                >
                  {edu.school}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-400 mt-1"
                >
                  {edu.period} | {edu.location}
                </motion.div>
                <motion.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 space-y-2"
                >
                  {edu.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-netflix-red mr-2">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </motion.ul>
              </div>
            </AnimatedSection>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
} 