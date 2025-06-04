import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BookEventPage = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [event, setEvent] = useState({})
    const [formData, setFormData] = useState({ eventId: id, firstName: '', lastName: '', email: '', streetName: '', postalCode: '', city: '' })

    const getEvents = async () => {
        try {
            const res = await fetch(`https://cloudassignmenteventservice-b4d6cfaka6h2e0c2.swedencentral-01.azurewebsites.net/api/events/${id}`)
            if (!res.ok) throw new Error("Failed to fetch event details")

            const response = await res.json()
            setEvent(response.result)
        } catch (error) {
            console.error(error)
        }
    }

    const postBooking = async () => {
        try {
            const res = await fetch(`https://cloudassignmentbookingservice-c4gqb5h8bhgdbbac.swedencentral-01.azurewebsites.net/api/bookings`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (!res.ok) {
                console.error('Failed to book event')
            } else {
                console.log('Event booked successfully')
                navigate('/')
            }
        } catch (error) {
            console.error('Error booking event:', error)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await postBooking()
    }

    useEffect(() => {
        getEvents()
    }, [])

  return (
    <div className="booking-wrapper">
        <div className="booking-surface">
            <div className="center-content booking-content">
                <h3>Book Event - {event.title}</h3>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input className="form-input" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input className="form-input" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Street Name</label>
                        <input className="form-input" type="text" name="streetName" value={formData.streetName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Postal Code</label>
                        <input className="form-input" type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">City</label>
                        <input className="form-input" type="text" name="city" value={formData.city} onChange={handleChange} required />
                    </div>
                    <button className="btn btn-submit" type="submit">Book Now</button>
                </form>
            </div>
        </div>
        

    </div>
  )
}

export default BookEventPage