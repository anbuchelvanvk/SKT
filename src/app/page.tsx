'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Utensils, Shirt, Home, Users, Briefcase, Lightbulb } from 'lucide-react';
import styles from './page.module.css';

export default function HomePage() {
  const needs = [
    {
      title: 'Food',
      description: 'Agriculture and quality food products.',
      icon: <Utensils size={40} className={styles.iconRed} />,
      link: '/food',
      bg: 'rgba(230, 57, 70, 0.1)'
    },
    {
      title: 'Clothing',
      description: 'Textile Manufacturer (All products included).',
      icon: <Shirt size={40} className={styles.iconOrange} />,
      link: '/clothing',
      bg: 'rgba(244, 162, 97, 0.1)'
    },
    {
      title: 'Construction',
      description: 'Building futures with reliable home construction materials and services.',
      icon: <Home size={40} className={styles.iconYellow} />,
      link: '/construction',
      bg: 'rgba(233, 196, 106, 0.1)'
    },
    {
      title: 'Your Service',
      description: 'Other activities and future expansion.',
      icon: <Briefcase size={40} className={styles.iconBlue} />,
      link: '#',
      bg: 'rgba(42, 157, 143, 0.1)'
    }
  ];

  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroContent}
          >
            <h1 className={styles.title}>
              Fulfilling Life's <span className={styles.highlight}>Basic Needs</span>
            </h1>
            <p className={styles.subtitle}>
              A dynamic network connecting you to the essentials: Food, Clothing, and Construction. 
              Join our growing community and empower your business.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/network" className="btn btn-primary">
                Explore Our Network
              </Link>
              <Link href="/join" className="btn btn-secondary">
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={`container ${styles.categoriesSection}`}>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.sectionHeader}
        >
          <h2>The Fundamentals</h2>
          <p>Explore our specialized divisions dedicated to the core pillars of human life.</p>
        </motion.div>

        <div className={styles.grid}>
          {needs.map((need, index) => (
            <motion.div
              key={need.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={styles.card}
              style={{ backgroundColor: need.bg }}
            >
              <div className={styles.iconWrapper}>{need.icon}</div>
              <h3>{need.title}</h3>
              <p>{need.description}</p>
              <Link href={need.link} className={styles.cardLink}>
                Learn More &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Network / BNI style section */}
      <section className={styles.networkSection}>
        <div className={`container ${styles.networkContainer}`}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.networkContent}
          >
            <h2>Join The Ultimate <br />Business Network</h2>
            <p>
              Modeled after successful global networks, our platform facilitates powerful B2B and B2C connections. 
              Grow your reach, share referrals, and increase your revenue securely.
            </p>
            <ul className={styles.networkFeatures}>
              <li><Users size={20} className={styles.iconRed} /> Verified Member Directory</li>
              <li><Users size={20} className={styles.iconOrange} /> Secure Data Transactions</li>
              <li><Users size={20} className={styles.iconYellow} /> Regular Networking Events</li>
              <li><Lightbulb size={20} className={styles.iconBlue} /> Solutions Provider for Your Needs</li>
            </ul>
            <Link href="/join" className="btn btn-primary" style={{ marginTop: '2rem' }}>
              Apply for Membership
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.networkImage}
          >
            <div className={styles.pulseCircle}>
              <Users size={80} color="white" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
