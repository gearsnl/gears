export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} GEARS Robotics &amp; Engineering</span>
      <span className="footer-links">
        <a href="#membership">Membership</a>
        <a href="#events">Events</a>
      </span>
    </footer>
  )
}

