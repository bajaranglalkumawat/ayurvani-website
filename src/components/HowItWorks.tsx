const supports = [
  {
    icon: '🧠',
    title: 'Brain Wellness Support',
    desc: 'Brain के overall wellness को support करने के लिए selected Ayurvedic herbs।',
    color: '#e8eaf6',
    border: '#9fa8da',
    iconBg: '#3f51b5',
  },
  {
    icon: '⚡',
    title: 'Nervous System Support',
    desc: 'Nervous System के सामान्य functioning और wellness को support करने में सहायता।',
    color: '#fff8e1',
    border: '#ffe082',
    iconBg: '#f9a825',
  },
  {
    icon: '🎯',
    title: 'Focus & Mental Wellness',
    desc: 'Focus और overall mental wellness को support करने वाली पारंपरिक Ayurvedic herbs।',
    color: '#fce4ec',
    border: '#f48fb1',
    iconBg: '#e91e63',
  },
  {
    icon: '🌿',
    title: 'Daily Wellness',
    desc: 'Regular routine के साथ बच्चे की overall Brain & Nervous System Wellness पर ध्यान देने में सहायता।',
    color: '#e8f5ee',
    border: '#81c784',
    iconBg: '#2d7a50',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-label="How AyurVani works"
      style={{ background: '#fdf8f0', padding: '44px 20px' }}
    >
      {/* Label */}
      <div className="section-label">04. HOW IT WORKS</div>

      {/* Title */}
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.4rem', fontWeight: 700,
        color: '#1c1a16', lineHeight: 1.35, marginBottom: '6px',
      }}>
        AYURVANI कैसे{' '}
        <span style={{ color: '#1a5c38' }}>Support करता है?</span>
      </h2>
      <div className="title-underline" />

      {/* Support cards */}
      <div className="support-grid" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} role="list">
        {supports.map((s) => (
          <div
            key={s.title}
            role="listitem"
            style={{
              background: s.color,
              borderRadius: '16px', padding: '18px 16px',
              border: `1px solid ${s.border}`,
              display: 'flex', gap: '14px', alignItems: 'flex-start',
            }}
          >
            <div style={{
              width: '46px', height: '46px', borderRadius: '12px',
              background: s.iconBg, display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0,
              boxShadow: `0 2px 8px ${s.iconBg}40`,
            }} aria-hidden="true">
              {s.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1c1a16', marginBottom: '4px' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#3d3328', lineHeight: 1.6, margin: 0 }}>
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
