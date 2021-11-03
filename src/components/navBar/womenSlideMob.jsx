import React from "react";
import HomeData from "../../Data Files/HomeData";
import { IoIosArrowBack } from "react-icons/io";
import SubSliderWomenMobileFootwear from './subSliderWomenMobileFootwear'
import SubSliderWomenApperalMobile from './subSliderWomenApperalMobile'
import SubSliderWomenMobileAccessor from './subSliderWomenMobileAccessories'
import SubSliderWomenMobileBags from './subSliderWomenMobileBags'

function WomenSlideMob({accessoriesWomen,accessoriesWomenClose,bagsWomen,bagsWomenClose,apparelWomen,apparelWomenClose,footWearWomen,footWearWomenClose,womenSlideClose}) {
  return (
    <div>
      <div className="container-fluid navBarSideBar3">
        <div className="row">
          <div className="col-2 backContainer p-0 d-flex justify-content-center align-items-center">
            <IoIosArrowBack
              className="backIcon"
              onClick={womenSlideClose}
            />
          </div>

          <div className="col-10 backContainer p-0 d-flex justify-content-start align-items-center">
            <h1 className="newApperalText">{HomeData[0].navLiInfoMob[2].itemName}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 mt-5 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[2].slideItems[0]})`,
            }} onClick={footWearWomen}
          >
            <h1 className="mobileH1">{HomeData[0].navLiInfo[2].liNames[0]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[2].slideItems[1]})`,
            }} onClick={apparelWomen}
          >
            <h1 className="mobileH1">{HomeData[0].navLiInfo[2].liNames[1]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[2].slideItems[2]})`,
            }} onClick={accessoriesWomen}
          >
            <h1 className="mobileH1">{HomeData[0].navLiInfo[2].liNames[2]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[2].slideItems[3]})`,
            }} onClick={bagsWomen}
          >
            <h1 className="mobileH1">{HomeData[0].navLiInfo[2].liNames[3]}</h1>
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

      <SubSliderWomenMobileFootwear headingTitle={HomeData[0].navLiInfo[3].liNames[0]} liData={HomeData[0].navLiInfo[2].SubLiName1} footWearMenClose={footWearWomenClose} />
      <SubSliderWomenApperalMobile  headingTitle={HomeData[0].navLiInfo[3].liNames[1]} liData={HomeData[0].navLiInfo[2].SubLiName2} footWearMenClose={apparelWomenClose}/>
      <SubSliderWomenMobileAccessor  headingTitle={HomeData[0].navLiInfo[3].liNames[2]} liData={HomeData[0].navLiInfo[2].SubLiName3} footWearMenClose={accessoriesWomenClose}/>
      <SubSliderWomenMobileBags  headingTitle={HomeData[0].navLiInfo[3].liNames[3]} liData={HomeData[0].navLiInfo[2].SubLiName4} footWearMenClose={bagsWomenClose}/>

    </div>
  );
}

export default WomenSlideMob;
