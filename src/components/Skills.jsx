// Skills.jsx — skill categories with honest, beginner-friendly progress bars
import { useEffect, useRef } from 'react';

// Skill data — levels are intentionally moderate & honest
const skillCategories = [
  {
    title: 'Programming Languages',
    emoji: '⌨️',
    skills: [
      { name: 'C', level: 65, note: 'Comfortable' },
      { name: 'C++', level: 60, note: 'Learning DSA with it' },
      { name: 'Python', level: 70, note: 'Main ML language' },
    ],
  },
  {
    title: 'Concepts & Fundamentals',
    emoji: '🧠',
    skills: [
      { name: 'Data Structures & Algorithms', level: 55, note: 'Actively practicing' },
      { name: 'Machine Learning Basics', level: 45, note: 'Ongoing — started recently' },
      { name: 'Problem Solving', level: 60, note: 'Competitive programming' },
    ],
  },
  {
    title: 'Web Development',
    emoji: '🌐',
    skills: [
      { name: 'HTML / CSS', level: 60, note: 'Building FreshKart with it' },
      { name: 'JavaScript', level: 40, note: 'Just getting started' },
      { name: 'Full-Stack Basics', level: 35, note: 'Learning in progress' },
    ],
  },
  {
    title: 'Tools & Platforms',
    emoji: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 55, note: 'Daily use' },
      { name: 'VS Code', level: 80, note: 'Primary editor' },
      { name: 'Generative AI / Prompting', level: 50, note: 'Used in HealthBud project' },
    ],
  },
];

// Individual skill row with animated bar
function SkillBar({ name, level, note }) {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bar.style.width = `${level}%`;
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(bar.parentElement);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="mb-5">
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="font-body text-sm text-ink font-medium">{name}</span>
        <span className="font-mono text-xs text-muted">{note}</span>
      </div>
      {/* Bar track */}
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        {/* Bar fill — animates via ref */}
        <div
          ref={barRef}
          className="h-full bg-accent rounded-full"
          style={{ width: '0%', transition: 'width 1s cubic-bezier(0.4,0,0.2,1)' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card relative overflow-hidden">
      <span
        className="absolute top-10 right-0 font-display font-bold select-none pointer-events-none"
        style={{ fontSize: 'clamp(60px,14vw,180px)', color: 'rgba(26,24,20,0.05)', lineHeight: 1 }}
      >
        03
      </span>

      <div className="max-w-5xl mx-auto">
        <p className="reveal font-mono text-xs text-accent tracking-widest mb-4 uppercase">Skills</p>
        <h2
          className="reveal delay-1 font-display font-bold text-3xl md:text-4xl mb-2 leading-tight"
          style={{ letterSpacing: '-0.02em' }}
        >
          What I know so far.
        </h2>
        <p className="reveal delay-2 font-body text-muted text-sm mb-12">
          Honest levels — still early in the journey, and proud of every bit.
        </p>

        {/* Grid of categories */}
        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`reveal delay-${i + 1} bg-cream rounded-2xl p-6 border border-border`}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">{cat.emoji}</span>
                <h3 className="font-display font-semibold text-base text-ink">{cat.title}</h3>
              </div>
              {cat.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
