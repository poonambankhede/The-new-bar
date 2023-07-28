import React from 'react'
import Count from './Count_botton';
import "./ThinkLessDrinkMore.css";

function Thinklessdrinkmore() {
  return (
    <>
<div className='Think-less-drink-more'>
            <p className="Heading-drink-more">Think less, drink more.</p>
            <div className='img_more_drink'>
                <img src='
https://thenewbar.com/cdn/shop/products/Everything-But-The-Cart_Bundle_Cream_700x.jpg?v=1672260030' alt='drink_more_imgs' width={550} height={500} /></div>
            <div className='right_contten'>
                <div className='link'>Everything But The Cart<br /><span>$275.00</span>
                </div>
                <br />

                <p className='peragraph'>Everything you need for a bar cart makeover, because new habits are easier to build when they're delicious.
                    <br />
                    <br />

                    Kit contents: Prima Pavé sparkling Blanc de Blancs, Giesen Sauvignon Blanc, Ghia aperitif, Noughty Syrah, Spiritless' Jalisco 55 Tequila, Monday Gin, Lili's Ruby sparkling wine alternative, Spiritless' Kentucky 74 Bourbon. Our favorite ready-to-drink cocktails, beers, and mixers from Lyre's, De Soi, Athletic Brewing, Visitor, Mikkeller, and Avec as well as a nonalcoholic bitter trio from All The Bitter.


                </p>
                Quantity:
                <Count />


                <button className='Add-to-card-button'>Add to cart</button>
                <br />
                Pickup available at Venice Store
                <br />
                Usually ready in 2 hours
            </div>
        </div><br />    
      
</>
  )
}

export default Thinklessdrinkmore
