import React from 'react'
import "./greatdeals.css"
import {limitedTimeDeals} from './data/data.js'

export const Greatdeals = () => {
  return (
    <div className='greatdeals'>
       
       <div className='title'>
        <h1>Limited-Time Deals</h1>
       </div>
       <div className='deals-product'>
        {
            limitedTimeDeals.map((ele,index)=>(
             
                <div key={index} className='imgdata'>
                   
                    <img src={ele.img} alt='deals' />
                    <h2>{ele.offer}</h2>
                    <p>{ele.title}</p>
                </div>
            ))
        }
       </div>

    </div>
  )
}
