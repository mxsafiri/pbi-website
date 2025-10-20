'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ContactDetails {
  address: string;
  email: string;
  phone: string;
}

export interface ContactProps {
  contactDetails: ContactDetails;
  mapEmbedUrl: string;
  onSubmit: (data: { name: string; email: string; message: string }) => void;
}

export const Contact: React.FC<ContactProps> = ({
  contactDetails,
  mapEmbedUrl,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-dark rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Contact Us"
          subtitle="Have questions or want to get involved? We'd love to hear from you!"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg"
                  >
                    <MapPin size={24} />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Address</h4>
                    <p className="text-neutral-600">{contactDetails.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg"
                  >
                    <Mail size={24} />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Email</h4>
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="text-primary hover:underline font-medium"
                    >
                      {contactDetails.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg"
                  >
                    <Phone size={24} />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Phone</h4>
                    <a
                      href={`tel:${contactDetails.phone}`}
                      className="text-primary hover:underline font-medium"
                    >
                      {contactDetails.phone}
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
