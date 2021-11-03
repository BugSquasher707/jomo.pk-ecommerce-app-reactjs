import React from "react";
import HomeData from "../../Data Files/HomeData";
import { IoIosArrowBack } from "react-icons/io";

function SubSliderGirlsApperalMobile({footWearMenClose,headingTitle,liData}) {
  return (
    <div>
      <div className="container-fluid navBarSideBar16">
        <div className="row">
          <div className="col-2 backContainer p-0 d-flex justify-content-center align-items-center">
            <IoIosArrowBack
              className="backIcon"
              onClick={footWearMenClose}
            />
          </div>

          <div className="col-10 backContainer backContainer2 p-0 d-flex justify-content-start align-items-center">
            <h1 className="newApperalText">{headingTitle}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 mt-5 navImg2">
            <h1 className="mobileH1 mobileH2">{liData[0]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg2">
            <h1 className="mobileH1 mobileH2">{liData[1]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg2">
            <h1 className="mobileH1 mobileH2">{liData[2]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg2">
            <h1 className="mobileH1 mobileH2">{liData[3]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg2">
            <h1 className="mobileH1 mobileH2">{liData[4]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg2">
            <h1 className="mobileH1 mobileH2">{liData[5]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg2">
            <h1 className="mobileH1 mobileH2">{liData[6]}</h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 p-0 navImg2">
            <h1 className="mobileH1 mobileH2">{liData[7]}</h1>
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

export default SubSliderGirlsApperalMobile;
