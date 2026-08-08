'use client';

import React, { useState, useEffect } from 'react';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll detection for background opacity adjustment
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Active Section Detection via IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const id = item.href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      NAV_ITEMS.forEach((item) => {
        const id = item.href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Lock body scroll while mobile/tablet drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Smooth scroll handler with offset for sticky navbar
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setActiveSection(targetId);
    } else {
      window.location.hash = href;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#0B0B0B]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-emerald-950/20 py-3'
        : 'bg-[#0B0B0B]/40 backdrop-blur-md border-b border-white/5 py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80] rounded-lg p-1 shrink-0"
            aria-label="Khaled Masud Portfolio Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#111827] to-[#0B0B0B] border border-white/10 flex items-center justify-center group-hover:border-[#4ADE80]/50 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(74,222,128,0.2)]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ADE80] to-[#5EEAD4] font-black text-lg tracking-wider">
                KM
              </span>
            </div>
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-[#4ADE80] transition-colors duration-300 hidden sm:inline">
              Khaled Masud
            </span>
          </a>

          {/* Desktop Navigation Links — only from lg up, where there's room for logo + 6 links + CTA */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-[#111827]/60 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner"
          >
            {NAV_ITEMS.map((item) => {
              const itemId = item.href.replace('#', '');
              const isActive = activeSection === itemId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-2.5 xl:px-3.5 py-1.5 text-sm whitespace-nowrap transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80] ${isActive
                    ? 'text-[#4ADE80] font-semibold bg-[#4ADE80]/10 shadow-[0_0_12px_rgba(74,222,128,0.15)]'
                    : 'text-zinc-400 hover:text-white hover:scale-105'
                    }`}
                >
                  {item.label}
                  {/* Active / hover glow bar */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-[#4ADE80] to-[#5EEAD4] transition-all duration-300 ${isActive ? 'w-1/2 opacity-100' : 'w-0 opacity-0 group-hover:w-1/3'
                      }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button — matches nav breakpoint */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#111827] to-[#1f2937] border border-[#4ADE80]/40 rounded-full overflow-hidden transition-all duration-300 hover:border-[#4ADE80] hover:shadow-[0_0_20px_rgba(74,222,128,0.35)] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#4ADE80]/10 to-[#5EEAD4]/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              <FiDownload className="w-4 h-4 text-[#4ADE80] transition-transform duration-300 group-hover:translate-y-0.5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Menu Button — now covers mobile AND tablet (below lg) */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#4ADE80] transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <FiX className="w-6 h-6 text-[#4ADE80]" />
              ) : (
                <FiMenu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Drawer — shown below lg */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen
          ? 'max-h-[500px] opacity-100 border-b border-white/10'
          : 'max-h-0 opacity-0 pointer-events-none'
          } bg-[#0B0B0B]/95 backdrop-blur-2xl`}
      >
        {/* On tablet widths, lay items in a 2-column grid so the drawer isn't a tall single strip */}
        <div className="px-4 pt-3 pb-6 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
            {NAV_ITEMS.map((item) => {
              const itemId = item.href.replace('#', '');
              const isActive = activeSection === itemId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base transition-all duration-200 ${isActive
                    ? 'text-[#4ADE80] font-semibold bg-[#4ADE80]/10 border border-[#4ADE80]/20 shadow-[0_0_10px_rgba(74,222,128,0.1)]'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#4ADE80] shadow-[0_0_8px_#4ADE80]"></span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="pt-4 mt-3 border-t border-white/10">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-[#111827] to-[#1f2937] border border-[#4ADE80]/50 rounded-xl shadow-[0_0_15px_rgba(74,222,128,0.2)] hover:border-[#4ADE80] transition-all duration-300"
            >
              <FiDownload className="w-5 h-5 text-[#4ADE80]" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}