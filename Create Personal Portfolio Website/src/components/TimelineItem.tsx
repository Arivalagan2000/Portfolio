import { motion } from 'motion/react';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'work' | 'education';
  description: string;
  achievements: string[];
  index: number;
  isLast: boolean;
}

export function TimelineItem({
  title,
  company,
  location,
  period,
  type,
  description,
  achievements,
  index,
  isLast,
}: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className={`flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Content */}
        <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
          <motion.div
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl text-gray-900 dark:text-white mb-1">
                {title}
              </h3>
              <p className="text-primary mb-2">{company}</p>
              <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span>📍 {location}</span>
                <span>•</span>
                <span>📅 {period}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

            {/* Achievements */}
            {achievements.length > 0 && (
              <div className="space-y-2">
                {achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Timeline Center Icon */}
        <div className="relative flex-shrink-0">
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg z-10 relative"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {type === 'work' ? (
              <Briefcase className="w-7 h-7 text-white" />
            ) : (
              <GraduationCap className="w-7 h-7 text-white" />
            )}
          </motion.div>

          {/* Vertical Line */}
          {!isLast && (
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-primary to-transparent"></div>
          )}
        </div>

        {/* Spacer for alignment */}
        <div className="flex-1 hidden md:block"></div>
      </div>
    </motion.div>
  );
}
