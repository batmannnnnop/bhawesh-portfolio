// Education.jsx — academic background and relevant coursework
import { GraduationCap, BookOpen } from 'lucide-react';

const coursework = [
  'Machine Learning',
  'Design & Analysis of Algorithms',
  'Competitive Programming',
  'Data Structures',
  'Object-Oriented Programming',
  'Computer Networks (upcoming)',
  'Database Management (upcoming)',
  'Operating Systems (upcoming)',
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-card relative overflow-hidden">
      <span
        className="absolute top-10 right-0 font-display font-bold select-none pointer-events-none"
        style={{ fontSize: 'clamp(60px,14vw,180px)', color: 'rgba(26,24,20,0.05)', lineHeight: 1 }}
      >
        05
      </span>

      <div className="max-w-5xl mx-auto">
        <p className="reveal font-mono text-xs text-accent tracking-widest mb-4 uppercase">Education</p>
        <h2
          className="reveal delay-1 font-display font-bold text-3xl md:text-4xl mb-12 leading-tight"
          style={{ letterSpacing: '-0.02em' }}
        >
          Where I'm learning.
        </h2>

        <div className="reveal delay-2 grid md:grid-cols-2 gap-10 items-start">
          {/* College card */}
          <div className="bg-cream rounded-2xl border border-border p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-base text-ink">JK Lakshmipat University</h3>
                <p className="font-mono text-xs text-muted">Jaipur, Rajasthan</p>
              </div>
            </div>

            <div className="space-y-3 text-sm font-body">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted">Degree</span>
                <span className="text-ink font-medium">B.Tech – Computer Science</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted">Duration</span>
                <span className="text-ink font-medium">2024 – 2028</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted">Current Year</span>
                <span className="text-ink font-medium">2nd Year</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">CGPA</span>
                <span className="text-accent font-semibold font-display">7.6 / 10</span>
              </div>
            </div>
          </div>

          {/* Coursework */}
          <div className="reveal delay-3">
            <div className="flex items-center gap-2 mb-5">
              <BookOpen size={16} className="text-accent" />
              <h3 className="font-display font-semibold text-base text-ink">Relevant Coursework</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className={`font-body text-sm px-4 py-1.5 rounded-full border ${
                    course.includes('upcoming')
                      ? 'border-dashed border-border text-muted'
                      : 'border-border bg-cream text-ink'
                  }`}
                >
                  {course}
                </span>
              ))}
            </div>
            <p className="font-mono text-xs text-muted mt-4">* dashed = planned / upcoming</p>
          </div>
        </div>
      </div>
    </section>
  );
}
