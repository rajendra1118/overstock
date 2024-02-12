import React ,{useState} from 'react'
import "./DashBoard.css"
import logo from '../../data/logo.svg'
import { Link } from 'react-router-dom';

import { VscAccount } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { GoGift } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
// import TopNavbar from '../topnavbar/TopNavbar';
import DropeDown from './dropdown';


function DashBoard() {
    const [openProfile,setOpenProfile]= useState(false)
  return (
    <div className='dashbord'>
        
        <div className="shipindia" >
         <p>Ships to:</p>
         <img  src='https://img.freepik.com/free-vector/round-flag-india_23-2147813736.jpg?size=626&ext=jpg' alt='sc'></img>
        <p>INDIA</p>
       </div>
        {/* search bar and deshboard */}
       <div className='serchbar'>
          <div className='logo'>
           <Link to="/" className='img-style'> <img src={logo} alt="sc" /></Link>
          </div>

          <div className='serch'>
            <input type="search"  placeholder='Find all things home & beyond'/>
          </div>
          <div className='account' >
                <div  className='font' onClick={()=>setOpenProfile((prev)=>!prev)} ><VscAccount  size={27}/>Account {openProfile && <DropeDown/>} 
                 </div>
                <div className='font' ><FaRegHeart size={27}/>List </div>
                <div className='font'><GoGift size={27}/>Registry</div>
                <Link to="/getCart"><div className='font'><FiShoppingCart size={27} />Cart</div></Link>
          </div>
       </div>
       
     {/* top navbar */}
  

     <div className="navbarlist">
      <div className="mega-dropdown">
      <Link to="/product"><button className="dropdown-toggle">Furniture</button></Link>
        
        <div className="mega-content">
          <div className="column">
            
            <h3>Living Room Furniture</h3>
            <ul>
              <li>
                Sofas and Couches     
              </li>
              <li>Sectionals </li>
              <li>Benches</li>
              <li> Ottomans and Poufs</li>
              <li> Accent Chairs</li>
              <li>Recliners</li>
              <li>Coffee and Accent Tables</li>
              <li>TV Stands</li>
              <li>Best Sellers</li>
            </ul>
          </div>
          <div className="column">
            <h3>Bedroom Furniture</h3>
             <ul>
              <li>Beds</li>
              <li>Bedroom Sets</li>
              <li>Headboards</li>
              <li>Bed Frames</li>
              <li>Dressers and Chests</li>
              <li>Nightstands</li>
              <li>Armoires and Wardrobes</li>
              <li>Mattresses</li>
              <li>Kids Beds</li>
              <li>Best Sellers</li>
            </ul>
          </div>
          {/* Add more columns as needed */}
        </div>
      </div>

      {/* 2nd dropdown menu */}
      <div className="mega-dropdown">
       
        <Link  to="/product" > <button className="dropdown-toggle">Rugs</button></Link>
        <div className="mega-content">
          <div className="column">
            <h3>Area Rugs By Size</h3>
            <ul>
              <li>3' x 5'</li>
              <li>4' x 6'</li>
              <li>5' x 8'</li>
              <li>6' x 9'</li>
              <li>7' x 9'</li>
              <li>8' x 10'</li>
              <li>9' x 12'</li>
              <li>10' x 14'</li>
            </ul>
          </div>
          <div className="column">
            <h3>Area Rugs By Color</h3>
            <ul>
              <li>Grey
</li>
              <li>Blue</li>
              <li>Ivory</li>
              <li>White</li>
              <li>Black</li>
              <li>Red</li>
              <li>Brown</li>
              <li>Orange</li>
              <li>Pink</li>
            </ul>
          </div>
          {/* Add more columns as needed */}
        </div>
      </div>

      {/* 3rd dropdown menu */}
      <div className="mega-dropdown">
        
        <Link to="/product" ><button className="dropdown-toggle">Bedding</button></Link>
        <div className="mega-content">
          <div className="column">
            <h3>Bedding Sets</h3>
            <ul>
              <li>Comforters and Sets</li>
              <li>Bed Sheet Sets</li>
              <li>Quilts and Bedspreads</li>
              <li>Duvet Cover and Sets</li>
              <li>Bed-in-a-Bag</li>
              <li>Daybed Cover Sets</li>
            </ul>
          </div>
   
          <div className="column">
            <h3>Bed Sheets and Pillowcases</h3>
            <ul>
              <li>Bed Sheet Sets</li>
              <li>Pillow Shams</li>
              <li>Pillowcases</li>
              <li>Fitted Bed Sheets</li>
              <li>Pillow Protectors</li>
              <li>Flat Bed Sheets</li>
            </ul>
          </div>
          {/* Add more columns as needed */}
        </div>
      </div>

      {/* 4th dropdown menu */}
      <div className="mega-dropdown">
      <Link to="/product" ><button className="dropdown-toggle">Bath</button></Link>
        
        <div className="mega-content">
          <div className="column">
            <h3>Bathroom Rugs and Bath Mats</h3>
            <ul>
              <li>Microfiber Cotton</li>
              <li>Memory Foam</li>
              <li>Chenille</li>
              <li>Teak</li>
            </ul>
          </div>
          <div className="column">
            <h3>Towels</h3>
            <ul>
          <li>Bath Towel Sets</li>
              <li>Bath Towels</li>
              <li>Beach Towels</li>
              <li>Hand Towels</li>
              <li>Washcloths</li>
              <li>Bathrobes</li>
            </ul>
          </div>
          {/* Add more columns as needed */}
        </div>
      </div>

      {/* 5th dropdown */}

      <div className="mega-dropdown">
        
        <Link to="/product" ><button className="dropdown-toggle">Kitchen</button></Link>
        <div className="mega-content">
          <div className="column">
            <h3>Dinnerware</h3>
            <ul>
          <li>Dinnerware Sets</li>
              <li>Serveware</li>
              <li>Plates</li>
              <li>Bowls</li>
              <li>Cups</li>
              <li>Mugs</li>
              <li>Flatware</li>
              <li>Drinking Glasses</li>
              <li>Wine Glasses</li>
            </ul>
          </div>
          <div className="column">
            <h3>Kitchen Furniture</h3>
            <ul>
           <li>Counter and Bar Stools</li>
              <li>Kitchen and Dining Sets</li>
              <li>Kitchen and Dining Chairs</li>
              <li>Kitchen and Dining Tables</li>
              <li>Buffets and Sideboards</li>
              <li>Home Bars</li>
              <li>Kitchen Carts</li>
              <li>Bar Tables</li>
              <li>Pantry Cabinets</li>
            </ul>
          </div>
          {/* Add more columns as needed */}
        </div>
      </div>

      {/* 6th dropdown */}
      <div className="mega-dropdown">
       
        <Link to="/product" > <button className="dropdown-toggle">Decore</button></Link>
        <div className="mega-content">
          <div className="column">
            <h3>Mirrors</h3>
            <ul>
              <li>Wall Mirrors</li>
              <li>Bathroom Vanity Mirrors</li>
              <li>Floor Mirrors</li>
              <li>Full Length Mirrors</li>
              <li>Round Mirrors</li>
              <li>Arched Mirrors</li>
              <li>Decorative Mirrors</li>
              <li>Window Pane Mirrors</li>
              <li>Rectangle Mirrors</li>
            </ul>
          </div>
          <div className="column">
            <h3>Decorative Accessories</h3>
            <ul>
     
          <li>Decorative Objects</li>
              <li>Vases</li>
              <li>Room Dividers</li>
              <li>Photo Frames and Albums</li>
              <li>Candles and Candle Holders</li>
              <li>Wall Shelves</li>
              <li>Clocks</li>
              <li>Statues and Sculptures</li>
            </ul>
          </div>
          {/* Add more columns as needed */}
        </div>
      </div>

      {/*7ht  */}

      <div className="mega-dropdown">
       
        <Link to="/product" > <button className="dropdown-toggle">Outdorer</button></Link>
        <div className="mega-content">
          <div className="column">
            <h3>Outdoor Decor</h3>
            <ul>
         <li>Fire Pits</li>
              <li>Outdoor Rugs</li>
              <li>Doormats</li>
              <li>Outdoor Lighting</li>
              <li>Outdoor Wall Decor</li>
              <li>Outdoor Curtains</li>
              <li>Outdoor Cushions and Throw Pillows</li>
              <li>Planters</li>
            </ul>
          </div>
          <div className="column">
            <h3>Patio Furniture</h3>
            <ul>
              <li>Patio Furniture Sets</li>
              <li>Outdoor Seating</li>
              <li>Outdoor Dining Sets</li>
              <li>Outdoor Dining Tables</li>
              <li>Outdoor Dining Chairs</li>
              <li>Outdoor Tables</li>
              <li>Outdoor Chaise Lounges</li>
              <li>Adirondack Chairs</li>
              <li>Hammocks and Swings</li>

            </ul>
          </div>
          {/* Add more columns as needed */}
        </div>
      </div>

      {/* 8th */}
      <div className="mega-dropdown">
       
        <Link to="/product" > <button className="dropdown-toggle">Home Improvemnet</button></Link>
        <div className="mega-content">
          <div className="column">
            <h3>Kitchen</h3>
            <ul>
          <li> Ranges and Ovens</li>
              <li>Refrigerators</li>
              <li>Kitchen Islands and Carts</li>
              <li>Kitchen Sinks</li>
              <li>Kitchen Faucets</li>
              <li>Kitchen Cabinets</li>
              <li>Backsplash</li>
             
            </ul>
          </div>
          <div className="column">
            <h3>Bathroom</h3>
            <ul>
              <li>Bathroom Vanities</li>
              <li>Bathroom Vanity Mirrors</li>
              <li>Bathroom Sinks</li>
              <li>Bathroom Faucets</li>
              <li>Bathroom Cabinets</li>
              <li>Tubs</li>
              <li>Toilets & Bidets</li>
            
            </ul>
          </div>
          {/* Add more columns as needed */}
        </div>
      </div>

      {/* 9th */}

      <div className="mega-dropdown">
       
        <Link to="/product" > <button className="dropdown-toggle">Lighting</button></Link>
        <div className="mega-content">
          <div className="column">
            <h3>Ceiling Lights</h3>
            <ul>
  
              <li>Wheel Chandeliers</li>
              <li>Pendant Lights</li>
              <li>Flush Mount Lights</li>
              <li>Track Lighting</li>
              <li>Recessed Lights</li>
              <li>Semi-Flush Mount Lights</li>
            </ul>
          </div>
          <div className="column">
            <h3>Wall Lighting</h3>
            <ul>
              <li>Flush Mount Wall Lights</li>
              <li>Wall Sconces</li>
              <li>Night Lights</li>
              <li>Picture Lights</li>
              <li>Swing Arm Lights</li>
              <li>Step and Hall Lights</li>
            </ul>
          </div>
          {/* Add more columns as needed */}
        </div>
      </div>

      {/* 10 */}
      <div className="mega-dropdown">
       
        <Link to="/product" > <button className="dropdown-toggle">Body and Kids</button></Link>
        <div className="mega-content">
          <div className="column">
            <h3>Baby Furniture</h3>
            <ul>
   
              <li>Cribs</li>
              <li>Bassinets and Cradles</li>
              <li>Crib Mattresses</li>
              <li>Baby Bedding</li>
              <li>Nursery Seating</li>
              <li>Changing Tables</li>
              <li>Nursery Decor</li>
            </ul>
          </div>
          <div className="column">
            <h3>Baby Travel</h3>
            <ul>
              <li>Car Seats and Bases</li>
              <li>Infant Car Seats</li>
              <li>Convertible Car Seats</li>
              <li>Booster Car Seats</li>
              <li>Car Seat Accessories</li>
              <li>Baby Carriers and Wraps</li>
              <li>Diaper Bags</li>
              <li>Baby Travel Cribs</li>
            </ul>
          </div>
          {/* Add more columns as needed */}
        </div>
      </div>

      {/* 11th */}
      <div className="mega-dropdown">
       
        <Link to="/product" > <button className="dropdown-toggle">More</button></Link>
        <div className="mega-content">
          <div className="column">
            <h3>Exercise Equipment</h3>
            <ul>
         <li>Home Gym Systems</li>
              <li>Treadmills</li>
              <li>Exercise Bikes</li>
              <li>Ellipticals</li>
              <li>Rowers</li>
              <li>Weights</li>
              <li>Yoga and Pilates</li>
              <li>Home Gym</li>
            </ul>
          </div>
          <div className="column">
            <h3>Column 2</h3>
            <ul>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
            </ul>
          </div>
          {/* Add more columns as needed */}
        </div>
      </div>
      {/* <li>Furniture</li>
            <li>Rugs </li>
            <li>Bedding</li>
            <li>Bath</li>
            <li>Kitchen</li>
            <li>Decor</li>
            <li>Outdor</li>
            <li>Home Improvement</li>
            <li>Lighting</li>
            <li>Baby & Kids</li>
            <li>More</li> */}
    </div>


     




    {/* down div is part of main div */}
     </div>
  )
}

export  { DashBoard }