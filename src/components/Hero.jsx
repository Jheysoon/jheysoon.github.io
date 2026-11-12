import { profile } from '../data.js'
import SocialLinks from './SocialLinks.jsx'
import { ArrowDownIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-var(--spacing-bar))] flex-col items-center justify-center px-5 py-12 text-center"
    >
      <div className="size-44 rounded-full bg-linear-135 from-accent-2 via-accent via-60% to-purple-500 p-[3px] shadow-[0_0_60px_rgb(124_92_245/0.35)]">
        <img
          src="/img/avatar.jpg"
          alt={profile.name}
          width="160"
          height="160"
          className="block size-full rounded-full border-[3px] border-bg object-cover"
        />
      </div>
      <h1 className="mt-7 mb-2 bg-linear-to-b from-white from-30% to-indigo-300 bg-clip-text text-[clamp(2.25rem,6vw,3.25rem)] leading-tight font-bold tracking-tighter text-transparent">
        {profile.name}
      </h1>
      <p className="mt-2 mb-5 text-lg tracking-[0.18em] text-muted uppercase">{profile.role}</p>
      <p className="mb-5 max-w-md leading-relaxed text-muted">{profile.tagline}</p>
      <span className="rounded-lg border border-line bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-400">
        {profile.badge}
      </span>
      <SocialLinks />
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 text-muted motion-safe:animate-bob"
      >
        <ArrowDownIcon className="size-[22px]" />
      </a>
    </section>
  )
}
