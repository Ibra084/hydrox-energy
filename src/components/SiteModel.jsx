const MODEL_SRC = `${import.meta.env.BASE_URL}site-model.html`

export default function SiteModel() {
  return (
    <section id="model" className="section model-section">
      <div className="section-inner">
        <span className="eyebrow accent">3D SITE MODEL</span>
        <h2>Walk the plant, stage by stage.</h2>
        <p className="model-lede">
          An interactive prototype of a Hydrox site — from electrolysis at Barakah today, to
          high-temperature reactor heat, to the full sulfur–iodine thermochemical cycle. Drag to
          orbit, scroll to zoom, and hover any structure to see what it does.
        </p>
        <div className="model-frame">
          <iframe
            src={MODEL_SRC}
            title="Hydrox 3D site model"
            loading="lazy"
            allow="fullscreen"
          ></iframe>
        </div>
        <div className="model-actions">
          <a href={MODEL_SRC} target="_blank" rel="noopener" className="btn btn-ghost">
            Open full screen ↗
          </a>
        </div>
      </div>
    </section>
  )
}
