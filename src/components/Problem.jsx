export default function Problem() {
  return (
    <section id="problem" className="section">
      <div className="section-inner">
        <span className="eyebrow accent">THE PROBLEM</span>
        <h2>Two crises. One overlooked connection.</h2>
        <div className="grid-2">
          <div className="card">
            <span className="tag">01 · NUCLEAR WASTE HEAT</span>
            <div className="donut-row">
              <div className="donut" style={{ '--pct': 67 }}>
                <span>67%<small>wasted</small></span>
              </div>
              <div>
                <div className="big-num">2,000 TWh</div>
                <p className="muted">of heat discarded every year — equal to India's entire electricity consumption.</p>
              </div>
            </div>
            <p className="muted">440 reactors worldwide vent two-thirds of their energy into rivers and oceans — every day, since 1956.</p>
          </div>
          <div className="card">
            <span className="tag">02 · HYDROGEN COST</span>
            <div className="big-num accent">$4&ndash;8/kg</div>
            <p className="muted">Green hydrogen — still too expensive to decarbonise heavy industry.</p>
            <p className="muted">Shipping, steel, aviation and cement — 30% of global emissions — cannot run on batteries. They need affordable hydrogen.</p>
          </div>
        </div>
        <p className="source">Source: IEA World Energy Outlook 2024 · IRENA Hydrogen Report 2024</p>
      </div>
    </section>
  )
}
