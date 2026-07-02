import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { PROJECTS } from '../../constants'
import { staggerContainer, staggerItem } from '../../animations'
import SectionTitle from '../common/SectionTitle'

const aizenImage = new URL('../../../pengu.gif', import.meta.url).href

const ProjectCard = ({ project, index }) => (
    <motion.div
        variants={staggerItem}
        whileHover={{ y: -8 }}
        className="group relative p-6 rounded-xl glass-effect neon-border overflow-hidden transition-all duration-300 hover:shadow-neon-lg"
    >
      <div className="absolute top-4 right-4">
      <span className="text-5xl lg:text-6xl font-bold text-purple-500/20 group-hover:text-purple-500/40">
        {String(index + 1).padStart(2, '0')}
      </span>
      </div>

      <div className="relative z-10">
        <h3 className="text-xl lg:text-2xl font-bold mb-3 pr-12 group-hover:text-purple-300">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm lg:text-base mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
              <span
                  key={i}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
              >
            {tech}
          </span>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent mb-6" />

        <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg btn-secondary text-sm font-semibold"
        >
          View Project
          <ExternalLink size={14} />
        </a>
      </div>

      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border-2 border-transparent bg-gradient-to-r from-purple-500 to-blue-500 p-[1px]">
        <div className="w-full h-full rounded-[10px] bg-dark-card" />
      </div>
    </motion.div>
)

const Projects = () => {
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
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-8 mb-16">

            <div className="flex flex-col">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <SectionTitle
                    title="PORTFOLIO"
                    subtitle="Projects (Kidō)"
                />

                <img
                    src={aizenImage}
                    alt="Aizen"
                    className="hidden lg:block w-40 xl:w-44 object-contain select-none pointer-events-none -mt-2"
                />
              </div>

              <motion.p
                  variants={staggerItem}
                  className="mt-5 text-center lg:text-left text-gray-400 italic max-w-2xl"
              >
                Every Kidō in this arsenal is a weapon—not for display, but to solve
                real-world problems with precision.
              </motion.p>
            </div>

          </div>

          <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {PROJECTS.map((project, index) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                />
            ))}
          </motion.div>
        </motion.div>
      </section>
  )
}

export default Projects
