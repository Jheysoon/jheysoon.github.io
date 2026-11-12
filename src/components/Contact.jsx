import SocialLinks from './SocialLinks.jsx'
import Section from './Section.jsx'

export default function Contact() {
  return (
    <Section id="contact" title="Contact Me" className="text-center">
      <p className="text-muted">Reach out on any of these:</p>
      <SocialLinks />
    </Section>
  )
}
