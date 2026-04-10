// Projects.jsx — showcases student-level projects with problem, learnings, and tech
import { ExternalLink } from 'lucide-react';

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const projects = [
  {
    number: '01',
    title: 'Crash Predictor',
    period: 'Feb 2026 – Present',
    type: 'Course Project · Machine Learning',
    problem:
      'Road accidents are a major cause of injury and death, yet most prevention is reactive. I wanted to explore whether historical accident data could help predict which zones are most at risk — before incidents happen.',
    learned:
      'Data preprocessing, feature engineering, and the basics of building a predictive model. Also learned that cleaning messy real-world data takes way more time than the actual modelling.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'ML Fundamentals'],
    github: 'https://github.com/batmannnnnop',
    live: null,
    status: 'In Progress',
  },
  {
    number: '02',
    title: 'FreshKart',
    period: 'Jan 2026 – Feb 2026',
    type: 'Individual Project · Full-Stack Web App',
    problem:
      'Local Kirana stores rarely have an online presence, making it hard for customers to browse and order. I tried to build a simple but functional online store with cart and order management.',
    learned:
      'How to connect a frontend UI with a backend and database. User authentication flows, managing state in a real app, and building something that actually runs end-to-end.',
    tech: ['HTML/CSS', 'JavaScript', 'Node.js', 'Database'],
    github: 'https://github.com/batmannnnnop',
    live: null,
    status: 'Completed',
  },
  {
    number: '03',
    title: 'HealthBud',
    period: 'Sep 2025 · IIC 2.0 Hackathon',
    type: 'Team Project · AI + WhatsApp',
    problem:
      'In rural and semi-urban India, access to basic health information is still a barrier. We built a multilingual AI chatbot on WhatsApp to provide preventive care guidance in accessible language.',
    learned:
      'Prompt engineering for real-world applications, integrating third-party APIs securely, working under time pressure, and the importance of empathetic UX even in a chatbot.',
    tech: ['Python', 'WhatsApp API', 'Generative AI', 'Prompt Engineering'],
    github: 'https://github.com/batmannnnnop',
    live: null,
    status: 'Hackathon Build',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <span className="absolute top-10 right-0 font-bold select-none pointer-events-none"
        style={{ fontSize: 'clamp(60px,14vw,180px)', color: 'rgba(26,24,20,0.04)', lineHeight: 1, fontFamily: "'Syne', sans-serif" }}>
        04
      </span>

      <div className="max-w-5xl mx-auto">
        <p className="reveal text-xs tracking-widest uppercase mb-4"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: '#E8572A' }}>Projects</p>
        <h2 className="reveal delay-1 font-bold text-3xl md:text-4xl mb-2 leading-tight"
          style={{ letterSpacing: '-0.02em', fontFamily: "'Syne', sans-serif" }}>
          Things I've built.
        </h2>
        <p className="reveal delay-2 text-sm mb-14" style={{ color: '#8C8880' }}>
          Student projects — small in scope, big in lessons learned.
        </p>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <div key={p.title}
              className={`reveal delay-${i + 1} group border rounded-2xl p-6 md:p-8 transition-all duration-300`}
              style={{ borderColor: '#DDD8CE', backgroundColor: '#EFEBE2' }}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Number */}
                <span className="font-bold text-4xl select-none flex-shrink-0 transition-colors duration-300"
                  style={{ fontFamily: "'Syne', sans-serif", color: '#DDD8CE' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#E8572A'}
                  onMouseLeave={e => e.currentTarget.style.color = '#DDD8CE'}>
                  {p.number}
                </span>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                    <div>
                      <h3 className="font-semibold text-xl" style={{ fontFamily: "'Syne', sans-serif", color: '#1A1814' }}>{p.title}</h3>
                      <p className="text-xs mt-0.5" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#8C8880' }}>
                        {p.type} · {p.period}
                      </p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        backgroundColor: p.status === 'In Progress' ? 'rgba(232,87,42,0.1)' : '#DDD8CE',
                        color: p.status === 'In Progress' ? '#E8572A' : '#8C8880',
                      }}>
                      {p.status}
                    </span>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#E8572A' }}>Problem</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(26,24,20,0.75)' }}>{p.problem}</p>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#E8572A' }}>What I Learned</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(26,24,20,0.75)' }}>{p.learned}</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 mt-5">
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="text-xs px-3 py-1 rounded-full border"
                          style={{ fontFamily: "'JetBrains Mono', monospace", borderColor: '#DDD8CE', backgroundColor: '#F5F0E8', color: '#1A1814' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <a href={p.github} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm transition-colors"
                        style={{ color: '#8C8880' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#1A1814'}
                        onMouseLeave={e => e.currentTarget.style.color = '#8C8880'}>
                        <GithubIcon /> GitHub
                      </a>
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer"
                          className="flex items-center gap-1.5 text-sm transition-colors"
                          style={{ color: '#8C8880' }}
                          onMouseEnter={e => e.currentTarget.style.color = '#E8572A'}
                          onMouseLeave={e => e.currentTarget.style.color = '#8C8880'}>
                          <ExternalLink size={15} /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
