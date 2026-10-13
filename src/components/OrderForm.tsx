import { useState } from 'react'

interface OrderFormProps {
  onSuccess: () => void
  success: boolean
}

export default function OrderForm({ onSuccess, success }: OrderFormProps) {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [errors, setErrors] = useState<{ name?: string; mobile?: string }>({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const errs: { name?: string; mobile?: string } = {}
    if (!name.trim()) errs.name = 'कृपया अपना नाम भरें'
    if (!mobile.match(/^[6-9]\d{9}$/)) errs.mobile = 'कृपया 10 अंकों का सही mobile number भरें'
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setLoading(true)
    // Simulate order submission
    setTimeout(() => {
      setLoading(false)
      onSuccess()
    }, 1200)
  }

  if (success) {
    return (
      <section
        id="order"
        aria-label="Order placed successfully"
        style={{ background: '#fdf8f0', padding: '44px 20px', textAlign: 'center' }}
      >
        <div style={{ fontSize: '3.5rem', marginBottom: '14px' }}>🎉</div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.4rem', fontWeight: 700, color: '#1a5c38', marginBottom: '10px',
        }}>
          Order Placed!
        </h2>
        <p style={{ fontSize: '0.92rem', color: '#3d3328', lineHeight: 1.7 }}>
          आपका order सफलतापूर्वक place हो गया है। हम जल्दी ही आपसे contact करेंगे।
        </p>
        <div style={{
          marginTop: '20px', padding: '16px',
          background: '#e8f5ee', borderRadius: '14px', border: '1px solid #b8dfc8',
        }}>
          <p style={{ fontSize: '0.82rem', color: '#1a5c38', fontWeight: 600, margin: 0 }}>
            🔒 आपकी जानकारी सुरक्षित रखी जाएगी।
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="order"
      aria-label="Order AyurVani form"
      style={{ background: '#fdf8f0', padding: '44px 20px' }}
    >
      {/* Label */}
      <div className="section-label">Order Now</div>

      {/* Title */}
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.4rem', fontWeight: 700,
        color: '#1c1a16', lineHeight: 1.35, marginBottom: '4px',
      }}>
        अपने बच्चे के लिए{' '}
        <span style={{ color: '#1a5c38' }}>AyurVani मंगाएँ</span>
      </h2>
      <p style={{ fontSize: '0.88rem', color: '#6b6355', marginBottom: '6px' }}>
        सिर्फ 2 जानकारी भरें
      </p>
      <div className="title-underline" />

      <form onSubmit={handleSubmit} noValidate aria-label="AyurVani order form">
        {/* Name field */}
        <div style={{ marginBottom: '16px' }}>
          <label
            htmlFor="order-name"
            style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#3d3328', marginBottom: '6px' }}
          >
            आपका नाम <span style={{ color: '#c62828' }} aria-hidden="true">*</span>
          </label>
          <input
            id="order-name"
            type="text"
            className="form-input"
            placeholder="अपना नाम"
            value={name}
            onChange={(e) => { setName(e.target.value); setErrors(p => ({ ...p, name: undefined })) }}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            autoComplete="name"
          />
          {errors.name && (
            <p id="name-error" role="alert" style={{ color: '#c62828', fontSize: '0.78rem', marginTop: '4px' }}>
              {errors.name}
            </p>
          )}
        </div>

        {/* Mobile field */}
        <div style={{ marginBottom: '24px' }}>
          <label
            htmlFor="order-mobile"
            style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#3d3328', marginBottom: '6px' }}
          >
            मोबाइल नंबर <span style={{ color: '#c62828' }} aria-hidden="true">*</span>
          </label>
          <input
            id="order-mobile"
            type="tel"
            className="form-input"
            placeholder="10 Digit Mobile Number"
            value={mobile}
            onChange={(e) => { setMobile(e.target.value.replace(/\D/g, '').slice(0, 10)); setErrors(p => ({ ...p, mobile: undefined })) }}
            aria-required="true"
            aria-invalid={!!errors.mobile}
            aria-describedby={errors.mobile ? 'mobile-error' : undefined}
            inputMode="numeric"
            autoComplete="tel"
          />
          {errors.mobile && (
            <p id="mobile-error" role="alert" style={{ color: '#c62828', fontSize: '0.78rem', marginTop: '4px' }}>
              {errors.mobile}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          id="order-submit-btn"
          type="submit"
          className="btn-primary pulse-anim"
          disabled={loading}
          aria-label="Place AyurVani order"
        >
          {loading ? (
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span style={{ display: 'inline-block', width: '16px', height: '16px', border: '2px solid white', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
              Order हो रहा है...
            </span>
          ) : (
            'अभी Order करें →'
          )}
        </button>

        {/* Privacy note */}
        <div style={{
          marginTop: '14px', display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '6px',
        }}>
          <span style={{ fontSize: '0.9rem' }}>🔒</span>
          <p style={{ fontSize: '0.78rem', color: '#6b6355', margin: 0 }}>
            आपकी जानकारी सुरक्षित रखी जाएगी।
          </p>
        </div>
      </form>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
