export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand-mark">GE</span>
        <div className="brand-text">
          <span className="brand-name">GEARS</span>
          <span className="brand-subtitle">
            Robotics &amp; Engineering Study Association
          </span>
        </div>
      </div>

      <nav className="nav">
        <a href="#about">About</a>
        <a href="#teams">Teams</a>
        <a href="#events">Events</a>
        <a href="#membership">Membership</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

