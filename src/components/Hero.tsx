import {MEMBERSHIP_FORM_URL } from '../config'
import logoFull from '../assets/gears_branding/gears_logo.png'

export function Hero() {
  return (
    <>
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
            GEARS is a student-led STEM association that provides opportunities for challenge-based learning through interdisciplinary
            projects, competitions, workshops, and industry collaborations. Our mission is to help students develop practical skills, gain real world
            experience, and build meaningful connections while working on innovative solutions to technical and societal changes.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={MEMBERSHIP_FORM_URL}
              target="_blank"
              rel="noreferrer"
            >
              JOIN GEARS
            </a>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-header">
          <h2>What We Do</h2>
          <p>
            GEARS supports students by:
            <ul>
              <li>Providing teams with seed-funding to enable them to enter competitions</li>
              <li>Organizing and participating in STEM competitions</li>
              <li>Facilitating interdisciplinary projects</li>
              <li>Connecting students with industry partners</li>
              <li>Hosting workshops and networking events</li>
              <li>Creating opportunities for hands-on learning and professional development</li>
            </ul>
          </p>
        </div>
      </section>
    </>
  )
}

