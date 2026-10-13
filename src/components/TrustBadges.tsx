const badges = [
  { icon: '🏛️', label: 'AYUSH', sub: '[Actual AYUSH License / Details]' },
  { icon: '🏭', label: 'GMP', sub: 'Good Manufacturing Practices' },
  { icon: '🌐', label: 'ISO', sub: '[Actual ISO Certification]' },
  { icon: '🍃', label: 'FSSAI', sub: '[Actual FSSAI License]' },
  { icon: '🧪', label: '[Actual Additional Certification]', sub: '[Certificate Details]' },
]

export default function TrustBadges() {
  return (
    <section
      id="trust"
      aria-label="Quality certifications and trust badges"
      style={{ background: '#fdf8f0', padding: '44px 20px' }}
    >
      {/* Label */}
      <div className="section-label">भरोसा</div>

      {/* Title */}
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.4rem', fontWeight: 700,
        color: '#1c1a16', lineHeight: 1.35, marginBottom: '4px',
      }}>
        भरोसा क्यों करें?
      </h2>
      <p style={{ fontSize: '0.88rem', color: '#6b6355', marginBottom: '6px', lineHeight: 1.6 }}>
        बच्चे के लिए Product चुनते समय Quality सबसे जरूरी है
      </p>
      <div className="title-underline" />

      {/* Badges grid — 2+2+1 */}
      <div className="trust-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }} role="list" aria-label="Quality certifications">
        {badges.slice(0, 4).map((b) => (
          <div key={b.label} role="listitem" className="trust-badge">
            <div style={{ fontSize: '1.8rem', marginBottom: '6px' }} aria-hidden="true">{b.icon}</div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1a5c38', marginBottom: '3px' }}>
              {b.label}
            </div>
            <div style={{ fontSize: '0.72rem', color: '#6b6355', lineHeight: 1.35, textAlign: 'center' }}>
              {b.sub}
            </div>
          </div>
        ))}
      </div>
      {/* 5th badge full-width */}
      <div role="listitem" className="trust-badge" style={{ flexDirection: 'row', gap: '12px', padding: '14px 16px', justifyContent: 'flex-start' }}>
        <div style={{ fontSize: '1.8rem' }} aria-hidden="true">{badges[4].icon}</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1a5c38', marginBottom: '2px' }}>
            {badges[4].label}
          </div>
          <div style={{ fontSize: '0.72rem', color: '#6b6355' }}>{badges[4].sub}</div>
        </div>
      </div>

      {/* Bottom message */}
      <div style={{
        marginTop: '18px',
        padding: '14px 16px',
        background: 'linear-gradient(135deg, #e8f5ee, #d0ead8)',
        borderRadius: '14px',
        border: '1px solid #b8dfc8',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '0.82rem', color: '#1a5c38', fontWeight: 600, margin: '0 0 8px' }}>
          Clear Ingredients • Quality Manufacturing • Transparent Information
        </p>
        <button
          id="view-certificates"
          onClick={() => {}}
          style={{
            background: 'none', border: '1px solid #1a5c38', borderRadius: '8px',
            padding: '6px 16px', fontSize: '0.82rem', color: '#1a5c38',
            fontWeight: 600, cursor: 'pointer',
            fontFamily: "'Noto Sans Devanagari', sans-serif",
          }}
          aria-label="View quality certificates"
        >
          Certificates देखें →
        </button>
      </div>
    </section>
  )
}
