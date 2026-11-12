export default function Footer() {
  return (
    <footer className="page-footer grey darken-2">
      <div className="container grey darken-2">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="mdl-color-text--white">Contact Me</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/jayson.martinez.359126"
              className="btn mdl-color-text--white indigo darken-1"
              aria-label="Facebook"
            >
              <span className="fa fa-facebook fa-lg" />
            </a>{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Jheysoon"
              className="btn btn-secondary"
              aria-label="GitHub"
            >
              <span className="fa fa-github fa-lg" />
            </a>
          </div>
          <div className="col l4 offset-l2 s12" />
        </div>
      </div>
      <br />
      <div className="footer-copyright grey darken-3">
        <div className="container">&copy; 2016 Copyright</div>
      </div>
    </footer>
  )
}
