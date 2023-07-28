import React from 'react'
import "./ShopbyOccasion.css"
function ShopbyOccasion() {
  return (
    <div className='ShopbyOccasion'>
        <div className='SummertimeDrinks'>
      <p className='SummertimeDrinksLink'>SummertimeDrinks</p>
      <p className='QuietNightIn'>QuietNightIn</p>
      <p className='WildNightOut'>WildNightOut</p>
      <p className='Celebration'>Celebration</p>
      </div>

      <div className='NewtoThis'>
        <p className='NewtThisLink'>New to This</p>
        <p className='DinnerParty'>Dinner Party</p>
        <p className='DoingtheLeast'>Doing the Least</p>
        </div>

        <div className='BundleImg'>
            <img src='https://thenewbar.com/cdn/shop/products/Everything-But-The-Cart_Bundle_Blue_240x.jpg?v=1672260030' width={160} alt="Bundle_Blue"/><br/><br/>
            <p className='EverythingText'>Everything But The Cart Bundle</p>
</div>
<div className='OccImg'>
<img className='DesNewDrinkImgOcc' src='https://thenewbar.com/cdn/shop/files/quiz_v5_240x.jpg?v=1653708709' width={190}  alt='Descover your New Drink'/>
<br/>
<br/>
<p className='TaketheQuizOcc'>Take the Quiz</p>
</div>
    </div>
  )
}

export default ShopbyOccasion
