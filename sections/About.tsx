'use client';

import React from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import Image from 'next/image';

export interface AboutProps {
  missionText: string;
}

export const About: React.FC<AboutProps> = ({ missionText }) => {
  const values = [
    {
      icon: <Target size={32} />,
      title: 'Our Mission',
      description: 'To provide accessible computer-assisted learning and foster peace in our community.',
    },
    {
      icon: <Eye size={32} />,
      title: 'Our Vision',
      description: 'A future where every young person has the digital skills to succeed and thrive.',
    },
    {
      icon: <Heart size={32} />,
      title: 'Our Values',
      description: 'Education, peace, inclusivity, and community empowerment guide everything we do.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Peace Building Initiative"
          subtitle="Transforming lives through education and technology"
        />

        {/* Main content with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/diverse-group-employees-working-their-computers.jpg"
                alt="Students working on computers"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg"
                >
                  <p className="text-sm font-semibold text-primary">Empowering Youth</p>
                  <p className="text-xs text-neutral-600 mt-1">
                    Building digital skills for Tanzania's future leaders
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              {missionText}
            </p>
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src="/peace-symbol.png"
                  alt="Peace symbol"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">Peace Through Education</p>
                <p className="text-xs text-neutral-600">
                  Creating lasting change in Tarime, Musoma
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(74, 168, 224, 0.15)' }}
              className="bg-white p-8 rounded-2xl border border-blue-100 shadow-md transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg"
              >
                {value.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {value.title}
              </h3>
              <p className="text-neutral-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
