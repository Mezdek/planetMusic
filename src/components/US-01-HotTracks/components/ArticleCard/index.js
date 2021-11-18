import React, {useState, useEffect}from 'react'
import './style.css'
import ArticleContent from'../ArticleContent'
//import Axios from 'Axios'


export default function ArticleCard({index,title, creator,description, content}) {
    
    const [contentExist, setContentExist] = useState(false);
    const [showContent, setShowContent]= useState(false);
    const [isFavorite, handleClickFavorite] = useState(false); 
   

    useEffect(()=>{ if(content != null){setContentExist(true)}

    });
   
    const showArticle=()=>{setShowContent(!showContent)}
    /*const safeArticle = () => {handleClickFavorite(!isFavorite)}
    Axios.post("https://localhost:3200/api/inser"),{
        articlename:title,}
        .then(()=> alert("succesful"))
    };*/
    
    return (
        
            <div key={index} className="articleShort">
                <div>
                    <h3>{title}</h3>
                     <div className="favorite" value={isFavorite} onClick={ () =>handleClickFavorite(!isFavorite)}>
                
                        {isFavorite === false ?
                        <div className="notFavorite"></div> : 
                        <div className="isFavorite"></div>
                        }
                    </div>  
                    <h5>{creator}</h5>
                  
                    
                    {showContent?<ArticleContent
                    content={content}/>:<p>{description}</p>}
                    {contentExist?<button className="showMoreButton" onClick={showArticle}>{showContent?"show less":"read more"}</button>: null}
                    
                </div>
                
            </div>
    
        
    )
}