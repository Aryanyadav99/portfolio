import React from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Github,
  Linkedin
} from 'lucide-react'

import {
  staggerContainer,
  staggerItem
} from '../../animations'

import SectionTitle from '../common/SectionTitle'

const uraharaImage =
    new URL('../../../urahara.png', import.meta.url).href

const aizenImage =
    new URL('../../../aizen2.png', import.meta.url).href

const Contact = () => {

  return (

      <section className="min-h-screen px-4 py-20">

        <motion.div
            className="max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
        >

          {/* HEADER */}

          <div className="flex items-center justify-center gap-8 mb-6">

            <div>

              <SectionTitle
                  title="CONTACT"
                  subtitle="Let's Connect"
              />

              <p className="mt-3 text-center lg:text-left text-gray-400 italic max-w-xl">
                Interested in collaborating or discussing an opportunity?
                Feel free to reach out.
              </p>

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

          {/* CONTENT */}

          <div className="grid lg:grid-cols-[420px_1fr] gap-10 items-start">

            {/* LEFT */}

            <motion.div
                variants={staggerItem}
                className="flex flex-col items-center"
            >

              {/* SOCIAL BUTTONS */}

              <div className="flex gap-7 mb-10">

                <a
                    href="https://github.com/TODO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-effect neon-border rounded-xl h-16 w-44 flex items-center justify-center gap-3 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <Github size={24}/>
                  <span className="font-semibold">
                  GitHub
                </span>
                </a>

                <a
                    href="https://linkedin.com/in/TODO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-effect neon-border rounded-xl h-16 w-44 flex items-center justify-center gap-3 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <Linkedin size={24}/>
                  <span className="font-semibold">
                  LinkedIn
                </span>
                </a>

              </div>

              {/* URAHARA */}

              <img
                  src={uraharaImage}
                  alt="Urahara"
                  draggable={false}
                  className="w-[360px] lg:w-[420px] object-contain pointer-events-none select-none"
              />

            </motion.div>

            {/* RIGHT FORM */}
            <motion.div
                variants={staggerItem}
                className="flex justify-center lg:justify-start"
            >

              <div className="w-full max-w-2xl glass-effect neon-border rounded-3xl p-8 lg:p-10">

                <h3 className="text-3xl font-bold text-white mb-2">
                  Send Me a Message
                </h3>

                <p className="text-gray-400 mb-8">
                  Have a project, opportunity, or just want to connect?
                  I'd love to hear from you.
                </p>

                <form
                    action="https://formsubmit.co/aryanyadav03112004@gmail.com"
                    method="POST"
                    className="space-y-5"
                >

                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value="Portfolio Contact" />
                  <input
                      type="hidden"
                      name="_autoresponse"
                      value="Thank you for reaching out! I have received your message and will reply as soon as possible."
                  />

                  {/* NAME */}

                  <div>

                    <label className="block text-gray-300 font-medium mb-2">
                      Full Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full h-14 rounded-xl bg-dark-card border border-purple-500/20 px-5 text-white placeholder:text-gray-500 outline-none focus:border-purple-500 transition"
                    />

                  </div>

                  {/* EMAIL */}

                  <div>

                    <label className="block text-gray-300 font-medium mb-2">
                      Email Address
                    </label>

                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full h-14 rounded-xl bg-dark-card border border-purple-500/20 px-5 text-white placeholder:text-gray-500 outline-none focus:border-purple-500 transition"
                    />

                  </div>

                  {/* MESSAGE */}

                  <div>

                    <label className="block text-gray-300 font-medium mb-2">
                      Message
                    </label>

                    <textarea
                        name="message"
                        required
                        rows="5"
                        placeholder="Write your message..."
                        className="w-full rounded-xl bg-dark-card border border-purple-500/20 px-5 py-4 text-white placeholder:text-gray-500 resize-none outline-none focus:border-purple-500 transition"
                    />

                  </div>

                  <button
                      type="submit"
                      className="w-full h-14 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-500 hover:to-fuchsia-400 transition-all duration-300 flex items-center justify-center gap-3 text-white font-semibold hover:scale-[1.02]"
                  >

                    <Mail size={20} />

                    Contact Me

                  </button>

                </form>

              </div>

            </motion.div>

          </div>

        </motion.div>

      </section>

  )

}

export default Contact