import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getEvent } from "./EventManager.js";

export const EventDetails = () => {
    // Return ( TITLE, DESIGNER, YEAR RELEASED, NUMBER OF PLAYERS, ESTIMATED TIME TO PLAY, AGE RECOMMENDATION, CATEGORIES)
    const { eventId } = useParams()
    const history = useHistory()

    const [event, setEvent] = useState([])

    useEffect(() => {
        getEvent(eventId).then(data => setEvent(data))
    }, [])

    return (
        <>
            <article className="eventInfo">

                <section className="eventDetails">
                    <h1>{event.game?.title}</h1>
                    <p>Description: {event.description}</p>
                    <p>Date: {event.date}</p>
                    <p>Time: {event.time}</p>
                    <p>Attendees: {event.attendees}</p>
                </section>

                <button className="eventUpdate" onClick={() => {history.push(`/events/${eventId}/update`)}}>Edit</button>

            </article>
        </>
    )
}