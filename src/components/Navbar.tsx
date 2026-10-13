import { useState } from 'react'

const navLinks = [
  { label: 'हकलापन', href: '#problem' },
  { label: 'उत्पाद', href: '#product' },
  { label: 'Ingredients', href: '#ingredients' },
  { label: 'Reviews', href: '#testimonials' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sticky-nav" role="navigation" aria-label="Main navigation">
      <div className="nav-inner" style={{ padding: '0 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px' }}>
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' }) }}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              textDecoration: 'none',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700, fontSize: '1.2rem', color: '#1a5c38',
            }}
            aria-label="AyurVani - Home"
          >
            <span style={{ fontSize: '1.4rem' }}>🌿</span>
            <span>AyurVani</span>
          </a>

          {/* Desktop Nav + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => handleNav('#order')}
              className="btn-primary"
              style={{ padding: '8px 16px', fontSize: '0.82rem', width: 'auto', borderRadius: '10px' }}
              aria-label="Order AyurVani now"
            >
              Order करें
            </button>
            <button
              onClick={() => setOpen(!open)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', color: '#1a5c38' }}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {open ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Dropdown menu */}
        {open && (
          <div
            style={{
              paddingBottom: '12px', borderTop: '1px solid #d9c9a8',
              animation: 'fadeUp 0.2s ease'
            }}
            role="menu"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                role="menuitem"
                onClick={() => handleNav(link.href)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '11px 4px', background: 'none', border: 'none',
                  cursor: 'pointer', fontSize: '0.95rem', fontWeight: 500,
                  color: '#1c1a16', fontFamily: "'Noto Sans Devanagari', sans-serif",
                  borderBottom: '1px solid #ede3d0',
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
