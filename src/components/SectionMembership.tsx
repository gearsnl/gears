import { MEMBERSHIP_FORM_URL } from '../config'

export function SectionMembership() {
  return (
    <section id="membership" className="section">
      <div className="section-header">
        <h2>Become a member</h2>
        <p>
          Membership is open to all students with an interest in robotics and
          engineering. Joining gives you access to our labs, projects and
          member-only events.
        </p>
      </div>

      <div className="membership">
        <div className="membership-info">
          <ul>
            <li>Access to member-only project evenings and labs</li>
            <li>Priority registration for workshops and company events</li>
            <li>Discounts on trips, competitions and merchandise</li>
            <li>Opportunities to join committees and project teams</li>
          </ul>
          <p className="membership-note">
            For now, membership registration is handled via Google Forms. After
            you sign up, we will contact you by email with the next steps and
            payment details.
          </p>
        </div>

        <div className="membership-actions">
          <a
            className="btn btn-primary membership-btn"
            href={MEMBERSHIP_FORM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Fill in membership form
          </a>
          <span className="membership-price">
            Suggested contribution: €10 per year
          </span>
        </div>
      </div>
    </section>
  )
}

