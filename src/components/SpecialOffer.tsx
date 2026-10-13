const offerItems = [
  { icon: '🌿', label: 'AyurVani Herbal Support', sub: '[Actual Pack Size]', highlight: true },
  { icon: '🎁', label: 'FREE Diet Chart', sub: 'बच्चे की daily routine के लिए simple diet guidance।' },
  { icon: '🎁', label: 'Speech Practice Routine', sub: 'घर पर relaxed speech practice के लिए simple routine।' },
  { icon: '👨‍⚕️', label: 'Weekly Doctor Check', sub: '[अगर वास्तव में available है]' },
  { icon: '📋', label: 'Weekly Progress Report', sub: 'बच्चे की routine और progress को track करने के लिए।' },
  { icon: '🚚', label: 'Home Delivery', sub: '' },
  { icon: '💳', label: '[Cash on Delivery]', sub: '' },
  { icon: '🔒', label: 'Secure Order', sub: '' },
]

export default function SpecialOffer() {
  const handleOrder = () => {
    document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="offer"
      aria-label="Special parent offer"
      style={{
        background: 'linear-gradient(160deg, #7c4a1e 0%, #a06030 50%, #c8900a 100%)',
        padding: '44px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <div style={{
        position: 'absolute', top: '-30px', right: '-30px',
        width: '120px', height: '120px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.06)',
        pointerEvents: 'none',
      }} aria-hidden="true" />
      <div style={{
        position: 'absolute', bottom: '-20px', left: '-20px',
        width: '90px', height: '90px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.04)',
        pointerEvents: 'none',
      }} aria-hidden="true" />

      {/* Gift icon + label */}
      <div style={{ textAlign: 'center', marginBottom: '8px' }}>
        <span style={{ fontSize: '2.5rem' }}>🎁</span>
      </div>
      <div style={{
        fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em',
        textTransform: 'uppercase', color: '#f5e6c8', marginBottom: '8px',
        textAlign: 'center',
      }}>
        Special Parent Offer
      </div>

      {/* Title */}
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.5rem', fontWeight: 700,
        color: 'white', marginBottom: '20px', lineHeight: 1.3,
        textAlign: 'center',
      }}>
        AyurVani के साथ पाएं
      </h2>

      {/* Offer items */}
      <div className="offer-grid" style={{ marginBottom: '24px' }} role="list" aria-label="What you get with AyurVani">
        {offerItems.map((item) => (
          <div
            key={item.label}
            role="listitem"
            className="offer-item"
            style={{
              background: item.highlight ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
              border: item.highlight ? '1px solid rgba(255,255,255,0.4)' : '1px solid rgba(255,255,255,0.15)',
            }}
          >
            <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{item.icon}</span>
            <div>
              <div style={{
                fontSize: '0.9rem', fontWeight: item.highlight ? 700 : 600,
                color: 'white', lineHeight: 1.3,
              }}>
                {item.label}
              </div>
              {item.sub && (
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.75)', marginTop: '2px', lineHeight: 1.4 }}>
                  {item.sub}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        id="offer-order-btn"
        onClick={handleOrder}
        className="btn-primary"
        style={{
          background: 'linear-gradient(135deg, #1a5c38, #2d7a50)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          fontSize: '1.05rem',
        }}
        aria-label="Order AyurVani now"
      >
        🌿 अभी AyurVani Order करें →
      </button>
    </section>
  )
}
