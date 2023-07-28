import React from 'react'
import "./DiscoverNewDrink.css"
function DiscoverNewDrink() {
  return (
    
    <div className='Discover-your-new-drink'>
    <img className="img-left" src="https://thenewbar.com/cdn/shop/files/Quiz_homepageAsset_10_1_700x.png?v=1655779542" width={450} height={450} />

    <div className='right-content-discover'>
        <split-lines>Discover your <sup>new</sup> drink</split-lines>
        <p>Answer a few questions, tell us what you like, and we'll tell you what to try.
        </p>
        <button className='Take-the-Quiz-btn'> Take the Quiz</button>
    </div>
</div>
  )
}

export default DiscoverNewDrink
