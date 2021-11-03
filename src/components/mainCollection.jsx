import React from 'react'
import './css/style.css'

function MainCollection({imgVal, imgSubTitle, styleState}) {
    
    let mountedStyle = {
        animation: "inAnimation 300ms ease-in"
    };
    
    return (
        <div>
            <div className='row collectionRow1 mt-2' style={styleState ? mountedStyle : ''}>

                <div className="col-lg-6 col-md-6 col-12 p-0 ">

                    <div className="upperDiv h-50 mainColumn">

                        <img src={imgVal[0]} width='100%' height='100%' alt="" className='scaleImgEffect'/>

                        <div className="opacityDiv">

                            <h1 className='imgHeading'>{imgSubTitle.img1}</h1>

                        </div>

                    </div>

                    <div className="lowerDiv h-50 mainColumn">

                        <img src={imgVal[1]} alt="" width='100%' height='100%' className='scaleImgEffect'/>

                        <div className="opacityDiv">

                            <h1 className='imgHeading'>{imgSubTitle.img2}</h1>

                        </div>

                    </div>

                </div>

                <div className="col-lg-6 col-md-6 col-12 p-0 ">

                    <div className="upperDiv h-50 mainColumn">

                        <img src={imgVal[2]} width='100%' height='100%' alt="" className='scaleImgEffect'/>

                        <div className="opacityDiv">

                            <h1 className='imgHeading'>{imgSubTitle.img3}</h1>

                        </div>

                    </div>

                    <div className="lowerDiv h-50 mainColumn">

                        <img src={imgVal[3]} alt="" width='100%' height='100%' className='scaleImgEffect'/>

                        <div className="opacityDiv">

                            <h1 className='imgHeading'>{imgSubTitle.img4}</h1>

                        </div>

                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default MainCollection
