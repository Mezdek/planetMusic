import React from 'react'
import './style.css'

export default function Event(props) {
    const {index, cityName, eventName, eventDate, imgUrl, eventUrl} = props;
    return (
        <a key={index} className="singleEventWrapper" href={eventUrl}>
            <div className="eventDescription" >
                <p className="eventDescriptionParagraph"><b>EVENT:</b> {eventName}</p>
                <p className="eventDescriptionParagraph"><b>CITY:</b> {cityName}</p>
                <p className="eventDescriptionParagraph"><b>DATE:</b> {eventDate}</p>
  
            </div>
            <div className="eventImg">
                <img id="eventImg" src={imgUrl} alt="not displayed"/>
            </div>
        </a>
    )
}
