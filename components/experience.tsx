"use client"

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, ExternalLink, Award, Code, Database, Cloud } from 'lucide-react'

const experiences = [
  {
    title: 'IT Programmer Analyst / Developer',
    company: 'Entertainment Retail Enterprises, LLC',
    location: 'Apopka, FL',
    period: 'June 2025 – Present',
    type: 'Full-time',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    description: 'Leading backend integrations and cloud migration initiatives for e-commerce and ERP systems.',
    technologies: ['C#', 'Python', 'Oracle NetSuite', 'REST APIs', 'GraphQL', 'GCP', 'Tableau', 'Shopify', 'Amazon', 'Walmart'],
    achievements: [
      'Develop and maintain backend system integrations between Oracle NetSuite and SFCC, Shopify, Amazon, and Walmart using C# (.NET) and Python',
      'Work extensively with REST and GraphQL APIs for real-time data exchange across e-commerce and ERP systems',
      'Design and implement SuiteScript modules and NetSuite SQL queries to build custom forms and automate business processes',
      'Lead the ongoing migration of integration workloads to Google Cloud Platform (GCP), leveraging Cloud Run, Pub/Sub, and Cloud SQL',
      'Resolve and document 30+ integration issues using Freshservice, Postman, and log analysis tools'
    ],
    highlights: ['Backend Integration', 'Cloud Migration', 'API Development', 'Data Analytics']
  },
  {
    title: 'Senior Software Engineer',
    company: 'HCLTech',
    location: 'Chennai, TN',
    period: 'Jul 2021 – Jul 2023',
    type: 'Full-time',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    description: 'Provided enterprise-level support and developed data pipelines for ExxonMobil\'s global plant operations.',
    technologies: ['Apache NiFi', 'PowerShell', 'Python', 'Power BI', 'SSRS', 'Azure DevOps', 'ServiceNow', 'Uniformance PHD', 'SEEQ'],
    achievements: [
      'Provided L3/L4 support for ExxonMobil\'s global plant operations, managing systems across 20+ refinery sites',
      'Developed Apache NiFi-based ETL pipelines to stream industrial time-series data into analytics tools',
      'Wrote PowerShell and Batch scripts to automate post-patch validation for 80+ Windows servers, reducing manual efforts by 30%',
      'Created 15+ interactive dashboards using SSRS, Power BI, and Excel; used Python for log analysis',
      'Handled 700+ ServiceNow incidents with 98% SLA adherence; led Agile sprint planning and CI/CD workflows'
    ],
    highlights: ['Industrial Automation', 'ETL Pipelines', 'Dashboard Development', 'DevOps']
  },
  {
    title: 'Intern',
    company: 'Smart Bridge Educational Services Pvt. Ltd.',
    location: 'Hyderabad, TS',
    period: 'Nov 2018 – Dec 2018',
    type: 'Internship',
    icon: Cloud,
    color: 'from-purple-500 to-pink-500',
    description: 'Developed AI-powered applications and machine learning models for educational technology.',
    technologies: ['OpenCV', 'DeepFace', 'IBM Watson', 'Flask', 'Machine Learning', 'Computer Vision', 'NLP'],
    achievements: [
      'Developed a student engagement detection system using OpenCV and DeepFace (83% accuracy)',
      'Created AI-based chatbot using IBM Watson Assistant for educational support',
      'Built and deployed ML models (Logistic Regression, Random Forest, SVM) for sentiment analysis (86% F1)',
      'Applied transfer learning using ResNet/MobileNet for image-based food classification'
    ],
    highlights: ['Machine Learning', 'Computer Vision', 'AI Development', 'Educational Tech']
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Professional Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey through diverse roles in software engineering, from AI development to enterprise integrations and cloud solutions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card p-6 lg:p-8 hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${experience.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <experience.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {experience.title}
                    </h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium mb-2">
                      <Building className="w-4 h-4 mr-2" />
                      {experience.company}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {experience.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {experience.period}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {experience.highlights.map((highlight, highlightIndex) => (
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

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.05 }}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tech}
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
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + achievementIndex * 0.1 }}
                        className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex items-start"
                      >
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${experience.color} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary */}
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
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Full-Stack Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  4+ years building robust applications and integrations
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Enterprise Solutions</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Industrial automation and enterprise system integration
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">AI & Cloud</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Machine learning models and cloud-native applications
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 