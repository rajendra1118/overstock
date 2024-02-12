import axios from 'axios'
import React, { useEffect } from 'react'
import {useState} from "react"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { DashBoard } from '../dashboard/DashBoard'
import Footer from '../Footer/Footer'
import './Cart.css'
function Cart() {
  const navigate= useNavigate()
  const [data,setData]= useState([])
  const [userid,setuserid]= useState('') 
  const [price,setPrice]= useState('')
    
  useEffect(()=>{
    
      const data= {userId:localStorage.getItem('userId')}
       
       const userid= localStorage.getItem('userId')
          setuserid(userid)
      axios.post("https://uninterested-pink-blazer.cyclic.app/user/getCart",data)
      .then(res=>{
        console.log(res.data.Data.cart,"14")
        if(data){
          setData(res.data.Data.cart) 
         
        } 
        

      })
      .catch(err=>{
        console.log(err)
      })
  },[])



  // const calculateTotal = () => {
  //    return  data.reduce((total, ele) => total + ele.price, 0);
  // };



  return (
    <div> 
       <DashBoard/>

       <h3>UserID: {userid} </h3>  
       <Link className={"linkStyle"} to="/product"><button>Shop More</button></Link>

       <div className='cart-page'>

      
        
       
        
         {/* data && data.length>0 &&  */}

              <div className='cart-data'>
              { 
                  data.length ===0 ?"Cart is empty" :    data.map((ele,index)=>(
                        <div  className='cart-product' key={index}>
                          <img src={ele.Image} alt="" />
                          <h3>{ele.Name}</h3>
                          <p>Price: {ele.Price}</p>
                          <p>{ele.Des}</p>
                         
                        </div>
                      ))
                    }

              </div>
             {/* <h2>total price :${calculateTotal()}</h2>  */}

       </div>

  {/* footer */}

  <Footer/>

  </div>
  )
}

export default Cart