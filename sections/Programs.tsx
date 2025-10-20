'use client';

import React from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface Program {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProgramsProps {
  programs: Program[];
}

export const Programs: React.FC<ProgramsProps> = ({ programs }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    }),
  };

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Our Programs"
          subtitle="Comprehensive initiatives designed to empower and educate our community"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
            >
              <motion.div
                whileHover={{ 
                  y: -12,
                  boxShadow: '0 25px 50px -12px rgba(74, 168, 224, 0.25)',
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group relative h-full bg-white rounded-2xl border border-neutral-200 shadow-lg overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative p-8">
                  {/* Icon with animated background */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 mb-6 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow"
                  >
                    <div className="text-white">
                      {program.icon}
                    </div>
                  </motion.div>

                  {/* Title with arrow on hover */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-neutral-900 flex-1">
                      {program.title}
                    </h3>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowUpRight className="text-primary" size={24} />
                    </motion.div>
                  </div>

                  <p className="text-neutral-600 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Bottom accent line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary-dark"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-600 mb-4">
            Want to learn more about our programs?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contact = document.querySelector('#contact');
              contact?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Get in Touch
            <ArrowUpRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
