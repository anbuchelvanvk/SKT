'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Food', path: '/food' },
    { name: 'Clothing', path: '/clothing' },
    { name: 'Construction', path: '/construction' },
    { name: 'Network', path: '/network' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="SKT Group Logo" style={{ height: '60px', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/join" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>
            Join Us
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className={styles.mobileNav}>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`${styles.mobileNavLink} ${pathname === link.path ? styles.active : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/join" className="btn btn-primary" onClick={() => setIsOpen(false)}>
            Join Us
          </Link>
        </nav>
      )}
    </header>
  );
}
