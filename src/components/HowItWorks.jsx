import { Fragment } from 'react'

const steps = [
  {
    label: 'STEP 1',
    pill: '850°C',
    title: 'Reactor heat is captured',
    body: 'Instead of venting 850°C heat into the sea, a heat exchanger redirects it to the Hydrox facility next door.',
  },
  {
    label: 'STEP 2',
    pill: '↻ 100%',
    title: 'Heat splits water',
    body: 'A closed chemical loop uses that heat to split water into hydrogen and oxygen. The chemicals inside recycle forever.',
  },
  {
    label: 'STEP 3',
    pill: 'H₂',
    pillAccent: true,
    title: 'Hydrogen is shipped',
    body: 'Clean hydrogen is compressed and delivered to shipping, steel, aviation and fertiliser buyers.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="section-inner">
        <span className="eyebrow accent">HOW IT WORKS</span>
        <h2>Water and heat in. Hydrogen out.</h2>
        <div className="grid-3 flow">
          {steps.map((s, i) => (
            <Fragment key={s.label}>
              <div className="card">
                <div className="step-head">
                  <span className="tag">{s.label}</span>
                  <span className={`pill${s.pillAccent ? ' pill-accent' : ''}`}>{s.pill}</span>
                </div>
                <h3>{s.title}</h3>
                <p className="muted">{s.body}</p>
              </div>
              {i < steps.length - 1 && <div className="flow-arrow">→</div>}
            </Fragment>
          ))}
        </div>
        <div className="callout">
          <span className="eyebrow accent">THE AI LAYER</span>
          <p>A digital twin monitors hundreds of sensors and makes 10,000 corrections per second — precision no human operator can achieve. It is why the economics work.</p>
        </div>
      </div>
    </section>
  )
}
