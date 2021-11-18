import React from 'react'
import './style.css'

export default function Event(props) {
    const {index, cityName, eventName, eventDate, imgUrl, eventUrl} = props;

    const [isFavorite, handleClickFavorite] = React.useState(false);

    return (
        <div key={`event.id-${index}`} className="singleEventWrapper">
            <div className="eventDescription" >
                <p className="eventDescriptionParagraph"><b>EVENT:</b> {eventName}</p>
                <p className="eventDescriptionParagraph"><b>CITY:</b> {cityName}</p>
                <p className="eventDescriptionParagraph"><b>DATE:</b> {eventDate}</p>


        <div className="singleEventFavoriteButton">

        <a href={eventUrl}><button className="singleEvenButton">Buy Tickets</button></a>

            <div className="favorite" value={isFavorite} onClick={() => handleClickFavorite(!isFavorite)}>
                
            {isFavorite === false ?
                <div className="notFavorite"></div> : 
                <div className="isFavorite"></div>
            }
            </div>

        </div>
            </div>

            <div className="eventImg">
                <img id="eventImg" src={imgUrl} alt="not displayed"/>
            </div>
    </div>
    )
}
