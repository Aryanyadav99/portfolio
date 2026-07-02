
import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../animations'
import SectionTitle from '../common/SectionTitle'

const aizenImage = new URL('../../../aizen3.gif', import.meta.url).href

const About = () => {
  return (
      <section className="py-24 px-4">
        <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
        >

          <div className="flex items-center justify-center gap-8 mb-12">
            <div>
              <SectionTitle title="PROFILE" subtitle="Who I Am" />
            </div>

            <motion.img
                src={aizenImage}
                alt="Aizen"
                draggable={false}
                className="hidden lg:block w-36 object-contain drop-shadow-[0_0_30px_rgba(168,85,247,.45)]"
                animate={{ y:[0,-8,0] }}
                transition={{ duration:3, repeat:Infinity }}
            />
          </div>

          <motion.div
              variants={staggerItem}
              className="rounded-3xl border border-purple-500/30 bg-white/5 backdrop-blur-md p-8 lg:p-10"
          >

            <p className="text-xs tracking-[0.35em] uppercase text-purple-400 mb-8">
              SOUL SOCIETY PERSONNEL FILE
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div>
                <p className="text-xs text-gray-500 uppercase">Name</p>
                <p className="text-white font-semibold">Aryan Yadav</p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase">Rank</p>
                <p className="text-purple-300">Backend Soul Reaper</p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase">Division</p>
                <p className="text-white">13th Division</p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase">Specialization</p>
                <p className="text-white">Java • Spring Boot</p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase">Zanpakuto</p>
                <p className="text-purple-300">Code Execution</p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase">Status</p>
                <p className="text-green-400">ACTIVE</p>
              </div>

            </div>

            <div className="mt-10">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-gray-400">REIATSU</span>
                <span className="text-purple-300">95%</span>
              </div>

              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{width:0}}
                    whileInView={{width:'95%'}}
                    transition={{duration:1}}
                    className="h-full bg-gradient-to-r from-purple-600 to-fuchsia-400 rounded-full"
                />
              </div>
            </div>

            <div className="mt-10 text-gray-300 leading-8">
              <p>
                Backend developer focused on building reliable, scalable backend applications using Java, Spring Boot, Redis and PostgreSQL.
              </p>

              <p className="mt-6">
                I enjoy designing clean architectures, solving challenging backend problems and continuously improving through real-world projects and competitive programming.
              </p>
            </div>

          </motion.div>

        </motion.div>
      </section>
  )
}

export default About
