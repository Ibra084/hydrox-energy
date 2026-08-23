const bars = [
  { v: 2, label: 'Grey fossil gas' },
  { v: 3, label: 'Blue gas + CCS' },
  { v: 6, label: 'Green electrolysis' },
  { v: 1.5, label: 'Hydrox target', accent: true },
]

const stats = [
  { num: '65,000 t', label: 'hydrogen per reactor, per year' },
  { num: '4–5 yrs', label: 'payback period at $1.50/kg' },
  { num: '40–50 yrs', label: 'facility operating lifespan' },
]

export default function Economics() {
  return (
    <section id="economics" className="section">
      <div className="section-inner grid-2 align-center">
        <div className="chart-card">
          <div className="cost-chart">
            {bars.map((b) => (
              <div className={`cost-bar${b.accent ? ' accent' : ''}`} key={b.label}>
                <div className="fill" style={{ '--v': b.v }}></div>
                <span className={`v${b.accent ? ' accent' : ''}`}>${b.v.toFixed(2).replace(/\.00$/, '')}</span>
                <span className={`l${b.accent ? ' accent' : ''}`}>{b.label}</span>
              </div>
            ))}
          </div>
          <p className="source">H&#8322; production cost comparison, $/kg · Grey and blue hydrogen carry full carbon cost exposure</p>
        </div>
        <div>
          <span className="eyebrow accent">THE ECONOMICS</span>
          <h2>Clean hydrogen at $1&ndash;2 per kilogram.</h2>
          <div className="stat-list">
            {stats.map((s) => (
              <div className="stat-item" key={s.label}>
                <div className="big-num">{s.num}</div>
                <div className="muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
