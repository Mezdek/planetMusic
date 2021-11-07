import React from 'react'
import './style.css'

export default function SearchBarEvents(props) {
    const {searchCategories, selectedSearchCategory, setSelectedSearchCategory} = props;

// if I search by location, take search Value, apply it to url as location search params and when the search button is true fetch the data

    return (
        <div className="searchBarContainer">
           <label for="searchByLabel" className="searchByLabel">SEARCH BY:</label>
           <select name="eventSearchSelection" id="eventSearchSelection" onChange={(event)=> setSelectedSearchCategory(event.target.value)}>
               <option value={searchCategories[0]} > SELECT </option>
                <option value={searchCategories[1]} >Location</option>
                <option value={searchCategories[2]} >Date</option>
                <option value={searchCategories[3]} >Artist</option>
                {/* <option value="date">Date</option>
                <option value="artist">Artist</option> */}
            </select>

            {(selectedSearchCategory == searchCategories[0]) ? "" : ""}
            {(selectedSearchCategory == searchCategories[1]) ? 
            <input placeholder="search by city" className="inputSearchCategory" ></input>: ""}
            {(selectedSearchCategory == searchCategories[2]) ? 
            (<><input placeholder="Start Date yyyy/mm/dd" className="inputSearchCategory">
                </input> <input placeholder="End Date yyyy/mm/dd"></input> </>) : ""}
            {(selectedSearchCategory == searchCategories[3]) ? 
            <input placeholder="search by artist" className="inputSearchCategory"></input>: ""}
           
            <button className="searchByCategoryButton">Search</button>
        </div>
    )
}
