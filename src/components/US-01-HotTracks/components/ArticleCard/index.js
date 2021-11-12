import React, {useState, useEffect}from 'react'
import './style.css'
import ArticleContent from'../ArticleContent'


export default function ArticleCard(props) {
    const  {index,title, creator,description, content} = props;
    const [contentExist, setContentExist] = useState(false);
    const [showContent, setShowContent]= useState(false);
   

    useEffect(()=>{ if(content != null){setContentExist(true)}

    });
   
    const showArticle=()=>{setShowContent(!showContent)}
        
    
    return (
        
            <div key={index} className="articleShort">
                <div>
                    <h3>{title}</h3>
                    <h5>{creator}</h5>
                    
                    {showContent?<ArticleContent
                    content={content}/>:<p>{description}</p>}
                    {contentExist?<button onClick={showArticle}>{showContent?"show less":"read more"}</button>: null}
                </div>
                
            </div>
    
        
    )
}