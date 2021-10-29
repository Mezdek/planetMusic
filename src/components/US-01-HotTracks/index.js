

import React, { useState, useEffect } from 'react'
import TrackList from './components/tracks'
import './style.css'


export default function HotTracks() {

   
    const [data, setData] = useState([]);
    
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
    

