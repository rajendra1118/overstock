import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer-div'>

        <div className='topdiv'>
             <div>
                <h3>MY ACCOUNT</h3>
                <li>Orders & Returns</li>
                <li>Email Preferences</li>
                <li>Account Settings</li>
             </div>
             <div>
                <h3>LET US HELP</h3>
                <li>Contact Customer Care</li>
                <li>Shipping Information</li>
                <li>Return Policy</li>
                <li>International Help</li>
                <li>Accessibility</li>
                <li>Frequently Asked Questions</li>
             </div>
             <div>
                <h3>COMPANY INFORMATION</h3>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Careers</li>
                <li>Investor Relations</li>
                <li>Sell Your Products</li>
                <li>Supply Chain Transparency</li>
             </div>
             <div>
                <h3>MORE WAYS TO SHOP</h3>
                <li>Deals</li>
                <li>Clearance</li>
                <li>New Arrivals</li>
             </div>
        </div>
        <div className='bottomdiv'>

            <div>
                <p>© Copyright 2024, Beyond, Inc.</p>
                <p>799 Coliseum Way Midvale, UT 84047 | 1-800-843-2446</p>
            </div>
            <div>
                <p>*Promotion Terms  ship to :INDIA</p>
            </div>
        </div>
        
    </div>
  )
}

export default Footer