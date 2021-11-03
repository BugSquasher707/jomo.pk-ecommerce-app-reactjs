import React from "react";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './css/style.css'
import HomeData from "../Data Files/HomeData";
import Brands from "../Data Files/BrandApi";

function TrendingProductsSlider ({styleState,imgVal,getSetImgSrc}){  

        const preBtn = `<img src=${HomeData[5].navBtns[0]} alt='previous' />`
        const nextBtn = `<img src=${HomeData[5].navBtns[1]} alt='next' />`

        let mountedStyle = {
            animation: "inAnimation 300ms ease-in"
        };

        return (  

          <div style={styleState ? mountedStyle : ''}> 

             <div class='container-fluid sliderDiv' style={{backgroundColor: '#F9F9F9'}}>            

                <OwlCarousel items={5}  

                className="owl-theme"  

                nav = {true}

                dots = {false}

                margin={15} 
                
                navText ={[preBtn, nextBtn]}

                responsive = {
                    {0:{
                        items:3
                    },
                    768:{
                        items:3
                    },
                    1024:{
                        items:4
                    },
                    1200:{
                        items: 4
                    },
                    1400:{
                        items: 5
                    }}
                }
                >  
                {imgVal.map((ele,i,arr)=>{
                    return(
                        <div className="card itemsDiv">
                            
                            <div className="imgContainer1">

                                <img className="card-img-top img" src={ele.Images[0]} alt="Card image cap"/>

                                <button type='button' className='addCartBtn'>Add to Cart</button>

                            </div>

                            <div className="card-body">
                                <h5 className="card-title itemName">{ele.Name}</h5>
                                <p className="card-text itemSubName">{ele.SubName}</p>
                                <p className="card-text itemPrice">PKR. {ele.Price}</p>
                                {ele.colorImg.map((ele1,ind)=>{
                                    return (           
                                        <button className="colorImg" onClick={getSetImgSrc}> <img src={ele1} alt="" /></button>    
                                )})}
                            </div>
                        </div>
                    )
                    
                })}   
                            
                <div className='itemsDiv1'>

                    <button type='button' className='viewAllBtn'>View All</button>

                </div>

            </OwlCarousel>  

        </div>  

    </div>  

        )  

      }  

export default TrendingProductsSlider  
