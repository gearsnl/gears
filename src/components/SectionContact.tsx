export function SectionContact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="section-header">
        <h2>Contact &amp; partners</h2>
        <p>
          Interested in collaborating, sponsoring hardware or inviting us for a
          demo? Reach out to the GEARS board.
        </p>
      </div>

      <div className="contact-grid">
        <div>
          <h3>Contact</h3>
          <p>
            Email:{' '}
            <a href="mailto:board@gears-association.example">
              board@gears-association.example
            </a>
            <br />
            Campus lab room · open most weekdays.
          </p>
        </div>
        <div>
          <h3>Partners</h3>
          <p>
            We work with companies and research groups in robotics and engineering
            to organise talks, visits and projects.
          </p>
          <div className="partner-row">
            <span className="partner-chip">Robotics Lab</span>
            <span className="partner-chip">Automation Group</span>
            <span className="partner-chip">Tech Company</span>
          </div>
        </div>
      </div>
    </section>
  )
}

