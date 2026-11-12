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
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-10 flex h-bar items-center justify-between border-t border-line bg-bg/85 px-[clamp(16px,5vw,56px)] backdrop-blur-md"
    >
      <a href="#home" className="flex flex-col leading-tight">
        <strong className="font-semibold">@jheysoon</strong>
        <small className="hidden text-xs text-muted sm:block">React · React Native · NestJS</small>
      </a>
      <ul className="flex h-full">
        {links.map(({ id, label, icon }) => {
          const isActive = active === id
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? 'location' : undefined}
                aria-label={icon ? label : undefined}
                className={`flex h-bar items-center border-b-2 px-2.5 text-sm transition sm:px-3.5 sm:text-[0.9rem] ${
                  isActive
                    ? 'border-blue-500 bg-blue-400/10 text-blue-400'
                    : 'border-transparent text-muted hover:text-ink'
                }`}
              >
                {icon ? <HomeIcon className="size-[18px]" /> : label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
