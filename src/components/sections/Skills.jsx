import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../animations'
import SectionTitle from '../common/SectionTitle'

const aizenImage = new URL('../../../aizen3.gif', import.meta.url).href

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'C', 'Python', 'Dart', 'JavaScript'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Spring Boot', 'Spring Security', 'Flutter'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Maven', 'Postman', 'AWS'],
  },
  {
    title: 'Core Concepts',
    skills: [
      'Data Structures',
      'Algorithms',
      'REST APIs',
      'GraphQL',
      'OOP',
      'DBMS',
      'Operating Systems',
    ],
  },
  {
    title: 'Backend Engineering',
    skills: [
      'JWT Authentication',
      'Rate Limiting',
      'API Design',
      'Layered Architecture',
      'WebSockets',
    ],
  },
]

const SkillCard = ({ title, skills }) => (
    <motion.div
        variants={staggerItem}
        whileHover={{ y: -6 }}
        className="glass-effect neon-border rounded-xl p-6 transition-all duration-300 hover:shadow-neon-lg"
    >
      <h3 className="text-xl font-bold text-purple-400 mb-6">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
            <span
                key={skill}
                className="
            px-4
            py-2
            rounded-full
            text-sm
            font-medium
            bg-purple-500/10
            border
            border-purple-500/30
            text-gray-200
            transition-all
            duration-300
            hover:bg-purple-500/20
            hover:border-purple-400
            hover:text-white
          "
            >
          {skill}
        </span>
        ))}
      </div>
    </motion.div>
)
const Skills = () => {
  return (
      <section className="min-h-screen px-4 py-20">
        <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
        >
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">

            <div className="flex-1">

              <div className="relative">

                <SectionTitle
                    title="EXPERTISE"
                    subtitle="Skills & Technologies"
                />

                <motion.img
                    src={aizenImage}
                    alt="Aizen"
                    draggable={false}
                    animate={{ y:[0,-8,0] }}
                    transition={{ duration:3, repeat:Infinity }}
                    className="
            hidden lg:block
            absolute
            top-8
            left-[72%]
            w-40
            object-contain
            drop-shadow-[0_0_30px_rgba(168,85,247,.45)]
        "
                />

              </div>

              <motion.p
                  variants={staggerItem}
                  className="mt-5 text-center lg:text-left text-gray-400 italic max-w-2xl"
              >
                Every technique in this arsenal has been forged through building
                production-grade systems.
              </motion.p>

            </div>

          </div>

          {/* Skills Grid */}

          <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skillCategories.map((category) => (
                <SkillCard
                    key={category.title}
                    title={category.title}
                    skills={category.skills}
                />
            ))}
          </motion.div>

        </motion.div>
      </section>
  )
}

export default Skills