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
          <h3>Autonomous Rover Team</h3>
          <p>
            Design and build a ground robot that can navigate autonomously using
            sensors, mapping and control algorithms.
          </p>
          <ul className="card-list">
            <li>Embedded systems &amp; low-level control</li>
            <li>Perception and path planning</li>
            <li>Outdoor testing and competitions</li>
          </ul>
        </article>

        <article className="card">
          <h3>Robotics Projects Team</h3>
          <p>
            Work on smaller semester-based robotics projects in mixed-experience
            teams, from line followers to robotic arms.
          </p>
          <ul className="card-list">
            <li>Weekly build evenings</li>
            <li>Guidance from experienced members</li>
            <li>Beginner-friendly introduction to robotics</li>
          </ul>
        </article>

        <article className="card">
          <h3>Software &amp; Simulation Team</h3>
          <p>
            Focus on robot software, simulation and tooling to support the
            hardware teams and experiment with new ideas.
          </p>
          <ul className="card-list">
            <li>ROS, control and planning</li>
            <li>Simulated robots and scenarios</li>
            <li>Tooling, dashboards and CI</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

