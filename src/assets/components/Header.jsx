import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  const getTitle = () => {
    const path = location.pathname

    if (path === "/") return "Events"
    if (path.startsWith("/events/")) return "Event Details"
    if (path === "/bookings") return "Bookings"

    return ""
  }


  return (
    <header className="header">
      <Link className="header-title h4" to="/"><i className="fa-regular fa-arrow-left"></i>{getTitle()}</Link>
    </header>
  )
}

export default Header