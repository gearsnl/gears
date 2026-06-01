export function SectionAbout() {
  return (
    <section id="about" className="section section-alt">
      <div className="section-header">
        <h2>About GEARS</h2>
        <p>
          GEARS is the Groningen non-profit study association built for facilitating teams
          competing in student challenges. Built by students, for students.
        </p>
        <br/>
        <p>
          Bureaucracy is the most time-consuming part of starting a new team. Our mission
           is to facilitate the formation and growth of teams competing
          in student challenges by allowing teams to focus on the quality of the R&D. 
        </p>
      </div>

      <div className="grid grid-3">
        <article className="card">
          <h3>Team Perks</h3>
          <p>
            Facilitated bureaucracy process for new and established teams. 
          </p>
        </article>
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

