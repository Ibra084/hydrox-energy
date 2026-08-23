const items = [
  {
    tag: 'JAEA · JAPAN · 2004',
    title: 'The chemistry is demonstrated',
    body: "Japan's atomic agency ran the world's first continuous sulfur-iodine pilot, upgraded in 2024.",
  },
  {
    tag: 'IDAHO NATIONAL LAB · USA',
    title: 'The efficiency is confirmed',
    body: "The US Department of Energy's lead lab validated the SI cycle in 2020 and runs an active nuclear-hydrogen program today.",
  },
  {
    tag: 'HTR-PM · CHINA · 2021',
    title: 'The reactor is commercial',
    body: "The world's first high-temperature gas-cooled reactor has been grid-connected since 2021. Korea, Japan and Poland are building more.",
  },
  {
    tag: 'GOOGLE DEEPMIND',
    title: 'The AI architecture is deployed',
    body: "The same digital-twin control architecture cut Google's datacentre cooling energy by 40% — in production, at scale.",
  },
]

export default function Proof() {
  return (
    <section id="proof" className="section alt">
      <div className="section-inner">
        <span className="eyebrow accent">PROVEN FOUNDATIONS</span>
        <h2>Every component already works.</h2>
        <div className="grid-2">
          {items.map((it) => (
            <div className="card" key={it.tag}>
              <span className="tag">{it.tag}</span>
              <h3>{it.title}</h3>
              <p className="muted">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
