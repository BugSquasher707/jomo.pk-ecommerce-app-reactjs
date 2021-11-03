import React from "react";
import HomeData from "../../Data Files/HomeData";
import { IoIosArrowBack } from "react-icons/io";
import SubSliderBoysMobileFootwear from './subSliderBoysMobileFootwear'
import SubSliderBoysApperalMobile from "./subSliderBoysApperalMobile";
import SubSliderBoysMobileAccessories from "./subSliderBoysMobileAccessories";
import SubSliderBoysMobileBags from "./subSliderBoysMobileBags";

function BoysSlideMob({boysSlideClose,accessoriesBoys,accessoriesBoysClose,bagsBoys,bagsBoysClose,apparelBoys,apparelBoysClose,footWearBoys,footWearBoysClose}) {
  return (
    <div>
      <div className="container-fluid navBarSideBar5">
        <div className="row">
          <div className="col-2 backContainer p-0 d-flex justify-content-center align-items-center">
            <IoIosArrowBack
              className="backIcon"
              onClick={boysSlideClose}
            />
          </div>

          <div className="col-10 backContainer p-0 d-flex justify-content-start align-items-center">
            <h1 className="newApperalText">{HomeData[0].navLiInfoMob[4].itemName}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 mt-5 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[4].slideItems[0]})`,
            }} onClick={footWearBoys}
          >
            <h1 className="mobileH1">{HomeData[0].navLiInfo[4].liNames[0]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[4].slideItems[1]})`,
            }} onClick={apparelBoys}
          >
            <h1 className="mobileH1">{HomeData[0].navLiInfo[4].liNames[1]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[4].slideItems[2]})`,
            }} onClick={accessoriesBoys}
          >
            <h1 className="mobileH1">{HomeData[0].navLiInfo[4].liNames[2]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[4].slideItems[3]})`,
            }} onClick={bagsBoys}
          >
            <h1 className="mobileH1">{HomeData[0].navLiInfo[4].liNames[3]}</h1>
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

      <SubSliderBoysMobileFootwear headingTitle={HomeData[0].navLiInfo[4].liNames[0]} liData={HomeData[0].navLiInfo[4].SubLiName1} footWearMenClose={footWearBoysClose} />
      <SubSliderBoysApperalMobile  headingTitle={HomeData[0].navLiInfo[4].liNames[1]} liData={HomeData[0].navLiInfo[4].SubLiName2} footWearMenClose={apparelBoysClose}/>
      <SubSliderBoysMobileAccessories  headingTitle={HomeData[0].navLiInfo[4].liNames[2]} liData={HomeData[0].navLiInfo[4].SubLiName3} footWearMenClose={accessoriesBoysClose}/>
      <SubSliderBoysMobileBags  headingTitle={HomeData[0].navLiInfo[4].liNames[3]} liData={HomeData[0].navLiInfo[4].SubLiName4} footWearMenClose={bagsBoysClose}/>

    </div>
  );
}

export default BoysSlideMob;
