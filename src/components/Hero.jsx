export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="section-inner">
        <div className="eyebrow-row">
          <span className="eyebrow accent">HYDROX</span>
          <span className="eyebrow">NUCLEAR × AI × HYDROGEN</span>
        </div>
        <h1>Nuclear waste heat.<br /><span className="accent">Clean fuel.</span></h1>
        <p className="lede">AI-optimised thermochemical hydrogen from the heat nuclear plants already throw away.</p>
        <div className="hero-actions">
          <a href="#invitation" className="btn btn-primary">Build the first facility with us</a>
          <a href="#solution" className="btn btn-ghost">See how it works</a>
        </div>
        <div className="stat-row">
          <div className="stat">
            <div className="stat-num accent">67%</div>
            <div className="stat-label">of nuclear energy wasted as heat today</div>
          </div>
          <div className="stat">
            <div className="stat-num accent">$1&ndash;2/kg</div>
            <div className="stat-label">target hydrogen cost — vs $4&ndash;8 today</div>
          </div>
          <div className="stat">
            <div className="stat-num accent">50&times;</div>
            <div className="stat-label">more clean H&#8322; from plants already built</div>
          </div>
        </div>
      </div>
    </section>
  )
}
