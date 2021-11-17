import { useButtonProps } from '@restart/ui/esm/Button';
import React from 'react'
import './style.css'

export default function SearchBarEvents(props) {
    const {searchCategories, selectedSearchCategory, setSelectedSearchCategory, 
        selectedCity, setSelectedCity, 
        searchButton, setSearchButton, 
        selectedKeyword, setSelectedKeyword, 
        selectedStartDate, setSelectedStartDate, 
        selectedEndDate, setSelectedEndDate} = props;

    return (
        <div className="searchBarContainer">
           <label for="searchByLabel" className="searchByLabel">SEARCH BY:</label>
           <select className="selectCategoryOption" name="eventSearchSelection" id="eventSearchSelection" onChange={(event)=> setSelectedSearchCategory(event.target.value)}>
               <option value={searchCategories[0]}> SELECT: </option>
                <option value={searchCategories[1]}>Location</option>
                <option value={searchCategories[2]}>Date</option>
                <option value={searchCategories[3]}>Keyword</option>
            </select>

            {(selectedSearchCategory == searchCategories[1]) ? 
            <input placeholder="provide the city" className="inputSearchCategory" value={selectedCity} onChange={(event)=>setSelectedCity(event.target.value)} ></input> : null}
            {(selectedSearchCategory == searchCategories[2]) ? 
            (<><input placeholder="Start Date yyyy-mm-dd" className="inputSearchCategory" type="date" required pattern="\d{4}-\d{2}-\d{2}" value={selectedStartDate} onChange={(event)=>setSelectedStartDate(event.target.value)}>
                </input> <input className="inputSearchCategory" placeholder="End Date yyyy-mm-dd" type="date" equired pattern="\d{4}-\d{2}-\d{2}" value={selectedEndDate} onChange={(event)=>setSelectedEndDate(event.target.value)} ></input> </>) : null}
            {(selectedSearchCategory == searchCategories[3]) ? 
            <input placeholder="provide the keyword" className="inputSearchCategory"  value={selectedKeyword} onChange={(event)=>setSelectedKeyword(event.target.value)}></input>: null}
           
            <button className="searchByCategoryButton" onClick={()=>setSearchButton(!searchButton)}><b>Search</b></button>
        </div>
    )
}
