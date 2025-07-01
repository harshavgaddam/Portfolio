"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Code, Briefcase, FolderOpen, Mail } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: FolderOpen },
  { name: 'Contact', href: '#contact', icon: Mail },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Auto-hide header on scroll down, show on scroll up (after 100px)
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY + 10) {
          setIsVisible(false)
        } else if (currentScrollY < lastScrollY - 10) {
          setIsVisible(true)
        }
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
      setScrolled(currentScrollY > 20)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 120 && rect.bottom >= 120
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const headerHeight = 80 // Approximate header height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Fixed Header with improved animations */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ 
          duration: 0.4, 
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-xl' 
            : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg'
        }`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 10, 0],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-2 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              x: [0, -8, 0],
              y: [0, 3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-3 right-1/3 w-1.5 h-1.5 bg-purple-400/40 rounded-full blur-sm"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo with enhanced animations */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection('#home')}
            >
              <motion.div 
                className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, 10, 0, -10, 0],
                }}
              >
                <span className="text-white font-bold text-sm sm:text-base">HG</span>
              </motion.div>
              <motion.span 
                className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:block"
                animate={{
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Harsha Gaddam
              </motion.span>
            </motion.div>

            {/* Desktop Navigation with enhanced animations */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.substring(1)
                
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -3,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    className={`relative px-4 py-2.5 rounded-xl transition-all duration-300 flex items-center space-x-2 overflow-hidden ${
                      isActive 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                    style={{ overflow: 'hidden' }}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 z-0 rounded-xl bg-gradient-to-r from-blue-100/60 to-purple-100/60 dark:from-blue-900/40 dark:to-purple-900/40"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    {/* Icon and text */}
                    <span className="relative z-10 flex items-center space-x-2">
                      <Icon className="h-4 w-4" />
                      <span className="font-medium text-sm">{item.name}</span>
                    </span>
                  </motion.button>
                )
              })}
              
              {/* Theme Toggle with animation */}
              <motion.div 
                className="ml-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ThemeToggle />
              </motion.div>
            </div>

            {/* Mobile menu button with enhanced animations */}
            <div className="md:hidden flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ThemeToggle />
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-all duration-300 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu with enhanced animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ 
                type: 'spring', 
                damping: 25, 
                stiffness: 200,
                duration: 0.5
              }}
              className="absolute bottom-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-t-3xl border-t border-gray-200/50 dark:border-gray-700/50 shadow-2xl"
            >
              <div className="p-6">
                {/* Handle */}
                <motion.div 
                  className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-6"
                  animate={{
                    scaleX: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Navigation Items */}
                <div className="grid grid-cols-2 gap-3">
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = activeSection === item.href.substring(1)
                    
                    return (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, y: 30, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          delay: index * 0.1,
                          duration: 0.4,
                          ease: "easeOut"
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection(item.href)}
                        className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? 'bg-blue-500/15 dark:bg-blue-500/25 text-blue-600 dark:text-blue-400 shadow-lg' 
                            : 'hover:bg-gray-100/60 dark:hover:bg-gray-800/60 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <motion.div
                          animate={{
                            rotate: isActive ? [0, 10, 0, -10, 0] : 0,
                          }}
                          transition={{
                            duration: isActive ? 2 : 0,
                            repeat: isActive ? Infinity : 0,
                            ease: "easeInOut"
                          }}
                        >
                          <Icon className="h-5 w-5" />
                        </motion.div>
                        <span className="font-medium">{item.name}</span>
                      </motion.button>
                    )
                  })}
                </div>
                
                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                  className="w-full mt-6 p-4 bg-gray-100/80 dark:bg-gray-800/80 rounded-xl text-gray-700 dark:text-gray-300 font-medium backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                >
                  Close Menu
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 