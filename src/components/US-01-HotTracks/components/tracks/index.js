import React from 'react'


export default function TrackList(props) {
    const {index, name, img} = props;
    return (
        <div className="wrapper">
            <div key={index} className="trackContainer">
            <div><img src={img} alt=""/></div>
                <div><p>Artist:<br/>{name}</p></div>
                
            </div>
        </div>
        
    )
}