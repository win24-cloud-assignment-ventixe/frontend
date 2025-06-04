import { Route, Routes } from 'react-router-dom'
import './App.css'
import EventPage from './assets/pages/EventPage'
import EventDetailPage from './assets/pages/EventDetailPage'
import BookEventPage from './assets/pages/BookEventPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<EventPage />} />
        <Route path="/events/:id" element={<EventDetailPage />} />
        <Route path="/events/booking/:id" element={<BookEventPage />} />
      </Routes>
    </>
  )
}

export default App
