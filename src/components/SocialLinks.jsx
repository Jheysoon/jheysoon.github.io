import { socials } from '../data.js'
import { GitHubIcon } from './Icons.jsx'

const icons = { github: GitHubIcon }

export default function SocialLinks() {
  return (
    <ul className="mt-7 flex justify-center gap-3">
      {socials.map(({ label, href, icon }) => {
        const Icon = icons[icon]
        return (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="grid size-11 place-items-center rounded-full bg-accent text-white shadow-[0_0_20px_rgb(124_92_245/0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgb(124_92_245/0.7)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent-2"
            >
              <Icon className="size-[22px]" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
