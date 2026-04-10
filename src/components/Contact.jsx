// Contact.jsx — simple and clean contact section
import { Mail, ArrowUpRight } from 'lucide-react';

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const contacts = [
  {
    IconComp: Mail,
    label: 'Email',
    value: 'bhaweshchandnani9@gmail.com',
    href: 'mailto:bhaweshchandnani9@gmail.com',
    desc: 'Best way to reach me for anything',
    isLucide: true,
  },
  {
    IconComp: LinkedinIcon,
    label: 'LinkedIn',
    value: 'in/Bhawesh-Chandnani',
    href: 'https://linkedin.com/in/Bhawesh-Chandnani',
    desc: "Let's connect professionally",
    isLucide: false,
  },
  {
    IconComp: GithubIcon,
    label: 'GitHub',
    value: 'github.com/bhaweshchandnani',
    href: 'https://github.com/bhaweshchandnani',
    desc: "See what I'm building",
    isLucide: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#EFEBE2' }}>
      <span className="absolute top-10 right-0 font-bold select-none pointer-events-none"
        style={{ fontSize: 'clamp(60px,14vw,180px)', color: 'rgba(26,24,20,0.05)', lineHeight: 1, fontFamily: "'Syne', sans-serif" }}>
        07
      </span>

      <div className="max-w-5xl mx-auto">
        <p className="reveal text-xs tracking-widest uppercase mb-4"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: '#E8572A' }}>Contact</p>
        <h2 className="reveal delay-1 font-bold text-3xl md:text-4xl mb-3 leading-tight"
          style={{ letterSpacing: '-0.02em', fontFamily: "'Syne', sans-serif" }}>
          Let's talk.
        </h2>
        <p className="reveal delay-2 text-sm mb-12 max-w-md" style={{ color: '#8C8880' }}>
          Whether it's about an internship, a project idea, or just wanting to say hello — I'm always up for a conversation.
        </p>

        <div className="reveal delay-2 grid sm:grid-cols-3 gap-5 mb-14">
          {contacts.map(({ IconComp, label, value, href, desc, isLucide }, i) => (
            <a key={label} href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className={`reveal delay-${i + 1} group border rounded-xl p-5 block transition-all duration-200`}
              style={{ borderColor: '#DDD8CE', backgroundColor: '#F5F0E8' }}>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(232,87,42,0.1)' }}>
                  {isLucide ? <IconComp size={15} style={{ color: '#E8572A' }} /> : <span style={{ color: '#E8572A' }}><IconComp /></span>}
                </div>
                <ArrowUpRight size={14} style={{ color: '#8C8880' }} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </div>
              <p className="text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#E8572A' }}>{label}</p>
              <p className="text-sm font-medium mb-1 break-all" style={{ color: '#1A1814' }}>{value}</p>
              <p className="text-xs" style={{ color: '#8C8880' }}>{desc}</p>
            </a>
          ))}
        </div>

        {/* Open to opportunities */}
        <div className="reveal delay-3 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border"
          style={{ borderColor: 'rgba(232,87,42,0.3)', backgroundColor: 'rgba(232,87,42,0.05)' }}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#E8572A' }} />
              <p className="text-xs tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#E8572A' }}>
                Open to Opportunities
              </p>
            </div>
            <p className="text-sm" style={{ color: '#1A1814' }}>
              Looking for internships in software development or ML roles for Summer 2026.
            </p>
          </div>
          <a href="mailto:bhaweshchandnani9@gmail.com?subject=Internship%20Opportunity"
            className="flex-shrink-0 px-5 py-2.5 rounded-full font-medium text-sm transition-colors duration-200 whitespace-nowrap"
            style={{ backgroundColor: '#1A1814', color: '#F5F0E8' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#E8572A'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1A1814'}>
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
}
