import React from 'react'
import { motion } from 'framer-motion'
import {
  Trophy,
  Cloud,
  ExternalLink
} from 'lucide-react'

import {
  staggerContainer,
  staggerItem
} from '../../animations'

import SectionTitle from '../common/SectionTitle'

const aizenImage = new URL('../../../sewperman.png', import.meta.url).href

const LEETCODE_URL =
    'https://leetcode.com/u/Ryn_Ydv8874/'

// TODO
const AWS_CERTIFICATE_URL =
    'https://todo-add-your-certificate-link.com'

const Achievements = () => {

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

          <div className="flex items-center justify-center gap-8 mb-14">

            <div>

              <SectionTitle
                  title="ACCOMPLISHMENTS"
                  subtitle="Achievements & Certifications"
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
                  repeat: Infinity
                }}
            />

          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* =========================
              LEETCODE
        ========================= */}

            <motion.div
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="glass-effect neon-border rounded-2xl p-8 group relative overflow-hidden hover:shadow-neon-lg transition-all duration-300"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-purple-600/10 to-transparent pointer-events-none" />

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                      <Trophy
                          size={34}
                          className="text-purple-300"
                      />
                    </div>

                    <div>

                      <h3 className="text-2xl font-bold text-white">
                        LeetCode
                      </h3>

                      <p className="text-purple-300">
                        Knight
                      </p>

                    </div>

                  </div>

                  <a
                      href={LEETCODE_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-purple-300 hover:text-white transition"
                  >
                    <ExternalLink size={22}/>
                  </a>

                </div>

                <div className="mt-8 space-y-5">

                  <div className="flex justify-between">
                <span className="text-gray-400">
                  Username
                </span>

                    <span className="font-semibold text-white">
                  Ryn_Ydv8874
                </span>
                  </div>

                  <div className="h-px bg-purple-500/20"/>

                  <div className="flex justify-between">
                <span className="text-gray-400">
                  Contest Rating
                </span>

                    <span className="text-2xl font-bold gradient-text">
                  1930
                </span>
                  </div>

                  <div className="h-px bg-purple-500/20"/>

                  <div className="flex justify-between">
                <span className="text-gray-400">
                  Problems Solved
                </span>

                    <span className="text-2xl font-bold gradient-text">
                  1000+
                </span>
                  </div>

                  <div className="h-px bg-purple-500/20"/>

                  <div className="flex justify-between">
                <span className="text-gray-400">
                  Current Badge
                </span>

                    <span className="font-semibold text-yellow-300">
                  Knight
                </span>
                  </div>

                </div>

                <a
                    href={LEETCODE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 transition-all"
                >
                  View LeetCode Profile
                  <ExternalLink size={16}/>
                </a>

              </div>

            </motion.div>
            {/* =========================
            AWS CERTIFICATION
            ========================= */}

            <motion.div
            variants={staggerItem}
            whileHover={{ y: -8 }}
            className="glass-effect neon-border rounded-2xl p-8 group relative overflow-hidden hover:shadow-neon-lg transition-all duration-300"
          >

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-purple-600/10 to-transparent pointer-events-none" />

            <div className="relative z-10">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                    <Cloud
                        size={34}
                        className="text-purple-300"
                    />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      AWS
                    </h3>

                    <p className="text-purple-300">
                      Cloud Practitioner
                    </p>

                  </div>

                </div>

                <a
                    href={AWS_CERTIFICATE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-300 hover:text-white transition"
                >
                  <ExternalLink size={22}/>
                </a>

              </div>

              <div className="mt-8 space-y-5">

                <div className="flex justify-between">
                <span className="text-gray-400">
                  Certification
                </span>

                  <span className="font-semibold text-white">
                  AWS Certified Cloud Practitioner
                </span>
                </div>

                <div className="h-px bg-purple-500/20"/>

                <div className="flex justify-between">
                <span className="text-gray-400">
                  Provider
                </span>

                  <span className="font-semibold text-white">
                  Amazon Web Services
                </span>
                </div>

                <div className="h-px bg-purple-500/20"/>

                <div className="flex justify-between">
                <span className="text-gray-400">
                  Credential
                </span>

                  <span className="font-semibold text-purple-300">
                  TODO
                </span>
                </div>

                <div className="h-px bg-purple-500/20"/>

                <div className="flex justify-between">
                <span className="text-gray-400">
                  Status
                </span>

                  <span className="text-green-400 font-semibold">
                  Certified
                </span>
                </div>

              </div>

              <a
                  href={AWS_CERTIFICATE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 transition-all"
              >
                Verify Certificate
                <ExternalLink size={16}/>
              </a>

            </div>

        </motion.div>

      </div>

</motion.div>

</section>

)

}

export default Achievements