import React from 'react'
import './style.css'

export default function Event(props) {
    const {index, cityName, eventName, eventDate, imgUrl} = props;
    return (
        <div className="mainWrapper">
            <div key={index} className="eventContainer">
                <div className="eventDescription">
                    <p>city name: {cityName}</p>
                    <p>event name: {eventName}</p>
                    <p>event dates: {eventDate}</p>
                </div>
                <div className="eventImg">
                    <img src={imgUrl} alt="not displayed" width="200"/>
                </div>
            </div>
        </div>
        
    )
}
