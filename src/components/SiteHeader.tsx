import logoSmall from '../assets/gears_branding/gears_logo_small.jpeg'
import { MEMBERSHIP_FORM_URL } from '../config'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="brand">
          <div className="brand-text">
            <img
              src={logoSmall}
              alt="GEARS logo"
              className="brand-logo"
            />
            <div className="brand-text-lines">
              <span className="brand-name">GEARS</span>
              <span className="brand-subtitle">
                Gronigen Engineering and Robotics Study Association
              </span>
            </div>
          </div>
        </div>

        <nav className="nav">
          <a href="#contact">Contact</a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScOTrRwjyibTXeyARh09pIGIhvpeOx1ly8fGXQ6feubCfRUOQ/viewform?usp=publish-editor"
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            JOIN GEARS
          </a>
        </nav>
      </div>
    </header>
  )
}

