import React, {useState, useEffect} from 'react'
import Event from './components/Events'
import MoreEventsButton from './components/MoreEventsButton'
import './style.css'
import Container from 'react-bootstrap/Container';
import SearchBarEvents from './components/search-bar-events';

function FinalEvent() {

  const [allEvents, setEvents] = React.useState([])
  const [visible, setVisible] = React.useState(6)
  const [data, setData] = React.useState([]);

    const searchCategories = [
      "",
      "Location",
      "Date", 
      "Keyword"
    ] 
  
  const [selectedSearchCategory, setSelectedSearchCategory] = React.useState(searchCategories[0])
  const [selectedCity, setSelectedCity] = React.useState('')
  const [searchButton, setSearchButton] = React.useState(true)

  const [selectedStartDate, setSelectedStartDate] = React.useState(Date.now())
  const [selectedEndDate, setSelectedEndDate] = React.useState(Date.now())
  const [selectedKeyword, setSelectedKeyword] = React.useState('')

    useEffect(() => {
      fetch("http://localhost:3003/events")
          .then(response => {return response.json()})
          .then((data) => {setData(data)})
          .catch(error => console.error('Unable to get items.', error));
    }, []);

      return (
        <div className="allElementsContainer">
          <div className="introductionBackground">
          <h1 className="pageIntro">MUSIC EVENTS IN GERMANY</h1>
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
          <Container>
          <div className ="allEventsContainer">
          {
          data.slice(0, visible).map((event, index)=>{
            return (
            <Event
              eventKey={event.eventKey}
              cityName={event.cityName}
              eventName={event.eventName}
              eventDate={event.eventDate}
              imgUrl={event.imgUrl}
              eventUrl={event.eventUrl}
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
        </Container>
        </div>
      );
    }
    
    export default FinalEvent;
    
