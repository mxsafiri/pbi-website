import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram' | 'email';
  url: string;
}

export interface FooterProps {
  logo?: React.ReactNode;
  navItems: NavItem[];
  socialLinks: SocialLink[];
  copyrightText: string;
}

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  email: Mail,
};

export const Footer: React.FC<FooterProps> = ({
  logo,
  navItems,
  socialLinks,
  copyrightText,
}) => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-dark rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            {logo}
            <p className="text-neutral-300 text-sm leading-relaxed">
              Empowering communities through education and technology in Tarime, Musoma, Tanzania.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-neutral-300 hover:text-primary transition-colors text-sm hover:underline"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = socialIcons[link.platform];
                return (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 5,
                      backgroundColor: '#4AA8E0',
                    }}
                    className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-primary/50"
                    aria-label={link.platform}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-700 pt-8 text-center">
          <p className="text-neutral-300 text-sm">&copy;{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};
