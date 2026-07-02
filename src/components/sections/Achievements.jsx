import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code2, Zap, Github, Cloud } from 'lucide-react'
import { ACHIEVEMENTS } from '../../constants'
import { staggerContainer, staggerItem } from '../../animations'
import SectionTitle from '../common/SectionTitle'

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startTime = Date.now()

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(target * progress))
    }, 50)

    return () => clearInterval(timer)
  }, [target, duration])

  return <span>{count}</span>
}

const AchievementCard = ({ achievement, index }) => {
  const icons = {
    'Code2': Code2,
    'Zap': Zap,
    'Github': Github,
    'Cloud': Cloud,
  }

  const Icon = icons[achievement.icon] || Code2

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8 }}
      className="p-8 rounded-xl glass-effect neon-border group overflow-hidden relative hover:shadow-neon-lg transition-all duration-300"
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-purple-600/10 to-transparent" />

      <div className="relative z-10 space-y-6">
        {/* Icon */}
        <div className="p-4 w-fit rounded-lg bg-purple-500/20 group-hover:bg-purple-500/40 transition-colors">
          <Icon size={32} className="text-purple-400 group-hover:text-white transition-colors" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
          {achievement.title}
        </h3>

        {/* Stats */}
        <div className="space-y-4">
          {/* Stat 1 */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">{achievement.label1}</span>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold gradient-text"
            >
              {achievement.stat1}
            </motion.span>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-purple-500/30 to-transparent" />

          {/* Stat 2 */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">{achievement.label2}</span>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold gradient-text"
            >
              {achievement.stat2}
            </motion.span>
          </div>
        </div>
      </div>

      {/* Border animation */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border-2 border-transparent bg-gradient-to-r from-purple-500 to-blue-500 p-[1px]">
        <div className="w-full h-full rounded-[10px] bg-dark-card" />
      </div>
    </motion.div>
  )
}

const Achievements = () => {
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
        <SectionTitle title="ACCOMPLISHMENTS" subtitle="Achievements & Certifications" />

        {/* Achievements Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
        >
          {ACHIEVEMENTS.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl glass-effect neon-border"
        >
          <motion.h3
            variants={staggerItem}
            className="text-2xl font-bold mb-8 text-center gradient-text"
          >
            Overall Impact
          </motion.h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Total Projects', value: 50 },
              { label: 'GitHub Contributions', value: 1000 },
              { label: 'Problems Solved', value: 800 },
              { label: 'Contest Rating', value: 1800 },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="text-center"
              >
                <p className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                  <Counter target={stat.value} duration={2000} />
                  {stat.value > 100 ? '+' : ''}
                </p>
                <p className="text-sm text-gray-400 tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Achievements

