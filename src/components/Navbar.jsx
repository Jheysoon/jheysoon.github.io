const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <nav className="navbar grey darken-1 navbar-fixed-top" style={{ borderRadius: 0 }}>
      <a className="navbar-brand mdl-color-text--white" href="#">JM</a>
      <ul className="nav navbar-nav pull-xs-right">
        {links.map(({ href, label }) => (
          <li className="nav-item" key={href}>
            <a className="nav-link mdl-color-text--white" href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
