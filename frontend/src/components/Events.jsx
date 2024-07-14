import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/events')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="events-page">
      <h2>Events</h2>
      {events.length === 0 ? (
        <p>No active events present.</p>
      ) : (
        events.map((event) => (
          <div key={event._id} className="event-card">
            <img src={event.Image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.time}</p>
            <p>{event.isOnline ? 'Online' : event.location}</p>
          </div>
        ))
      )}
      <Link to="/create-event" className="create-event-button">Create Event</Link>
    </div>
  );
};

export default Events;
