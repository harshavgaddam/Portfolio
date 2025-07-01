"use client"

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Award, BookOpen, Users } from 'lucide-react'

const educationData = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Florida State University',
    location: 'Tallahassee, FL',
    period: 'Aug 2023 – May 2025',
    gpa: '3.67/4.0',
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-500',
    description: 'Advanced studies in computer science with focus on software engineering, algorithms, and modern development practices.',
    highlights: ['Software Engineering', 'Algorithms & Data Structures', 'Database Systems', 'Machine Learning'],
    achievements: [
      'Maintained excellent academic performance with 3.67 GPA',
      'Engaged in cutting-edge research and development projects',
      'Collaborated with peers on innovative software solutions',
      'Developed strong foundation in modern programming paradigms'
    ]
  },
  {
    degree: 'Bachelor of Engineering in Computer Science and Engineering',
    institution: 'Sathyabama Institute of Science and Technology',
    location: 'Chennai, TN',
    period: 'Aug 2017 – May 2021',
    gpa: '8.99/10.0',
    icon: BookOpen,
    color: 'from-purple-500 to-pink-500',
    description: 'Comprehensive undergraduate program covering fundamental computer science concepts and practical engineering applications.',
    highlights: ['Computer Science Fundamentals', 'Engineering Principles', 'Programming Languages', 'System Design'],
    achievements: [
      'Graduated with distinction achieving 8.99/10.0 CGPA',
      'Completed comprehensive curriculum in computer science and engineering',
      'Participated in technical projects and collaborative learning',
      'Developed strong analytical and problem-solving skills'
    ]
  }
]

export function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Education</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A strong academic foundation in computer science and engineering, combining theoretical knowledge with practical applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((education, index) => (
            <motion.div
              key={education.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 lg:p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${education.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <education.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {education.degree}
                  </h3>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium mb-2">
                    <Users className="w-4 h-4 mr-2" />
                    {education.institution}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {education.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {education.period}
                    </div>
                  </div>
                </div>
              </div>

              {/* GPA Badge */}
              <div className="mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-semibold">
                  <Award className="w-4 h-4 mr-2" />
                  GPA: {education.gpa}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {education.description}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Key Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.highlights.map((highlight, highlightIndex) => (
                    <motion.span
                      key={highlight}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + highlightIndex * 0.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {education.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + achievementIndex * 0.1 }}
                      className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex items-start"
                    >
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${education.color} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Advanced Studies</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Master's degree in Computer Science with focus on modern development
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Strong Foundation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Bachelor's degree in Computer Science and Engineering with excellent GPA
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Academic Excellence</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Consistent high performance across both undergraduate and graduate studies
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 