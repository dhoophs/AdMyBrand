'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PricingCard from '@/components/PricingCard';
import FAQItem from '@/components/FAQItem';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const form = useRef<HTMLFormElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_4zx5uu4',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_axs1hyo',
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'UtO8oIrLceQwxTBUr'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current?.reset();
        },
        (error) => {
          alert('Failed to send message: ' + (error.text || error.message || 'Unknown error'));
        }
      );
  };

  const features = [
    { icon: '📊', title: 'AI Analytics', desc: 'Track and optimize campaigns with AI.' },
    { icon: '⚙️', title: 'Automation', desc: 'Automate media planning easily.' },
    { icon: '🧠', title: 'Smart Insights', desc: 'Get AI-powered insights on performance.' },
    { icon: '📅', title: 'Scheduler', desc: 'Schedule campaigns with precision.' },
    { icon: '💬', title: 'Chatbot', desc: 'Integrate AI chatbots into your campaigns.' },
    { icon: '📈', title: 'Live Dashboard', desc: 'View metrics in real-time dashboards.' },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white text-center scroll-smooth">
      {/* Navbar */}
      <nav className="w-full sticky top-0 bg-white/40 backdrop-blur-lg z-50 flex justify-between items-center px-6 py-4 shadow-md">
        <div className="text-xl font-extrabold text-blue-600">ADmyBRAND</div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-800" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex gap-6 text-gray-700 text-sm font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {menuOpen && (
          <ul className="absolute top-[70px] left-0 w-full bg-white flex flex-col gap-4 items-center py-4 shadow-md md:hidden">
            <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
            <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/hero.jpg"
            alt="Hero"
            width={1200}
            height={700}
            className="w-full max-w-[1200px] h-auto rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mt-6 text-black"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Welcome to ADmyBRAND AI Suite
        </motion.h1>

        <motion.p
          className="text-lg mt-4 max-w-2xl text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Empower your marketing campaigns with automation, analytics, and AI-driven insights.
        </motion.p>

        <motion.a
          href="#features"
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Get Started
        </motion.a>
      </section>

      {/* Features Section */}
      <motion.section
        id="features"
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-white/30 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="text-4xl">{feature.icon}</div>
            <h3 className="text-xl text-black font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Pricing Section */}
      <section id="pricing" className="mt-24 px-6 py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <PricingCard
            title="Starter"
            price="$29/mo"
            features={['Basic Analytics', 'Email Support', 'Campaign Scheduler']}
          />
          <PricingCard
            title="Professional"
            price="$79/mo"
            popular
            features={['Advanced Analytics', 'Chatbot', 'Priority Support', 'All Starter Features']}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            features={['All Pro Features', 'Dedicated Manager', 'Custom Integrations']}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-28 px-6 py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Our Clients Say</h2>
        <TestimonialCarousel />
      </section>

      {/* FAQ Section */}
      <section className="mt-24 px-6 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">FAQs</h2>
        <div className="grid gap-6 max-w-3xl mx-auto">
          <FAQItem
            question="What is ADmyBRAND AI Suite?"
            answer="It's an AI-powered marketing platform for campaign automation and optimization."
          />
          <FAQItem
            question="Can I try it for free?"
            answer="Yes! We offer a free trial with basic features."
          />
          <FAQItem
            question="Is my data secure?"
            answer="Absolutely. We use end-to-end encryption and follow industry best practices."
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-28 w-full px-4 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            Have questions or want a demo? Reach out and we’ll get back to you soon.
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              name="user_name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
              required
            />
            <input
              name="user_email"
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-gray-800 placeholder-gray-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
