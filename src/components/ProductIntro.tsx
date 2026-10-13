const pillars = [
  { icon: '🌿', label: 'Ayurvedic Herbal Support' },
  { icon: '🗣️', label: 'Daily Speech Practice' },
  { icon: '❤️', label: 'Parent Support' },
  { icon: '📋', label: 'Regular Progress Check' },
]

export default function ProductIntro() {
  const handleLearnMore = () => {
    document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="product"
      aria-label="AyurVani product introduction"
      style={{
        background: 'linear-gradient(160deg, #1a5c38 0%, #2d7a50 100%)',
        padding: '44px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: '-40px', right: '-40px',
        width: '160px', height: '160px',
        borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
        pointerEvents: 'none',
      }} aria-hidden="true" />
      <div style={{
        position: 'absolute', bottom: '-30px', left: '-30px',
        width: '120px', height: '120px',
        borderRadius: '50%', background: 'rgba(200,144,10,0.12)',
        pointerEvents: 'none',
      }} aria-hidden="true" />

      {/* Divider */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px',
      }}>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
        <span style={{ fontSize: '1.2rem' }}>🌿</span>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
      </div>

      {/* Label */}
      <div style={{
        fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em',
        textTransform: 'uppercase', color: '#f5c842', marginBottom: '8px',
      }}>
        हकलापन के लिए Ayurvedic Herbal Support
      </div>

      {/* Title */}
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.7rem', fontWeight: 700,
        color: 'white', marginBottom: '16px', lineHeight: 1.25,
      }}>
        प्रस्तुत है —{' '}
        <span style={{ color: '#f5c842', fontStyle: 'italic' }}>AyurVani</span>
      </h2>

      {/* Description */}
      <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.7, marginBottom: '14px' }}>
        AyurVani को बच्चों की हकलापन और daily communication routine के लिए{' '}
        <strong style={{ color: 'white' }}>Ayurvedic herbal support</strong> के रूप में तैयार किया गया है।
      </p>
      <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '28px' }}>
        इसमें ऐसी herbs शामिल हैं जिनका Ayurveda में पारंपरिक रूप से brain, cognitive, mental और nervous-system wellness के लिए उपयोग किया जाता रहा है।
      </p>

      {/* Pillars label */}
      <p style={{
        fontSize: '0.82rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)',
        marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.06em',
      }}>
        AyurVani के साथ एक simple routine:
      </p>

      {/* Pillar cards — 2x2 grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '10px', marginBottom: '28px',
      }} role="list" aria-label="AyurVani routine pillars">
        {pillars.map((p) => (
          <div
            key={p.label}
            role="listitem"
            style={{
              background: 'rgba(255,255,255,0.12)',
              borderRadius: '14px', padding: '16px 12px',
              textAlign: 'center', border: '1px solid rgba(255,255,255,0.18)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <div style={{ fontSize: '1.6rem', marginBottom: '6px' }}>{p.icon}</div>
            <div style={{ fontSize: '0.8rem', color: 'white', fontWeight: 500, lineHeight: 1.3 }}>
              {p.label}
            </div>
          </div>
        ))}
      </div>

      {/* Mission box */}
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '14px', padding: '16px',
        border: '1px solid rgba(245,200,66,0.3)',
        marginBottom: '24px',
      }}>
        <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f5c842', marginBottom: '6px', margin: '0 0 6px' }}>
          हमारा उद्देश्य
        </p>
        <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.65, margin: 0 }}>
          हकलापन को लेकर बच्चे पर pressure बढ़ाना नहीं, बल्कि उसकी daily routine में{' '}
          <strong style={{ color: 'white' }}>supportive care</strong> जोड़ना है।
        </p>
      </div>

      {/* CTA */}
      <button
        id="product-cta"
        onClick={handleLearnMore}
        className="btn-primary btn-gold pulse-anim"
        aria-label="Learn more about AyurVani"
      >
        AyurVani के बारे में जानें →
      </button>
    </section>
  )
}
