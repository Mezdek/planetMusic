
import React, { useState, useEffect } from 'react'
import TrackList from './components/tracks'
import './style.css'


export default function HotTracks() {

   
    const [data, setData] = useState([]);

    /*var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://openwhyd.org/adrien?format=json", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));*/
    
    useEffect(()=>{
    console.log("here")
        fetch("https://cors-anywhere.herokuapp.com/https://openwhyd.org/adrien?format=json")
        .then((response)=> response.json())
        .then((result)=>setData(result))
        .catch((err)=> console.log(err));
        
        
      },[])
    


      return (
        <div className="">
            {console.log(data)}
          <h2>Some Hot Tracks</h2>
          {data && data.map((element,index) => (
              <TrackList
              key ={index}
              name={element.name}
              img ={element.img}
              />
          ))}
        
        </div>

      );
    }
    
