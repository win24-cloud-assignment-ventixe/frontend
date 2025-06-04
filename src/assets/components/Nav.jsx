import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Nav = () => {

  const location = useLocation()
  const isEventsActive = location.pathname === "/" || location.pathname.startsWith("/events")

  return (
    <nav className="navbar">
        <div className="logotype">
            <NavLink to="/" className="logo">
                <img src="/src/assets/images/ventixe-logo.svg" alt="Logo-icon" />
                <span>Ventixe</span>
            </NavLink>
        </div>
        <div className="nav-links">
            <NavLink className={`nav-link events${isEventsActive ? " active" : ""}`} to="/"><i className="fa-sharp fa-regular fa-ticket-perforated nav-icon"></i>Events</NavLink>
            {/* <NavLink className={({ isActive }) => `nav-link bookings${isActive ? " active" : ""}`} to="/booking"><i className="fa-regular fa-square-check nav-icon"></i>Bookings</NavLink> */}
        </div>

    </nav>
  )
}

export default Nav