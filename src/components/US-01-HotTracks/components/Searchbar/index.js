import './style.css'


export default function SearchArticle(props) {
   return (
    <div className="searchBarContainer">

        <label htmlFor ="searchValue">Search for Artist</label>
        
        <input 
        type="text" 
        id = "searchValue" 
        name= "searchVAlue"     
        value={props.searchValue}
        onChange={(event)=>{
            props.setSearchValue(event.target.value)
        }}
        />
        
    </div>
   )

}