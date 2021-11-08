import React from 'react'
import Event from './components/Events'
import MoreEventsButton from './components/MoreEventsButton'
import './style.css'
import Container from 'react-bootstrap/Container';
import SearchBarEvents from './components/search-bar-events';

function FinalEvent() {
  
  const [allEvents, setEvents] = React.useState([])
  const [visible, setVisible] = React.useState(6)

    const searchCategories = [
      "",
      "Location",
      "Date", 
      "Keyword"
    ] 
  
  const [selectedSearchCategory, setSelectedSearchCategory] = React.useState(searchCategories[0])
  const [selectedCity, setSelectedCity] = React.useState('')
  const [searchButton, setSearchButton] = React.useState(!false)

  const [selectedStartDate, setSelectedStartDate] = React.useState('providetodaydate')
  const [selectedEndDate, setSelectedEndDate] = React.useState('providetodaydate')
  const [selectedKeyword, setSelectedKeyword] = React.useState('')

    React.useEffect(
      ()=>{
        const url = new URL("https://app.ticketmaster.com/discovery/v2/events.json")
        url.searchParams.append("countryCode", "DE")
        url.searchParams.append("apikey", "3HsiJ0SglnkQTD4lRtIkQqVgI5i9kB8z")
        url.searchParams.append("size", "200")
        url.searchParams.append("sort", "date,asc")
        url.searchParams.append("classificationName", "Music")

        //if selectedCity string is not empty(which evaluates to true), and selectedSearchCategory is selected, return all the events with applied filter
        if(selectedSearchCategory == searchCategories[1] && selectedCity !== "") {
          url.searchParams.append("city", selectedCity)
        }

        if(selectedSearchCategory == searchCategories[2] && selectedStartDate !== "" && selectedEndDate !== "") {
          url.searchParams.append("startDateTime", `${selectedStartDate}T00:00:00Z`)
          url.searchParams.append("endDateTime", `${selectedEndDate}T23:59:59Z`)
        }

        if(selectedSearchCategory == searchCategories[3] && selectedKeyword !== "") {
          url.searchParams.append("keyword", selectedKeyword)
        }

        fetch(url.href)
        .then((response)=>{return response.json()})
        .then((response)=>{
          setEvents(response._embedded.events)
        })
        .catch((err) => {
          console.log('Not able to fetch API data', err)
        })
      },[selectedSearchCategory, searchButton])
    


      return (
        <Container>
        <div className="allElementsContainer">
          <div className="introductionBackground">
          <h1 className="pageIntro">MUSIC EVENTS IN GERMANY:</h1>
              <SearchBarEvents 
              searchCategories={searchCategories}
              selectedSearchCategory={selectedSearchCategory} 
              setSelectedSearchCategory={setSelectedSearchCategory}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              searchButton={searchButton} 
              setSearchButton={setSearchButton}
              selectedKeyword={selectedKeyword}
              setSelectedKeyword={setSelectedKeyword}
              selectedStartDate={selectedStartDate}
              setSelectedStartDate={setSelectedStartDate}
              selectedEndDate={selectedEndDate}
              setSelectedEndDate={setSelectedEndDate}
              />
            </div>
          <div className ="allEventsContainer">
          {
          allEvents.slice(0, visible).map((event, index)=>{
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
            <MoreEventsButton 
            allEvents = {allEvents} 
            visible = {visible} 
            setVisible={setVisible}
            />
          </div>
        </div>
      </Container>
      );
    }
    
    export default FinalEvent;
    
