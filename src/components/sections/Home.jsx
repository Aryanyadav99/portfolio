import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { fadeInRight, floatingAnimation, staggerContainer, staggerItem } from '../../animations'

const aizenPortrait = new URL('../../../aizenreal.png', import.meta.url).href

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
      <div className="min-h-[92vh] lg:min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <motion.div
            className="max-w-[92rem] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.95fr] gap-12 lg:gap-16 xl:gap-20 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
        >
          {/* Left Section */}
          <div className="space-y-8 relative z-10">
            <motion.div
                variants={staggerItem}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/20 bg-white/5 backdrop-blur-sm text-purple-200 text-sm tracking-[0.3em] uppercase"
                style={{ fontFamily: 'Cinzel, serif' }}
            >
              Welcome to Soul Society
            </motion.div>

            <motion.div variants={staggerItem} className="space-y-4">
              <h1
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-[0.18em]"
                  style={{ fontFamily: 'Cinzel, serif' }}
              >
              <span className="block text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.12)]">
                ARYAN
              </span>
                <span className="block gradient-text">YADAV</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-purple-200/80 uppercase tracking-[0.45em]">
                Software Developer
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-3">
              {[
                'Backend Developer',
                'Competitive Programmer',
                'Problem Solver',
              ].map((item) => (
                  <span
                      key={item}
                      className="px-4 py-2 rounded-full border border-purple-500/20 bg-dark-card/60 text-gray-200 text-sm"
                  >
                {item}
              </span>
              ))}
            </motion.div>

            <motion.p
                variants={staggerItem}
                className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed"
            >
              Software developer with a strong foundation in backend
              development, problem-solving, and a curious mind for the core
              fundamentals behind everything I build.
            </motion.p>

            <motion.div
                variants={staggerItem}
                className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                  type="button"
                  onClick={() => scrollToSection('about')}
                  className="btn-primary flex items-center justify-center gap-2 group"
              >
                Enter Soul Society
                <ChevronRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                />
              </button>

              <button
                  type="button"
                  onClick={() => scrollToSection('projects')}
                  className="btn-secondary flex items-center justify-center gap-2 group"
              >
                View Projects (Kido)
                <ChevronRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                />
              </button>
            </motion.div>
          </div>

          {/* Right Section */}
          <motion.div
              variants={fadeInRight}
              className="relative h-[34rem] lg:h-[46rem] xl:h-[52rem] flex items-center justify-center"
          >
            <motion.div
                {...floatingAnimation}
                className="relative z-10 w-full h-full flex items-center justify-center"
            >
              <motion.img
                  src={aizenPortrait}
                  alt="Aizen"
                  className="w-full h-full object-contain"
                  draggable={false}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-xs text-purple-400 tracking-widest">
            SCROLL DOWN
          </p>

          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center p-2">
            <motion.div
                className="w-1 h-2 bg-purple-400 rounded-full"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
  )
}

export default Home