"use client"

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Brain, BarChart3, Cpu, Globe, Wrench } from 'lucide-react'

const skillCategories = [
  {
    name: 'Programming & Development',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      'C#', 'Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'HTML/CSS', 'React', 'Node.js', 'ASP.NET', 'REST APIs', 'GraphQL', 'Git', 'GitHub'
    ]
  },
  {
    name: 'Machine Learning & AI',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    skills: [
      'TensorFlow', 'PyTorch', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Keras', 'Transformers', 'NLP', 'Computer Vision', 'Deep Learning', 'Neural Networks', 'Model Deployment'
    ]
  },
  {
    name: 'Data Engineering',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: [
      'Apache Spark', 'Apache Kafka', 'Apache NiFi', 'ETL/ELT', 'Data Pipelines', 'Data Warehousing', 'Snowflake', 'Airflow', 'Docker', 'Kubernetes', 'Big Data', 'Stream Processing'
    ]
  },
  {
    name: 'Data Analytics & BI',
    icon: BarChart3,
    color: 'from-orange-500 to-red-500',
    skills: [
      'Tableau', 'Power BI', 'SQL', 'Data Visualization', 'Statistical Analysis', 'A/B Testing', 'Predictive Analytics', 'Business Intelligence', 'Data Storytelling', 'Dashboard Design'
    ]
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-indigo-500 to-blue-600',
    skills: [
      'AWS', 'GCP', 'Azure', 'NetSuite', 'Salesforce', 'CI/CD', 'Infrastructure as Code', 'Microservices', 'Serverless', 'Containerization', 'Monitoring & Logging'
    ]
  },
  {
    name: 'Databases & Storage',
    icon: Database,
    color: 'from-teal-500 to-cyan-600',
    skills: [
      'MySQL', 'SQL Server', 'Oracle DB', 'PostgreSQL', 'MongoDB', 'Redis', 'Data Modeling', 'Database Design', 'Query Optimization', 'Data Migration'
    ]
  },
  {
    name: 'Tools & Platforms',
    icon: Wrench,
    color: 'from-gray-500 to-slate-600',
    skills: [
      'VSCode', 'Jupyter Notebooks', 'Postman', 'SSIS', 'SSMS', 'ServiceNow', 'Office 365', 'Unix/Linux', 'Dynamo Operations Suite', 'Uniformance PHD', 'BusinessFlex'
    ]
  },
  {
    name: 'Domain Expertise',
    icon: Globe,
    color: 'from-yellow-500 to-orange-500',
    skills: [
      'E-commerce Integration', 'ERP Systems', 'Industrial Automation', 'Process Optimization', 'API Integration', 'System Architecture', 'Performance Optimization', 'Security Best Practices'
    ]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning programming, machine learning, data engineering, and cloud technologies. 
            From building robust applications to extracting insights from complex datasets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-3`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center group"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-200`}></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-200">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Full-Stack Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Building robust applications with modern frameworks and best practices
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">ML & Data Science</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Developing intelligent solutions and extracting actionable insights
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Cloud & DevOps</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Scalable infrastructure and automated deployment pipelines
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 