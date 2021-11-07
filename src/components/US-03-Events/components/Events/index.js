import React from 'react'
import './style.css'

export default function Event(props) {
    const {index, cityName, eventName, eventDate, imgUrl} = props;
    return (
        <div key={index} className="singleEventWrapper">
            <div className="eventDescription">
                <p>city name: {cityName}</p>
                <p>event name: {eventName}</p>
                <p>event dates: {eventDate}</p>
            </div>
            <div className="eventImg">
                <img id="eventImg" src={imgUrl} alt="not displayed" width="140"/>
            </div>
        </div>
        
    )
}
