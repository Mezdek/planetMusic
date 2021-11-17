import React from 'react'
import axios from 'axios';
import './style.css'

export default function Event(props) {
    const {eventKey, index, cityName, eventName, eventDate, imgUrl, eventUrl} = props;

    const [buttonValue, setButtonValue] = React.useState(false)

        console.log(buttonValue)

        const saveTheEvent = () => {

            setButtonValue(!buttonValue);
            
            const newObj =  {
                eventKey: eventKey,
                eventName: eventName
                }
            
            console.log(newObj)
            
            axios
            .post('/events', newObj)
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
        }

    return (
        <div key={`${eventKey}-${index}`} className="singleEventWrapper">
            <div className="eventDescription" >
                <p className="eventDescriptionParagraph"><b>EVENT:</b> {eventName}</p>
                <p className="eventDescriptionParagraph"><b>CITY:</b> {cityName}</p>
                <p className="eventDescriptionParagraph"><b>DATE:</b> {eventDate}</p>


        <div className="singleEventFavoriteButton">

        <a href={eventUrl}><button className="singleEvenButton">Buy Tickets</button></a>

            <div className="favorite" value={buttonValue} onClick={saveTheEvent}>
                
            {buttonValue == false ?
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
