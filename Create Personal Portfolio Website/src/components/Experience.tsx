import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/portfolio';
import { TimelineItem } from './TimelineItem';

export function Experience() {
  const { experience } = portfolioData;
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-20 md:py-32 bg-white dark:bg-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {experience.map((item, index) => (
            <TimelineItem
              key={item.id}
              title={item.title}
              company={item.company}
              location={item.location}
              period={item.period}
              type={item.type}
              description={item.description}
              achievements={item.achievements}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
