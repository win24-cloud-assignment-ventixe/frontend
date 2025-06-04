import React from 'react'
import { Link } from 'react-router-dom'

const EventDetailItem = ({item}) => {

  const formatEventDate = (isoDateString) => {

    if (!isoDateString) return "Unknown date" // Check if date is provided, if not return "Unknown date" in console
 
    const date = new Date(isoDateString)

    if (isNaN(date)) return "Invalid date" // Check if date is valid, if not return "Invalid date" in console

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
        <div className="event-details">
            <div className="event-details-card">
                <div className="event-details-card-header"></div>
                <div className="event-details-card-info">
                    <div className="event-details-title">{item.title}<Link to={`/events/booking/${item.id}`}>Book Event</Link></div>
                    <div className="event-details-date"><i className="fa-light fa-calendar-minus"></i>{formatEventDate(item.eventDate)}</div>
                    <div className="event-details-location"><i className="fa-regular fa-location-dot"></i>{item.location}</div>
                </div>
                <hr className="solid" />
                <div className="event-details-description">
                    <p className="about-title">About Event</p>
                    <div className="event-description">{item.description}</div>
                </div>
            </div>
        </div>
  )
}

export default EventDetailItem