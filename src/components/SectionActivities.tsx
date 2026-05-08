export function SectionActivities() {
  return (
    <section id="teams" className="section">
      <div className="section-header">
        <h2>Teams</h2>
        <p>
          Join one of our project teams to work on robotics and engineering
          challenges throughout the year.
        </p>
      </div>

      <div className="grid grid-3">
        <article className="card">
          <h3>Makercie Rover Team</h3>
          <p>
            Makercie is a student rover team focused on space exploration and
            challenge-based engineering. Founded in 2023, the team has grown
            into an interdisciplinary group from the University of Groningen and
            Hanze, and won the Remote Formula of the European Rover Challenge.
          </p>
          <ul className="card-list">
            <li>
              Learn more at{' '}
              <a href="https://makercie.nl/" target="_blank" rel="noreferrer">
                makercie.nl
              </a>
            </li>
            <li>On-site and remote rover challenge experience</li>
            <li>Interdisciplinary engineering team structure</li>
          </ul>
        </article>

        <article className="card">
          <h3>Kiwi Aerospace CanSat Team</h3>
          <p>
            Kiwi Aerospace is a six-member engineering student team competing in
            the World CanSat Challenge 2026 in Mexico City, hosted by UNAM and
            PEU. The team designs, builds, and launches a 2U model satellite
            with full end-to-end ownership across the mission lifecycle.
          </p>
          <ul className="card-list">
            <li>Real-time telemetry and environmental sensing payload</li>
            <li>Custom autogyro controlled descent and safe egg recovery</li>
            <li>From design reviews to flight operations and analysis</li>
          </ul>
        </article>

        <article className="card">
          <h3>Coming Soon</h3>
          <p>New activity updates will be announced here soon.</p>
        </article>
      </div>
    </section>
  )
}

