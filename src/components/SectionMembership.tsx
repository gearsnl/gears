import { MEMBERSHIP_FORM_URL } from '../config'

export function SectionMembership() {
  return (
    <section id="membership" className="section">
      <div className="membership">
        <div className="membership-info">
          <div className="membership-heading">
            <h2>Become a member</h2>
            <p>
              Membership is open to all students interested in robotics,
              engineering, and innovation. Join to build, compete, collaborate,
              and shape the future of GEARS together.
            </p>
          </div>
          <ul>
            <li>Apply to join one of our active competition teams</li>
            <li>
              Support the association through communication, events, outreach,
              and operations
            </li>
            <li>Access member-only build sessions, labs, and project evenings</li>
            <li>Priority access to workshops, company visits, and GEARS events</li>
          </ul>
          <p className="membership-note">
            For now, membership registration is handled via Google Forms. After
            you sign up, we will contact you by email with the next steps and
            payment details.
          </p>
        </div>

        <div className="membership-actions">
          <div className="membership-pricing-card">
            <span className="membership-price-badge">Limited launch offer</span>
            <span className="membership-price-highlight">
              First 25 members: only €2.50
            </span>
            <span className="membership-price">Then €10 per year</span>
            <a
              className="btn btn-primary membership-btn"
              href={MEMBERSHIP_FORM_URL}
              target="_blank"
              rel="noreferrer"
            >
              Fill in membership form
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

