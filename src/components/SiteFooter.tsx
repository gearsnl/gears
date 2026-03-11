export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} GEARS </span>
      <span className="footer-links">
        {/* <a href="#membership">Membership</a>
        <a href="#events">Events</a> */}
        <br/>
        <a href="/privacy.html">Privacy policy</a>
      </span>
    </footer>
  )
}

