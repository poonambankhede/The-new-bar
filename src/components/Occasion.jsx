import React from 'react'
import "./Occasion.css"

function Occasion( ) {
  return (
    
    <div className='Occasion-item'>
            <h3 className="heading">What's the <sup>Occasion?</sup></h3>
            <div className='Occasion-btns'>

                <button className='TNBs-Birthday'>TNB's Birthday</button>
                <button className='Summertime-drinks'>Summertime drinks</button>
                <button className='Quiet-night-in'>Quiet night in</button><br />
                <button className='Wild-night-out'>Wild night out</button>
                <button className='Dinner-party'>Dinner party</button>
                <button className='Celebration'>Celebration</button>  <br />
                <button className='Doing-the-least'>Doing the least</button>
                <button className='New-to-this'>New to this</button>
            </div></div>
  )
}


export default Occasion

