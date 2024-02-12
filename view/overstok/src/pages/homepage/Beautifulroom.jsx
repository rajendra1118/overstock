

import React from 'react'
import './Beautigulroom.css'

import {BeautifulFinds} from './data/data.js'

function Beautifulroom() {
  return (
    <div className='roomdiv'>

            <div className='roomtitle'>
                <h1>Beautiful Finds for Every Room</h1>
            </div>

            <div className='roomproduct'>
                {

                    BeautifulFinds.map((ele,index)=>(

                        <div className='roomimage' key={index}>
                            <img src={ele.src} alt="sc" />
                            <p>{ele.title}</p>
                        </div>

                    ))

                }
            </div>

    </div>
  )
}

export default Beautifulroom