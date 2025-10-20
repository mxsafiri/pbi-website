'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Logo } from '@/components/Logo';
import { DonationModal } from '@/components/DonationModal';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Programs } from '@/sections/Programs';
import { GetInvolved } from '@/sections/GetInvolved';
import { Contact } from '@/sections/Contact';
import {
  Monitor,
  Users,
  GraduationCap,
  Heart,
  Handshake,
  DollarSign,
} from 'lucide-react';

export default function Home() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  // Navigation items
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Get Involved', href: '#get-involved' },
    { label: 'Contact', href: '#contact' },
  ];

  // Programs data
  const programs = [
    {
      title: 'Digital Learning',
      description:
        'Providing computer-assisted learning opportunities to students in Tarime, bridging the digital divide through hands-on technology education.',
      icon: <Monitor size={40} />,
    },
    {
      title: 'Community Peace Clubs',
      description:
        'Building peaceful communities through dialogue, conflict resolution training, and youth engagement programs that promote understanding and cooperation.',
      icon: <Users size={40} />,
    },
    {
      title: 'Digital Literacy for Youth',
      description:
        'Empowering young people with essential digital skills for the 21st century, including coding, digital citizenship, and online safety.',
      icon: <GraduationCap size={40} />,
    },
  ];

  // Get Involved options
  const involvementOptions = [
    {
      title: 'Volunteer',
      description:
        'Share your skills and time to help empower our community. Whether teaching, mentoring, or supporting our programs, your contribution matters.',
      icon: <Heart size={48} />,
      buttonText: 'Become a Volunteer',
      onButtonClick: () => {
        const contactSection = document.querySelector('#contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      title: 'Partner With Us',
      description:
        'Collaborate with PBI to expand our impact. We welcome partnerships with organizations that share our vision for education and peace.',
      icon: <Handshake size={48} />,
      buttonText: 'Explore Partnerships',
      onButtonClick: () => {
        const contactSection = document.querySelector('#contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      title: 'Donate',
      description:
        'Support our mission with a financial contribution. Every donation helps us provide better learning resources and reach more students.',
      icon: <DollarSign size={48} />,
      buttonText: 'Make a Donation',
      onButtonClick: () => {
        setIsDonationModalOpen(true);
      },
    },
  ];

  // Contact details
  const contactDetails = {
    address: 'Tarime, Musoma, Tanzania',
    email: 'peacebuildinginitiativetanzania@gmail.com',
    phone: '+255 XXX XXX XXX',
  };

  // Google Maps embed URL for Tarime, Musoma
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127422.69954088876!2d34.07!3d-1.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182ae8f0c0000001%3A0x1!2sTarime%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1234567890';

  // Social links
  const socialLinks = [
    { platform: 'facebook' as const, url: 'https://facebook.com/pbi' },
    { platform: 'twitter' as const, url: 'https://twitter.com/pbi' },
    { platform: 'instagram' as const, url: 'https://instagram.com/pbi' },
    { platform: 'email' as const, url: 'mailto:peacebuildinginitiativetanzania@gmail.com' },
  ];

  const handleContactSubmit = (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    // Prepare email content
    const subject = encodeURIComponent('Contact Form Submission - Peace Building Initiative');
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    const mailtoLink = `mailto:peacebuildinginitiativetanzania@gmail.com?subject=${subject}&body=${body}`;
    
    // Log for backend integration
    console.log('Contact form submitted:', data);
    
    // Open email client
    window.location.href = mailtoLink;
    
    alert('Thank you for your message! Your email client will open to send your inquiry.');
  };

  const handleDonationSubmit = (data: {
    name: string;
    email: string;
    amount: string;
    message: string;
  }) => {
    // Prepare donation inquiry email
    const subject = encodeURIComponent('Donation Inquiry - Peace Building Initiative');
    const body = encodeURIComponent(
      `DONATION INQUIRY\n\nName: ${data.name}\nEmail: ${data.email}\nIntended Amount: ${data.amount || 'Not specified'}\n\nMessage:\n${data.message || 'No additional message'}\n\n---\nPlease respond with donation details and payment options.`
    );
    const mailtoLink = `mailto:peacebuildinginitiativetanzania@gmail.com?subject=${subject}&body=${body}`;
    
    // Log for backend integration
    console.log('Donation inquiry submitted:', data);
    
    // Open email client
    window.location.href = mailtoLink;
    
    alert(`Thank you, ${data.name}! Your email client will open to send your donation inquiry.`);
  };

  return (
    <main id="home">
      {/* Donation Modal */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
        onSubmit={handleDonationSubmit}
      />

      {/* Navigation */}
      <Navbar
        logo={<Logo size="sm" />}
        navItems={navItems}
        onDonateClick={() => setIsDonationModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        title="Peace Building Initiative"
        subtitle="Empowering communities in Tarime, Musoma through computer-assisted learning and peace education. Together, we're building a brighter, more connected future for Tanzania's youth."
        logo={<Logo size="lg" showText={false} />}
        onJoinUsClick={() => {
          const contactSection = document.querySelector('#contact');
          contactSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        onLearnMoreClick={() => {
          const aboutSection = document.querySelector('#about');
          aboutSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* About Section */}
      <About />

      {/* Programs Section */}
      <Programs programs={programs} />

      {/* Get Involved Section */}
      <GetInvolved options={involvementOptions} />

      {/* Contact Section */}
      <Contact
        contactDetails={contactDetails}
        mapEmbedUrl={mapEmbedUrl}
        onSubmit={handleContactSubmit}
      />

      {/* Footer */}
      <Footer
        logo={<Logo size="sm" variant="light" />}
        navItems={navItems}
        socialLinks={socialLinks}
        copyrightText=" 2025 Peace Building Initiative. All rights reserved."
      />
    </main>
  );
}
