import React from "react";
import HomeData from "../../Data Files/HomeData";
import { IoIosArrowBack } from "react-icons/io";
import SubSliderGirlsMobileFootwear from './subSliderGirlsMobileFootwear'
import SubSliderGirlsApperalMobile from './subSliderGirlsApperalMobile'
import SubSliderGirlsMobileAccessor from './subSliderGirlsMobileAccessories'
import SubSliderGirlsMobileBags from './subSliderGirlsMobileBags'

function GirlsSlideMob({girlSlideClose,accessoriesGirls,accessoriesGirlsClose,bagsGirls,bagsGirlsClose,apparelGirls,apparelGirlsClose,footWearGirls,footWearGirlsClose}) {
  return (
    <div>
      <div className="container-fluid navBarSideBar4">
        <div className="row">
          <div className="col-2 backContainer p-0 d-flex justify-content-center align-items-center">
            <IoIosArrowBack
              className="backIcon"
              onClick={girlSlideClose}
            />  
          </div>

          <div className="col-10 backContainer p-0 d-flex justify-content-start align-items-center">
            <h1 className="newApperalText">{HomeData[0].navLiInfoMob[3].itemName}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 mt-5 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[3].slideItems[0]})`,
            }} onClick={footWearGirls}
          >
            <h1 className="mobileH1">{HomeData[0].navLiInfo[3].liNames[0]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[3].slideItems[1]})`,
            }} onClick={apparelGirls}
          >
            <h1 className="mobileH1">{HomeData[0].navLiInfo[3].liNames[1]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[3].slideItems[2]})`,
            }} onClick={accessoriesGirls}
          >
            <h1 className="mobileH1">{HomeData[0].navLiInfo[3].liNames[2]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[3].slideItems[3]})`,
            }} onClick={bagsGirls}
          >
            <h1 className="mobileH1">{HomeData[0].navLiInfo[3].liNames[3]}</h1>
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

      <SubSliderGirlsMobileFootwear headingTitle={HomeData[0].navLiInfo[3].liNames[0]} liData={HomeData[0].navLiInfo[3].SubLiName1} footWearMenClose={footWearGirlsClose} />
      <SubSliderGirlsApperalMobile  headingTitle={HomeData[0].navLiInfo[3].liNames[1]} liData={HomeData[0].navLiInfo[3].SubLiName2} footWearMenClose={apparelGirlsClose}/>
      <SubSliderGirlsMobileAccessor  headingTitle={HomeData[0].navLiInfo[3].liNames[2]} liData={HomeData[0].navLiInfo[3].SubLiName3} footWearMenClose={accessoriesGirlsClose}/>
      <SubSliderGirlsMobileBags  headingTitle={HomeData[0].navLiInfo[3].liNames[3]} liData={HomeData[0].navLiInfo[3].SubLiName4} footWearMenClose={bagsGirlsClose}/>

    </div>
  );
}

export default GirlsSlideMob;
