import React from 'react'
import {style} from './data/data.js'
import "./Style.css"
function Style() {
  return (
    <div className='style-block'>
        <div className='style-title'>
            <h1>We've Got Your Style</h1>

        </div>

        <div className='style-product'>
            {
                style.map((ele)=>(
                    <div className='style-data'>
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

export default Style