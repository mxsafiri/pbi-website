'use client';

import React from 'react';
import { Button } from '@/components/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, ArrowRight, Users, BookOpen, Heart } from 'lucide-react';

export interface HeroProps {
  title: string;
  subtitle: string;
  logo?: React.ReactNode;
  onJoinUsClick?: () => void;
  onLearnMoreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  logo,
  onJoinUsClick,
  onLearnMoreClick,
}) => {
  const stats = [
    { icon: Users, value: '50', label: 'Students Enrolled' },
    { icon: BookOpen, value: '5', label: 'Active Programs' },
    { icon: Heart, value: '100%', label: 'Community Impact' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/study-group-african-people.jpg"
          alt="Students learning together"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/95 via-white/95 to-blue-100/95" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        
        {/* Floating dove image */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-20 opacity-20 hidden lg:block"
        >
          <Image
            src="/hero-dove.png"
            alt="Peace dove"
            width={150}
            height={150}
            className="object-contain"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
            >
              <Sparkles size={16} />
              <span className="text-sm font-medium">Building a Better Tomorrow</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              {title}
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                onClick={onJoinUsClick}
                className="group"
              >
                Join Our Mission
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onLearnMoreClick}
              >
                Learn More
              </Button>
            </div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-primary/20 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Icon className="text-primary mb-2" size={24} />
                    <div className="text-2xl font-bold text-neutral-900">{stat.value}</div>
                    <div className="text-xs text-neutral-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Image Gallery Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block relative h-[500px]"
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/community-learning.jpeg"
                  alt="Community Learning"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="flex flex-col gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[240px] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/team-working.jpeg"
                    alt="Team Working"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[240px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center"
                >
                  <div className="relative w-40 h-40">
                    {logo}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
