import React from 'react';
import "./style.css"

export default function MoreEventsButton(props){
const {events, visible, setVisible} = props;


    return (
        <div className="buttonStyle">
           {visible < events.length && (<button style={{width:"300"}} className="showMoreEventsButton" onClick={()=>setVisible(visible+6)}>LOAD MORE</button>)}  
        </div>
    )
}