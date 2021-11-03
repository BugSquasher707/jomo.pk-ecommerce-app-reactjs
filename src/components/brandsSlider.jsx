import React from "react";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './css/style.css'
import HomeData from "../Data Files/HomeData";

function BrandsSlider ({imgVal,headingVal}){  

        const preBtn = `<img src=${HomeData[5].navBtns[0]} alt='previous' />`
        const nextBtn = `<img src=${HomeData[5].navBtns[1]} alt='next' />`

        return (  

          <div> 

            <div class='container-fluid brandSliderDiv' style={{backgroundColor: 'white'}}>            

            <h1 className='collectionHeading collectionHeading1 brandsHeading'>{headingVal}</h1>

                <OwlCarousel items={7}  

                className="owl-theme"  

                nav = {true}
 
                loop = {true}

                dots = {false}

                margin={0} 
                
                autoplay = {true}

                autoplaySpeed = {500}

                autoplayHoverPause = {true}

                autoplayTimeout = {5000}

                navText ={[preBtn, nextBtn]}

                center ={true}

                responsive = {
                    {0:{
                        items:1
                    },
                    400:{
                        items:2
                    },
                    600:{
                        items: 3
                    },
                    768:{
                        items:3
                    },
                    1024:{
                        items:4
                    },              
                    1500:{
                        items: 5
                    },
                    1600:{
                        items: 7
                    }}
                }
                >  
                {imgVal.map((ele,i,arr)=>{
                    return(
                        <div className="logoDiv">
                            
                            <img src={ele} alt="" />
                            
                        </div>
                    )
                    
                })}   

                </OwlCarousel>  

            </div>  

    </div>  

        )  

      }  

export default BrandsSlider  
