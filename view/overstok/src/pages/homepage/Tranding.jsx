import React from 'react'
import {trandingSession} from './data/data.js'
import './Tranding.css'


function Tranding() {
  return (
   
      
      <div className='tranding-session-block'>

              <div className='tranding-title' >
                <h1>Trending This Season</h1>
              </div>
             <div  className='tranding-product'>
             {
                trandingSession.map((ele,index)=>(
                  <div key={index} className='tranding-data'>
                    <img src={ele.img} alt="" />
                    <h2>{ele.title}</h2>
                    <p>{ele.des}</p>
                  </div>

                ))
              }
             </div>

      </div>
   
  )
}

export default Tranding