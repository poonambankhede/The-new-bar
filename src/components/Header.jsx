import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "./img/logo.png"
const Header = () => {
    return (<>

        <div className='titel'>
            <p> IT'S OUR BIRTHDAY! FREE SHIPPING ON ORDERS OVER $150 + 20% OFF SELECT DRINKS</p>
        </div>

        <div className='Navbar-box'>
            <div className='newbarLogo'>
                <img src={logo} alt="logo" width={170} />
            </div>
            <div className='NavItem'>
                <div className='Shop by Drink'>Shop by Drink</div>
                <div className='Shop by Occasion'>Shop by Occasion </div>
                <div className='Gifts'>Gifts</div>
                <div className='Connect & Learn'>Connect & Learn</div>
                <div className='About Us'>About Us</div></div>
            <div className='icon'>
                <p><NavLink to="/CategorySearch"><AiOutlineSearch/></NavLink></p>
                <p> <NavLink to="/"><RxAvatar/></NavLink></p>
                <p><AiOutlineShoppingCart/></p>
            </div></div>
        <div className='celebrate-size'>
            <p className='celebrate-background' >
                <p className='h2'>It's not our first rodeo, but it is our first birthday.</p>
                <p className='h1'>Let's celebrate!</p>
                <button >Shop Birthday Sale</button>

            </p>
        </div>

</>
    )
}
export default Header
