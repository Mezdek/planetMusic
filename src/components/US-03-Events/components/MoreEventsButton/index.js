import React from 'react';
import "./style.css"

export default function MoreEventsButton(props){
const {event, visible, setVisible} = props;
const loadMore = () => {
    setVisible(visible+5)
}
    return (
        <div className="buttonStyle">
            {/* <button onClick={loadMore}>LOAD MORE</button> */}
        </div>
    )
}