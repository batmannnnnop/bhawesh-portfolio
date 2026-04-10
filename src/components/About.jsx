// About.jsx — personal intro in a natural, conversational tone
export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Section number decoration */}
      <span
        className="absolute top-10 right-0 font-display font-bold select-none pointer-events-none"
        style={{ fontSize: 'clamp(60px,14vw,180px)', color: 'rgba(26,24,20,0.04)', lineHeight: 1 }}
      >
        02
      </span>

      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="reveal font-mono text-xs text-accent tracking-widest mb-4 uppercase">About Me</p>

        <div className="reveal delay-1 grid md:grid-cols-2 gap-16 items-start">
          {/* Left — main text */}
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              A curious student who learns by building.
            </h2>

            <div className="space-y-4 text-ink/75 font-body leading-relaxed text-[15px]">
              <p>
                I'm <strong className="text-ink font-medium">Bhawesh Chandnani</strong>, a B.Tech Computer Science student
                at JK Lakshmipat University, Jaipur (batch of 2028). I'm in my Second year, which means I'm still very
                much at the beginning of this journey — and I'm genuinely okay with that.
              </p>
              <p>
                Right now, I spend most of my time getting comfortable with <strong className="text-ink font-medium">C, C++, and Python</strong>,
                building a solid foundation in data structures and algorithms, and slowly dipping my toes into
                Machine Learning and web development through actual projects.
              </p>
              <p>
                I'm drawn to <strong className="text-ink font-medium">AI/ML</strong> because of how it connects
                problem-solving with real-world impact — things like predicting accident zones or making healthcare
                accessible feel meaningful to work on. I'm also picking up web development because being able to{' '}
                <em>ship something people can use</em> is genuinely exciting.
              </p>
              <p>
                My goal isn't to be the smartest person in the room. It's to keep improving consistently, contribute
                to interesting projects, and land a good internship where I can learn even faster.
              </p>
            </div>
          </div>

          {/* Right — quick facts */}
          <div className="reveal delay-2 space-y-4">
            {[
              { label: 'Currently Studying', value: 'B.Tech Computer Science · JK Lakshmipat University' },
              { label: 'Year', value: '2nd Year (2024–2028)' },
              { label: 'CGPA', value: '7.6 / 10' },
              { label: 'Interests', value: 'Machine Learning, Software Engineering, Full-Stack Development' },
              { label: 'Currently Learning', value: 'Web Dev fundamentals + Generative AI basics' },
              { label: 'Goal', value: 'Land a meaningful internship & build things that actually work' },
              { label: 'Based In', value: 'Jaipur, Rajasthan, India' },
            ].map((item) => (
              <div key={item.label} className="border-b border-border pb-4">
                <p className="font-mono text-[11px] text-accent tracking-wider uppercase mb-1">{item.label}</p>
                <p className="font-body text-sm text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
