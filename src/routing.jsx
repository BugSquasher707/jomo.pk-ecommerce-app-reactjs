import React,{useState} from 'react'
import MainPage from './components/mainPage'
import $ from "jquery";
import { Route } from 'react-router-dom';
import BrandsPage from './components/brandsPage';
import BrandsDataRender from './components/brandsDataRender';


function Routing() {

    const [womanShow, setWomanShow] = useState(true)
    const [isWomanActive, setIsWomanActive] = useState(true)

    const [manShow, setManShow] = useState(false)
    const [isManActive, setIsManActive] = useState(false)

    const [kidShow, setKidShow] = useState(false)
    const [isKidActive, setIsKidActive] = useState(false)

    const [footwearShow, setFootwearShow] = useState(true)
    const [isFootwearActive, setIsFootwearActive] = useState(true)

    const [apparelShow, setApparelShow] = useState(false)
    const [isApparelActive, setIsApparelActive] = useState(false)

    const [bagsShow, setBagsShow] = useState(false)
    const [isBagsActive, setIsBagsActive] = useState(false)

    const [navSlideOpen, setNavSlideOpen] = useState(false)

    let womanHideShow = () => {
        setWomanShow(true)
        setIsWomanActive(true)

        setManShow(false)
        setIsManActive(false)

        setKidShow(false)
        setIsKidActive(false)
    }

    let manHideShow = () => {
        setWomanShow(false)
        setIsWomanActive(false)

        setManShow(true)
        setIsManActive(true) 

        setKidShow(false)
        setIsKidActive(false)  
    }

    let kidHideShow = () => {
        setWomanShow(false)
        setIsWomanActive(false)

        setManShow(false)
        setIsManActive(false)

        setKidShow(true)
        setIsKidActive(true)
    }

    let footwearHideShow = () => {
        setFootwearShow(true)
        setIsFootwearActive(true)

        setApparelShow(false)
        setIsApparelActive(false)

        setBagsShow(false)
        setIsBagsActive(false)
    }

    let apparelHideShow = () => {
        setFootwearShow(false)
        setIsFootwearActive(false)

        setApparelShow(true)
        setIsApparelActive(true)

        setBagsShow(false)
        setIsBagsActive(false)  
    }

    let bagsHideShow = () => {
        setFootwearShow(false)
        setIsFootwearActive(false)

        setApparelShow(false)
        setIsApparelActive(false)

        setBagsShow(true)
        setIsBagsActive(true)
    }

    let navSliderClose = () => {
        setNavSlideOpen(false)

        $('body').css({
            overflowY : 'unset'
        })
        $('.navBarSideBar').css({
            left : '-100%'
        })
        $('.navBarSideBar1').css({
            left : '-100%'
        })
        $('.navBarSideBar2').css({
            left : '-100%'
        })
        $('.navBarSideBar3').css({
            left : '-100%'
        })
        $('.navBarSideBar4').css({
            left : '-100%'
        })
        $('.navBarSideBar5').css({
            left : '-100%'
        })
        $('.navBarSideBar6').css({
            left : '-100%'
        })
        $('.navBarSideBar7').css({
            left : '-100%'
        })
        $('.navBarSideBar8').css({
            left : '-100%'
        })
        $('.navBarSideBar9').css({
            left : '-100%'
        })
        $('.navBarSideBar10').css({
            left : '-100%'
        })
        $('.navBarSideBar11').css({
            left : '-100%'
        })
        $('.navBarSideBar12').css({
            left : '-100%'
        })
        $('.navBarSideBar13').css({
            left : '-100%'
        })
        $('.navBarSideBar14').css({
            left : '-100%'
        })
        $('.navBarSideBar15').css({
            left : '-100%'
        })
        $('.navBarSideBar16').css({
            left : '-100%'
        })
        $('.navBarSideBar17').css({
            left : '-100%'
        })
        $('.navBarSideBar18').css({
            left : '-100%'
        })
        $('.navBarSideBar19').css({
            left : '-100%'
        })
        $('.navBarSideBar20').css({
            left : '-100%'
        })
        $('.navBarSideBar21').css({
            left : '-100%'
        })
        $('.navBarSideBar22').css({
            left : '-100%'
        })
    }

    let navSliderOpen = () => {
        setNavSlideOpen(true)

        $('body').css({
            overflowY : 'hidden'
        })
        $('.navBarSideBar').css({
            left : '0%',
            overflow : 'scroll'
        })
        $('.navBarSideBar1').css({
            left : '-100%'
        })
        $('.navBarSideBar2').css({
            left : '-100%'
        })
        $('.navBarSideBar3').css({
            left : '-100%'
        })
        $('.navBarSideBar4').css({
            left : '-100%'
        })
        $('.navBarSideBar5').css({
            left : '-100%'
        })
        $('.navBarSideBar6').css({
            left : '-100%'
        })
        $('.navBarSideBar7').css({
            left : '-100%'
        })
        $('.navBarSideBar8').css({
            left : '-100%'
        })
        $('.navBarSideBar9').css({
            left : '-100%'
        })
        $('.navBarSideBar10').css({
            left : '-100%'
        })
        $('.navBarSideBar11').css({
            left : '-100%'
        })
        $('.navBarSideBar12').css({
            left : '-100%'
        })
        $('.navBarSideBar13').css({
            left : '-100%'
        })
        $('.navBarSideBar14').css({
            left : '-100%'
        })
        $('.navBarSideBar15').css({
            left : '-100%'
        })
        $('.navBarSideBar16').css({
            left : '-100%'
        })
        $('.navBarSideBar17').css({
            left : '-100%'
        })
        $('.navBarSideBar18').css({
            left : '-100%'
        })
        $('.navBarSideBar19').css({
            left : '-100%'
        })
        $('.navBarSideBar20').css({
            left : '-100%'
        })
        $('.navBarSideBar21').css({
            left : '-100%'
        })
        $('.navBarSideBar22').css({
            left : '-100%'
        })
    }

    let newApparelSlide = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar1').css({
            left : '0%'
        })
        $('.navBarSideBar2').css({
            left : '-100%'
        })
        $('.navBarSideBar3').css({
            left : '-100%'
        })
        $('.navBarSideBar4').css({
            left : '-100%'
        })
        $('.navBarSideBar5').css({
            left : '-100%'
        })
        $('.navBarSideBar6').css({
            left : '-100%'
        })
        $('.navBarSideBar7').css({
            left : '-100%'
        })
        $('.navBarSideBar8').css({
            left : '-100%'
        })
        $('.navBarSideBar9').css({
            left : '-100%'
        })
        $('.navBarSideBar10').css({
            left : '-100%'
        })
        $('.navBarSideBar11').css({
            left : '-100%'
        })
        $('.navBarSideBar12').css({
            left : '-100%'
        })
        $('.navBarSideBar13').css({
            left : '-100%'
        })
        $('.navBarSideBar14').css({
            left : '-100%'
        })
        $('.navBarSideBar15').css({
            left : '-100%'
        })
        $('.navBarSideBar16').css({
            left : '-100%'
        })
        $('.navBarSideBar17').css({
            left : '-100%'
        })
        $('.navBarSideBar18').css({
            left : '-100%'
        })
        $('.navBarSideBar19').css({
            left : '-100%'
        })
        $('.navBarSideBar20').css({
            left : '-100%'
        })
        $('.navBarSideBar21').css({
            left : '-100%'
        })
        $('.navBarSideBar22').css({
            left : '-100%'
        })
    }

    let newApparelSlideClose = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar1').css({
            left : '-100%'
        })
        $('.navBarSideBar2').css({
            left : '-100%'
        })
        $('.navBarSideBar3').css({
            left : '-100%'
        })
        $('.navBarSideBar4').css({
            left : '-100%'
        })
        $('.navBarSideBar5').css({
            left : '-100%'
        })
        $('.navBarSideBar6').css({
            left : '-100%'
        })
        $('.navBarSideBar7').css({
            left : '-100%'
        })
        $('.navBarSideBar8').css({
            left : '-100%'
        })
        $('.navBarSideBar9').css({
            left : '-100%'
        })
        $('.navBarSideBar10').css({
            left : '-100%'
        })
        $('.navBarSideBar11').css({
            left : '-100%'
        })
        $('.navBarSideBar12').css({
            left : '-100%'
        })
        $('.navBarSideBar13').css({
            left : '-100%'
        })
        $('.navBarSideBar14').css({
            left : '-100%'
        })
        $('.navBarSideBar15').css({
            left : '-100%'
        })
        $('.navBarSideBar16').css({
            left : '-100%'
        })
        $('.navBarSideBar17').css({
            left : '-100%'
        })
        $('.navBarSideBar18').css({
            left : '-100%'
        })
        $('.navBarSideBar19').css({
            left : '-100%'
        })
        $('.navBarSideBar20').css({
            left : '-100%'
        })
        $('.navBarSideBar21').css({
            left : '-100%'
        })
        $('.navBarSideBar22').css({
            left : '-100%'
        })
    }

    let menSlide = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar1').css({
            left : '-100%'
        })
        $('.navBarSideBar2').css({
            left : '0%'
        })
        $('.navBarSideBar3').css({
            left : '-100%'
        })
        $('.navBarSideBar4').css({
            left : '-100%'
        })
        $('.navBarSideBar5').css({
            left : '-100%'
        })
        $('.navBarSideBar6').css({
            left : '-100%'
        })
        $('.navBarSideBar7').css({
            left : '-100%'
        })
        $('.navBarSideBar8').css({
            left : '-100%'
        })
        $('.navBarSideBar9').css({
            left : '-100%'
        })
        $('.navBarSideBar10').css({
            left : '-100%'
        })
        $('.navBarSideBar11').css({
            left : '-100%'
        })
        $('.navBarSideBar12').css({
            left : '-100%'
        })
        $('.navBarSideBar13').css({
            left : '-100%'
        })
        $('.navBarSideBar14').css({
            left : '-100%'
        })
        $('.navBarSideBar15').css({
            left : '-100%'
        })
        $('.navBarSideBar16').css({
            left : '-100%'
        })
        $('.navBarSideBar17').css({
            left : '-100%'
        })
        $('.navBarSideBar18').css({
            left : '-100%'
        })
        $('.navBarSideBar19').css({
            left : '-100%'
        })
        $('.navBarSideBar20').css({
            left : '-100%'
        })
        $('.navBarSideBar21').css({
            left : '-100%'
        })
        $('.navBarSideBar22').css({
            left : '-100%'
        })
    }

    let menSlideClose = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar1').css({
            left : '-100%'
        })
        $('.navBarSideBar2').css({
            left : '-100%'
        })
        $('.navBarSideBar3').css({
            left : '-100%'
        })
        $('.navBarSideBar4').css({
            left : '-100%'
        })
        $('.navBarSideBar5').css({
            left : '-100%'
        })
        $('.navBarSideBar6').css({
            left : '-100%'
        })
        $('.navBarSideBar7').css({
            left : '-100%'
        })
        $('.navBarSideBar8').css({
            left : '-100%'
        })
        $('.navBarSideBar9').css({
            left : '-100%'
        })
        $('.navBarSideBar10').css({
            left : '-100%'
        })
        $('.navBarSideBar11').css({
            left : '-100%'
        })
        $('.navBarSideBar12').css({
            left : '-100%'
        })
        $('.navBarSideBar13').css({
            left : '-100%'
        })
        $('.navBarSideBar14').css({
            left : '-100%'
        })
        $('.navBarSideBar15').css({
            left : '-100%'
        })
        $('.navBarSideBar16').css({
            left : '-100%'
        })
        $('.navBarSideBar17').css({
            left : '-100%'
        })
        $('.navBarSideBar18').css({
            left : '-100%'
        })
        $('.navBarSideBar19').css({
            left : '-100%'
        })
        $('.navBarSideBar20').css({
            left : '-100%'
        })
        $('.navBarSideBar21').css({
            left : '-100%'
        })
        $('.navBarSideBar22').css({
            left : '-100%'
        })
    }

    let womenSlide = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar1').css({
            left : '-100%'
        })
        $('.navBarSideBar2').css({
            left : '-100%'
        })
        $('.navBarSideBar3').css({
            left : '0%'
        })
        $('.navBarSideBar4').css({
            left : '-100%'
        })
        $('.navBarSideBar5').css({
            left : '-100%'
        })
        $('.navBarSideBar6').css({
            left : '-100%'
        })
        $('.navBarSideBar7').css({
            left : '-100%'
        })
        $('.navBarSideBar8').css({
            left : '-100%'
        })
        $('.navBarSideBar9').css({
            left : '-100%'
        })
        $('.navBarSideBar10').css({
            left : '-100%'
        })
        $('.navBarSideBar11').css({
            left : '-100%'
        })
        $('.navBarSideBar12').css({
            left : '-100%'
        })
        $('.navBarSideBar13').css({
            left : '-100%'
        })
        $('.navBarSideBar14').css({
            left : '-100%'
        })
        $('.navBarSideBar15').css({
            left : '-100%'
        })
        $('.navBarSideBar16').css({
            left : '-100%'
        })
        $('.navBarSideBar17').css({
            left : '-100%'
        })
        $('.navBarSideBar18').css({
            left : '-100%'
        })
        $('.navBarSideBar19').css({
            left : '-100%'
        })
        $('.navBarSideBar20').css({
            left : '-100%'
        })
        $('.navBarSideBar21').css({
            left : '-100%'
        })
        $('.navBarSideBar22').css({
            left : '-100%'
        })
    }

    let womenSlideClose = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar1').css({
            left : '-100%'
        })
        $('.navBarSideBar2').css({
            left : '-100%'
        })
        $('.navBarSideBar3').css({
            left : '-100%'
        })
        $('.navBarSideBar4').css({
            left : '-100%'
        })
        $('.navBarSideBar5').css({
            left : '-100%'
        })
        $('.navBarSideBar6').css({
            left : '-100%'
        })
        $('.navBarSideBar7').css({
            left : '-100%'
        })
        $('.navBarSideBar8').css({
            left : '-100%'
        })
        $('.navBarSideBar9').css({
            left : '-100%'
        })
        $('.navBarSideBar10').css({
            left : '-100%'
        })
        $('.navBarSideBar11').css({
            left : '-100%'
        })
        $('.navBarSideBar12').css({
            left : '-100%'
        })
        $('.navBarSideBar13').css({
            left : '-100%'
        })
        $('.navBarSideBar14').css({
            left : '-100%'
        })
        $('.navBarSideBar15').css({
            left : '-100%'
        })
        $('.navBarSideBar16').css({
            left : '-100%'
        })
        $('.navBarSideBar17').css({
            left : '-100%'
        })
        $('.navBarSideBar18').css({
            left : '-100%'
        })
        $('.navBarSideBar19').css({
            left : '-100%'
        })
        $('.navBarSideBar20').css({
            left : '-100%'
        })
        $('.navBarSideBar21').css({
            left : '-100%'
        })
        $('.navBarSideBar22').css({
            left : '-100%'
        })
    }

    let girlSlide = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar1').css({
            left : '-100%'
        })
        $('.navBarSideBar2').css({
            left : '-100%'
        })
        $('.navBarSideBar3').css({
            left : '-100%'
        })
        $('.navBarSideBar4').css({
            left : '0%'
        })
        $('.navBarSideBar5').css({
            left : '-100%'
        })
        $('.navBarSideBar6').css({
            left : '-100%'
        })
        $('.navBarSideBar7').css({
            left : '-100%'
        })
        $('.navBarSideBar8').css({
            left : '-100%'
        })
        $('.navBarSideBar9').css({
            left : '-100%'
        })
        $('.navBarSideBar10').css({
            left : '-100%'
        })
        $('.navBarSideBar11').css({
            left : '-100%'
        })
        $('.navBarSideBar12').css({
            left : '-100%'
        })
        $('.navBarSideBar13').css({
            left : '-100%'
        })
        $('.navBarSideBar14').css({
            left : '-100%'
        })
        $('.navBarSideBar15').css({
            left : '-100%'
        })
        $('.navBarSideBar16').css({
            left : '-100%'
        })
        $('.navBarSideBar17').css({
            left : '-100%'
        })
        $('.navBarSideBar18').css({
            left : '-100%'
        })
        $('.navBarSideBar19').css({
            left : '-100%'
        })
        $('.navBarSideBar20').css({
            left : '-100%'
        })
        $('.navBarSideBar21').css({
            left : '-100%'
        })
        $('.navBarSideBar22').css({
            left : '-100%'
        })
    }

    let girlSlideClose = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar1').css({
            left : '-100%'
        })
        $('.navBarSideBar2').css({
            left : '-100%'
        })
        $('.navBarSideBar3').css({
            left : '-100%'
        })
        $('.navBarSideBar4').css({
            left : '-100%'
        })
        $('.navBarSideBar5').css({
            left : '-100%'
        })
        $('.navBarSideBar6').css({
            left : '-100%'
        })
        $('.navBarSideBar7').css({
            left : '-100%'
        })
        $('.navBarSideBar8').css({
            left : '-100%'
        })
        $('.navBarSideBar9').css({
            left : '-100%'
        })
        $('.navBarSideBar10').css({
            left : '-100%'
        })
        $('.navBarSideBar11').css({
            left : '-100%'
        })
        $('.navBarSideBar12').css({
            left : '-100%'
        })
        $('.navBarSideBar13').css({
            left : '-100%'
        })
        $('.navBarSideBar14').css({
            left : '-100%'
        })
        $('.navBarSideBar15').css({
            left : '-100%'
        })
        $('.navBarSideBar16').css({
            left : '-100%'
        })
        $('.navBarSideBar17').css({
            left : '-100%'
        })
        $('.navBarSideBar18').css({
            left : '-100%'
        })
        $('.navBarSideBar19').css({
            left : '-100%'
        })
        $('.navBarSideBar20').css({
            left : '-100%'
        })
        $('.navBarSideBar21').css({
            left : '-100%'
        })
        $('.navBarSideBar22').css({
            left : '-100%'
        })
    }

    let boysSlide = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar1').css({
            left : '-100%'
        })
        $('.navBarSideBar2').css({
            left : '-100%'
        })
        $('.navBarSideBar3').css({
            left : '-100%'
        })
        $('.navBarSideBar4').css({
            left : '-100%'
        })
        $('.navBarSideBar5').css({
            left : '0%'
        })
        $('.navBarSideBar6').css({
            left : '-100%'
        })
        $('.navBarSideBar7').css({
            left : '-100%'
        })
        $('.navBarSideBar8').css({
            left : '-100%'
        })
        $('.navBarSideBar9').css({
            left : '-100%'
        })
        $('.navBarSideBar10').css({
            left : '-100%'
        })
        $('.navBarSideBar11').css({
            left : '-100%'
        })
        $('.navBarSideBar12').css({
            left : '-100%'
        })
        $('.navBarSideBar13').css({
            left : '-100%'
        })
        $('.navBarSideBar14').css({
            left : '-100%'
        })
        $('.navBarSideBar15').css({
            left : '-100%'
        })
        $('.navBarSideBar16').css({
            left : '-100%'
        })
        $('.navBarSideBar17').css({
            left : '-100%'
        })
        $('.navBarSideBar18').css({
            left : '-100%'
        })
        $('.navBarSideBar19').css({
            left : '-100%'
        })
        $('.navBarSideBar20').css({
            left : '-100%'
        })
        $('.navBarSideBar21').css({
            left : '-100%'
        })
        $('.navBarSideBar22').css({
            left : '-100%'
        })
    }

    let boysSlideClose = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar1').css({
            left : '-100%'
        })
        $('.navBarSideBar2').css({
            left : '-100%'
        })
        $('.navBarSideBar3').css({
            left : '-100%'
        })
        $('.navBarSideBar4').css({
            left : '-100%'
        })
        $('.navBarSideBar5').css({
            left : '-100%'
        })
        $('.navBarSideBar6').css({
            left : '-100%'
        })
        $('.navBarSideBar7').css({
            left : '-100%'
        })
        $('.navBarSideBar8').css({
            left : '-100%'
        })
        $('.navBarSideBar9').css({
            left : '-100%'
        })
        $('.navBarSideBar10').css({
            left : '-100%'
        })
        $('.navBarSideBar11').css({
            left : '-100%'
        })
        $('.navBarSideBar12').css({
            left : '-100%'
        })
        $('.navBarSideBar13').css({
            left : '-100%'
        })
        $('.navBarSideBar14').css({
            left : '-100%'
        })
        $('.navBarSideBar15').css({
            left : '-100%'
        })
        $('.navBarSideBar16').css({
            left : '-100%'
        })
        $('.navBarSideBar17').css({
            left : '-100%'
        })
        $('.navBarSideBar18').css({
            left : '-100%'
        })
        $('.navBarSideBar19').css({
            left : '-100%'
        })
        $('.navBarSideBar20').css({
            left : '-100%'
        })
        $('.navBarSideBar21').css({
            left : '-100%'
        })
        $('.navBarSideBar22').css({
            left : '-100%'
        })
    }

    let footWearMen = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar6').css({
            left : '0%'
        })
    }

    let footWearMenClose = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar6').css({
            left : '-100%'
        })
    }

    let apparelMen = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar8').css({
            left : '0%'
        })
    }

    let apparelMenClose = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar8').css({
            left : '-100%'
        })
    }

    let accessoriesMen = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar9').css({
            left : '0%'
        })
    }

    let accessoriesMenClose = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar9').css({
            left : '-100%'
        })
    }

    let bagsMen = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar10').css({
            left : '0%'
        })
    }

    let bagsMenClose = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar10').css({
            left : '-100%'
        })
    }

    let footWearWomen = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar11').css({
            left : '0%'
        })
    }

    let footWearWomenClose = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar11').css({
            left : '-100%'
        })
    }

    let apparelWomen = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar12').css({
            left : '0%'
        })
    }

    let apparelWomenClose = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar12').css({
            left : '-100%'
        })
    }

    let accessoriesWomen = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar13').css({
            left : '0%'
        })
    }

    let accessoriesWomenClose = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar13').css({
            left : '-100%'
        })
    }

    let bagsWomen = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar14').css({
            left : '0%'
        })
    }

    let bagsWomenClose = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar14').css({
            left : '-100%'
        })
    }

    let footWearGirls = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar15').css({
            left : '0%'
        })
    }

    let footWearGirlsClose = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar15').css({
            left : '-100%'
        })
    }

    let apparelGirls = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar16').css({
            left : '0%'
        })
    }

    let apparelGirlsClose = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar16').css({
            left : '-100%'
        })
    }

    let accessoriesGirls = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar17').css({
            left : '0%'
        })
    }

    let accessoriesGirlsClose = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar17').css({
            left : '-100%'
        })
    }

    let bagsGirls = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar18').css({
            left : '0%'
        })
    }

    let bagsGirlsClose = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar18').css({
            left : '-100%'
        })
    }

    let footWearBoys = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar19').css({
            left : '0%'
        })
    }

    let footWearBoysClose = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar19').css({
            left : '-100%'
        })
    }

    let apparelBoys = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar20').css({
            left : '0%'
        })
    }

    let apparelBoysClose = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar20').css({
            left : '-100%'
        })
    }

    let accessoriesBoys = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar21').css({
            left : '0%'
        })
    }

    let accessoriesBoysClose = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar21').css({
            left : '-100%'
        })
    }

    let bagsBoys = () => {
        $('.navBarSideBar').css({
            overflow : 'scroll'
        })
        $('.navBarSideBar22').css({
            left : '0%'
        })
    }

    let bagsBoysClose = () => {
        $('.navBarSideBar').css({
            overflow : 'unset'
        })
        $('.navBarSideBar22').css({
            left : '-100%'
        })
    }

    let getSetImgSrc = (e) => {
        
        let fullCard = e.target.parentElement.parentElement.parentElement
        let cardBody = e.target.parentElement 

        let imgDiv = fullCard.querySelector('img')
        let imgColorDiv = cardBody.querySelector('img')

        imgDiv.src = imgColorDiv.src
        console.log(e.target.parentElement.parentElement.parentElement);
    }

    const [searchBar, setSearchBar] = useState(false)

    let searbarShow = () => {
        setSearchBar(true)
        $('body').css({
            overflowY : 'hidden'
        })
    }

    let searchHide = () => {
        setSearchBar(false)
        $('body').css({
            overflowY : 'unset'
        })
    }

    const [loginSideBar, setLoginSideBar] = useState(false)

    let loginSideShow = () => {
        setLoginSideBar(true)
        $('.loginSideBar').css({
            right : '0%'
        })
        $('body').css({
            overflowY : 'hidden'
        })
    }

    let loginSideHide = () => {
        setLoginSideBar(false)
        $('.loginSideBar').css({
            right : '-100%'
        })
        $('body').css({
            overflowY : 'unset'
        })
    }

    const [cartSideBar, setCartSideBar] = useState(false)

    let cartSideShow = () => {
        setCartSideBar(true)
        $('.cartSideBar').css({
            right : '0%'
        })
        $('body').css({
            overflowY : 'hidden'
        })
    }

    let cartSideHide = () => {
        setCartSideBar(false)
        $('.cartSideBar').css({
            right : '-100%'
        })
        $('body').css({
            overflowY : 'unset'
        })
    }

    return (
        <div>
            <Route exact path='/'>
            
                <MainPage cartSideBar={cartSideBar} cartSideHide={cartSideHide} cartSideShow={cartSideShow} loginSideBar={loginSideBar} loginSideHide={loginSideHide} loginSideShow={loginSideShow} navSlideOpen={navSlideOpen} searchHide={searchHide} searbarShow={searbarShow} searchBar={searchBar} getSetImgSrc={getSetImgSrc} isBagsActive={isBagsActive} bagsShow={bagsShow} isApparelActive={isApparelActive} apparelShow={apparelShow} isFootwearActive={isFootwearActive} footwearShow={footwearShow} bagsHideShow={bagsHideShow} apparelHideShow={apparelHideShow} footwearHideShow={footwearHideShow} bagsBoys={bagsBoys} bagsBoysClose={bagsBoysClose} accessoriesBoys={accessoriesBoys} accessoriesBoysClose={accessoriesBoysClose} apparelBoys={apparelBoys} apparelBoysClose={apparelBoysClose} footWearBoys={footWearBoys} footWearBoysClose={footWearBoysClose} bagsGirls={bagsGirls} bagsGirlsClose={bagsGirlsClose} accessoriesGirls={accessoriesGirls} accessoriesGirlsClose={accessoriesGirlsClose} apparelGirls={apparelGirls} apparelGirlsClose={apparelGirlsClose} footWearGirls={footWearGirls} footWearGirlsClose={footWearGirlsClose} bagsWomen={bagsWomen} bagsWomenClose={bagsWomenClose} accessoriesWomen={accessoriesWomen} accessoriesWomenClose={accessoriesWomenClose} apparelWomen={apparelWomen} apparelWomenClose={apparelWomenClose} footWearWomen={footWearWomen} footWearWomenClose={footWearWomenClose} bagsMen={bagsMen} bagsMenClose={bagsMenClose} accessoriesMen={accessoriesMen} accessoriesMenClose={accessoriesMenClose} apparelMen={apparelMen} apparelMenClose={apparelMenClose} footWearMen={footWearMen} footWearMenClose={footWearMenClose} boysSlide={boysSlide} boysSlideClose={boysSlideClose} girlSlide={girlSlide} girlSlideClose={girlSlideClose} womenSlide={womenSlide} womenSlideClose={womenSlideClose} menSlide={menSlide} menSlideClose={menSlideClose} newApparelSlideClose={newApparelSlideClose} newApparelSlide={newApparelSlide} navSliderOpen={navSliderOpen} navSliderClose={navSliderClose} womanShow={womanShow} manShow={manShow} kidShow={kidShow} isWomanActive={isWomanActive} isManActive={isManActive} isKidActive={isKidActive} womanHideShow={womanHideShow} manHideShow={manHideShow} kidHideShow={kidHideShow} />
            
            </Route>

            <Route path='/brands'>

                <BrandsPage  cartSideBar={cartSideBar} cartSideHide={cartSideHide} cartSideShow={cartSideShow} loginSideBar={loginSideBar} loginSideHide={loginSideHide} loginSideShow={loginSideShow} navSlideOpen={navSlideOpen} searchHide={searchHide} searbarShow={searbarShow} searchBar={searchBar} getSetImgSrc={getSetImgSrc} isBagsActive={isBagsActive} bagsShow={bagsShow} isApparelActive={isApparelActive} apparelShow={apparelShow} isFootwearActive={isFootwearActive} footwearShow={footwearShow} bagsHideShow={bagsHideShow} apparelHideShow={apparelHideShow} footwearHideShow={footwearHideShow} bagsBoys={bagsBoys} bagsBoysClose={bagsBoysClose} accessoriesBoys={accessoriesBoys} accessoriesBoysClose={accessoriesBoysClose} apparelBoys={apparelBoys} apparelBoysClose={apparelBoysClose} footWearBoys={footWearBoys} footWearBoysClose={footWearBoysClose} bagsGirls={bagsGirls} bagsGirlsClose={bagsGirlsClose} accessoriesGirls={accessoriesGirls} accessoriesGirlsClose={accessoriesGirlsClose} apparelGirls={apparelGirls} apparelGirlsClose={apparelGirlsClose} footWearGirls={footWearGirls} footWearGirlsClose={footWearGirlsClose} bagsWomen={bagsWomen} bagsWomenClose={bagsWomenClose} accessoriesWomen={accessoriesWomen} accessoriesWomenClose={accessoriesWomenClose} apparelWomen={apparelWomen} apparelWomenClose={apparelWomenClose} footWearWomen={footWearWomen} footWearWomenClose={footWearWomenClose} bagsMen={bagsMen} bagsMenClose={bagsMenClose} accessoriesMen={accessoriesMen} accessoriesMenClose={accessoriesMenClose} apparelMen={apparelMen} apparelMenClose={apparelMenClose} footWearMen={footWearMen} footWearMenClose={footWearMenClose} boysSlide={boysSlide} boysSlideClose={boysSlideClose} girlSlide={girlSlide} girlSlideClose={girlSlideClose} womenSlide={womenSlide} womenSlideClose={womenSlideClose} menSlide={menSlide} menSlideClose={menSlideClose} newApparelSlideClose={newApparelSlideClose} newApparelSlide={newApparelSlide} navSliderOpen={navSliderOpen} navSliderClose={navSliderClose} womanShow={womanShow} manShow={manShow} kidShow={kidShow} isWomanActive={isWomanActive} isManActive={isManActive} isKidActive={isKidActive} womanHideShow={womanHideShow} manHideShow={manHideShow} kidHideShow={kidHideShow}/>

            </Route>

            {/* <BrandsDataRender cartSideBar={cartSideBar} cartSideHide={cartSideHide} cartSideShow={cartSideShow} loginSideBar={loginSideBar} loginSideHide={loginSideHide} loginSideShow={loginSideShow} navSlideOpen={navSlideOpen} searchHide={searchHide} searbarShow={searbarShow} searchBar={searchBar} getSetImgSrc={getSetImgSrc} isBagsActive={isBagsActive} bagsShow={bagsShow} isApparelActive={isApparelActive} apparelShow={apparelShow} isFootwearActive={isFootwearActive} footwearShow={footwearShow} bagsHideShow={bagsHideShow} apparelHideShow={apparelHideShow} footwearHideShow={footwearHideShow} bagsBoys={bagsBoys} bagsBoysClose={bagsBoysClose} accessoriesBoys={accessoriesBoys} accessoriesBoysClose={accessoriesBoysClose} apparelBoys={apparelBoys} apparelBoysClose={apparelBoysClose} footWearBoys={footWearBoys} footWearBoysClose={footWearBoysClose} bagsGirls={bagsGirls} bagsGirlsClose={bagsGirlsClose} accessoriesGirls={accessoriesGirls} accessoriesGirlsClose={accessoriesGirlsClose} apparelGirls={apparelGirls} apparelGirlsClose={apparelGirlsClose} footWearGirls={footWearGirls} footWearGirlsClose={footWearGirlsClose} bagsWomen={bagsWomen} bagsWomenClose={bagsWomenClose} accessoriesWomen={accessoriesWomen} accessoriesWomenClose={accessoriesWomenClose} apparelWomen={apparelWomen} apparelWomenClose={apparelWomenClose} footWearWomen={footWearWomen} footWearWomenClose={footWearWomenClose} bagsMen={bagsMen} bagsMenClose={bagsMenClose} accessoriesMen={accessoriesMen} accessoriesMenClose={accessoriesMenClose} apparelMen={apparelMen} apparelMenClose={apparelMenClose} footWearMen={footWearMen} footWearMenClose={footWearMenClose} boysSlide={boysSlide} boysSlideClose={boysSlideClose} girlSlide={girlSlide} girlSlideClose={girlSlideClose} womenSlide={womenSlide} womenSlideClose={womenSlideClose} menSlide={menSlide} menSlideClose={menSlideClose} newApparelSlideClose={newApparelSlideClose} newApparelSlide={newApparelSlide} navSliderOpen={navSliderOpen} navSliderClose={navSliderClose} womanShow={womanShow} manShow={manShow} kidShow={kidShow} isWomanActive={isWomanActive} isManActive={isManActive} isKidActive={isKidActive} womanHideShow={womanHideShow} manHideShow={manHideShow} kidHideShow={kidHideShow}/> */}

        
        </div>
    )
}

export default Routing
