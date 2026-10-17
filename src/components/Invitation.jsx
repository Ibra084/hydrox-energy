const cards = [
  {
    tag: 'HOST',
    title: 'Pilot partnership',
    body: 'Co-locate the first demonstration unit with ENEC, the UAE's national nuclear operator.',
  },
  {
    tag: 'ENABLE',
    title: 'Regulatory pathway',
    body: 'Work with us and the IAEA to define the first safety framework for nuclear-adjacent hydrogen.',
  },
  {
    tag: 'BACK',
    title: 'Investment',
    body: 'Fund the AI layer and pilot facility — the one missing piece of a system that otherwise exists.',
  },
]

export default function Invitation() {
  return (
    <section id="invitation" className="section alt invitation">
      <div className="section-inner">
        <span className="eyebrow accent">THE INVITATION</span>
        <h2>Build the first facility with us.</h2>
        <div className="grid-3">
          {cards.map((c) => (
            <div className="card" key={c.tag}>
              <span className="bar"></span>
              <span className="tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <p className="muted">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
