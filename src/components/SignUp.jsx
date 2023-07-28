import {useState}from 'react'
import {VscAccount} from "react-icons/vsc";
import {BsKey } from "react-icons/bs";

// import { NavLink } from 'react-router-dom';
import "../components/LoginSignUp.css";
import { NavLink,useNavigate } from "react-router-dom";


function SignUp  ()  {
const[Name,setName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")

const navigate = useNavigate();


function HandelSubmit(e){
e.preventDefault()
const token = {email,password}
// console.log(token)
localStorage.setItem("token",JSON.stringify(token))
return( navigate("/home"))
}
  return (
    <div className='SinUp'>
      <form onSubmit={HandelSubmit}>

       <h1> Sign Up </h1><br/>
       <p>Please fill in this form to create an account.</p>
     <input type="text" placeholder=' Name' onChange={(e) =>setName(e.target.value)} required/>
     <label ><input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder=" enter your email " required /><span><VscAccount/></span></label>
     <label><input type="Password" onChange={(e)=>setPassword(e.target.value)} placeholder=' enter your password' required/><span><BsKey/></span></label>
     {/* <input type="checkbox" checked="checked" name="remember"  className='checked'/> Remember me</label> */}

<button type="Submit" className='Submit-btn'>Submit</button>

<h6>If you already have an account, click on the <NavLink to="/" ><span>Login</span> </NavLink></h6>






      </form></div>
  )
}

export default SignUp;
