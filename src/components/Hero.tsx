import { EVENT_INTEREST_FORM_URL, MEMBERSHIP_FORM_URL } from '../config'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tagline">University Robotics &amp; Engineering</p>
        <h1>
          GEARS Robotics &amp;
          <br />
          Engineering Association
        </h1>
        <p className="hero-lead">
          GEARS brings together students who love robotics, embedded systems and
          engineering. Join us for hands-on projects, competitions and career
          events with industry partners.
        </p>

        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href={MEMBERSHIP_FORM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Join GEARS
          </a>
          <a
            className="btn btn-outline"
            href={EVENT_INTEREST_FORM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Stay updated on events
          </a>
        </div>
      </div>
    </section>
  )
}

