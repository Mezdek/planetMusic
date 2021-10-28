import './App.css';
import React from 'react'
// import HomePage from './components/home-page'
// import HotTracks from './components/US-01-HotTracks'
// import RandomPlaylist from './components/US-02-RandomPlaylist'
import FinalEvent from './components/US-03-Events'
// import Quiz from './components/US-04-Quiz'
// import NavBar from './components/shared-components/nav-bar'
// import Footer from './components/shared-components/footer'
// import Container from 'react-bootstrap/Container';



function App() {
  
  return (

      <FinalEvent />

    )
  }

// const [events, setEvents] = React.useState([])
// const [visible, setVisible] = React.useState(6)

// React.useEffect(
//   ()=>{
//     fetch("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=DE&apikey=3HsiJ0SglnkQTD4lRtIkQqVgI5i9kB8z&size=200&classificationName=Music")
//     .then((response)=>{return response.json()})
//     .then((response)=>{
//       setEvents(response._embedded.events)
//     })
//   },[])

//   return (
//     <div className="App">
//       {
//       events.map((event, index)=>{
//         return (
//         <FinalEvent 
//           key={index} 
//           cityName={event._embedded.venues[0].city.name}
//           eventName={event.name}
//           eventDate={event.dates.start.localDate}
//           imgUrl={event.images[0].url}
//           />)
//       })
//     }

//     </div>


  // return (
  //   <div className="App">
  //     {
  //     events.map((event, index)=>{
  //       return (
  //       <Event 
  //         key={index} 
  //         cityName={event._embedded.venues[0].city.name}
  //         eventName={event.name}
  //         eventDate={event.dates.start.localDate}
  //         imgUrl={event.images[0].url}
  //         />)
  //     })
  //   }

  //   </div>
//   );
// }

export default App;
