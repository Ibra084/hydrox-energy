import { Fragment } from 'react'

const steps = [
  {
    tag: '01 · REACTOR',
    title: 'High-temperature nuclear reactor',
    body: 'Runs at 850–950°C. Commercially operating in China since 2021. Its waste heat is free.',
  },
  {
    tag: '02 · CHEMISTRY',
    title: 'Thermochemical water splitting',
    body: 'Splits water into hydrogen using heat alone — no electricity. Every chemical inside is 100% recycled.',
  },
  {
    tag: '03 · AI',
    title: 'Real-time AI optimisation',
    body: '10,000 adjustments per second lift efficiency from 40% to 80% — the step that makes it economic.',
  },
]

export default function Solution() {
  return (
    <section id="solution" className="section alt">
      <div className="section-inner">
        <span className="eyebrow accent">THE SOLUTION</span>
        <h2>Three proven technologies, connected for the first time.</h2>
        <div className="grid-3 flow">
          {steps.map((s, i) => (
            <Fragment key={s.tag}>
              <div className="card">
                <span className="bar"></span>
                <span className="tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p className="muted">{s.body}</p>
              </div>
              {i < steps.length - 1 && <div className="flow-arrow">→</div>}
            </Fragment>
          ))}
        </div>
        <div className="equation">
          H&#8322;O + waste heat <span className="accent">→</span> H&#8322; + O&#8322;{' '}
          <span className="muted">· zero carbon · zero electricity</span>
        </div>
      </div>
    </section>
  )
}
