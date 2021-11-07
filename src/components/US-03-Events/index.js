import React from 'react'
import Event from './components/Events'
import MoreEventsButton from './components/MoreEventsButton'
import './style.css'
import Container from 'react-bootstrap/Container';
import SearchBarEvents from './components/search-bar-events';

function FinalEvent() {
  
  const [events, setEvents] = React.useState([])
  const [visible, setVisible] = React.useState(6)

    const searchCategories = [
      "",
      "Location",
      "Date", 
      "Artist"
    ] 
  
  const [selectedSearchCategory, setSelectedSearchCategory] = React.useState(searchCategories[0])


  const [selectedCity, setSelectedCity] = React.useState('')
  const [selectedStartDate, setSelectedStartDate] = React.useState('providetodaydate')
  const [selectedEndDate, setSelectedEndDate] = React.useState('providetodaydate')
  const [selectedArtist, setSelectedArtist] = React.useState('providetodaydate')

    React.useEffect(
      ()=>{
        const url = new URL("https://app.ticketmaster.com/discovery/v2/events.json")
        url.searchParams.append("countryCode", "DE")
        url.searchParams.append("apikey", "3HsiJ0SglnkQTD4lRtIkQqVgI5i9kB8z")
        url.searchParams.append("size", "200")
        url.searchParams.append("sort", "date,asc")

        //if selectedCity string is not empty(which evaluates to true), return all the events with applied filter
        if(selectedCity) {
          url.searchParams.append("city", selectedCity)
        }

        // url.searchParams.append("classificationName", "Music")
        // url.searchParams.append("startDateTime", selectedStartDate)
        // url.searchParams.append("endDateTime", selectedEndDate)
        // url.searchParams.append("", selectedArtist)
        // startDateTime=${}&endDateTime=${}&city=${location}

        fetch(url.href)
        .then((response)=>{return response.json()})
        .then((response)=>{
          setEvents(response._embedded.events)
        })
        .catch((err) => {
          console.log('Not able to fetch API data', err)
        })
      },[])
    


      return (
        <Container>
        <div className="allElementsContainer">
          <h1 className="pageIntro">MUSIC EVENTS IN GERMANY:</h1>
          <SearchBarEvents 
          searchCategories={searchCategories}
          selectedSearchCategory={selectedSearchCategory} 
          setSelectedSearchCategory={setSelectedSearchCategory}
          />
          <div className ="allEventsContainer">
          {
          events.slice(0, visible).map((event, index)=>{
            return (
            <Event
              key={index} 
              cityName={event._embedded.venues[0].city.name}
              eventName={event.name}
              eventDate={event.dates.start.localDate}
              imgUrl={event.images[0].url}
              eventUrl={event.url}
              />)
          })
        } </div>
          <div className="moreEventsButton">
            <MoreEventsButton events = {events} visible = {visible} setVisible={setVisible}/>
          </div>
        </div>
      </Container>
      );
    }
    
    export default FinalEvent;
    
