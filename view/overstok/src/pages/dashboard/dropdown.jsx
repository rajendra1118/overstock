import { Link } from "react-router-dom"
import './DashBoard.css'
const DropeDown =()=>{
   return (

    <div className="flex flex-col dropDownprofile">
         <div className="flex flex-col gap-10">
            <Link   to="/register"  className={"dropdown-link"}  > <li >Sign in</li></Link>
            <Link   to="/register" className={"dropdown-link"} > <li>Create an Account</li></Link>
             <li>My Account</li>
             <li>MY order</li>
             <li>my review</li>
             <li>Help</li>
         </div>
    </div>
   )



}

export default DropeDown