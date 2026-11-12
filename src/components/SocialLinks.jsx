import { socials } from '../data.js'
import { FacebookIcon, GitHubIcon } from './Icons.jsx'

const icons = { github: GitHubIcon, facebook: FacebookIcon }

export default function SocialLinks() {
  return (
    <ul className="socials">
      {socials.map(({ label, href, icon }) => {
        const Icon = icons[icon]
        return (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
              <Icon />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
