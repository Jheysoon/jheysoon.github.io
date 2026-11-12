import Navbar from './components/Navbar.jsx'
import Parallax from './components/Parallax.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Parallax src="/img/programmer1.jpg" alt="Programmer at work" />
      <img src="/img/prof.jpg" alt="Jayson L. Martinez" className="img-thumbnail center-block" />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <h2 className="text-xs-center">Hi! am Jayson L. Martinez</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <About />
            <Projects />
          </div>
        </div>
      </div>
      <div className="row" id="contact" />

      <Footer />
    </>
  )
}
