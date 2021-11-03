import React from 'react'
import { Parallax } from 'react-parallax'
import HomeData from '../Data Files/HomeData'
import Brands from '../Data Files/BrandApi'
import './css/style.css'
import { FiSearch,FiUser,FiMenu,FiX,FiHome,FiMessageCircle } from "react-icons/fi";
import { IoBagRemoveOutline, IoCallOutline } from "react-icons/io5";
import ApperalSubLi from './navBar/apparelSubLi'
import OtherSubMenLi from './navBar/otherSubMenLi'
import OtherSubWomenLi from './navBar/otherSubWomenLi';
import OtherSubGirlsLi from './navBar/otherSubGirlsLi';
import OtherSubBoysLi from './navBar/otherSubBoysLi';
import NewApparelSlideMob from './navBar/newApparelSlideMob';
import MenSlideMob from './navBar/menSlideMob';
import WomenSlideMob from './navBar/womenSlideMob';
import GirlsSlideMob from './navBar/girlsSlideMob';
import BoysSlideMob from './navBar/boysSlideMob';
import { Link } from 'react-router-dom'

function BrandsDataRender({cartSideBar,cartSideHide,cartSideShow,loginSideBar,loginSideHide,loginSideShow,navSlideOpen,searchHide,searbarShow,searchBar,getSetImgSrc,isBagsActive,bagsShow,isApparelActive,apparelShow,isFootwearActive,footwearShow,bagsHideShow,apparelHideShow,footwearHideShow,bagsBoys,bagsBoysClose,accessoriesBoys,accessoriesBoysClose,apparelBoys,apparelBoysClose,footWearBoys,footWearBoysClose,bagsGirls,bagsGirlsClose,accessoriesGirls,accessoriesGirlsClose,apparelGirls,apparelGirlsClose,footWearGirls,footWearGirlsClose,bagsWomen,bagsWomenClose,accessoriesWomen,accessoriesWomenClose,apparelWomen,apparelWomenClose,footWearWomen,footWearWomenClose,accessoriesMen,accessoriesMenClose,bagsMen,bagsMenClose,apparelMen,apparelMenClose,footWearMen,footWearMenClose,boysSlide,boysSlideClose,girlSlide,girlSlideClose,womenSlide,womenSlideClose,menSlide,menSlideClose,newApparelSlideClose,newApparelSlide,navSliderClose,navSliderOpen,womanShow,isWomanActive,manShow,isManActive,kidShow,isKidActive,womanHideShow,manHideShow,kidHideShow}) {
    
    let mountedStyle = {
        animation: "inAnimation 200ms ease-in"
    };
    
    return (
        <div className='wrapperDiv'>

            {searchBar && <div className="coverDiv"></div>}
            
            {navSlideOpen && <div className="coverDiv"></div>}
            
            {loginSideBar && <div className="coverDiv"></div>}

            {cartSideBar && <div className="coverDiv"></div>}

            {searchBar && <div className="searchBar" style={searchBar ? mountedStyle : ''}>

                    <input type="text" placeholder='Search' className='searchInp'/>

                    <FiSearch className='searchIcon'/>

                    <FiX className='closeIcon1' onClick={searchHide}/>

            </div>}

            {/* NabBar */}

            <div className="container-fluid preNav positonSticky">

                    <div className="row">

                        <div className="col-12 preNavCol">

                            <marquee direction="left" width='80%' className='preNavContent'>

                                {HomeData[0].preNavContent}

                            </marquee>

                        </div>

                    </div> 

                    <div className="row navBarRow">

                        <div className=" col-lg-2 col-md-2 col-7 ml-lg-0 ml-md-0 ml-5 d-flex justify-content-end align-items-center pr-0">

                            <FiMenu className='menuIcon' onClick={navSliderOpen}/>

                            <Link to='/'>

                                <img src={HomeData[0].homeLogo} className='logo' width='150px' height='45px' alt="" />
                        
                            </Link>
        
                        </div>

                        <div className="col-8 d-lg-block d-md-block d-none">

                            <ul className='navUl'>

                                <li style={{color: 'red'}}>{HomeData[0].navItems[0]}</li>
                                <li className='newApparelLi'>{HomeData[0].navItems[1]}

                                    <div className='newApparelUl'>
                                        
                                        <ApperalSubLi/>
                                    
                                    </div>

                                </li>
                                <li className='menLiText' >{HomeData[0].navItems[2]}

                                    <div className="menUl">

                                        <OtherSubMenLi/>

                                    </div>
                                
                                </li>
                                <li className='womenLiText'>{HomeData[0].navItems[3]}

                                    <div className="womenUl">
                                        
                                        <OtherSubWomenLi/>

                                    </div>
                                
                                </li>
                                <li className='girlsLiText'>{HomeData[0].navItems[4]}

                                    <div className="girlsUl">
                                        
                                        <OtherSubGirlsLi/>

                                    </div>
                                
                                </li>
                                <li className='boysLiText'>{HomeData[0].navItems[5]}
                                
                                    <div className="boysUl">
                                        
                                        <OtherSubBoysLi/>

                                    </div>
                                
                                </li>
                                <Link to='brands' className='brandsLink'>
                                    
                                    <li className='brandsLiText'>{HomeData[0].navItems[6]}

                                        <div className="brandsUl">

                                            {Brands[0].BrandsTitle.map((item,i)=>{
                                                return(
                                                    <li className='brandsTitleLi'>{item}</li>
                                                )
                                            })}

                                        </div>

                                    </li>
                                
                                </Link>
                            </ul>

                        </div>

                        <div className="col-lg-2 col-md-2 col-4 iconContainer d-flex justify-content-lg-between justify-content-md-between justify-content-end align-items-center">
                                
                            <FiSearch className='icons' onClick={searbarShow}/>
                            <FiUser className='icons d-lg-block d-md-block d-none' onClick={loginSideShow}/>
                            
                            <div className="counterMainDiv pt-1 d-lg-block d-md-block d-none" onClick={cartSideShow}>

                                <div className="counterDiv">0</div>

                                <IoBagRemoveOutline className='icons'/>

                            </div>

                            <IoCallOutline className='icons'/>

                        </div>

                    </div>

                </div>

                <div className="container-fluid navBarSideBar">

                    <div className="row">

                        <div className="col-12 p-0 pt-5 pr-5 d-flex justify-content-end align-items-center">

                            <FiX className='closeIcon' onClick={navSliderClose} />

                        </div>

                    </div>

                    <div className="row mb-5">

                        <div className="col-12 p-0 pt-5 text-center">

                            <button type='button' className='loginBtn'> <FiUser style={{fontSize:'3rem', position: 'absolute', top: '1.6rem', left: '7rem'}}/> Log in</button>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-12 p-0 navImg1" style={{backgroundImage: `url(${HomeData[0].navImagesMobile[6]})`}}>

                            <h1 className='mobileH1' style={{color : 'red'}}>{HomeData[0].navItems[0]}</h1>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-12 p-0 navImg1" style={{backgroundImage: `url(${HomeData[0].navImagesMobile[0]})`}} onClick={newApparelSlide}>

                            <h1 className='mobileH1'>{HomeData[0].navItems[1]}</h1>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-12 p-0 navImg1" style={{backgroundImage: `url(${HomeData[0].navImagesMobile[1]})`}} onClick={menSlide}>

                            <h1 className='mobileH1'>{HomeData[0].navItems[2]}</h1>                            

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-12 p-0 navImg1" style={{backgroundImage: `url(${HomeData[0].navImagesMobile[2]})`}} onClick={womenSlide}>

                            <h1 className='mobileH1'>{HomeData[0].navItems[3]}</h1>                            

                        </div>  

                    </div>

                    <div className="row">

                        <div className="col-12 p-0 navImg1" style={{backgroundImage: `url(${HomeData[0].navImagesMobile[3]})`}} onClick={girlSlide}>

                            <h1 className='mobileH1'>{HomeData[0].navItems[4]}</h1>                            

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-12 p-0 navImg1" style={{backgroundImage: `url(${HomeData[0].navImagesMobile[4]})`}} onClick={boysSlide}>

                            <h1 className='mobileH1'>{HomeData[0].navItems[5]}</h1>                            

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-12 p-0 navImg1" style={{backgroundImage: `url(${HomeData[0].navImagesMobile[5]})`}}>

                            <h1 className='mobileH1'>{HomeData[0].navItems[6]}</h1>                            

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-12 p-0 navMobItems">

                            <p>{HomeData[0].navItemsMobile[0]}</p>
                            <p>{HomeData[0].navItemsMobile[1]}</p>
                            <p>{HomeData[0].navItemsMobile[2]}</p>
                            <p>{HomeData[0].navItemsMobile[3]}</p>
                            <p>{HomeData[0].navItemsMobile[4]}</p>
                            <p>{HomeData[0].navItemsMobile[5]}</p>
                            <p>{HomeData[0].navItemsMobile[6]}</p>

                        </div>

                    </div>

                </div>

                <div className="container-fluid loginSideBar">
                    
                    <div className="row">

                        <div className="col-12 closeContainer d-flex justify-content-end" onClick={loginSideHide}>
                            
                            <FiX className='closeIcon2' />
                            <p className="closeText">Close</p>
                        
                        </div>

                    </div>

                    <div className="row loginRow2">

                        <div className="col-12 pl-4">

                            <h1 className="loginHeading">Customer Login:</h1>

                            <hr />

                        </div>

                    </div>

                    <div className="row pt-3">

                        <div className="col-12">

                            <label htmlFor="emailTxt" className='emailLbl'>Email Address *</label>

                            <input type="text" name="emailTxt" className="emailInp" placeholder="Email Address"/>

                        </div>

                        <div className="col-12">

                            <label htmlFor="passwordTxt" className='passwordLbl'>Password *</label>

                            <input type="password" name="passwordTxt" className="emailInp" placeholder="Password"/>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-12 pt-5">

                            <button type='button' className='loginBtn1'>Login</button>

                        </div>

                        <div className="col-12 pt-4">

                            <h1 className='loginDivForgotPara'>Forgot Your Password</h1>

                        </div>

                        <div className="col-12 pt-4">

                            <button type='button' className='loginBtn1'>Create an account</button>

                        </div>

                    </div>

                </div>

                <div className="container-fluid cartSideBar">
                    
                    <div className="row">

                        <div className="col-12 closeContainer d-flex justify-content-end" onClick={cartSideHide}>
                            
                            <FiX className='closeIcon2'/>
                            <p className="closeText">Close</p>
                        
                        </div>

                    </div>

                    <div className="row loginRow2">

                        <div className="col-12 pl-4">

                            <h1 className="loginHeading">Shopping Cart:</h1>

                            <hr />

                        </div>

                    </div>

                    <div className="row pt-3">

                        <div className="col-12">

                            <h1 className='loginDivForgotPara'>Your cart is currently empty</h1>

                            <button type='button' className='loginBtn1 mt-3'>Contunue Shopping</button>

                        </div>

                    </div>

                    <div className="row">

                        

                    </div>

                </div>

                <NewApparelSlideMob newApparelSlideClose={newApparelSlideClose} />

                <MenSlideMob bagsMen={bagsMen} bagsMenClose={bagsMenClose} accessoriesMen={accessoriesMen} accessoriesMenClose={accessoriesMenClose} apparelMen={apparelMen} apparelMenClose={apparelMenClose} menSlideClose={menSlideClose} footWearMen={footWearMen} footWearMenClose={footWearMenClose} />

                <WomenSlideMob womenSlideClose={womenSlideClose} bagsWomen={bagsWomen} bagsWomenClose={bagsWomenClose} accessoriesWomen={accessoriesWomen} accessoriesWomenClose={accessoriesWomenClose} apparelWomen={apparelWomen} apparelWomenClose={apparelWomenClose} footWearWomen={footWearWomen} footWearWomenClose={footWearWomenClose} />

                <GirlsSlideMob girlSlideClose={girlSlideClose} bagsGirls={bagsGirls} bagsGirlsClose={bagsGirlsClose} accessoriesGirls={accessoriesGirls} accessoriesGirlsClose={accessoriesGirlsClose} apparelGirls={apparelGirls} apparelGirlsClose={apparelGirlsClose} footWearGirls={footWearGirls} footWearGirlsClose={footWearGirlsClose}/>

                <BoysSlideMob boysSlideClose={boysSlideClose} bagsBoys={bagsBoys} bagsBoysClose={bagsBoysClose} accessoriesBoys={accessoriesBoys} accessoriesBoysClose={accessoriesBoysClose} apparelBoys={apparelBoys} apparelBoysClose={apparelBoysClose} footWearBoys={footWearBoys} footWearBoysClose={footWearBoysClose}/>                

           {/* PLus/Minus Accordian */}

           <div className="container-fluid p-0 brandsMainDiv">

                <div className="row p-0">

                    <div className="col-lg-3 col-3 p-0 border accordionColumn">

                        <div className="accordianDiv">

                            <h1>Filter</h1>
                            
                            {Brands[1].filterName[0]}
                            {Brands[1].filterName[1]}
                            {Brands[1].filterName[2]}
                            {Brands[1].filterName[3]}
                            {Brands[1].filterName[4]}

                        </div>

                    </div>

                    <div className="col-lg-9 p-0 border">

                        <h1>Hello</h1>

                    </div>

                </div>

           </div>

           <div className="container-fluid">
                
                <div className="row brandRow2 brandRow3">

                    <div className="col-lg-4 text-center col-md-4 col-sm-12 col-12 pt-4 pb-4 align-content-center">

                        <h1 className="brandPara1">{HomeData[7].firstPart[0]}</h1>
                        <h2 className="brandPara2">{HomeData[7].firstPart[1]}</h2>
                        <h3 className="brandPara3">{HomeData[7].firstPart[2]}</h3>

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-0 d-flex justify-content-center align-items-center">

                        <p className='brandPara4'>{HomeData[7].secondPart}</p>

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 newLetterDiv d-flex justify-content-center align-items-center">

                        <input type="text" className='emailInp' placeholder='Your Email address'/>
                        <button type='button' className='subscribeBtn'>Subscribe</button>

                        <div className="brandIconContainer mt-2">

                            <img src={HomeData[7].thirdPart[0]} className="footerImg1" alt="" />
                            <img src={HomeData[7].thirdPart[1]} className="footerImg1" alt="" />
                            <img src={HomeData[7].thirdPart[2]} className="footerImg1" alt="" />
                            <img src={HomeData[7].thirdPart[3]} className="footerImg2 footerImg3 ml-2" alt="" />
                            <img src={HomeData[7].thirdPart[4]} className="footerImg2 ml-3" alt="" />
                            <img src={HomeData[7].thirdPart[5]} className="footerImg2" alt="" />
                            <img src={HomeData[7].thirdPart[6]} className="footerImg2" alt="" />

                        </div>

                    </div>

                </div>

            </div>

            <div className="container-fluid d-lg-block d-md-block d-none footerItemsDiv p-0">

                    <div className="row">

                        <div className="col-12 pt-3 footerItemsChildDiv">

                            <p>{HomeData[0].navItemsMobile[0]}</p>
                            <p>{HomeData[0].navItemsMobile[1]}</p>
                            <p>{HomeData[0].navItemsMobile[2]}</p>
                            <p>{HomeData[0].navItemsMobile[3]}</p>
                            <p>{HomeData[0].navItemsMobile[4]}</p>
                            <p>{HomeData[0].navItemsMobile[5]}</p>
                            <p>{HomeData[0].navItemsMobile[6]}</p>

                        </div>

                    </div>

                </div>

                <div className="container-fluid p-0 footerCopyRightDiv">

                    <div className="row">

                        <div className="col-12 footerCopyRightChildDiv">

                            <p>{'\u00a9'} 2021, Jomo, All Rights Reserved</p>

                        </div>

                    </div>

                </div>

                <div className="container-fluid mobileNavigationBar pl-5 pr-5 d-lg-none d-md-none d-block" style={{height: '5rem',paddingTop: '1.2rem', boxSizing: 'border-box'}}>

                    <div className="row">

                        <div className="mobileFooter col-3 d-flex justify-content-center flex-column align-items-center text-center">

                            <FiHome className='homeIcon activeButton'/>

                            <p className='pt-1 homePara activeButton'>Home</p>

                        </div>
                        
                        <div className="mobileFooter col-3 d-flex justify-content-center flex-column align-items-center text-center">

                            <FiUser className='homeIcon'/>

                            <p className='pt-1 homePara'>Account</p>

                        </div>
                        
                        <div className="mobileFooter col-3 d-flex justify-content-center flex-column align-items-center text-center">

                            <IoBagRemoveOutline className='homeIcon'/>

                            <p className='pt-1 homePara'>Cart</p>

                        </div>
                        
                        <div className="mobileFooter col-3 d-flex justify-content-center flex-column align-items-center text-center">

                            <FiMessageCircle className='homeIcon'/>

                            <p className='pt-1 homePara'>Chat</p>

                        </div>

                    </div>

                </div>

        </div>
    )
}

export default BrandsDataRender
