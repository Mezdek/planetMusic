
import React, { useState, useEffect } from 'react'
import ArticleCard from './components/ArticleCard'
import SearchArticle from './components/Searchbar'
import './style.css'


export default function HotTracks() {
  const [searchValue, setSearchValue] = useState("");
  const [searchButton, setSearchButton]= useState (false);

   const key= "pub_209372810a042a82b26699a3eba51ed7ef6c";
   const url = `https://magical-it-works.jsrover.wilders.dev/https://newsdata.io/api/1/news?apikey=${key}&language=en&q=music`
   const urlSeacrh = `https://magical-it-works.jsrover.wilders.dev/https://newsdata.io/api/1/news?apikey=${key}&language=en&q=music%20AND%20${searchValue}`
    
    

    const [data, setData] = useState([]);
    
        useEffect(()=>{fetch(url)
            .then((response)=> response.json())
            .then((response)=>setData(response.results))
            .catch((err)=> console.log(err));
          },[])
          useEffect(()=>{
            if (searchButton ===!false){fetch(urlSeacrh)
              
              .then((response)=> response.json())
              .then((response)=>{
                setData(response.results);
                setSearchButton(false);
              })
               
              .catch((err)=> console.log(err));
              }
          
       },[searchButton])
        
    
    
          return (
            <div className="articleOverview">
                {console.log(data)}
              <SearchArticle
              searchValue={searchValue}
              setSearchValue= {setSearchValue}
              searchButton ={searchButton}
              setSearchButton = {setSearchButton}/>
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
    

