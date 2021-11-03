import React from "react";
import HomeData from "../../Data Files/HomeData";
import { IoIosArrowBack } from "react-icons/io";

function NewApparelSlideMob({newApparelSlideClose}) {
  return (
    <div>
      <div className="container-fluid navBarSideBar1">
        <div className="row">
          <div className="col-2 backContainer p-0 d-flex justify-content-center align-items-center">
            <IoIosArrowBack
              className="backIcon"
              onClick={newApparelSlideClose}
            />
          </div>

          <div className="col-10 backContainer p-0 d-flex justify-content-start align-items-center">
            <h1 className="newApperalText">{HomeData[0].navLiInfoMob[0].itemName}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 mt-5 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[0].slideItems[0]})`,
            }}
          >
            <h1 className="mobileH1">{HomeData[0].navLiInfo[0].liNames[0]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[0].slideItems[1]})`,
            }}
          >
            <h1 className="mobileH1">{HomeData[0].navLiInfo[0].liNames[1]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[0].slideItems[2]})`,
            }}
          >
            <h1 className="mobileH1">{HomeData[0].navLiInfo[0].liNames[2]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg1"
            style={{
              backgroundImage: `url(${HomeData[0].navLiInfoMob[0].slideItems[3]})`,
            }}
          >
            <h1 className="mobileH1">{HomeData[0].navLiInfo[0].liNames[3]}</h1>
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
    </div>
  );
}

export default NewApparelSlideMob;
