import { motion } from 'framer-motion'
import { titleAnimation, paragraphAnimation } from '../../animations'

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      className="text-center space-y-3"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      <motion.p
        className="text-xs lg:text-sm text-purple-400 tracking-widest font-semibold"
        variants={paragraphAnimation}
      >
        {title}
      </motion.p>
      <motion.h2
        className="text-4xl lg:text-5xl font-bold"
        variants={titleAnimation}
      >
        <span className="gradient-text">{subtitle}</span>
      </motion.h2>
      <motion.div
        className="flex justify-center"
        initial={{ width: 0 }}
        whileInView={{ width: 100 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
      </motion.div>
    </motion.div>
  )
}

export default SectionTitle


