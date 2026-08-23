const items = [
  { label: 'Digital twin', body: 'a live physics simulation of the entire plant.' },
  { label: 'Prediction', body: 'sees instability 30 seconds before it happens.' },
  { label: 'Optimisation', body: '10,000 corrections per second, autonomously.' },
  { label: 'Learning', body: 'measurably smarter every hour of operation.' },
]

const bars = [20, 28, 24, 34, 40, 38, 52, 64, 72, 82, 94, 100]

export default function AiEngine() {
  return (
    <section className="section alt">
      <div className="section-inner grid-2 align-center">
        <div>
          <span className="eyebrow accent">THE AI ENGINE</span>
          <h2>The intelligence that makes it economic.</h2>
          <ol className="numbered-list">
            {items.map((it, i) => (
              <li key={it.label}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <div><strong>{it.label}</strong> — {it.body}</div>
              </li>
            ))}
          </ol>
          <p className="muted footnote">A hardware failsafe operates independently of the AI — the same architecture used in every commercial nuclear facility.</p>
        </div>
        <div className="panel">
          <div className="panel-head">
            <span>HYDROX CONTROL · LIVE</span>
            <span className="status"><i></i>OPTIMAL</span>
          </div>
          <div className="panel-body">
            <div className="donut lg" style={{ '--pct': 80 }}>
              <span>80%<small>efficiency</small></span>
            </div>
            <div className="meters">
              <div className="meter">
                <div className="meter-label"><span>HELIUM LOOP</span><span>874°C</span></div>
                <div className="meter-track"><div className="meter-fill" style={{ width: '87%' }}></div></div>
              </div>
              <div className="meter">
                <div className="meter-label"><span>H&#8322; YIELD</span><span>7.4 t/hr</span></div>
                <div className="meter-track"><div className="meter-fill" style={{ width: '74%' }}></div></div>
              </div>
              <div className="meter">
                <div className="meter-label"><span>LOOP CLOSURE</span><span>100%</span></div>
                <div className="meter-track"><div className="meter-fill" style={{ width: '100%' }}></div></div>
              </div>
            </div>
          </div>
          <div className="bars">
            {bars.map((h, i) => (
              <div key={i} style={{ '--h': `${h}%` }}></div>
            ))}
          </div>
          <p className="chart-caption">Efficiency trajectory · commissioning → year one</p>
        </div>
      </div>
    </section>
  )
}
