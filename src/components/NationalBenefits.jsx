import barakahPhoto from '../assets/barakah.jpg'

const items = [
  {
    title: 'No new plants required',
    body: 'Hydrox attaches to reactors your country already operates or is already building.',
  },
  {
    title: 'Sovereign clean fuel supply',
    body: 'Domestic hydrogen at $1–2/kg — energy security without import dependence.',
  },
  {
    title: 'Heavy industry decarbonised',
    body: 'Affordable H₂ unlocks green steel, shipping, aviation and fertiliser — 30% of global emissions.',
  },
]

export default function NationalBenefits() {
  return (
    <section className="section">
      <div className="section-inner grid-2 align-center">
        <div>
          <span className="eyebrow accent">NATIONAL BENEFITS</span>
          <h2>What this unlocks for your country.</h2>
          <ol className="numbered-list">
            {items.map((it, i) => (
              <li key={it.title}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{it.title}</strong>
                  <p className="muted">{it.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="card highlight">
          <span className="tag">EXAMPLE · UAE</span>
          <h3>One Barakah reactor could out-produce the UAE's entire hydrogen demand.</h3>
          <p className="muted">50,000&ndash;80,000 tonnes per year — from heat currently vented into the Gulf.</p>
          <img className="photo-frame" src={barakahPhoto} alt="Barakah nuclear power plant, UAE" />
        </div>
      </div>
    </section>
  )
}
