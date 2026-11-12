import { projects } from '../data.js'
import { GitHubIcon } from './Icons.jsx'
import Section from './Section.jsx'

const cardLink =
  'rounded-2xl border border-line bg-surface p-6 transition hover:border-accent/50 hover:bg-accent/6 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent-2'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        {projects.map(({ name, description, tags, href }) => (
          <a key={name} href={href} target="_blank" rel="noopener noreferrer" className={`flex flex-col ${cardLink}`}>
            <h3 className="mb-1 font-semibold">{name}</h3>
            <p className="mb-4 text-muted">{description}</p>
            <ul className="mt-auto flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li key={tag} className="rounded-full border border-accent/25 bg-accent/12 px-2.5 py-1 text-xs text-violet-300">
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        ))}
        <a
          href="https://github.com/Jheysoon?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-5 ${cardLink}`}
        >
          <GitHubIcon className="size-9 shrink-0" />
          <div>
            <h3 className="mb-1 font-semibold">More on GitHub</h3>
            <p className="text-muted">Browse all my public repositories.</p>
          </div>
          <span aria-hidden="true" className="ml-auto text-xl text-muted">→</span>
        </a>
      </div>
    </Section>
  )
}
