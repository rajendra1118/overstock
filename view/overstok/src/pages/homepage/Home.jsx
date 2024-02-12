import React  from 'react'
import {DashBoard} from '../dashboard/DashBoard'
import "./Home.css"
import home1 from '../../data/home2.webp'
import wall from '../../data/bigwall.jpg'
import img2 from '../../data/diningtext.svg'

import Beautifulroom from './Beautifulroom'
import Tranding from './Tranding'
import { Greatdeals } from './greatdeals'
import Style from './Style'
import TrandingSearch from './TrandingSearch'
import Footer from '../Footer/Footer'
export function Home() {




  return (
    <div>
      <DashBoard/>
        
        {/* fird div */}
        <div className='box-2'>
          
          <div className='f1div' >

            <div>
              <h3>the beyond</h3>
              <h1>Cooking</h1>
              <h4>event</h4>
            </div>
            <div >
              <h2>Svae big on </h2>
              <p>Kitchen and dining furniture, cookware & more</p>
              <button>Shop Now</button>
            </div>
             
          </div>
          
      
          <div>

            <img src={home1} alt="" />
          </div>
            
        </div>

        {/* second div */}

        <Greatdeals/>
        <Beautifulroom/>

        {/* dining big wallpaer  */}
        <div className='bigwallpaper'>

          <img src={wall} alt="" />
          <img className='image2' src={img2} alt="" />

        </div>

        {/* tranding this session block */}

      <Tranding/>
       
      {/* style section */}

       <Style/>


       {/* Tranding search  */}
      <TrandingSearch/>


      {/* footer section */}

     <Footer/>
    </div>
  )
}

