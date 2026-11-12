import { GitHubIcon } from './Icons.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <a className="card card-link" href="https://github.com/jheysoon" target="_blank" rel="noopener noreferrer">
        <GitHubIcon className="card-icon" />
        <div>
          <h3>github.com/jheysoon</h3>
          <p>You can view all my projects on GitHub.</p>
        </div>
        <span className="card-arrow" aria-hidden="true">→</span>
      </a>
    </section>
  )
}
