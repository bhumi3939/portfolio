'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../AnimatedSection'

const skills = [
  {
    name: 'Pytorch/Tensorflow',
    level: 'Expert',
    description: 'Building modern web applications with React and Next.js',
    icon: '🔥'
  },
  {
    name: 'Keras/FastAI',
    level: 'Advanced',
    description: 'Developing scalable backend services and APIs',
    icon: '⚡'
  },
  {
    name: 'NLP, RAG, LLMs, LangChain',
    level: 'Advanced',
    description: 'Writing type-safe and maintainable code',
    icon: '🔗'
  },
  {
    name: 'AWS, Docker, Kubernetes, CI/CD',
    level: 'Expert',
    description: 'Writing type-safe and maintainable code',
    icon: '🐳'
  },
  {
    name: 'Python, SQL, NoSQL',
    level: 'Advanced',
    description: 'Data analysis, automation, and machine learning',
    icon: '🐍'
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 md:px-16 bg-netflix-black">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Skills & Expertise
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <AnimatedSection
              whileHover={{ scale: 1.05 }}
              className="netflix-card p-6"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p className="text-netflix-red mb-2">{skill.level}</p>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </AnimatedSection>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 