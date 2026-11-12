import { useEffect, useRef, useState } from 'react'

// React port of the old jQuery/Materialize parallax plugin (js/parallax.js).
export default function Parallax({ src, alt }) {
  const containerRef = useRef(null)
  const imgRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) return
    const container = containerRef.current
    const img = imgRef.current

    function update() {
      const containerHeight = container.offsetHeight || (window.innerWidth < 601 ? img.height : 500)
      const top = container.getBoundingClientRect().top + window.scrollY
      const bottom = top + containerHeight
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const percentScrolled = (scrollTop + windowHeight - top) / (containerHeight + windowHeight)
      const offset = Math.round((img.height - containerHeight) * percentScrolled)

      if (bottom > scrollTop && top < scrollTop + windowHeight) {
        img.style.transform = `translate3d(-50%, ${offset}px, 0)`
      }
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [loaded])

  return (
    <div className="parallax-container" ref={containerRef}>
      <div className="parallax">
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          style={{ display: loaded ? 'block' : 'none' }}
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  )
}
