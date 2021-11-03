import React from 'react'
import HomeData from '../../Data Files/HomeData'
import GrandSubTitleLi from './grandSubTitleLi'
import '../css/style.css'

function OtherSubBoysLi() {
    return (
        <div>

            <div className="boysContentContainer">

                <div className="leftSide boysLeftSide" style={{backgroundImage: `url(${HomeData[0].navLiInfo[4].liImages[0]})`}}></div>

                <div className="rightSide boysRightSide">

                    <h1 className='liH1 defaultFontWeight'>{HomeData[0].navLiInfo[4].liNames[0]}</h1>

                </div>

                <div className="grandSubulFootwear">

                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[4].liImages[4]} textVal={HomeData[0].navLiInfo[4].SubLiName1[0]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[4].liImages[5]} textVal={HomeData[0].navLiInfo[4].SubLiName1[1]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[4].liImages[6]} textVal={HomeData[0].navLiInfo[4].SubLiName1[3]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[4].liImages[7]} textVal={HomeData[0].navLiInfo[4].SubLiName1[3]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[4].liImages[8]} textVal={HomeData[0].navLiInfo[4].SubLiName1[4]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[4].liImages[9]} textVal={HomeData[0].navLiInfo[4].SubLiName1[5]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[4].liImages[10]} textVal={HomeData[0].navLiInfo[4].SubLiName1[6]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[4].liImages[11]} textVal={HomeData[0].navLiInfo[4].SubLiName1[7]}/>        

                </div>

                </div>

                <div className="boysContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${HomeData[0].navLiInfo[4].liImages[1]})`}}></div>

                <div className="rightSide menRightSide">

                    <h1 className='liH1 defaultFontWeight'>{HomeData[0].navLiInfo[4].liNames[1]}</h1>

                </div>

                <div className="grandSubulApparel">
        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[4].liImages[12]} textVal={HomeData[0].navLiInfo[4].SubLiName2[0]}/>
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[4].liImages[13]} textVal={HomeData[0].navLiInfo[4].SubLiName2[1]}/>

                </div>

                </div>

                <div className="boysContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${HomeData[0].navLiInfo[4].liImages[2]})`}}></div>

                <div className="rightSide menRightSide">

                    <h1 className='liH1 defaultFontWeight'>{HomeData[0].navLiInfo[4].liNames[2]}</h1>

                </div>

                <div className="grandSubulAccessories">
        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[4].liImages[14]} textVal={HomeData[0].navLiInfo[4].SubLiName3[0]}/>        

                </div>

                </div>

                <div className="boysContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${HomeData[0].navLiInfo[4].liImages[3]})`}}></div>

                <div className="rightSide menRightSide">

                    <h1 className='liH1 defaultFontWeight'>{HomeData[0].navLiInfo[4].liNames[3]}</h1>

                </div>

                <div className="grandSubulBags">

                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[4].liImages[15]} textVal={HomeData[0].navLiInfo[4].SubLiName4[0]}/>

                </div>

            </div>

        </div>
    )
}

export default OtherSubBoysLi
