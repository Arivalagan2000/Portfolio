import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code2, Sparkles, Rocket, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const { about, skills } = portfolioData;
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 bg-white dark:bg-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Image Section */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative group">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>

                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-transform">
                  <ImageWithFallback
                    src={about.image}
                    alt="Profile"
                    className="w-full h-auto aspect-square object-cover"
                  />
                </div>

                {/* Floating Stats */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 border border-gray-200 dark:border-slate-700"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl text-gray-900 dark:text-white">3+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Years Exp.</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {about.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {about.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {index === 0 && <Code2 className="w-4 h-4 text-primary" />}
                      {index === 1 && <Rocket className="w-4 h-4 text-primary" />}
                      {index === 2 && <Sparkles className="w-4 h-4 text-primary" />}
                      {index === 3 && <Users className="w-4 h-4 text-primary" />}
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl text-gray-900 dark:text-white mb-8 text-center">
              Technical <span className="gradient-text">Skills</span>
            </h3>

            <div className="space-y-8">
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                <div key={category}>
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-4">{category}</h4>
                  <div className="grid gap-4">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-primary">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
