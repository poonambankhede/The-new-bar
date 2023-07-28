import { useState } from "react";
import "./Footer.css"
import { BiLogoFacebook } from "react-icons/bi";
import {AiOutlineInstagram } from "react-icons/ai";
import {RiTiktokFill } from "react-icons/ri";
function Footer() {
  const [email, setEmail] = useState("@gmail.com")

    return (
        < div className='Footer-size'>
            <div className='About-Us'>

                <h3>About Us</h3>
                <br/>
                <p> A place for anyone and everyone who wants to drink less. We're here to make being good to yourself fun.</p>

            </div>
            <div className='Shop-by-Drink'>
                <h3>Shop by Drink</h3>
                <br/>

                <p>Wine<br/>
                    Spirits<br/>
                    Beer<br/>
                    Aperitifs<br/>
                    Ready-to-Drink<br/>
                    Bitters & Mixers</p>
            </div>
            <div className='Help'>
                <h3>Help</h3>
                <br/>
                  <p>Account
                    Shipping & Returns
                    Payment Policy
                    FAQ
                    Contact Us</p>
            </div>

            <div className='Social'>
<h3 className='social-heading'>Social</h3>
<br/>
<div className='social-icon'>
<h3><BiLogoFacebook/></h3>
<p><AiOutlineInstagram/></p>
<h3><RiTiktokFill/></h3>
            </div></div>
<div className='Lets-be-friends'>
<h3 className="h3">Let's be friends.</h3>
<br/>
{/* <div className="input-box"> */}
<input type="email"  className="input-box"onChange={(e)=>setEmail(e.target.value)} placeholder=" enter your email" required />
{/* </div> */}



        </div>
        </div>
    )
}

export default Footer;
