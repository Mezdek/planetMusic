import React from 'react'
import './style.css'

export default function SearchBarEvents() {

    return (
        <div className="searchBarContainer">
           <label for="searchBar">SEARCH BY:</label>
           <select name="eventSearchSelection" id="eventSearchSelection">
                <option value="location">Location</option>
                <option value="date">Date</option>
                <option value="artist">Artist</option>
            </select>
            <input></input>
            <button>Search</button>
        </div>
    )
}
