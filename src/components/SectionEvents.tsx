import { EVENT_INTEREST_FORM_URL } from '../config'

export function SectionEvents() {
  return (
    <section id="events" className="section section-alt">
      <div className="section-header">
        <h2>Upcoming events</h2>
        <p>
          A selection of the activities planned for this semester. All students
          with an interest in robotics and engineering are welcome.
        </p>
      </div>

      <div className="events">
        <article className="event">
          <div className="event-date">
            <span className="event-day">12</span>
            <span className="event-month">MAR</span>
          </div>
          <div className="event-body">
            <h3>Intro to Microcontrollers Evening</h3>
            <p>
              Hands-on session where you program your first microcontroller and
              blink LEDs, read sensors and control small motors.
            </p>
            <span className="event-meta">
              Lab room, 18:30–21:30 · all levels welcome
            </span>
          </div>
        </article>

        <article className="event">
          <div className="event-date">
            <span className="event-day">26</span>
            <span className="event-month">MAR</span>
          </div>
          <div className="event-body">
            <h3>Robotics Company Talk &amp; Networking</h3>
            <p>
              Learn how robotics is used in industry today and meet engineers
              working on autonomous systems and automation.
            </p>
            <span className="event-meta">
              Lecture hall, 17:00–19:00 · followed by drinks
            </span>
          </div>
        </article>

        <article className="event">
          <div className="event-date">
            <span className="event-day">09</span>
            <span className="event-month">APR</span>
          </div>
          <div className="event-body">
            <h3>Robot Challenge Night</h3>
            <p>
              Small teams build simple robots from kits and compete in fun
              challenges such as line following and obstacle courses.
            </p>
            <span className="event-meta">
              Makerspace, 18:00–22:00 · registration required
            </span>
          </div>
        </article>
      </div>

      <div className="section-cta">
        <a
          className="btn btn-outline"
          href={EVENT_INTEREST_FORM_URL}
          target="_blank"
          rel="noreferrer"
        >
          Register interest via Google Forms
        </a>
      </div>
    </section>
  )
}

