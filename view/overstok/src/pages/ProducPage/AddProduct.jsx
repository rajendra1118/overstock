

import axios from 'axios'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

function AddProduct() {
    const navigate= useNavigate

 const [Image,setImage]= useState("")
 const [Name,setName]= useState("")
 const [Category,setCategory]= useState("")
 const [Price,setPrice]= useState("")
 const [Des,setDes]= useState("")
 

 const handleSubmit= (e)=>{
    e.preventDefault()

    console.log(Name,Image,Category,Price,Des)
    const data= {Image:Image,Name,Category,Price,Des}
      axios.post("https://uninterested-pink-blazer.cyclic.app/data/add",data)
      .then(res=>{
        console.log(res)
        if(res.data=="saved"){
            navigate("/product")
        }
      })
      .catch(err=>{
        console.log(err)
      })
 }
 

  return (
    <div>
       <form  onSubmit={handleSubmit} >
        Image    : <input  type="url" className='inputs' value={Image} onChange={(e)=>setImage(e.target.value)} />   

        Name     :  <input  type="text" className='inputs' value={Name} onChange={(e)=>setName(e.target.value)} />    
        Category :  <input  type="text" className='inputs' value={Category} onChange={(e)=>setCategory(e.target.value)} />    
        Price     :<input  type="text" className='inputs' value={Price} onChange={(e)=>setPrice(e.target.value)}/>    
        Description: <input  type="text" className='inputs' value={Des} onChange={(e)=>setDes(e.target.value)} />  

        <button type='submit'>Submit</button>  
          
       </form>

    
    </div>
  )
}

export default AddProduct