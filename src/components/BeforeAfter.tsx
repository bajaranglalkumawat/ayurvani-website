const beforeSteps = [
  { icon: '💬', text: 'हकलापन' },
  { icon: '↓', text: 'शब्दों में रुकावट', small: true },
  { icon: '↓', text: 'बोलने में झिझक', small: true },
]

const afterSteps = [
  { icon: '💪', text: 'Daily Practice' },
  { icon: '↓', text: 'Positive Communication', small: true },
  { icon: '↓', text: 'Supportive Routine', small: true },
  { icon: '↓', text: 'Better Confidence', small: true },
]

export default function BeforeAfter() {
  return (
    <section
      id="results"
      aria-label="Before and after AyurVani routine"
      style={{ background: '#fdf8f0', padding: '44px 20px' }}
    >
      {/* Label */}
      <div className="section-label">Before → After</div>

      {/* Title */}
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.4rem', fontWeight: 700,
        color: '#1c1a16', lineHeight: 1.35, marginBottom: '6px',
      }}>
        हकलापन से{' '}
        <span style={{ color: '#1a5c38' }}>Confidence की ओर</span>
      </h2>
      <div className="title-underline" />

      {/* Before/After grid */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {/* Before */}
        <div style={{
          flex: 1, borderRadius: '18px', padding: '18px 14px',
          background: 'linear-gradient(160deg, #ffebee, #fce4ec)',
          border: '1px solid #f48fb1',
        }}>
          <div style={{
            fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#c62828', marginBottom: '10px',
          }}>
            पहले
          </div>
          {/* Pull quote */}
          <div style={{
            background: 'white', borderRadius: '12px',
            padding: '10px 12px', marginBottom: '12px',
            fontSize: '0.92rem', fontWeight: 700, color: '#7c4a1e',
            border: '1px solid #f4c0c0',
          }}>
            "म-म-मेरा…"
          </div>
          {beforeSteps.map((s) => (
            <div key={s.text} style={{
              textAlign: 'center', padding: s.small ? '2px 0' : '6px 0',
            }}>
              {!s.small && <div style={{ fontSize: '1.1rem', marginBottom: '2px' }}>{s.icon}</div>}
              <div style={{
                fontSize: s.small ? '0.75rem' : '0.82rem',
                color: s.small ? '#b71c1c88' : '#b71c1c',
                fontWeight: s.small ? 400 : 600,
                lineHeight: 1.3,
              }}>
                {s.text}
              </div>
            </div>
          ))}
        </div>

        {/* Arrow divider */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.4rem', color: '#c8900a', fontWeight: 700,
          flexShrink: 0, padding: '0 2px',
        }} aria-hidden="true">
          →
        </div>

        {/* After */}
        <div style={{
          flex: 1, borderRadius: '18px', padding: '18px 14px',
          background: 'linear-gradient(160deg, #e8f5ee, #d0ead8)',
          border: '1px solid #81c784',
        }}>
          <div style={{
            fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#1a5c38', marginBottom: '10px',
          }}>
            Routine के साथ
          </div>
          {/* Pull quote */}
          <div style={{
            background: 'white', borderRadius: '12px',
            padding: '10px 12px', marginBottom: '12px',
            fontSize: '0.82rem', fontWeight: 700, color: '#1a5c38',
            border: '1px solid #b8dfc8', lineHeight: 1.3,
          }}>
            "मैं अपनी बात कह सकता हूँ।"
          </div>
          {afterSteps.map((s) => (
            <div key={s.text} style={{
              textAlign: 'center', padding: s.small ? '2px 0' : '6px 0',
            }}>
              {!s.small && <div style={{ fontSize: '1.1rem', marginBottom: '2px' }}>{s.icon}</div>}
              <div style={{
                fontSize: s.small ? '0.75rem' : '0.82rem',
                color: s.small ? '#1a5c3888' : '#1a5c38',
                fontWeight: s.small ? 400 : 600,
                lineHeight: 1.3,
              }}>
                {s.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{
        background: '#fff8e1', borderRadius: '14px',
        padding: '14px 16px', border: '1px solid #ffe082',
      }}>
        <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#7c4a1e', marginBottom: '6px', margin: '0 0 6px' }}>
          हर बच्चे की journey अलग होती है
        </p>
        <p style={{ fontSize: '0.82rem', color: '#6b6355', lineHeight: 1.6, margin: '0 0 6px' }}>
          इसलिए हम guaranteed cure का दावा नहीं करते।
        </p>
        <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1a5c38', margin: 0 }}>
          हमारा focus है:{' '}
          <span style={{ color: '#3d3328', fontWeight: 400 }}>
            हकलापन को समझना + सही support + consistent routine
          </span>
        </p>
      </div>
    </section>
  )
}
