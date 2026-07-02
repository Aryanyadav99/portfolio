import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Award, Target } from 'lucide-react'
import { EDUCATION } from '../../constants'
import { staggerContainer, staggerItem } from '../../animations'
import SectionTitle from '../common/SectionTitle'

const Education = () => {
  const highlights = [
    { icon: Target, title: 'Backend Development', desc: 'Specialized in Java, Spring Boot architecture' },
    { icon: Award, title: 'System Design', desc: 'Distributed systems and scalability' },
    { icon: BookOpen, title: 'Competitive Programming', desc: 'Algorithm & data structure expertise' },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        className="max-w-4xl w-full"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <SectionTitle title="ACADEMICS" subtitle="Education" />

        {/* Main Education Card */}
        <motion.div
          variants={staggerItem}
          className="mt-16 p-8 rounded-xl glass-effect neon-border relative overflow-hidden group"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-purple-600/5 to-blue-600/5" />

          <div className="relative z-10 space-y-6">
            {/* Degree Info */}
            <div className="space-y-2">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white"
              >
                {EDUCATION.degree}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-purple-400"
              >
                {EDUCATION.field}
              </motion.p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent" />

            {/* Institute & Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-xs text-purple-400/70 mb-2 tracking-widest">INSTITUTE</p>
                <p className="text-lg font-semibold text-white">{EDUCATION.institute}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-xs text-purple-400/70 mb-2 tracking-widest">DURATION</p>
                <p className="text-lg font-semibold text-white">{EDUCATION.duration}</p>
              </motion.div>
            </div>

            {/* CGPA Highlight */}
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/50 rounded-lg p-4 mt-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-between"
              >
                <p className="text-xs text-purple-400/70 tracking-widest">CGPA</p>
                <p className="text-3xl font-bold gradient-text">{EDUCATION.cgpa}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mt-16"
        >
          <motion.h3
            variants={staggerItem}
            className="text-2xl font-bold mb-8 text-center"
          >
            <span className="gradient-text">Academic Highlights</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, idx) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="p-6 rounded-lg glass-effect neon-border group hover:shadow-neon-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/40 transition-colors">
                      <Icon size={24} className="text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-gray-400">{highlight.desc}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Education

