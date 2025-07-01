"use client"

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'E-commerce Integration Platform',
    description: 'Developed a comprehensive integration platform connecting Oracle NetSuite with multiple e-commerce platforms including SFCC, Shopify, Amazon, and Walmart.',
    technologies: ['C#', 'Python', 'NetSuite', 'GraphQL', 'GCP', 'REST APIs'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com/harshavgaddam/ecommerce-integration',
    live: 'https://demo-integration.com',
    featured: true
  },
  {
    title: 'Cloud Migration Automation',
    description: 'Built automated tools for migrating integration workloads to Google Cloud Platform, reducing migration time by 70%.',
    technologies: ['Python', 'GCP', 'Kubernetes', 'Docker', 'Terraform'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com/harshavgaddam/cloud-migration',
    live: 'https://migration-tool.com',
    featured: true
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Created interactive dashboards for business intelligence using Power BI and Tableau, providing real-time insights.',
    technologies: ['Power BI', 'Tableau', 'SQL', 'Python', 'Azure'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com/harshavgaddam/analytics-dashboard',
    live: 'https://analytics-demo.com',
    featured: false
  },
  {
    title: 'API Gateway Service',
    description: 'Developed a scalable API gateway service for handling multiple e-commerce platform integrations with rate limiting and caching.',
    technologies: ['C#', 'ASP.NET', 'Redis', 'Docker', 'Azure'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com/harshavgaddam/api-gateway',
    live: 'https://api-gateway-demo.com',
    featured: false
  },
  {
    title: 'Machine Learning Pipeline',
    description: 'Built end-to-end ML pipeline for predictive analytics using Python and TensorFlow, achieving 95% accuracy.',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'GCP', 'Kubernetes'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com/harshavgaddam/ml-pipeline',
    live: 'https://ml-demo.com',
    featured: false
  },
  {
    title: 'Real-time Data Processing',
    description: 'Implemented real-time data processing system using Apache NiFi for industrial time-series data analysis.',
    technologies: ['Apache NiFi', 'Python', 'Kafka', 'Elasticsearch', 'Docker'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com/harshavgaddam/realtime-processing',
    live: 'https://realtime-demo.com',
    featured: false
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            A showcase of my recent work and technical projects
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 sm:mb-6">
                <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-2">{project.title.split(' ')[0]}</div>
                    <div className="text-sm sm:text-base opacity-80">Project Preview</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Project Content */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs sm:text-sm">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 sm:gap-4 pt-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6 sm:mb-8">
            Other Projects
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card group cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-3 sm:mb-4">
                  <div className="w-full h-32 sm:h-40 bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-lg sm:text-xl font-bold">{project.title.split(' ')[0]}</div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 sm:gap-3 pt-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
                      Code
                    </motion.a>
                    
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.a
            href="https://github.com/harshavgaddam"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-button inline-flex items-center gap-2"
          >
            <span>View More on GitHub</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 