import { skills } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <div className="grid">
        {skills.map(({ title, items }) => (
          <article className="card" key={title}>
            <h3>{title}</h3>
            <ul className="chips">
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
