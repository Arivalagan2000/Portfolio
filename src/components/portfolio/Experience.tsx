import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { experience, education } from '../../data/portfolio';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900 dark:text-white">Work Experience</h3>
            </div>

            <div className="relative space-y-8 before:absolute before:left-[15px] before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:to-purple-500">
              {experience.map((exp, index) => (
                <TimelineItem key={exp.id} item={exp} index={index} isInView={isInView} />
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="relative space-y-8 before:absolute before:left-[15px] before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-purple-500 before:to-pink-500">
              {education.map((edu, index) => (
                <TimelineItem key={edu.id} item={edu} index={index} isInView={isInView} isEducation />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index, isInView, isEducation = false }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-12"
    >
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
        className={`absolute left-0 top-0 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 ${
          isEducation
            ? 'bg-gradient-to-br from-purple-500 to-pink-500'
            : 'bg-gradient-to-br from-blue-500 to-purple-500'
        } shadow-lg`}
      />

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02, x: 5 }}
        className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <h4 className="text-xl text-gray-900 dark:text-white">
            {isEducation ? item.degree : item.title}
          </h4>
          <span className="text-sm text-blue-600 dark:text-blue-400 mt-1 sm:mt-0">
            {item.period}
          </span>
        </div>

        <div className="text-gray-700 dark:text-gray-300 mb-2">
          {isEducation ? item.institution : item.company}
        </div>

        {item.location && (
          <div className="text-sm text-gray-500 dark:text-gray-500 mb-3">
            📍 {item.location}
          </div>
        )}

        {item.grade && (
          <div className="text-sm text-gray-700 dark:text-gray-300 mb-3 font-medium">
            {item.grade}
          </div>
        )}

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {item.description}
        </p>

        {/* Achievements */}
        {item.achievements && (
          <div className="space-y-2">
            {item.achievements.map((achievement: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.4 + idx * 0.1 }}
                className="flex items-start gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {achievement}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
