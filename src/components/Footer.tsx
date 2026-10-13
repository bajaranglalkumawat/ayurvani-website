export default function Footer() {
  const handleOrder = () => {
    document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      id="footer"
      aria-label="Footer"
      style={{ background: '#1c1a16' }}
    >
      {/* Final emotional message */}
      <div style={{
        background: 'linear-gradient(160deg, #1a5c38, #2d7a50)',
        padding: '40px 20px',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative bg leaf */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '10rem', opacity: 0.04,
          pointerEvents: 'none',
        }} aria-hidden="true">🌿</div>

        {/* Heart icon */}
        <div style={{ fontSize: '2rem', marginBottom: '12px' }}>❤️</div>

        {/* Section label */}
        <div style={{
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '12px',
        }}>
          अंतिम संदेश
        </div>

        {/* Title */}
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.4rem', fontWeight: 700,
          color: 'white', marginBottom: '20px', lineHeight: 1.35,
        }}>
          बच्चे के हकलापन को{' '}
          <span style={{ color: '#f5c842', fontStyle: 'italic' }}>नजरअंदाज न करें</span>
        </h2>

        {/* Message paragraphs */}
        <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, marginBottom: '12px' }}>
          आज बच्चा सिर्फ शब्दों में अटक रहा है।
        </p>
        <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: '18px' }}>
          कल वही हकलापन उसके confidence और communication को भी प्रभावित कर सकता है।
        </p>

        {/* 3 need statements */}
        {[
          'उसे डराने की जरूरत नहीं।',
          'उसे समझने की जरूरत है।',
          'उसे समय देने की जरूरत है।',
          'और उसकी daily routine को सही support देने की जरूरत है।',
        ].map((line) => (
          <p key={line} style={{
            fontSize: '0.92rem', color: 'white', fontWeight: 500,
            lineHeight: 1.65, margin: '0 0 6px',
          }}>
            {line}
          </p>
        ))}

        {/* Brand stamp */}
        <div style={{ margin: '24px 0 20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '4px' }}>🌿</div>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700, fontSize: '1.3rem', color: 'white', marginBottom: '6px',
          }}>
            AyurVani
          </div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
            हकलापन के लिए Ayurvedic Herbal Daily Support
          </div>
        </div>

        {/* Final CTA */}
        <button
          id="footer-order-btn"
          onClick={handleOrder}
          className="btn-primary btn-gold"
          aria-label="Order AyurVani now"
        >
          अभी AyurVani Order करें →
        </button>
      </div>

      {/* Disclaimer */}
      <div style={{ padding: '20px', background: '#111' }}>
        <h3 style={{
          fontSize: '0.78rem', fontWeight: 700, color: '#9e9080',
          textTransform: 'uppercase', letterSpacing: '0.08em',
          marginBottom: '8px',
        }}>
          Disclaimer
        </h3>
        <p style={{ fontSize: '0.72rem', color: '#6b6355', lineHeight: 1.7, margin: 0 }}>
          AyurVani एक Ayurvedic herbal wellness support product है। यह किसी बीमारी का उपचार, निदान या रोकथाम का दावा नहीं करता। किसी भी स्वास्थ्य समस्या के लिए योग्य चिकित्सक से परामर्श लें। परिणाम व्यक्तिगत भिन्नता के आधार पर अलग-अलग हो सकते हैं।
        </p>
        <p style={{ fontSize: '0.7rem', color: '#4a4035', marginTop: '12px', textAlign: 'center' }}>
          © 2024 AyurVani. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
