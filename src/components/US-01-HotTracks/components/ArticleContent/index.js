import React from 'react'



export default function ArticleContent(props) {
    const  {index,content} = props;
    return (
        
        <div key={index} className="article">
            <p>{content}</p>
        </div>
        
        
    )
}

