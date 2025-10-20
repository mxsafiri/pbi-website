'use client';

import React from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export interface InvolvementOption {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  onButtonClick: () => void;
}

export interface GetInvolvedProps {
  options: InvolvementOption[];
}

export const GetInvolved: React.FC<GetInvolvedProps> = ({ options }) => {
  return (
    <section id="get-involved" className="py-20 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/dove-logo.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Get Involved"
          subtitle="Be part of the change. There are many ways to support our mission."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ 
                  y: -16,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group relative h-full bg-white rounded-3xl border border-neutral-200 shadow-xl overflow-hidden"
              >
                {/* Gradient background on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-50" />
                
                <div className="relative p-8 flex flex-col h-full">
                  {/* Animated icon container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary mb-6 flex justify-center relative"
                  >
                    <div className="relative">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                        className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                      />
                      <div className="relative z-10 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-4 shadow-lg">
                        <div className="text-white">
                          {option.icon}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-4 text-center group-hover:text-primary transition-colors">
                    {option.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed mb-8 flex-grow text-center">
                    {option.description}
                  </p>

                  {/* Enhanced button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="primary"
                      size="md"
                      onClick={option.onButtonClick}
                      className="w-full group-hover:shadow-xl transition-shadow relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {option.buttonText}
                        <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
                      </span>
                    </Button>
                  </motion.div>
                </div>

                {/* Bottom shine effect */}
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
