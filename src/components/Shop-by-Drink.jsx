import React from 'react'
import "./ShopbyDrink.css"
import drink_icons_Wine from "./img/drink_icons_Wine.png"
import drink_icons_Beer from "./img/drink_icons_Beer.png"
import drink_icons_Spirits from "./img/drink_icons_Spirits.png"
import drink_icons_Aperitifs from "./img/drink_icons_Aperitifs.png"
import drink_icons_Ready_to_Drink from "./img/drink_icons_Ready_to_Drink.png"
function ShopbyDrink() {
  return (
         <div className='ShopbyDrink'>

<p className='heading-shop-drink'>Shop by Drink</p>
<div className='Shop-by-Drink-imgs'>
    <p><img src={drink_icons_Wine} alt="drink_icons_Wine" width={204} height={204} /> Wine</p>
    <p><img src={drink_icons_Beer} alt="drink_icons_Beer" width={204} height={204} />Beer</p>
    <p><img src={drink_icons_Spirits} alt="drink_icons_Spirits" width={204} height={204} />Spirits</p>
    <p><img src={drink_icons_Aperitifs} alt="drink_icons_Aperitifs" width={204} height={204} />Aperitifs</p>
    <p><img src={drink_icons_Ready_to_Drink} alt="drink_icons_Ready_to_Drink" width={204} height={204} />Drink</p>


</div>

      
    </div>
  )
}

export default ShopbyDrink;
