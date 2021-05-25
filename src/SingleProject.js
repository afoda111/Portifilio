import React from 'react'
import './SingleProject.css'
function SingleProject({url,surl}) {
    return (
        <div className="container">
           <div className="first__row">
               <div className="column">
                   <img src={url}alt="project"/>
               </div>
               <div className="column">
                   <img src={surl}alt="project "/>
               </div>
           </div>
        </div>
    )
}

export default SingleProject
