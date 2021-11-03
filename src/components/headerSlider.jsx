import React from 'react'
import './css/style.css'

function HeaderSlider({imgVal,btnVal}) {
    
    console.log(imgVal);
    
    return (
        <div>

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" >
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={imgVal[0]} alt="First slide"/>
                    
                        <div className="carousel-caption d-flex justify-content-center align-items-center">
                            
                            {btnVal.slider1Btns.map((ele,i)=>{
                                return <button className="sliderBtn" type='button' key={i}>{ele}</button>
                            })}
                        
                        </div>
                    
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={imgVal[1]} alt="Second slide"/>
                        
                        <div className="carousel-caption d-flex justify-content-center align-items-center">
                            
                            {btnVal.slider2Btns.map((ele,i)=>{
                                return <button className="sliderBtn" type='button' key={i}>{ele}</button>
                            })}
                        
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={imgVal[2]} alt="Third slide"/>
                    
                        <div className="carousel-caption d-flex justify-content-center align-items-center">
                            
                            {btnVal.slider3Btns.map((ele,i)=>{
                                return <button className="sliderBtn" type='button' key={i}>{ele}</button>
                            })}
                        
                        </div>
                    
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={imgVal[3]} alt="Third slide"/>
                    
                        <div className="carousel-caption d-flex justify-content-center align-items-center">
                            
                            {btnVal.slider4Btns.map((ele,i)=>{
                                return <button className="sliderBtn" type='button' key={i}>{ele}</button>
                            })}
                        
                        </div>
                    
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={imgVal[4]} alt="Third slide"/>
                    
                        <div className="carousel-caption d-flex justify-content-center align-items-center">
                            
                            {btnVal.slider5Btns.map((ele,i)=>{
                                return <button className="sliderBtn" type='button' key={i}>{ele}</button>
                            })}
                        
                        </div>
                    
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={imgVal[5]} alt="Third slide"/>
                    
                        <div className="carousel-caption d-flex justify-content-center align-items-center">
                            
                            {btnVal .slider6Btns.map((ele,i)=>{
                                return <button className="sliderBtn" type='button' key={i}>{ele}</button>
                            })}
             
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev sliderControlWidth" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className='fas fa-chevron-left SliderIcon' aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next sliderControlWidth" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className='fas fa-chevron-right SliderIcon' aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            
        </div>
    )
}

export default HeaderSlider
