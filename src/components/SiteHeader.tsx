import logoSmall from '../assets/gears_branding/gears_logo_small.jpeg'
import { NavLink } from 'react-router-dom'
import {MEMBERSHIP_FORM_URL} from "../config.ts";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="brand">
          <div className="brand-text">
            <img
              src={logoSmall}
              alt="GEARS logo"
              className="brand-logo"
            />
            <div className="brand-text-lines">
              <span className="brand-name">GEARS</span>
              <span className="brand-subtitle">
                Gronigen Engineering and Robotics Study Association
              </span>
            </div>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/activities">Activities</NavLink>
          <NavLink to="/membership">Membership</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/login">Login</NavLink>
          <a
            href={MEMBERSHIP_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            JOIN GEARS
          </a>
        </nav>
      </div>
    </header>
  )
}

