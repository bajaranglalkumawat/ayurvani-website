const Stars = () => (
  <div style={{ display: 'flex', gap: '2px', marginBottom: '8px' }} aria-label="5 star rating" role="img">
    {[1,2,3,4,5].map(n => (
      <span key={n} style={{ color: '#f9a825', fontSize: '0.95rem' }} aria-hidden="true">⭐</span>
    ))}
  </div>
)

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Customer testimonials"
      style={{
        background: 'linear-gradient(180deg, #f5ede0 0%, #fdf8f0 100%)',
        padding: '44px 20px',
      }}
    >
      {/* Customer count badge */}
      <div style={{
        background: 'linear-gradient(135deg, #1a5c38, #2d7a50)',
        borderRadius: '18px', padding: '20px',
        textAlign: 'center', marginBottom: '28px',
        boxShadow: '0 4px 20px rgba(26,92,56,0.3)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative circle */}
        <div style={{
          position: 'absolute', top: '-20px', right: '-20px',
          width: '80px', height: '80px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
        }} aria-hidden="true" />

        <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#f5c842', lineHeight: 1 }}>
          80K+
        </div>
        <div style={{ fontSize: '1rem', fontWeight: 600, color: 'white', marginTop: '4px', marginBottom: '8px' }}>
          Happy Customers ❤️
        </div>
        <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
          हजारों परिवारों ने AyurVani को अपनी daily wellness routine का हिस्सा बनाया है।
        </div>
      </div>

      {/* Label */}
      <div className="section-label">Reviews</div>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.2rem', fontWeight: 700, color: '#1c1a16',
        marginBottom: '6px', lineHeight: 1.35,
      }}>
        Parents का भरोसा ही हमारी{' '}
        <span style={{ color: '#c8900a' }}>सबसे बड़ी पहचान है।</span>
      </h2>
      <div className="title-underline" />

      {/* Testimonial 1 */}
      <div className="testimonial-card" role="article" aria-label="Customer review">
        <Stars />
        <blockquote style={{
          fontSize: '0.9rem', lineHeight: 1.7,
          margin: '0 0 12px', fontStyle: 'italic',
          borderLeft: '3px solid #2d7a50',
          paddingLeft: '12px',
        }}>
          "हमने AyurVani को अपने बच्चे की daily routine में शामिल किया। साथ में उसकी speaking practice पर भी ध्यान दिया। Routine follow करना हमारे लिए आसान रहा।"
        </blockquote>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #1a5c38, #2d7a50)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 700, fontSize: '0.9rem',
          }} aria-hidden="true">P</div>
          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#6b6355' }}>
            — [Real Parent Name]
          </span>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="testimonial-card" role="article" aria-label="Customer review">
        <Stars />
        <blockquote style={{
          fontSize: '0.9rem', lineHeight: 1.7,
          margin: '0 0 12px', fontStyle: 'italic',
          borderLeft: '3px solid #c8900a',
          paddingLeft: '12px',
          color: '#6b6355',
        }}>
          "[यहाँ वास्तविक customer experience डालें]"
        </blockquote>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #c8900a, #e5a820)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 700, fontSize: '0.9rem',
          }} aria-hidden="true">P</div>
          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#6b6355' }}>
            — [Real Parent Name]
          </span>
        </div>
      </div>

      {/* Footer note */}
      <div style={{
        textAlign: 'center',
        padding: '14px',
        background: '#e8f5ee',
        borderRadius: '12px',
        border: '1px solid #b8dfc8',
        marginBottom: '16px',
      }}>
        <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1a5c38', margin: 0 }}>
          Real Parents • Real Experiences • Real Stories
        </p>
      </div>

      <button
        id="view-all-reviews"
        onClick={() => {}}
        style={{
          display: 'block', width: '100%', padding: '12px',
          background: 'transparent', border: '2px solid #1a5c38',
          borderRadius: '12px', color: '#1a5c38', fontWeight: 600,
          fontSize: '0.9rem', cursor: 'pointer', textAlign: 'center',
          fontFamily: "'Noto Sans Devanagari', sans-serif",
        }}
        aria-label="View all reviews"
      >
        सभी Reviews देखें →
      </button>

      {/* Note about testimonials */}
      <p style={{
        fontSize: '0.72rem', color: '#9e9080', textAlign: 'center',
        marginTop: '12px', lineHeight: 1.5,
      }}>
        80K+ और testimonials केवल आपके वास्तविक, verifiable customer data के आधार पर रखें।
      </p>
    </section>
  )
}
