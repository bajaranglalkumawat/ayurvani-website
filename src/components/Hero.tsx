export default function Hero() {
  const handleOrder = () => {
    document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' })
  }
  const handleLearnMore = () => {
    document.querySelector('#product')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" aria-label="Hero section" className="hero-section">
      <div className="hero-inner">
        <div className="hero-brand">
          <span aria-hidden="true">🌿</span>
          <span>Ayurvedic Herbal Support</span>
        </div>

        <h1 className="hero-title">
          क्या आपका बच्चा भी बोलते समय{' '}
          <span>हकलाता है?</span>
        </h1>

        <div className="hero-portrait">
          <img
            src="./hero.png"
            alt="A caring Indian mother sitting with her child who has a thoughtful expression"
          />
          <div className="hero-speech" aria-label="बच्चे के बोलने के उदाहरण">
            <span>"म-म-मेरा नाम…"</span>
            <span>"पा-पा-पानी…"</span>
          </div>
          <div className="hero-orbit" aria-hidden="true">🌱</div>
        </div>

        <div className="hero-copy">
          <p className="hero-lead">
            बच्चा मन में पूरी बात जानता है,{' '}
            <strong>बस शब्द बोलते समय हकलाहट होने लगती है।</strong>
          </p>
          <p className="hero-context">
            हर बार जब बच्चा हकलापन के डर से बोलने से पहले रुकता है, तब माँ-बाप के मन में एक सवाल जरूर आता है—
          </p>

          <div className="hero-quote">
            <span aria-hidden="true">“</span>
            <p>"मेरा बच्चा कब बिना झिझक अपनी बात कह पाएगा?"</p>
          </div>

          <p className="hero-support">
            अगर आपके बच्चे को भी बोलते समय हकलापन, शब्द दोहराने या रुकने की परेशानी होती है, तो उसके हकलापन को समझना और सही support देना जरूरी है।
          </p>

          <div className="hero-actions">
            <button id="hero-cta-learn" onClick={handleLearnMore} className="btn-primary">
              🌿 AyurVani के बारे में जानें →
            </button>
            <button id="hero-cta-order" onClick={handleOrder} className="hero-secondary">
              अभी Order करें →
            </button>
          </div>

          <div className="hero-tagline">
            <span className="hero-tagline-mark" aria-hidden="true">🌿</span>
            <span className="hero-tagline-name">AyurVani</span>
            <span>
              हकलापन से जुड़ी daily speech & wellness routine के लिए{' '}
              <strong>Ayurvedic Herbal Support</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
