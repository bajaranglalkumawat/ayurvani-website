const herbs = [
  {
    name: 'Brahmi',
    emoji: '🌿',
    desc: 'Brain और cognitive wellness के लिए पारंपरिक रूप से उपयोग की जाने वाली herb।',
    image: './images/brahmi.jpg',
    imageWidth: 1280,
    imageHeight: 960,
    imageAlt: 'Bacopa monnieri, Brahmi plant with a delicate white flower',
    imageCredit: 'Alex Abair · CC BY 4.0',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Bacopa_monnieri_flower_oblique_angle.jpg',
    color: '#1a5c38',
    bg: 'linear-gradient(135deg, #e8f5ee, #d0ead8)',
  },
  {
    name: 'Shankhpushpi',
    emoji: '🌸',
    desc: 'Mental wellness और cognitive support के लिए Ayurveda में पारंपरिक उपयोग।',
    image: './images/shankhpushpi.jpg',
    imageWidth: 1280,
    imageHeight: 969,
    imageAlt: 'Clitoria ternatea, vivid blue Shankhpushpi flower',
    imageCredit: 'Wilfredor · CC0',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Clitoria_ternatea.jpg',
    color: '#6a1b9a',
    bg: 'linear-gradient(135deg, #f3e5f5, #e8d5f0)',
  },
  {
    name: 'Ashwagandha',
    emoji: '🌰',
    desc: 'Stress management और nervous system wellness के support के लिए पारंपरिक रूप से उपयोग की जाती है।',
    image: './images/ashwagandha.jpg',
    imageWidth: 1280,
    imageHeight: 1920,
    imageAlt: 'Withania somnifera, Ashwagandha plant with its characteristic orange-red berry',
    imageCredit: 'SAplants · CC BY-SA 4.0',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Withania_somnifera_1DS-II_3-7467.jpg',
    color: '#7c4a1e',
    bg: 'linear-gradient(135deg, #fbe9d8, #f0d5bc)',
  },
  {
    name: 'Jatamansi',
    emoji: '🪴',
    desc: 'Mental wellness और calming support के लिए Ayurveda में पारंपरिक उपयोग।',
    image: './images/jatamansi.jpg',
    imageWidth: 1280,
    imageHeight: 1707,
    imageAlt: 'Nardostachys jatamansi, Jatamansi flowering plant',
    imageCredit: 'Plantagenet · CC BY-SA 4.0',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Cultivated_spikenard_Nardostachys_jatamansi_with_a_young_flowering_stem,_grown_outdoors_in_Yaroslavl_Oblast,_Russia.jpg',
    color: '#2e7d32',
    bg: 'linear-gradient(135deg, #e9f5ea, #d4edda)',
  },
]

export default function Ingredients() {
  return (
    <section
      id="ingredients"
      aria-label="AyurVani ingredients"
      style={{
        background: 'linear-gradient(180deg, #f5ede0 0%, #fdf8f0 100%)',
        padding: '44px 20px',
      }}
    >
      {/* Label */}
      <div className="section-label">सामग्री</div>

      {/* Title */}
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.4rem', fontWeight: 700,
        color: '#1c1a16', lineHeight: 1.35, marginBottom: '6px',
      }}>
        AyurVani में <span style={{ color: '#c8900a' }}>क्या है?</span>
      </h2>
      <div className="title-underline" />

      {/* Herbs image */}
      <div className="herb-image" style={{ borderRadius: '18px', overflow: 'hidden', marginBottom: '22px', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}>
        <img
          src="./herbs.png"
          alt="Ayurvedic herbs: Brahmi, Shankhpushpi, Ashwagandha, and Jatamansi arranged on natural surface"
          style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* Herb cards */}
      <div className="herb-grid" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} role="list" aria-label="AyurVani herbs">
        {herbs.map((herb, i) => (
          <div
            key={herb.name}
            role="listitem"
            className="herb-card"
            style={{
              background: herb.bg,
              borderRadius: '16px', padding: '16px',
              border: `1px solid ${herb.color}25`,
              display: 'grid', gap: '14px', alignItems: 'center',
            }}
          >
            <div className="herb-photo">
              <img
                src={herb.image}
                alt={herb.imageAlt}
                loading="lazy"
                decoding="async"
                width={herb.imageWidth}
                height={herb.imageHeight}
              />
              <span
                className="herb-number"
                style={{ background: herb.color }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span className="herb-photo-emoji" aria-hidden="true">{herb.emoji}</span>
            </div>
            <div className="herb-details">
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: herb.color, marginBottom: '4px' }}>
                🌿 {herb.name}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#3d3328', lineHeight: 1.6, margin: 0 }}>
                {herb.desc}
              </p>
              <a
                className="herb-image-credit"
                href={herb.imageCreditUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Image credit: ${herb.imageCredit}`}
              >
                {herb.imageCredit}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Formula tagline */}
      <div style={{
        marginTop: '20px',
        background: 'linear-gradient(135deg, #1a5c38, #2d7a50)',
        borderRadius: '16px', padding: '16px 18px',
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: '0.92rem', color: 'white', fontWeight: 600,
          marginBottom: '4px', letterSpacing: '0.01em',
        }}>
          Brahmi + Shankhpushpi + Ashwagandha + Jatamansi
        </p>
        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
          एक simple Ayurvedic herbal daily routine।
        </p>
      </div>
    </section>
  )
}
