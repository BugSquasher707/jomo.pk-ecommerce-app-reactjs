import React from "react";
import HomeData from "../../Data Files/HomeData";
import { IoIosArrowBack } from "react-icons/io";
import SubSliderMenMobileFootwear from './subSliderMenMobileFootwear'
import SubSliderMenApperalMobile from "./subSliderMenApperalMobile";
import SubSliderMenMobileAccessories from "./subSliderMenMobileAccessories";
import SubSliderMenMobileBags from "./subSliderMenMobileBags";

function MenSlideMob({accessoriesMen,accessoriesMenClose,bagsMen,bagsMenClose,apparelMen,apparelMenClose,footWearMen,footWearMenClose,menSlideClose}) {
  return (
    <div>
      <div className="container-fluid navBarSideBar2">
        <div className="row">
          <div className="col-2 backContainer p-0 d-flex justify-content-center align-items-center">
            <IoIosArrowBack
              className="backIcon"
              onClick={menSlideClose}
            />
          </div>

          <div className="col-10 backContainer p-0 d-flex justify-content-start align-items-center">
            <h1 className="newApperalText">{HomeData[0].navLiInfoMob[1].itemName}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 mt-5 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[1].slideItems[0]})`,
            }} onClick={footWearMen} 
            >
            <h1 className="mobileH1">{HomeData[0].navLiInfo[1].liNames[0]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[1].slideItems[1]})`,
            }} onClick={apparelMen}
          > 
            <h1 className="mobileH1">{HomeData[0].navLiInfo[1].liNames[1]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[1].slideItems[2]})`,
            }} onClick={accessoriesMen}
          >
            <h1 className="mobileH1">{HomeData[0].navLiInfo[1].liNames[2]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[1].slideItems[3]})`,
            }} onClick={bagsMen}
          >
            <h1 className="mobileH1">{HomeData[0].navLiInfo[1].liNames[3]}</h1>
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

      <SubSliderMenMobileFootwear headingTitle={HomeData[0].navLiInfo[1].liNames[0]} liData={HomeData[0].navLiInfo[1].SubLiName1} footWearMenClose={footWearMenClose} />
      <SubSliderMenApperalMobile  headingTitle={HomeData[0].navLiInfo[1].liNames[1]} liData={HomeData[0].navLiInfo[1].SubLiName2} footWearMenClose={apparelMenClose}/>
      <SubSliderMenMobileAccessories  headingTitle={HomeData[0].navLiInfo[1].liNames[2]} liData={HomeData[0].navLiInfo[1].SubLiName3} footWearMenClose={accessoriesMenClose}/>
      <SubSliderMenMobileBags  headingTitle={HomeData[0].navLiInfo[1].liNames[3]} liData={HomeData[0].navLiInfo[1].SubLiName4} footWearMenClose={bagsMenClose}/>

    </div>
  );
}

export default MenSlideMob;
