import { skills } from '../data.js'
import Section from './Section.jsx'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        {skills.map(({ title, items }) => (
          <article key={title} className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="mb-4 font-semibold">{title}</h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-accent/25 bg-accent/12 px-2.5 py-1 text-xs text-violet-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
