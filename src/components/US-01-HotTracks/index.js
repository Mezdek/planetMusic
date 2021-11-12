
import React, { useState, useEffect } from 'react'
import ArticleCard from './components/ArticleCard'
import SearchArticle from './components/Searchbar'
import './style.css'


export default function HotTracks() {

   const key= "pub_209372810a042a82b26699a3eba51ed7ef6c";
  
    const [data, setData] = useState([]);
    
        useEffect(()=>{
        console.log("here")
            fetch(`https://magical-it-works.jsrover.wilders.dev/https://newsdata.io/api/1/news?apikey=${key}&language=en&q=music%20AND%20police`)
            
            .then((response)=> response.json())
            .then((response)=>setData(response.results))
            .catch((err)=> console.log(err));
            
            
          },[])
        
    
    
          return (
            <div className="articleOverview">
                {console.log(data)}
              <h2>Some News</h2>
              <SearchArticle/>
                {data.map((results, index) =>(
                  <ArticleCard
                   key={index}
                   title={results.title}
                   creator={results.creator}
                   description={results.description}
                   content ={results.content}
                   />
                ))}
              
            </div>
    
          );
    }
    

