import { motion } from 'motion/react';
import { Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white text-xl mb-4">{`<${personalInfo.name.replace(' ', '')} />`}</h3>
            <p className="text-gray-400 mb-4">
              {personalInfo.title} passionate about creating exceptional digital experiences.
            </p>
            <p className="text-gray-400">
              📍 {personalInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer inline-block"
                    whileHover={{ x: 5 }}
                  >
                    → {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter (Optional) */}
          <div>
            <h3 className="text-white text-xl mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4">
              Follow me on social media for updates on my latest projects and tech insights.
            </p>
            <div className="flex gap-4">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                Twitter
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
