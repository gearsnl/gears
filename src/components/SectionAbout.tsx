export function SectionAbout() {
  return (
    <section id="about" className="section section-alt">
      <div className="section-header">
        <h2>About GEARS</h2>
        <p>
          GEARS is the study association for students interested in robotics,
          mechatronics and engineering. We connect students, researchers and
          companies through social, study and career-focused activities.
        </p>
      </div>

      <div className="grid grid-3">
        <article className="card">
          <h3>Social</h3>
          <p>
            Meet like-minded students at our monthly socials, game nights and
            informal project evenings in the GEARS room.
          </p>
        </article>
        <article className="card">
          <h3>Study</h3>
          <p>
            Get support with hard courses through workshops, project reviews and
            peer-to-peer tutoring in robotics-related topics.
          </p>
        </article>
        <article className="card">
          <h3>Career</h3>
          <p>
            Explore future paths through company visits, tech talks and
            networking events with our industrial partners.
          </p>
        </article>
      </div>
    </section>
  )
}

