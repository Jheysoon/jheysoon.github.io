import SocialLinks from './SocialLinks.jsx'
import { ArrowDownIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="avatar">
        <img src="/img/prof.jpg" alt="Jayson L. Martinez" width="160" height="160" />
      </div>
      <h1 className="name">Jayson L. Martinez</h1>
      <p className="role">Web Developer</p>
      <p className="tagline">Building for the web with PHP, JavaScript and MySQL.</p>
      <span className="badge">Open Source Contributor</span>
      <SocialLinks />
      <a href="#about" className="scroll-hint" aria-label="Scroll to About">
        <ArrowDownIcon />
      </a>
    </section>
  )
}
