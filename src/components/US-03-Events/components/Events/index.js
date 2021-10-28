import React from 'react'
import './style.css'

export default function Event(props) {
    const {index, cityName, eventName, eventDate, imgUrl} = props;
    return (
        <div className="mainWrapper">
            <p key={index} className="eventContainer">
                city name: {cityName}<br/>
                event name: {eventName}<br/>
                event dates: {eventDate}<br/>
                <img src={imgUrl} alt="not displayed" width="200"/>
            </p>
        </div>
        
    )
}
