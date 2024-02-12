import React from 'react'
import {TrandingSearchdata} from './data/data.js'
import "./TrandingSearch.css"
function TrandingSearch() {
  return (
    <div className='tranding-serch-div'>
          <div className='trnd-title' >
            <h1>Trending Searches</h1>

          </div>

          <div className='trnadind-serch-title'>

            {
                TrandingSearchdata.map((ele,index)=>(
                    <div key={index} className='tranding-serch-data'>
                        <h2>{ele.title}</h2>
                    </div>
                ))
            }
          </div>


    </div>
  )
}

export default TrandingSearch