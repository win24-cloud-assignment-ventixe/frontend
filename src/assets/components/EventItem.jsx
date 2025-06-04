import React from 'react'
import { Link } from 'react-router-dom'

const EventItem = ({item}) => {

  const formatEventDate = (isoDateString) => {
    const date = new Date(isoDateString)

    const datePart = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date)

    const timePart = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }).format(date)

    return `${datePart} - ${timePart}`;
  } 

  return (
    <Link to={`/events/${item.id}`}>
      <div className="event-card">
        <div className="event-card-header"></div>
        <div className="event-card-info">
          {/* <div className="event-date">{item.eventDate}</div> */}
          <div className="event-date">{formatEventDate(item.eventDate)}</div>
          <div className="event-title">{item.title}</div>
          <div className="event-location"><i className="fa-regular fa-location-dot"></i>{item.location}</div>
        </div>
        
      </div>
    </Link>


  )
}

export default EventItem