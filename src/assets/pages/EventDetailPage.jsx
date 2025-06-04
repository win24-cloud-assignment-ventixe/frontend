import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import EventDetailItem from '../components/EventDetailItem'

const EventDetailPage = () => {
    const {id} = useParams()

    const [event, setEvent] = useState({})

    const getEvents = async () => {
        const res = await fetch(`https://cloudassignmenteventservice-b4d6cfaka6h2e0c2.swedencentral-01.azurewebsites.net/api/events/${id}`)

        if (res.ok) {
            const response = await res.json()
            setEvent(response.result)
        }
    }

    useEffect(() => {
        getEvents()
    }, [])


  return (
    <div className="portal-wrapper">
        <Nav />
        <Header />
        <main className="main-content">
          <EventDetailItem key={event.id} item={event} />
        </main>
        <Footer />
    </div>
  )
}

export default EventDetailPage

