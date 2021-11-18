
import React from 'react'
import './style.css'


export default function SearchArticle(props) {
   const {searchValue,setSearchValue,searchButton,setSearchButton}=props;
   /* const display = (e) => {
        e.preventDefault();
        console.log(searchValue);}*/
    return (
     

    <div className="introductionBackground">
        <p>Some Music News for you</p>
        <div className="searchBarContainer">

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