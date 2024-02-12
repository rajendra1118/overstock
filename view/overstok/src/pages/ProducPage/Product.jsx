import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { DashBoard } from '../dashboard/DashBoard'
import Footer from '../Footer/Footer'
import './Product.css'

function Product() {
   const navigate= useNavigate()
    
   const [products,setProducts]=useState([ ])
    const [productId,setProductID]= useState('')
   const [refresh,setRefresh]= useState(false)
  //  const [product, setProduct] = useState([]);
  // console.log(products)


  const getProduct= async()=>{

    try {
        let productData= await fetch("http://localhost:8080/data/get",{

            method:"GET",
            headers :{
                "authorization": `bearer ${localStorage.getItem("token")}`
            }
            
        })
        if(!localStorage.getItem("token")){
          navigate('/register')
        }else{
          productData= await productData.json()
          console.log(productData)
          setProducts(productData)

        }    
    } catch (error) {
        console.log(error)
    }

}


useEffect(()=>{
  getProduct()
},[])


  //  console.log(products,"8")
  // useEffect(()=>{
  //       axios.get("http://localhost:8080/data/get")
  //       .then(res=>{
  //         console.log(res.data)
  //         setProducts(res.data)
  //       })
  //       .catch(err=>{
  //         console.log(err)
  //       })
      
  //     // const token= localStorage.getItem("token")
  //     // console.log(token)
  //   if(!localStorage.getItem('token')){
    
  //     navigate('/register')
  //   }
  // },[])


  const handleAddtoCart= async (productId)=>{
    
    const userId= localStorage.getItem("userId")

    console.log({productId,userId})
    const cartdata=({productId,userId})

    axios.post("http://localhost:8080/user/add-to-cart",cartdata)
    .then(res=>{
   
      console.log("productdata",res.data)
       if(res.data.code === 200){
        setRefresh(!refresh)
       }
       setProductID(res.data.productId)
       alert("item add to cart succesfully")
      
     
    })
    .catch(err=>{
      console.log(err)
    })


     
    

  }


  const sortByPrice = () => {
  
    const sortedProducts = [...products].sort((a, b) => (b.Price) - (a.Price));
    setProducts(sortedProducts);
    console.log(sortedProducts,"line103")
  };


  return (
    <div  >
        <DashBoard/>
        {/* <div  >
        <Link to="/getCart"><button>go to cart</button></Link>
        </div> */}

      
        <div  className='ProductSection' >

            <div className='sidebar'>
            <button onClick={sortByPrice}>Sort by Price</button>
            
            </div>
           
            {/* data && data.length>0 &&  */}
          <div className='map-product'>

         
            { 
              products.map((ele,index)=>(
                <div className='product-details' key={index}>
                  <img src={ele.Image} alt="" />
                  <h3>{ele.Name}</h3>
                  <p>Price:{ele.Price}</p>
                  {/* <p>{ele.Des}</p> */}
                  <button onClick={()=>
                    handleAddtoCart(ele._id)} >Add to cart</button>
                </div>
              ))
            }
             </div>
        </div>


   {/* footer section */}
   <Footer/>

    </div>
  )
}

export default Product