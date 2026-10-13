const routineBlocks = [
  {
    icon: '🌅',
    time: 'सुबह',
    steps: [
      'Healthy Breakfast',
      'AyurVani — label के अनुसार',
    ],
    color: '#ff8f00',
    bg: '#fff8e1',
  },
  {
    icon: '🗣️',
    time: 'दिन में',
    steps: [
      '10–15 मिनट relaxed speech practice।',
      'बच्चे को बिना बीच में रोके अपनी बात पूरी करने दें।',
    ],
    color: '#1565c0',
    bg: '#e3f2fd',
  },
  {
    icon: '🌇',
    time: 'शाम',
    steps: [
      'Family conversation / reading / storytelling।',
    ],
    color: '#6a1b9a',
    bg: '#f3e5f5',
  },
  {
    icon: '🌙',
    time: 'रात',
    steps: [
      'Relaxed bedtime routine और पर्याप्त आराम।',
    ],
    color: '#1a5c38',
    bg: '#e8f5ee',
  },
]

export default function DailyRoutine() {
  return (
    <section
      id="routine"
      aria-label="Daily AyurVani routine"
      style={{ background: '#fdf8f0', padding: '44px 20px' }}
    >
      {/* Label */}
      <div className="section-label">Daily Routine</div>

      {/* Title */}
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.4rem', fontWeight: 700,
        color: '#1c1a16', lineHeight: 1.35, marginBottom: '6px',
      }}>
        AyurVani के साथ{' '}
        <span style={{ color: '#1a5c38' }}>Daily Hakalapan Support Routine</span>
      </h2>
      <div className="title-underline" />

      <div className="routine-photo">
        <img
          src="./images/family-reading.jpg"
          alt="बच्चा एक बड़े व्यक्ति के साथ पढ़ाई और बातचीत करता हुआ"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Vertical timeline */}
      <div className="routine-timeline" style={{ position: 'relative', paddingLeft: '24px' }} role="list" aria-label="Daily routine steps">
        {/* Vertical line */}
        <div style={{
          position: 'absolute', left: '11px', top: '10px', bottom: '10px',
          width: '2px', background: 'linear-gradient(to bottom, #f9a825, #1a5c38)',
          borderRadius: '1px',
        }} aria-hidden="true" />

        {routineBlocks.map((block, i) => (
          <div key={block.time} role="listitem" style={{ marginBottom: i < routineBlocks.length - 1 ? '18px' : 0, position: 'relative' }}>
            {/* Timeline dot */}
            <div style={{
              position: 'absolute', left: '-24px', top: '14px',
              width: '24px', height: '24px', borderRadius: '50%',
              background: block.color, display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '0.7rem',
              boxShadow: `0 0 0 3px white, 0 0 0 5px ${block.color}40`,
              zIndex: 1,
            }} aria-hidden="true">
              <span style={{ fontSize: '0.75rem' }}>{block.icon}</span>
            </div>

            {/* Card */}
            <div style={{
              background: block.bg, borderRadius: '14px',
              padding: '14px 16px', border: `1px solid ${block.color}30`,
              marginLeft: '8px',
            }}>
              <div style={{
                fontSize: '0.78rem', fontWeight: 700, color: block.color,
                textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px',
              }}>
                {block.icon} {block.time}
              </div>
              {block.steps.map((step) => (
                <div key={step} style={{
                  fontSize: '0.88rem', color: '#1c1a16', lineHeight: 1.55,
                  padding: '4px 0', display: 'flex', gap: '8px', alignItems: 'flex-start',
                }}>
                  <span style={{ color: block.color, fontWeight: 700, flexShrink: 0 }}>+</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Weekly check banner */}
      <div style={{
        marginTop: '22px',
        background: 'linear-gradient(135deg, #c8900a, #e5a820)',
        borderRadius: '16px', padding: '16px 18px',
        display: 'flex', gap: '12px', alignItems: 'flex-start',
      }}>
        <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>📅</span>
        <div>
          <div style={{ fontWeight: 700, color: 'white', fontSize: '0.92rem', marginBottom: '4px' }}>
            हर रविवार
          </div>
          <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>
            Weekly Doctor Check / Progress Review
          </div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginTop: '6px', fontStyle: 'italic' }}>
            Weekly doctor check केवल तभी mention करें जब यह आपकी वास्तविक service में उपलब्ध हो।
          </div>
        </div>
      </div>
    </section>
  )
}
