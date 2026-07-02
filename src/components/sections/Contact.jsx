import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Loader } from 'lucide-react'
import { staggerContainer, staggerItem } from '../../animations'
import SectionTitle from '../common/SectionTitle'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate form submission
      // In production, integrate with EmailJS
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setFormData({ name: '', email: '', message: '' })
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setLoading(false)
    }
  }

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
        <SectionTitle title="GET IN TOUCH" subtitle="Let's Connect" />

        {/* Contact Content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16"
        >
          {/* Left Section - Character & Info */}
          <motion.div variants={staggerItem} className="flex flex-col justify-center">
            {/* Character Placeholder */}
            <div className="relative mb-8">
              <div className="w-full aspect-square rounded-xl glass-effect neon-border overflow-hidden flex items-center justify-center">
                <svg className="w-full h-full p-6" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
                  {/* Glow Filter */}
                  <defs>
                    <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <radialGradient id="bodyGrad2" cx="40%" cy="40%">
                      <stop offset="0%" style={{ stopColor: '#A855F7', stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: '#7C3AED', stopOpacity: 0.1 }} />
                    </radialGradient>
                  </defs>

                  {/* Hair */}
                  <path d="M 80 50 Q 60 40 70 20 Q 80 10 100 15 Q 120 10 130 20 Q 140 40 120 50 Z" fill="#2D2D4A" filter="url(#glow2)"/>
                  <path d="M 130 50 Q 150 40 160 20 Q 170 10 190 15 Q 210 10 220 20 Q 230 40 210 50 Z" fill="#2D2D4A" filter="url(#glow2)"/>
                  <path d="M 100 15 Q 150 0 200 15 Q 220 30 210 60 Q 200 80 150 90 Q 100 80 90 60 Q 80 30 100 15 Z" fill="#1A1A2E" filter="url(#glow2)"/>

                  {/* Head Glow */}
                  <circle cx="150" cy="70" r="55" fill="url(#bodyGrad2)" opacity="0.6"/>

                  {/* Face */}
                  <ellipse cx="150" cy="75" rx="45" ry="48" fill="#E8D5F2" filter="url(#glow2)"/>

                  {/* Eyes Glow */}
                  <circle cx="130" cy="60" r="8" fill="#A855F7" opacity="0.4"/>
                  <circle cx="170" cy="60" r="8" fill="#A855F7" opacity="0.4"/>

                  {/* Eyes */}
                  <ellipse cx="130" cy="62" rx="6" ry="9" fill="#1A1A2E"/>
                  <ellipse cx="170" cy="62" rx="6" ry="9" fill="#1A1A2E"/>
                  <circle cx="132" cy="60" r="2" fill="white"/>
                  <circle cx="172" cy="60" r="2" fill="white"/>

                  {/* Nose */}
                  <line x1="150" y1="72" x2="150" y2="82" stroke="#D4A5D4" strokeWidth="1"/>

                  {/* Mouth */}
                  <path d="M 140 90 Q 150 95 160 90" stroke="#C088C0" strokeWidth="2" fill="none" strokeLinecap="round"/>

                  {/* Neck */}
                  <rect x="140" y="115" width="20" height="15" fill="#E8D5F2"/>

                  {/* Upper Body / Kimono */}
                  <path d="M 90 130 Q 100 120 150 125 Q 200 120 210 130 L 220 200 Q 210 220 150 230 Q 90 220 80 200 Z" fill="#2D1B4A" filter="url(#glow2)"/>

                  {/* Kimono Details - Purple Glow */}
                  <path d="M 100 135 Q 150 130 200 135" stroke="#A855F7" strokeWidth="2" opacity="0.6" fill="none"/>
                  <path d="M 95 160 Q 150 155 205 160" stroke="#A855F7" strokeWidth="1.5" opacity="0.4" fill="none"/>

                  {/* Arms */}
                  <g filter="url(#glow2)">
                    {/* Left Arm */}
                    <ellipse cx="85" cy="160" rx="12" ry="35" fill="#E8D5F2" transform="rotate(-20 85 160)"/>
                    <ellipse cx="70" cy="190" rx="10" ry="20" fill="#D4A5D4" transform="rotate(-30 70 190)"/>

                    {/* Right Arm */}
                    <ellipse cx="215" cy="160" rx="12" ry="35" fill="#E8D5F2" transform="rotate(20 215 160)"/>
                    <ellipse cx="230" cy="190" rx="10" ry="20" fill="#D4A5D4" transform="rotate(30 230 190)"/>
                  </g>

                  {/* Lower Body */}
                  <path d="M 100 230 L 95 320 Q 95 340 100 360 L 125 380 L 125 360 Q 125 350 130 330 L 130 240 Z" fill="#1A1A2E" filter="url(#glow2)"/>
                  <path d="M 200 230 L 205 320 Q 205 340 200 360 L 175 380 L 175 360 Q 175 350 170 330 L 170 240 Z" fill="#1A1A2E" filter="url(#glow2)"/>

                  {/* Energy Effect */}
                  <circle cx="150" cy="200" r="70" fill="none" stroke="#A855F7" strokeWidth="0.5" opacity="0.3"/>
                  <circle cx="150" cy="200" r="90" fill="none" stroke="#7C3AED" strokeWidth="0.5" opacity="0.2"/>

                  {/* Floating Particles */}
                  <circle cx="120" cy="40" r="2" fill="#A855F7" opacity="0.6"/>
                  <circle cx="180" cy="50" r="1.5" fill="#D8B4FE" opacity="0.4"/>
                  <circle cx="140" cy="150" r="1" fill="#A855F7" opacity="0.5"/>
                  <circle cx="180" cy="180" r="1.5" fill="#D8B4FE" opacity="0.3"/>
                </svg>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <motion.div
                variants={staggerItem}
                className="p-4 rounded-lg glass-effect border neon-border"
              >
                <p className="text-xs text-purple-400/70 mb-1 tracking-widest">EMAIL</p>
                <a
                  href="mailto:aryan@example.com"
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  aryan.yadav@example.com
                </a>
              </motion.div>

              <motion.div
                variants={staggerItem}
                className="p-4 rounded-lg glass-effect border neon-border"
              >
                <p className="text-xs text-purple-400/70 mb-1 tracking-widest">LOCATION</p>
                <p className="text-white">India</p>
              </motion.div>

              <motion.div
                variants={staggerItem}
                className="p-4 rounded-lg glass-effect border neon-border"
              >
                <p className="text-xs text-purple-400/70 mb-1 tracking-widest">RESPONSE TIME</p>
                <p className="text-white">Within 24 hours</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div variants={staggerItem}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 block">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-card border neon-border text-white placeholder-gray-500 focus:outline-none focus:shadow-neon focus:border-purple-400 transition-all duration-300"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 block">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-card border neon-border text-white placeholder-gray-500 focus:outline-none focus:shadow-neon focus:border-purple-400 transition-all duration-300"
                />
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 block">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="6"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-card border neon-border text-white placeholder-gray-500 focus:outline-none focus:shadow-neon focus:border-purple-400 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center gap-2 font-semibold disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-center text-sm"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>

            {/* Alternative Contact Methods */}
            <motion.div variants={staggerItem} className="mt-8 pt-8 border-t neon-border">
              <p className="text-sm text-gray-400 mb-4">Or connect with me on:</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-lg bg-dark-border border neon-border text-purple-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300 text-center font-semibold text-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-lg bg-dark-border border neon-border text-purple-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300 text-center font-semibold text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="https://leetcode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-lg bg-dark-border border neon-border text-purple-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300 text-center font-semibold text-sm"
                >
                  LeetCode
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact


