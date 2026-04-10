// Hero.jsx — opening section with name, title, tagline and CTAs
import { ArrowDown, Mail } from 'lucide-react';

// Simple inline SVGs for GitHub and LinkedIn (not in this lucide version)
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(26,24,20,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,24,20,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Large decorative number */}
      <span
        className="absolute top-24 right-6 md:right-20 font-display font-bold select-none pointer-events-none"
        style={{ fontSize: 'clamp(80px,18vw,220px)', color: 'rgba(26,24,20,0.04)', lineHeight: 1, fontFamily: "'Syne', sans-serif" }}
      >
        01
      </span>

      <div className="max-w-5xl mx-auto w-full relative z-10 pt-24">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-8 bg-card">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ backgroundColor: '#E8572A' }} />
          <span className="text-xs text-muted tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Open to internships · 2026
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-bold leading-none mb-4"
          style={{ fontSize: 'clamp(40px, 8vw, 96px)', letterSpacing: '-0.03em', fontFamily: "'Syne', sans-serif" }}
        >
          Bhawesh
          <br />
          <span style={{ color: '#E8572A' }}>Chandnani</span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl mb-5 font-medium" style={{ color: '#8C8880', fontFamily: "'Syne', sans-serif" }}>
          CS Student &nbsp;·&nbsp; Aspiring Developer
        </p>

        {/* Tagline */}
        <p className="text-base md:text-lg max-w-xl mb-10 leading-relaxed" style={{ color: 'rgba(26,24,20,0.7)' }}>
          Second-year student figuring out how to build things that matter — one commit at a time.
          Currently focused on ML and full-stack basics, and not afraid to be a beginner.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-colors duration-200"
            style={{ backgroundColor: '#1A1814', color: '#F5F0E8' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#E8572A'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1A1814'}
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm border transition-colors duration-200"
            style={{ borderColor: '#DDD8CE', color: '#1A1814' }}
          >
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5">
          <a href="mailto:bhaweshchandnani9@gmail.com" aria-label="Email"
            className="transition-colors" style={{ color: '#8C8880' }}
            onMouseEnter={e => e.currentTarget.style.color = '#E8572A'}
            onMouseLeave={e => e.currentTarget.style.color = '#8C8880'}>
            <Mail size={18} />
          </a>
          <a href="https://linkedin.com/in/Bhawesh-Chandnani" target="_blank" rel="noreferrer" aria-label="LinkedIn"
            className="transition-colors" style={{ color: '#8C8880' }}
            onMouseEnter={e => e.currentTarget.style.color = '#E8572A'}
            onMouseLeave={e => e.currentTarget.style.color = '#8C8880'}>
            <LinkedinIcon />
          </a>
          <a href="https://github.com/bhaweshchandnani" target="_blank" rel="noreferrer" aria-label="GitHub"
            className="transition-colors" style={{ color: '#8C8880' }}
            onMouseEnter={e => e.currentTarget.style.color = '#E8572A'}
            onMouseLeave={e => e.currentTarget.style.color = '#8C8880'}>
            <GithubIcon />
          </a>
        </div>
      </div>

      {/* Scroll nudge */}
      <a href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-colors"
        style={{ color: '#8C8880' }}>
        <span className="text-xs tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
