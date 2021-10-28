import React from 'react'
import Event from './components/Events'
import MoreEventsButton from './components/MoreEventsButton'
import './style.css'

function FinalEvent() {
    const [events, setEvents] = React.useState([])
    const [visible, setVisible] = React.useState(6)

    
    React.useEffect(
      ()=>{
        fetch("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=DE&apikey=3HsiJ0SglnkQTD4lRtIkQqVgI5i9kB8z&size=200&classificationName=Music")
        .then((response)=>{return response.json()})
        .then((response)=>{
          setEvents(response._embedded.events)
        })
      },[])
    


      return (
        <div className="finalEventWrapper">
          <h1>MUSIC EVENTS IN GERMANY:</h1>
          {
          events.slice(0, visible).map((event, index)=>{
            return (
            <Event
              key={index} 
              cityName={event._embedded.venues[0].city.name}
              eventName={event.name}
              eventDate={event.dates.start.localDate}
              imgUrl={event.images[0].url}
              />)
          })
        } <br/>
            {visible < events.length && (<button className="showMoreEventsButton" onClick={()=>setVisible(visible+6)}>LOAD MORE</button>)}
        </div>

      );
    }
    
    export default FinalEvent;
    
