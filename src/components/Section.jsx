export default function Section({ id, title, className = '', children }) {
  return (
    <section id={id} className={`mx-auto max-w-5xl px-5 py-18 ${className}`}>
      <h2 className="mb-7 text-3xl font-bold tracking-tight">{title}</h2>
      {children}
    </section>
  )
}
