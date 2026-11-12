import { useEffect, useState } from 'react'
import { HomeIcon } from './Icons.jsx'

const links = [
  { id: 'home', label: 'Home', icon: true },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function BottomBar() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -45% 0px' },
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="bottombar" aria-label="Main">
      <a href="#home" className="brand">
        <strong>@jheysoon</strong>
        <small>Web Developer</small>
      </a>
      <ul>
        {links.map(({ id, label, icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? 'active' : undefined}
              aria-current={active === id ? 'location' : undefined}
              aria-label={icon ? label : undefined}
            >
              {icon ? <HomeIcon /> : label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
