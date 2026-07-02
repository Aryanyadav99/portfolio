import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from '../../constants'
import { useActiveSection } from '../../hooks'

const Sidebar = ({ isOpen, onToggle }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const activeSection = useActiveSection()

  const showSidebar = isOpen || mobileOpen

  const getSocialIcon = (iconName) => {
    const icons = {
      Github: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.8-.26.8-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.09-.73.09-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.6 11.6 0 016.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/>
          </svg>
      ),

      Linkedin: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-11 19H5V8h3v11zM6.5 6.73A1.75 1.75 0 118.25 5 1.75 1.75 0 016.5 6.73zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77c1.4-2.59 7-2.78 7 2.47V19z"/>
          </svg>
      ),

      Code2: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.4 16.6L4.8 12l4.6-4.6M14.6 16.6l4.6-4.6-4.6-4.6"/>
          </svg>
      )
    }

    return icons[iconName] || <div className="w-5 h-5" />
  }

  const handleClose = () => {
    if (window.innerWidth >= 1024) {
      onToggle()
    } else {
      setMobileOpen(false)
    }
  }

  return (
      <>
        {/* Floating Desktop Button */}

        <AnimatePresence>

          {!showSidebar && (

              <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: .35 }}
                  onClick={() => {
                    if (window.innerWidth >= 1024) {
                      onToggle()
                    } else {
                      setMobileOpen(true)
                    }
                  }}
                  className="
              fixed
              top-6
              left-6
              z-50
              w-12
              h-12
              rounded-full
              bg-[#111118]
              border
              border-violet-500/30
              backdrop-blur-xl
              flex
              items-center
              justify-center
              hover:border-violet-400
              hover:shadow-[0_0_20px_rgba(168,85,247,.4)]
              transition-all
            "
              >

                <svg
                    className="w-5 h-5 text-violet-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="12" r="2"/>
                  <circle cx="12" cy="12" r="2"/>
                  <circle cx="18" cy="12" r="2"/>
                </svg>

              </motion.button>

          )}

        </AnimatePresence>

        {/* Mobile Button */}

        <button
            onClick={() => setMobileOpen(prev => !prev)}
            className="
          fixed
          top-4
          left-4
          z-50
          lg:hidden
          p-3
          rounded-xl
          bg-[#111118]
          border
          border-violet-500/30
        "
        >
          {mobileOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>

        {/* Sidebar */}

        <motion.aside
            initial={{ x: -320 }}
            animate={{ x: showSidebar ? 0 : -320 }}
            transition={{
              duration: .45,
              ease: [0.22,1,0.36,1]
            }}
            className="
          fixed
          left-0
          top-0
          h-screen
          w-[290px]
          z-40
          overflow-hidden
          bg-[#09090d]/95
          backdrop-blur-3xl
          border-r
          border-violet-500/20
          flex
          flex-col
        "
        >

          {/* Background Glow */}

          <div className="absolute inset-0 overflow-hidden pointer-events-none">

            <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-violet-700/10 blur-[130px]" />

            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-fuchsia-600/5 blur-[110px]" />

          </div>
          {/* Katana Glow Border */}

          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-violet-500 to-transparent">
            <div className="absolute top-1/2 -translate-y-1/2 -left-[2px] h-32 w-[4px] rounded-full bg-violet-400 blur-sm" />
          </div>

          {/* ================= HEADER ================= */}

          <div className="relative px-8 pt-10">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-[10px] uppercase tracking-[6px] text-violet-400/60">
                  Soul Society
                </p>

                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="
                  mt-4
                  text-[40px]
                  font-black
                  leading-none
                  tracking-wide
                  text-white
                "
                >
                  ARYAN
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="
                  mt-2
                  text-lg
                  font-semibold
                  tracking-[7px]
                  text-violet-400
                "
                >
                  YADAV
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .35 }}
                    className="flex items-center gap-3 mt-6"
                >

                  <div className="w-12 h-px bg-violet-500" />

                  <span
                      className="
                    text-[10px]
                    uppercase
                    tracking-[4px]
                    text-gray-500
                  "
                  >
                  13TH DIVISION
                </span>

                </motion.div>

              </div>

              <motion.button
                  whileHover={{
                    rotate: 90,
                    scale: 1.08
                  }}
                  whileTap={{
                    scale: .9
                  }}
                  onClick={handleClose}
                  className="
                h-11
                w-11
                rounded-full
                border
                border-violet-500/30
                bg-white/5
                backdrop-blur-xl
                flex
                items-center
                justify-center
                hover:bg-violet-600
                transition-all
              "
              >
                <X
                    size={18}
                    className="text-violet-300"
                />
              </motion.button>

            </div>

            {/* Divider */}

            <div className="relative mt-10">

              <div className="h-px bg-gradient-to-r from-violet-500 via-violet-300/40 to-transparent" />

              <div className="absolute -top-[4px] left-0 w-2 h-2 rotate-45 bg-violet-400" />

            </div>

          </div>

          {/* Navigation Starts Here */}
          <nav className="flex-1 px-7 pt-8 overflow-y-auto">

            <p className="mb-8 text-[10px] uppercase tracking-[6px] text-violet-500/50">
              Navigation
            </p>

            <ul className="space-y-3">

              {NAVIGATION_ITEMS.map((item, index) => {

                const active = activeSection === item.id

                return (

                    <li key={item.id}>

                      <motion.a
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          whileHover={{ x: 10 }}
                          whileTap={{ scale: .97 }}
                          className={`
                      group
                      relative
                      flex
                      items-center
                      overflow-hidden
                      rounded-2xl
                      px-5
                      py-4
                      transition-all
                      duration-300

                      ${
                              active
                                  ? "border border-violet-500/30 bg-gradient-to-r from-violet-600/20 via-violet-500/10 to-transparent"
                                  : "hover:bg-white/[0.03]"
                          }
                    `}
                      >

                        {/* Left Glow Line */}

                        <motion.div
                            animate={{
                              height: active ? 42 : 18
                            }}
                            className={`
                        absolute
                        left-0
                        w-[3px]
                        rounded-full

                        ${
                                active
                                    ? "bg-violet-400 shadow-[0_0_18px_#8b5cf6]"
                                    : "bg-violet-400/25"
                            }
                      `}
                        />

                        {/* Number */}

                        <span
                            className={`
                        mr-4
                        text-[11px]
                        font-bold
                        tracking-[3px]

                        ${
                                active
                                    ? "text-violet-300"
                                    : "text-gray-600"
                            }
                      `}
                        >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                        {/* Label */}

                        <span
                            className={`
                        text-sm
                        uppercase
                        tracking-[3px]
                        font-medium
                        transition-all

                        ${
                                active
                                    ? "text-white"
                                    : "text-gray-400 group-hover:text-white"
                            }
                      `}
                        >
                      {item.label}
                    </span>

                        {/* Active Diamond */}

                        {active && (

                            <motion.div
                                layoutId="sidebar-active-item"
                                className="
                          ml-auto
                          h-2.5
                          w-2.5
                          rotate-45
                          rounded-[1px]
                          bg-violet-400
                          shadow-[0_0_14px_#8b5cf6]
                        "
                            />

                        )}

                      </motion.a>

                    </li>

                )

              })}

            </ul>

          </nav>
          {/* ================= FOOTER ================= */}

          <div className="relative mt-auto px-7 pb-8">

            {/* Divider */}

            <div className="mb-7 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

            <p className="mb-5 text-[10px] uppercase tracking-[6px] text-violet-500/50">
              Soul Network
            </p>

            <div className="flex items-center gap-4">

              {SOCIAL_LINKS.map((link) => (

                  <motion.a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        y: -6,
                        scale: 1.08
                      }}
                      whileTap={{
                        scale: .92
                      }}
                      className="
                  group
                  relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-violet-500/25
                  bg-white/[0.03]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-violet-400
                  hover:shadow-[0_0_20px_rgba(168,85,247,.45)]
                "
                  >

                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/10 to-violet-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <span className="relative text-violet-300 group-hover:text-white transition-colors">
                  {getSocialIcon(link.icon)}
                </span>

                  </motion.a>

              ))}

            </div>

            <div className="mt-8">

              <p className="text-[10px] uppercase tracking-[5px] text-gray-600">
                Bankai Loaded
              </p>

              <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/5">

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 2,
                      ease: "easeOut"
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-400"
                />

              </div>

            </div>

          </div>

        </motion.aside>

        {/* ================= MOBILE OVERLAY ================= */}

        <AnimatePresence>

          {mobileOpen && (

              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: .25 }}
                  className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm lg:hidden"
                  onClick={() => setMobileOpen(false)}
              />

          )}

        </AnimatePresence>

      </>

  )
}

export default Sidebar