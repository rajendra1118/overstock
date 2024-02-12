import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {

   const [userDetails,setuserDetails] =useState({email:"",password:""})
   const [logindetails,setLoginDetail] = useState({email:"",password:""})
   const navigate=useNavigate();

const handleuserDetails=(e)=>{
    const {name,value}= e.target

    setuserDetails({...userDetails,[name]:value})

}

const handleRegisteruser= async(paylod)=>{
    let bodyContant = JSON.stringify(userDetails)

    try {

        let res= await fetch("https://uninterested-pink-blazer.cyclic.app/user/register",{
            method:"POST",
            body:bodyContant,
            headers: {
                'Content-Type': "application/json"
            }
        })
        await res.text();
        alert("user created succesfully")
        window.location.reload()
        
    } catch (error) {
        alert("somthing went wrong")
    }
}

const handllogineuserDetails=(e)=>{
    const {name,value}= e.target

    setLoginDetail({...logindetails,[name]:value})

}


const handleLoginuser= async(paylod)=>{
    let bodyContant = JSON.stringify(logindetails)
       try {
        // http://localhost:8080
   
        let res = await fetch('https://uninterested-pink-blazer.cyclic.app/user/login', {
            method: 'POST',
            body: bodyContant,
            headers: {
                'Content-Type': "application/json"
            }
  
        })
        // await res.text();
        // alert("user created succesfully")

        const data= await res.json()
        localStorage.setItem("token",data.token)
        localStorage.setItem("userId",data.userId)
        alert("user logged in succesfully")
        navigate("/")
        console.log(data)
  
  
    } catch (error) {

        alert("somthing went wrong")
    }
  
   }

  return (
    <div className='register-loin'>
        <div className='create-account'>
            <h2>Create Account</h2>
            <div className='input-fields'>
                <br />
                <input  type='email'  placeholder='Email' name="email" value={userDetails.email} onChange={(e)=> handleuserDetails(e)} />
                <br />
                
                <input  type='password'  placeholder='password' name="password" value={userDetails.password} onChange={(e)=> handleuserDetails(e)}/>
                <div>
                <button  onClick={(userDetails)=>handleRegisteruser(userDetails)} >Create Account</button>
                </div>
            </div>

        </div>

        <div className='login'>
            <h2>Sign in</h2>
            <div className='input-fields'>
               <br />
                <input  type='email'   placeholder='Email' name="email" value={logindetails.email} onChange={(e)=> handllogineuserDetails(e)} />
                <br />
                <input type='password'   placeholder='password' name="password" value={logindetails.password} onChange={(e)=> handllogineuserDetails(e)}/>

                <div>
                <button  onClick={(logindetails)=>handleLoginuser(logindetails)} >Sign in</button>
                </div>
            </div>    

        </div>
    </div>
  )
}

export default Login