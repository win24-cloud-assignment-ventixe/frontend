import React from 'react'
import { useLocation } from 'react-router-dom'

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
      <h4 className="header-title"><i className="fa-regular fa-arrow-left"></i>{getTitle()}</h4>
    </header>
  )
}

export default Header