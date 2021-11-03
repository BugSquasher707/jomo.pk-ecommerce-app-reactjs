import React from 'react'
import HomeData from '../../Data Files/HomeData'
import GrandSubTitleLi from './grandSubTitleLi'
import '../css/style.css'

function OtherSubMenLi() {
    return (
        <div>

            <div className="menContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${HomeData[0].navLiInfo[1].liImages[0]})`}}></div>

                <div className="rightSide menRightSide">

                    <h1 className='liH1 defaultFontWeight'>{HomeData[0].navLiInfo[1].liNames[0]}</h1>

                </div>

                <div className="grandSubulFootwear">

                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[4]} textVal={HomeData[0].navLiInfo[1].SubLiName1[0]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[5]} textVal={HomeData[0].navLiInfo[1].SubLiName1[1]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[6]} textVal={HomeData[0].navLiInfo[1].SubLiName1[2]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[7]} textVal={HomeData[0].navLiInfo[1].SubLiName1[3]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[8]} textVal={HomeData[0].navLiInfo[1].SubLiName1[4]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[9]} textVal={HomeData[0].navLiInfo[1].SubLiName1[5]}/>        

                </div>

                </div>

                <div className="menContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${HomeData[0].navLiInfo[1].liImages[1]})`}}></div>

                <div className="rightSide menRightSide">

                    <h1 className='liH1 defaultFontWeight'>{HomeData[0].navLiInfo[1].liNames[1]}</h1>

                </div>

                <div className="grandSubulApparel">

                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[10]} textVal={HomeData[0].navLiInfo[1].SubLiName2[0]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[11]} textVal={HomeData[0].navLiInfo[1].SubLiName2[1]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[12]} textVal={HomeData[0].navLiInfo[1].SubLiName2[2]}/>

                </div>

                </div>

                <div className="menContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${HomeData[0].navLiInfo[1].liImages[2]})`}}></div>

                <div className="rightSide menRightSide">

                    <h1 className='liH1 defaultFontWeight'>{HomeData[0].navLiInfo[1].liNames[2]}</h1>

                </div>

                <div className="grandSubulAccessories">

                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[13]} textVal={HomeData[0].navLiInfo[1].SubLiName3[0]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[14]} textVal={HomeData[0].navLiInfo[1].SubLiName3[1]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[15]} textVal={HomeData[0].navLiInfo[1].SubLiName3[2]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[16]} textVal={HomeData[0].navLiInfo[1].SubLiName3[3]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[17]} textVal={HomeData[0].navLiInfo[1].SubLiName3[4]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[18]} textVal={HomeData[0].navLiInfo[1].SubLiName3[5]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[19]} textVal={HomeData[0].navLiInfo[1].SubLiName3[5]}/>        

                </div>

                </div>

                <div className="menContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${HomeData[0].navLiInfo[1].liImages[3]})`}}></div>

                <div className="rightSide menRightSide">
 
                    <h1 className='liH1 defaultFontWeight'>{HomeData[0].navLiInfo[1].liNames[3]}</h1>

                </div>

                <div className="grandSubulBags">

                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[20]} textVal={HomeData[0].navLiInfo[1].SubLiName4[0]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[21]} textVal={HomeData[0].navLiInfo[1].SubLiName4[1]}/>        
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[22]} textVal={HomeData[0].navLiInfo[1].SubLiName4[2]}/>
                    <GrandSubTitleLi imgVal={HomeData[0].navLiInfo[1].liImages[23]} textVal={HomeData[0].navLiInfo[1].SubLiName4[3]}/>

                </div>

            </div>

        </div>
    )
}

export default OtherSubMenLi
