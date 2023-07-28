import React from 'react'
import "./CartLink.css"
function CartLink() {
    
  return (
    <>
    <div className='Card'>
    <p className='CardHeading'>Cart</p>
  <div className='boder'></div>
    <br/>
<div className='EmptyShopinBtn'><p className='Empty'>Your cart is empty</p>
<br/>
<button className='StartShopping' >Start shopping</button>
</div> </div>  
    </>
  )
}

export default CartLink
