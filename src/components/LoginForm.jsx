import {BsKey } from "react-icons/bs";
import {VscAccount} from "react-icons/vsc";
import { useState } from "react";
import "../components/LoginSignUp.css";
import { NavLink,useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("@gmail.com")
  const [password, setPassword] = useState()
    const navigate = useNavigate();
 
  function LoginHandeler(e) {
e.preventDefault()
      const token = localStorage.getItem("token")
      const t = JSON.parse(token)
      // console.log(t);

      if(email != t.email){
       return( alert("Please check your Email"))
      }
      else if(email==t.email && password== t.password){
       return( navigate("/home"))
}

     

  }
    

      

  return (
    <div className="cover">
      <form onSubmit={LoginHandeler}>
      <h1>Login</h1>
      <p>Please enter your e-mail and password</p>
        
     <label ><input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder=" enter your email " required /><span><VscAccount/></span></label>
     <label><input type="Password" onChange={(e)=>setPassword(e.target.value)} placeholder=' enter your password' required/><span><BsKey/></span></label>

      <button type="Submit"  className="login-btn">Login</button>
        {/* <NavLink to="/signup"> */}
        {/* <p  className="text-Signup">Or Signup</p> */}
        {/* </NavLink> */}

<h6>New customer?
         <NavLink to="/signup"> 
         <span>Create an account</span> 
    </NavLink>
    </h6>
        {/* <div className=" alt-login"> */}
   
        {/* <h3><BsGoogle/></h3> 
       <h3> <FaFacebookF/></h3> */}
       {/* </div> */}
      
       
    </form>
    </div>
  )

}
export default Login;
