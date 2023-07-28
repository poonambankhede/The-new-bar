import React from 'react'
import { NavLink } from 'react-router-dom';

function CategorySearch() {
  return (
    <>
    <input class="predictive-search__input" type="text" name="q" autocomplete="off" autocorrect="off" aria-label="Search" placeholder="What are you looking for?"></input>
    <p>Category</p>
      
<NavLink to="/Wine">Wine</NavLink><br/>
<NavLink to="/Beer">Beer</NavLink><br/>
<NavLink to="/Spirits">Spirits</NavLink><br/>
<NavLink to="/Aperitifs">Aperitifs</NavLink><br/>
<NavLink to="/BittersMixers">Bitters & Mixers</NavLink><br/>
<NavLink to="ReadyDrink">Ready-to-Drink</NavLink>

    </>
  )
}

export default CategorySearch;
