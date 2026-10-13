const symptoms = [
  'बोलते समय शब्द दोहराता है?',
  'आवाज़ को खींचकर बोलता है?',
  'शब्द शुरू करते समय रुक जाता है?',
  'बोलते समय अटकता है?',
  'लोगों के सामने ज्यादा हकलाता है?',
  'Class में बोलने से झिझकता है?',
  'अपनी बात कहने से बचने लगा है?',
]

export default function ProblemSection() {
  return (
    <section
      id="problem"
      aria-label="Stammering problem awareness"
      style={{ background: '#fdf8f0', padding: '44px 20px' }}
    >
      {/* Section label */}
      <div className="section-label">हकलापन को समझें</div>

      {/* Title */}
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.4rem', fontWeight: 700,
        color: '#1c1a16', lineHeight: 1.35, marginBottom: '6px',
      }}>
        हकलापन का असर सिर्फ{' '}
        <span style={{ color: '#1a5c38' }}>बोलने तक नहीं रहता</span>
      </h2>
      <div className="title-underline" />

      <p style={{ fontSize: '0.9rem', color: '#6b6355', marginBottom: '20px', lineHeight: 1.65 }}>
        जब बच्चा बार-बार हकलाता है, तो कुछ बच्चों में इसका असर उनकी daily communication पर भी दिखाई दे सकता है।
      </p>

      <div className="problem-visual" aria-label="बच्चे के स्कूल और परिवार के अनुभव">
        <div className="problem-classroom">
          <img
            src="./images/classroom.jpg"
            alt="कक्षा में दूसरे बच्चों के बीच बैठा एक छात्र"
            loading="lazy"
            decoding="async"
          />
          <span className="problem-visual-mark" aria-hidden="true">✳</span>
        </div>
        <div className="problem-family">
          <img
            src="./hero.png"
            alt="माँ अपने बच्चे के साथ प्यार से समय बिताती हुई"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Symptom checklist */}
      <div className="symptoms-grid" role="list" aria-label="Common stuttering symptoms">
        {symptoms.map((s) => (
          <div key={s} className="symptom-item" role="listitem">
            <span className="symptom-check" aria-hidden="true">✓</span>
            <span>{s}</span>
          </div>
        ))}
      </div>

      {/* Child's worry quote */}
      <div style={{
        margin: '22px 0',
        padding: '18px 16px',
        background: 'linear-gradient(135deg, #fff8ee, #fef3e2)',
        borderRadius: '16px',
        border: '1px solid #f0d8a0',
        borderLeft: '4px solid #c8900a',
      }}>
        <p style={{
          fontSize: '1rem', fontStyle: 'italic', fontWeight: 600,
          color: '#7c4a1e', margin: 0, lineHeight: 1.5,
        }}>
          "अगर मैं हकलाया तो लोग क्या सोचेंगे?"
        </p>
      </div>

      {/* Closing empathy */}
      <p style={{
        fontSize: '0.92rem', color: '#3d3328', lineHeight: 1.7,
        padding: '16px', background: '#e8f5ee', borderRadius: '14px',
        border: '1px solid #b8dfc8',
      }}>
        इसीलिए हकलापन को समझना और बच्चे को{' '}
        <strong style={{ color: '#1a5c38' }}>positive support</strong> देना जरूरी है।
      </p>
    </section>
  )
}
