import { featuredProject, projects } from "../data.js";
import { AppleIcon, GitHubIcon, GlobeIcon, GooglePlayIcon } from "./Icons.jsx";
import Section from "./Section.jsx";

const linkIcons = { globe: GlobeIcon, play: GooglePlayIcon, apple: AppleIcon };

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent-2";
const cardLink = `rounded-2xl border border-line bg-surface p-6 transition hover:border-accent/50 hover:bg-accent/6 ${focusRing}`;

function Tags({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-accent/25 bg-accent/12 px-2.5 py-1 text-xs text-violet-300"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ name, description, tags, links, screenshots }) {
  return (
    <article className="mb-4 rounded-2xl bg-linear-135 from-accent-2/60 via-accent/60 to-purple-500/60 p-px shadow-[0_0_40px_rgb(124_92_245/0.15)]">
      <div className="rounded-[15px] bg-bg/95 p-6 sm:p-8">
        <h3 className="mb-2 text-2xl font-bold tracking-tight">{name}</h3>
        <p className="mb-5 max-w-2xl leading-relaxed text-muted">
          {description}
        </p>
        <Tags items={tags} />
        <ul className="mt-6 flex flex-wrap gap-3">
          {links.map(({ label, href, icon }) => {
            const Icon = linkIcons[icon];
            return (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2 text-sm font-medium transition hover:border-accent/50 hover:bg-accent/10 ${focusRing}`}
                >
                  <Icon className="size-4" />
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="-mx-6 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-0">
          {screenshots.map(({ src, alt }) => (
            <li key={src} className="w-40 shrink-0 snap-start sm:w-auto">
              <img
                src={src}
                alt={alt}
                width="599"
                height="1300"
                loading="lazy"
                className="h-auto w-full rounded-xl border border-line"
              />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <FeaturedProject {...featuredProject} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        {projects.map(({ name, description, tags, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col ${cardLink}`}
          >
            <h3 className="mb-1 font-semibold">{name}</h3>
            <p className="mb-4 text-muted">{description}</p>
            <div className="mt-auto">
              <Tags items={tags} />
            </div>
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
          <span aria-hidden="true" className="ml-auto text-xl text-muted">
            →
          </span>
        </a>
      </div>
    </Section>
  );
}
