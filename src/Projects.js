import React from 'react'
import './Project.css'
import SingleProject from './SingleProject'

function Projects() {
   
    return (
        
        <div>
            {/*
           <div className='row'>
             <div className='column'>
                 <div className='blue-column'>
                     Some Text in Column One
                </div>
             </div>
                <div className='column'>
                     <div className='green-column'>
                         Some Text in Column Two
                    </div>
                  </div>
                 </div>
                 <div className='row'>
             <div className='column'>
                 <div className='blue-column'>
                     Some Text in Column One
                </div>
             </div>
                <div className='column'>
                     <div className='green-column'>
                         Some Text in Column Two
                    </div>
                  </div>
                 </div>
        */}
        <SingleProject surl="https://miro.medium.com/max/1030/0*giJDJAl78a5bsRAC.png" url="https://miro.medium.com/max/1030/0*giJDJAl78a5bsRAC.png"/>
        <SingleProject surl="https://miro.medium.com/max/1030/0*giJDJAl78a5bsRAC.png" url="https://data.embeddedcomputing.com/uploads/resize/320/200/external/data.embeddedcomputing.com/uploads/articles/wp/609975984/5e8e358b43adb-Picture1.png"/>
        </div>
    )
}

export default Projects
