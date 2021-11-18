
import React from 'react'
import './style.css'


export default function SearchArticle(props) {
   const {searchValue,setSearchValue,searchButton,setSearchButton}=props;
  
    return (
     

    <div className="introductionBackgroundArticle">
        <p>Some Music News for you</p>
        <div className="searchBarContainerArticle">

            <label htmlFor ="searchValue">Search for Artist</label>
            
            <input 
            type="text" 
            id = "searchValue" 
            name= "searchValue"     
            value={searchValue}
            onChange={(event)=>{
                setSearchValue(event.target.value)
            }}
            />
            <button className="searchButton" onClick={()=> {setSearchButton(!searchButton)}}>Search</button>
        
        </div>
    </div>
   )

}