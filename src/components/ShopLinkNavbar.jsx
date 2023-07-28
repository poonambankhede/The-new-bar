import React from 'react'
import "./ShopLinkNavbar.css"
function ShopLinkNavbar() {
  return (
  <div className='ShopLinkNavbar'>
  
  <div className='NonalcoholicWine'> 
  <h4 className='hdgNonalcoholicLink'>Nonalcoholic Wine</h4>
  <br/>

  <p className='RedLink'>Red</p>
  <p className='WhiteLink'>White</p>
  <p className='RoseSparklingsLink'>Rosé & Sparkling</p>
  </div>


<div className='NonalcoholicSpirits'>
<h4 className='HdgNSpiritsLink'>Nonalcoholic Spirits</h4>
<br/>

<p className='BourbonWhiskeyLink'>Bourbon & Whiskey</p>
<p className='GinLink'>Gin</p>
<p className='RumLink'>Rum</p>
<p className='TequilaMezcalLink'>Tequila & Mezcal
</p>
</div>
<div className='NonalcoholicBeer'>
<div className='hdgNBeerLink'>Nonalcoholic Beer</div>
<br/>
<p className='AperitifsLink'>Aperitifs</p>

<p className="BittersMixersLink">Bitters & Mixers</p>
<p className='ReadyDrinkLink'>Ready-to-Drink</p>
</div>
  
  <div className='DesNewDrink'>
<img className='DesNewDrinkImg' src='https://thenewbar.com/cdn/shop/files/quiz_v5_240x.jpg?v=1653708709' width={180}  alt='Descover your New Drink'/>
<br/>
<br/>
<p className='TaketheQuiz'>Take the Quiz</p>

    
  </div>
<div className='PostAlc'>
    <img src='https://thenewbar.com/cdn/shop/products/Post-Alc-Track-Shorts_Gradient-Background_240x.png?v=1679004242'width={180} alt="POST ALC"/>
    <br/><br/>
    <p className='ShopMerch'>Shop Merch
</p>

</div>
  </div>
      
    
  )
}

export default ShopLinkNavbar;
