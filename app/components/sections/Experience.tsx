'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../AnimatedSection'

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Sports Excitement',
    period: '2025 Feb - Present',
    location: 'New York, NY',
    description: [
      'Led development of enterprise-scale React applications',
      'Architected microservices infrastructure using Node.js and AWS',
      'Mentored junior developers and conducted code reviews',
      'Implemented CI/CD pipelines and automated testing strategies'
    ]
  },
  {
    title: 'Full Stack AI Developer',
    company: 'Ernst & Young GDS',
    period: '2022 - 2023',
    location: 'Bengaluru, India',
    description: [
      'Built and deployed full-stack AI applications using React, Node.js, and Python-based ML frameworks',
  'Integrated machine learning models into backend services for predictive analytics and automation',
  'Developed APIs to serve real-time model inferences and handled data preprocessing pipelines',
  'Collaborated with data scientists and frontend teams to deliver scalable, AI-powered user experiences'

    ]
  },
  {
    title: 'Programmer Analyst',
    company: 'Cognition',
    period: '2021 - 2022',
    location: 'Bengaluru, India',
    description: [
      'Developed data preprocessing and model training pipelines using Python, Pandas, and scikit-learn',
  'Analyzed business requirements and translated them into AI/ML solutions for internal tools and client platforms',
  'Worked closely with data scientists to optimize machine learning models for performance and scalability',
  'Implemented model evaluation workflows and automated reporting using Jupyter, SQL, and visualization libraries'
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-8 md:px-16 bg-netflix-black">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Professional Experience
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
          >
            <AnimatedSection
              whileHover={{ scale: 1.02 }}
              className="netflix-card p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-netflix-red" />
              <div className="ml-4">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-white"
                >
                  {exp.title}
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-netflix-red font-semibold mt-1"
                >
                  {exp.company}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-400 mt-1"
                >
                  {exp.period} | {exp.location}
                </motion.div>
                <motion.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 space-y-2"
                >
                  {exp.description.map((item, i) => (
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