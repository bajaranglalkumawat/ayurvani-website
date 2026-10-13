import { useState } from 'react'

const faqs = [
  {
    q: 'क्या AyurVani हकलापन के लिए solution है?',
    a: 'AyurVani को हकलापन से जुड़ी daily wellness और communication routine के लिए Ayurvedic herbal support solution के रूप में तैयार किया गया है। इसमें Brahmi, Shankhpushpi, Ashwagandha और Jatamansi जैसी herbs हैं, जिनका Ayurveda में brain, cognitive, mental और nervous-system wellness के लिए पारंपरिक उपयोग होता रहा है।',
  },
  {
    q: 'क्या AyurVani हकलापन को ठीक करता है?',
    a: 'AyurVani को हकलापन के लिए supportive Ayurvedic solution के रूप में use किया जाता है। हर बच्चे का हकलापन अलग होता है, इसलिए किसी बच्चे के लिए 100% cure या guaranteed result का दावा नहीं किया जा सकता।',
  },
  {
    q: 'AyurVani में कौन-कौन सी herbs हैं?',
    a: 'Brahmi, Shankhpushpi, Ashwagandha और Jatamansi।',
  },
  {
    q: 'क्या AyurVani के साथ speech practice जरूरी है?',
    a: 'हाँ। बच्चे को बिना pressure के बोलने का समय देना, उसकी बात पूरी सुनना और relaxed speech practice करना daily routine का महत्वपूर्ण हिस्सा है।',
  },
  {
    q: 'क्या हकलापन बच्चे की गलती है?',
    a: 'नहीं। हकलापन बच्चे की गलती नहीं है। उसे डाँटना या उसका मजाक बनाना सही तरीका नहीं है।',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      style={{
        background: 'linear-gradient(180deg, #f5ede0 0%, #fdf8f0 100%)',
        padding: '44px 20px',
      }}
    >
      {/* Label */}
      <div className="section-label">FAQ</div>

      {/* Title */}
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.4rem', fontWeight: 700,
        color: '#1c1a16', lineHeight: 1.35, marginBottom: '6px',
      }}>
        हकलापन और AyurVani से{' '}
        <span style={{ color: '#c8900a' }}>जुड़े सवाल</span>
      </h2>
      <div className="title-underline" />

      {/* FAQ accordion */}
      <div role="list" aria-label="FAQ questions and answers">
        {faqs.map((faq, i) => (
          <div key={i} role="listitem" className="faq-item">
            <button
              id={`faq-q-${i}`}
              className="faq-question"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={`faq-a-${i}`}
            >
              <span style={{ flex: 1, textAlign: 'left' }}>
                <span style={{ color: '#c8900a', marginRight: '8px', fontWeight: 700 }}>
                  {i + 1}.
                </span>
                {faq.q}
              </span>
              <span
                style={{
                  color: '#c8900a', fontSize: '1.1rem', flexShrink: 0,
                  transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>
            <div
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              className={`faq-answer-wrap${open === i ? ' is-open' : ''}`}
              aria-hidden={open !== i}
              inert={open !== i}
            >
              <div className="faq-answer-inner">
                <div className="faq-answer">
                {faq.a}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
