// import { EVENT_INTEREST_FORM_URL, MEMBERSHIP_FORM_URL } from '../config'
import logoFull from '../assets/gears_branding/gears_logo.png'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-logo-wrapper">
          <img
            src={logoFull}
            alt="GEARS Robotics &amp; Engineering Association"
            className="hero-logo"
          />
        </div>
        <p className="hero-tagline">Gronigen Engineering and Robotics Study Association</p>
        <h1>
          Platform for STEM student challenges.
        </h1>
        <p className="hero-lead">
          GEARS is the association built to provide a platform for students of the University of Groningen and Hanze University of Applied Sciences
          to compete in student challenges in STEM fields (Science, Technology, Engineering, Math).
        </p>

        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href="https://docs.google.com/forms/d/e/1FAIpQLScOTrRwjyibTXeyARh09pIGIhvpeOx1ly8fGXQ6feubCfRUOQ/viewform?usp=publish-editor"
            target="_blank"
            rel="noreferrer"
          >
            JOIN GEARS
          </a>
        </div>
      </div>
    </section>
  )
}

