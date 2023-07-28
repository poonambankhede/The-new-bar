import React from 'react'
import "./ProcessTemplet.css"
function OurProcess() {
  return (
    <>
    <div className='Our-Process-templet'>
    <h2>If we don't love it, we don't sell it.
    </h2>
    <h1>Our Process:
    </h1>
    <div className='icon-process-templet'>
    <p className='Research'><img  src="https://thenewbar.com/cdn/shop/files/researchAsset_7_4x_2f676dd7-c2ba-4199-9270-9916eb299ece_90x.png?v=1653439413" width={45}/>Research</p>
    
    <p className='Examine'><img  src='https://thenewbar.com/cdn/shop/files/examineAsset_8_4x_b62d0205-850f-4755-84c7-b751de72bdb9_90x.png?v=1653439413'width={45}/>Examine</p>
    
    <p className='Taste-Test'><img  src='https://thenewbar.com/cdn/shop/files/taste_test_Asset_9_4x_beff41e2-26e2-4574-bc52-007a2d10bfd1_90x.png?v=1653439413'width={45}/>Taste-Test</p>
    
    </div>
            </div>
    <div className='bottom-background-img'></div>
  </>
  )
}


export default OurProcess
