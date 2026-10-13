const weeks = [
  { week: 'Week 1', task: 'Routine Start' },
  { week: 'Week 2', task: 'Speech Pattern Review' },
  { week: 'Week 3', task: 'Routine Follow-up' },
  { week: 'Week 4', task: 'Progress Review' },
]

export default function ProfessionalGuidance() {
  return (
    <section
      id="guidance"
      aria-label="Professional guidance for stammering"
      style={{
        background: 'linear-gradient(180deg, #f5ede0 0%, #fdf8f0 100%)',
        padding: '44px 20px',
      }}
    >
      {/* Icon */}
      <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>👨‍⚕️</div>

      {/* Label */}
      <div className="section-label">Professional Guidance</div>

      {/* Title */}
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.4rem', fontWeight: 700,
        color: '#1c1a16', lineHeight: 1.35, marginBottom: '6px',
      }}>
        हकलापन में{' '}
        <span style={{ color: '#1a5c38' }}>Professional Guidance</span>
      </h2>
      <div className="title-underline" />

      <div className="guidance-photo">
        <img
          src="./images/professional.jpg"
          alt="स्वास्थ्य विशेषज्ञ, professional guidance का प्रतीक"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Intro */}
      <div style={{
        background: '#e8f5ee', borderRadius: '14px',
        padding: '14px 16px', marginBottom: '22px',
        border: '1px solid #b8dfc8',
      }}>
        <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1a5c38', marginBottom: '4px', margin: '0 0 4px' }}>
          हर बच्चे का हकलापन अलग होता है
        </p>
        <p style={{ fontSize: '0.86rem', color: '#3d3328', lineHeight: 1.6, margin: 0 }}>
          इसलिए बच्चे की age, हकलापन का pattern और communication difficulty को समझना जरूरी है।
        </p>
      </div>

      {/* Weekly progress */}
      <p style={{
        fontSize: '0.8rem', fontWeight: 700, color: '#c8900a',
        textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px',
      }}>
        Weekly Progress Check
      </p>

      <div role="list" aria-label="Weekly progress timeline">
        {weeks.map((w, i) => (
          <div key={w.week} role="listitem" className="week-row">
            <div className="week-num" aria-label={w.week}>{w.week}</div>
            <div style={{ color: '#3d3328', flex: 1, fontSize: '0.88rem' }}>
              <span style={{ color: '#6b6355', marginRight: '6px' }}>→</span>
              {w.task}
            </div>
            {i === weeks.length - 1 && (
              <div style={{
                width: '10px', height: '10px', borderRadius: '50%',
                background: '#2d7a50', flexShrink: 0,
              }} aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      {/* Doctor check report placeholder */}
      <div style={{
        marginTop: '18px',
        padding: '14px 16px',
        background: '#fff8e1',
        borderRadius: '12px',
        border: '1px dashed #f9a825',
        fontSize: '0.82rem',
        color: '#6b6355',
      }}>
        <strong style={{ color: '#c8900a' }}>Doctor Check Report</strong>
        <br />
        [यहाँ वास्तविक doctor check report / consultation proof दिखाएँ]
      </div>

      {/* Important note */}
      <div style={{
        marginTop: '18px',
        background: 'white',
        borderRadius: '14px',
        padding: '16px',
        border: '1px solid #ede3d0',
        display: 'flex', gap: '12px', alignItems: 'flex-start',
      }}>
        <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>⚠️</span>
        <p style={{ fontSize: '0.86rem', color: '#3d3328', lineHeight: 1.65, margin: 0 }}>
          अगर बच्चे का हकलापन लगातार बना हुआ है, बढ़ रहा है या बोलने में बहुत struggle दिखाई देता है, तो{' '}
          <strong style={{ color: '#1a5c38' }}>Speech-Language Pathologist</strong> से assessment कराना भी उचित है।
        </p>
      </div>
    </section>
  )
}
