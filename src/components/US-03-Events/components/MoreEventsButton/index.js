import React from 'react';
import "./style.css"

export default function MoreEventsButton(props){
const {allEvents, visible, setVisible} = props;


    return (
        <div className="buttonStyle">
           {visible < allEvents.length && (<button style={{width:"300"}} className="showMoreEventsButton" onClick={()=>setVisible(visible+6)}><b>LOAD MORE</b></button>)}  
        </div>
    )
}