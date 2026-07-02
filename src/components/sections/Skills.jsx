import React from 'react'
import { motion } from 'framer-motion'
import { SKILLS } from '../../constants'
import { staggerContainer, staggerItem } from '../../animations'
import SectionTitle from '../common/SectionTitle'

const SkillProgressBar = ({ skill, level, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-gray-300">{skill}</span>
        <span className="text-xs text-purple-400">{level}%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-dark-border overflow-hidden neon-border">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-neon"
        />
      </div>
    </motion.div>
  )
}

const SkillCategory = ({ title, skills, delays }) => {
  return (
    <motion.div
      variants={staggerItem}
      className="p-6 rounded-xl glass-effect neon-border"
    >
      <h3 className="text-lg font-bold text-purple-400 mb-6">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, idx) => (
          <SkillProgressBar
            key={skill}
            skill={skill}
            level={90 - idx * 5}
            delay={delays[idx] || idx * 0.1}
          />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const skillCategories = [
    { title: 'Backend Development', skills: SKILLS.backend },
    { title: 'Frontend Development', skills: SKILLS.frontend },
    { title: 'DevOps & Tools', skills: SKILLS.devops },
    { title: 'Programming Languages', skills: SKILLS.programming },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        className="max-w-6xl w-full"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <SectionTitle title="EXPERTISE" subtitle="Skills & Technologies" />

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
        >
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              delays={[]}
            />
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: 'Languages', value: '3+' },
            { label: 'Frameworks', value: '5+' },
            { label: 'Databases', value: '4+' },
            { label: 'Tools', value: '10+' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="p-6 text-center rounded-lg border neon-border bg-dark-card/50 group hover:bg-dark-card transition-colors"
            >
              <p className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills

