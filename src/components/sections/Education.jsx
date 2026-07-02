import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Award, Swords } from 'lucide-react'
import { EDUCATION } from '../../constants'
import { staggerContainer, staggerItem } from '../../animations'
import SectionTitle from '../common/SectionTitle'

const aizenImage = new URL('../../../aizen3.gif', import.meta.url).href

const Education = () => {

  const highlights = [
    {
      icon: BookOpen,
      title: 'Soul Academy',
      desc: 'Built a strong Computer Science foundation through academic learning and practical coursework.',
    },
    {
      icon: Swords,
      title: 'Combat Training',
      desc: 'Strengthened problem-solving through Competitive Programming, DSA and 1000+ coding challenges.',
    },
    {
      icon: Award,
      title: 'Bankai Evolution',
      desc: 'Applied classroom knowledge by building scalable backend systems with Java, Spring Boot and Redis.',
    },
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

          {/* Section Header */}

          <div className="flex items-center justify-center gap-8 mb-12">

            <div>
              <SectionTitle
                  title="ACADEMICS"
                  subtitle="Education"
              />
            </div>

            <motion.img
                src={aizenImage}
                alt="Aizen"
                draggable={false}
                className="hidden lg:block w-40 xl:w-48 object-contain drop-shadow-[0_0_35px_rgba(168,85,247,.45)]"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
            />

          </div>

          {/* Main Education Card */}

          <motion.div
              variants={staggerItem}
              className="p-8 rounded-xl glass-effect neon-border relative overflow-hidden group"
          >

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

              {/* Institute Details */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                  <p className="text-xs text-purple-400/70 mb-2 tracking-widest">
                    SOUL ACADEMY
                  </p>

                  <p className="text-lg font-semibold text-white">
                    {EDUCATION.institute}
                  </p>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                >
                  <p className="text-xs text-purple-400/70 mb-2 tracking-widest">
                    TRAINING PERIOD
                  </p>

                  <p className="text-lg font-semibold text-white">
                    {EDUCATION.duration}
                  </p>

                </motion.div>

              </div>

              {/* CGPA */}

              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/50 rounded-xl p-5">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                >

                  <div>

                    <p className="text-xs text-purple-400/70 tracking-widest">
                      ACADEMIC REIATSU
                    </p>

                    <p className="text-sm text-gray-400 mt-1">
                      Overall Academic Performance
                    </p>

                  </div>

                  <p className="text-4xl font-bold gradient-text">
                    {EDUCATION.cgpa}
                  </p>

                </motion.div>

              </div>

            </div>

          </motion.div>
          {/* Soul Academy Training */}

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
            <span className="gradient-text">
              Soul Academy Training
            </span>
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {highlights.map((highlight, idx) => {

                const Icon = highlight.icon

                return (
                    <motion.div
                        key={idx}
                        variants={staggerItem}
                        whileHover={{ y: -8 }}
                        className="group p-6 rounded-xl glass-effect neon-border transition-all duration-300 hover:shadow-neon-lg"
                    >

                      <div className="flex flex-col items-center text-center">

                        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-purple-500/20 border border-purple-500/30 group-hover:bg-purple-500/30 transition-all duration-300">

                          <Icon
                              size={26}
                              className="text-purple-300"
                          />

                        </div>

                        <h4 className="mt-5 text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {highlight.title}
                        </h4>

                        <p className="mt-3 text-sm leading-7 text-gray-400">
                          {highlight.desc}
                        </p>

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