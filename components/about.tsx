"use client"

import { motion } from 'framer-motion'
import { User, MapPin, Calendar, GraduationCap, Code, Database, Cloud, Award, Users, Zap, Target, Heart } from 'lucide-react'

export function About() {
  const stats = [
    { label: 'Years Experience', value: '4+', icon: Calendar, color: 'from-blue-500 to-cyan-500' },
    { label: 'Technologies', value: '25+', icon: Code, color: 'from-purple-500 to-pink-500' },
    { label: 'Cloud Platforms', value: '3', icon: Cloud, color: 'from-green-500 to-emerald-500' },
    { label: 'Projects Delivered', value: '50+', icon: Target, color: 'from-orange-500 to-red-500' },
  ]

  const coreSkills = [
    { name: 'C#', category: 'Programming' },
    { name: 'Python', category: 'Programming' },
    { name: 'Cloud Migration', category: 'Infrastructure' },
    { name: 'API Integrations', category: 'Development' },
    { name: 'Data Analytics', category: 'Analytics' },
    { name: 'Automation', category: 'Process' },
    { name: 'GCP', category: 'Cloud' },
    { name: 'NetSuite', category: 'ERP' },
    { name: 'Tableau', category: 'BI' },
  ]

  const strengths = [
    {
      icon: Database,
      title: 'System Integration',
      description: 'Expert in connecting platforms like NetSuite, Shopify, Amazon, and more'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Skilled at moving systems to the cloud (GCP, AWS, Azure)'
    },
    {
      icon: Zap,
      title: 'Data & Analytics',
      description: 'Love working with data—analytics, dashboards, and automation'
    },
    {
      icon: Code,
      title: 'Process Optimization',
      description: 'Enjoy making processes faster and smarter with code'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Team player who cares about real results'
    }
  ]

  const activities = [
    {
      title: 'Eco-Reps Program',
      organization: 'Sustainable Campus',
      role: 'Member',
      period: 'Sept 2024 – Dec 2024',
      icon: Heart,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'ICPC',
      organization: 'International Collegiate Programming Contest',
      role: 'Volunteer',
      period: 'Nov 2024',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate software engineer who transforms complex challenges into elegant solutions through technology and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main About Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Harsha Vardhan Gaddam
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-1">
                    Software Engineer
                  </p>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    Apopka, FL
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Hey! I'm a software engineer who loves building things that make life and work easier—whether it's connecting apps, moving to the cloud, or turning data into insights. I've worked on e-commerce, ERP, and industrial projects, always looking for smart, simple solutions that deliver real value.
              </p>

              {/* Core Skills */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  Core Capabilities
                </h4>
                <div className="flex flex-wrap gap-3">
                  {coreSkills.map((skill, index) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full cursor-default"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Strengths */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  What I Bring to the Table
                </h4>
                <div className="space-y-4">
                  {strengths.map((strength, index) => (
                    <motion.div
                      key={strength.title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <strength.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                          {strength.title}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {strength.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats and Activities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Quick Stats
              </h3>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Leadership & Activities
              </h3>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <motion.div
                    key={activity.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-8 h-8 bg-gradient-to-br ${activity.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <activity.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                          {activity.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                          {activity.organization}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full">
                            {activity.role}
                          </span>
                          <span>{activity.period}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 