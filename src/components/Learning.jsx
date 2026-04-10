// Learning.jsx — what I'm currently exploring and future interests
import { Zap, Compass } from 'lucide-react';

const currentlyLearning = [
  {
    title: 'Web Development',
    desc: 'Getting comfortable with HTML, CSS, JS, and eventually React. Building FreshKart is helping me understand how frontend and backend connect.',
    icon: '🌐',
    status: 'Active',
  },
  {
    title: 'Generative AI',
    desc: 'Exploring how LLMs work, prompt engineering techniques, and how to integrate AI APIs into real projects — started with HealthBud.',
    icon: '🤖',
    status: 'Active',
  },
  {
    title: 'DSA & Competitive Programming',
    desc: 'Practicing problems regularly to get better at algorithmic thinking. Participating in contests to push myself.',
    icon: '⚡',
    status: 'Ongoing',
  },
  {
    title: 'Machine Learning Fundamentals',
    desc: 'Understanding ML pipelines, feature engineering, and model evaluation through the Crash Predictor project.',
    icon: '📊',
    status: 'In Progress',
  },
];

const futureInterests = [
  'Deep Learning & Neural Networks',
  'MLOps & Model Deployment',
  'Open Source Contributions',
  'System Design Basics',
  'Backend Engineering (Node.js / FastAPI)',
  'Cloud Platforms (AWS / GCP)',
  'AI for Social Impact',
  'Research Internships',
];

export default function Learning() {
  return (
    <section id="learning" className="py-24 px-6 relative overflow-hidden">
      <span
        className="absolute top-10 right-0 font-display font-bold select-none pointer-events-none"
        style={{ fontSize: 'clamp(60px,14vw,180px)', color: 'rgba(26,24,20,0.04)', lineHeight: 1 }}
      >
        06
      </span>

      <div className="max-w-5xl mx-auto">
        <p className="reveal font-mono text-xs text-accent tracking-widest mb-4 uppercase">Currently Exploring</p>
        <h2
          className="reveal delay-1 font-display font-bold text-3xl md:text-4xl mb-3 leading-tight"
          style={{ letterSpacing: '-0.02em' }}
        >
          Always something new in the queue.
        </h2>
        <p className="reveal delay-2 font-body text-muted text-sm mb-12">
          I keep a running list of what I'm learning and where I want to go next.
        </p>

        {/* Currently learning cards */}
        <div className="reveal delay-2 mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Zap size={15} className="text-accent" />
            <h3 className="font-display font-semibold text-base text-ink">Right Now</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {currentlyLearning.map((item, i) => (
              <div
                key={item.title}
                className={`reveal delay-${i + 1} border border-border rounded-xl p-5 bg-card hover:border-ink/25 transition-all duration-200 group`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{item.icon}</span>
                    <h4 className="font-display font-semibold text-sm text-ink">{item.title}</h4>
                  </div>
                  <span className="font-mono text-[10px] text-accent bg-accent/10 px-2 py-0.5 rounded-full flex-shrink-0">
                    {item.status}
                  </span>
                </div>
                <p className="font-body text-sm text-ink/65 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Future interests */}
        <div className="reveal delay-3">
          <div className="flex items-center gap-2 mb-6">
            <Compass size={15} className="text-accent" />
            <h3 className="font-display font-semibold text-base text-ink">On My Radar (Future)</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {futureInterests.map((item) => (
              <span
                key={item}
                className="font-body text-sm border border-dashed border-border text-muted px-4 py-1.5 rounded-full hover:border-accent hover:text-accent transition-colors duration-200 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
