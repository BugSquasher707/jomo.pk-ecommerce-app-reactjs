import React from 'react'
import HomeData  from '../../Data Files/HomeData'

function ApperalSubLi() {
    return (
        <div>

            <div className='li1contentContainer'>
          
              <div className="leftSide" style={{backgroundImage: `url(${HomeData[0].navLiInfo[0].liImages[0]})`}}></div>
          
              <div className="rightSide">
                  
                  <h1 className='liH1'>{HomeData[0].navLiInfo[0].liNames[0]}</h1>
          
              </div>
          
          </div>          
          
          <div className='li2contentContainer'>
          
              <div className="leftSide" style={{backgroundImage: `url(${HomeData[0].navLiInfo[0].liImages[1]})`}}></div>
          
              <div className="rightSide">
                  
                  <h1 className='liH1'>{HomeData[0].navLiInfo[0].liNames[1]}</h1>
          
              </div>
          
          </div>  
          
            <div className='li3contentContainer'>
          
              <div className="leftSide" style={{backgroundImage: `url(${HomeData[0].navLiInfo[0].liImages[2]})`}}></div>
          
              <div className="rightSide">
                  
                  <h1 className='liH1'>{HomeData[0].navLiInfo[0].liNames[2]}</h1>
          
              </div>
          
          </div>
          
            <div className='li4contentContainer'>
          
              <div className="leftSide" style={{backgroundImage: `url(${HomeData[0].navLiInfo[0].liImages[3]})`}}></div>
            
              <div className="rightSide">
                  
                  <h1 className='liH1'>{HomeData[0].navLiInfo[0].liNames[3]}</h1>
            
              </div>
          
          </div>

        </div>
    )
}

export default ApperalSubLi
