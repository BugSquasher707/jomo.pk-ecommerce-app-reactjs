let [gender, setGender] = useState(false)
    let [categories, setCategories] = useState(false)
    let [subCategories, setsubCategories] = useState(false)
    let [productType, setproductType] = useState(false)
    let [Brands, setBrands] = useState(false)
    let [Price, setPrice] = useState(false)
    let [Color, setColor] = useState(false)
    let [Size, setSize] = useState(false)
    // let [collection, setCollection] = useState(false)
    // let [c, setcategories] = useState(false)
    // let [categories, setcategories] = useState(false)
    // let [categories, setcategories] = useState(false)

    let[Pret, setPret]=useState(true)
    function pret(){
        setPret(true)
        setUnstitched(false)
    }
    let[Unstitched, setUnstitched]=useState(true)
    function unstitched(){
        setPret(false)
        setUnstitched(true)
    }

    return (
        <div>
            {Ace === true && <div className="d-flex">
                <div className="container-fluid filter">
                    <div className="row">
                        <div className="col">
                            <h3 className="filterfonts">FILTERS</h3>
                        </div>

                        <div className="col-12 mt-4">
                            <div className="d-flex justify-content-between pt-2">
                                <p className="filterfonts">Catagories</p>
                                <p className="btn" onClick={() => setCategories(!categories)}> {categories ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {categories === true && <div className="pt-3"> <form action=""> <div className="col-12"> <input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label> </div></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Sub-Categories</p>
                                <p className="btn" onClick={() => setsubCategories(!subCategories)}> {subCategories ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {subCategories === true && <div className="pt-3"> <form action=""><div className="col-12"> <input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>CHAPPALS</h5> </label>  </div> <div className="col-12"> <input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>SANDALS</h5> </label>  </div> <div className="col-12"><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>SPORTS</h5> </label>  </div> </form> </div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Product Type</p>
                                <p className="btn" onClick={() => setproductType(!productType)}> {productType ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {productType === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Brands</p>
                                <p className="btn" onClick={() => setBrands(!Brands)}> {Brands ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Brands === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12 ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Price</p>
                                <p className="btn" onClick={() => setPrice(!Price)}> {Price ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Price === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Color</p>
                                <p className="btn" onClick={() => setColor(!Color)}> {Color ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Color === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Size</p>
                                <p className="btn" onClick={() => setSize(!Size)}> {Size ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Size === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                    </div>
                </div>


                import React from "react";
// import Brands from "../data"
import "./style.css"
let BrandsCard=({Name, Sub_name, Price, imgs, climg, setimg, addCart})=>{

    return(
        <div class="card ml-5 brandcard" style={{ width: "22rem", border: "none" }}>
                <img class="card-img-top slidercard_height" height="100%" width='100%' src={imgs} alt="" />
                <button className="btn cartbtn brandcartbtn" onClick={addCart}>Add To Cart</button>
                <div class="card-body">
                    <h3 class="card-title  ml-0 mt-2">{Name}</h3>
                    <h4 class="card-text mt-2">{Sub_name}</h4>
                    <h4 class="card-text cardprice mt-3">PKR. {Price}</h4>
                    <div>
                    {climg.map((ele,i) => {
                           return(
               <button className="btn bg-white ml-3 border" onClick={setimg}>  <img class="" height="50vh" width='50vw'  src={ele} alt="" /> </button>
                               
                           )
                        })}
                    </div>
                </div>
            </div>
    )
}
export default BrandsCard



import React, { useState } from "react"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import Brands from "../data"
import BrandsCard from "./BrandsCard"
let Datarendering = ({ addCart, Branddata, BranddataFlyfoot, Ace, Flyfoot, Addidas,  BranddataAddidas, BranddataSapphire, Sapphire }) => {

    function setimg(e) {

        var grandp = e.target.parentElement.parentElement.parentElement.parentElement
        var parent = e.target.parentElement
        let bigimg = grandp.querySelector("img")
        let smalimg = parent.querySelector("img")
        bigimg.src = smalimg.src
        console.log(smalimg, bigimg);
    }

    let [gender, setGender] = useState(false)
    let [categories, setCategories] = useState(false)
    let [subCategories, setsubCategories] = useState(false)
    let [productType, setproductType] = useState(false)
    let [Brands, setBrands] = useState(false)
    let [Price, setPrice] = useState(false)
    let [Color, setColor] = useState(false)
    let [Size, setSize] = useState(false)
    // let [collection, setCollection] = useState(false)
    // let [c, setcategories] = useState(false)
    // let [categories, setcategories] = useState(false)
    // let [categories, setcategories] = useState(false)

    let[Pret, setPret]=useState(true)
    function pret(){
        setPret(true)
        setUnstitched(false)
    }
    let[Unstitched, setUnstitched]=useState(true)
    function unstitched(){
        setPret(false)
        setUnstitched(true)
    }

    return (
        <div>
            {Ace === true && <div className="d-flex">
                <div className="container-fluid filter">
                    <div className="row">
                        <div className="col">
                            <h3 className="filterfonts">FILTERS</h3>
                        </div>

                        <div className="col-12 mt-4">
                            <div className="d-flex justify-content-between pt-2">
                                <p className="filterfonts">Catagories</p>
                                <p className="btn" onClick={() => setCategories(!categories)}> {categories ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {categories === true && <div className="pt-3"> <form action=""> <div className="col-12"> <input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label> </div></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Sub-Categories</p>
                                <p className="btn" onClick={() => setsubCategories(!subCategories)}> {subCategories ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {subCategories === true && <div className="pt-3"> <form action=""><div className="col-12"> <input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>CHAPPALS</h5> </label>  </div> <div className="col-12"> <input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>SANDALS</h5> </label>  </div> <div className="col-12"><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>SPORTS</h5> </label>  </div> </form> </div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Product Type</p>
                                <p className="btn" onClick={() => setproductType(!productType)}> {productType ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {productType === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Brands</p>
                                <p className="btn" onClick={() => setBrands(!Brands)}> {Brands ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Brands === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12 ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Price</p>
                                <p className="btn" onClick={() => setPrice(!Price)}> {Price ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Price === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Color</p>
                                <p className="btn" onClick={() => setColor(!Color)}> {Color ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Color === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Size</p>
                                <p className="btn" onClick={() => setSize(!Size)}> {Size ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Size === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid  filter1 ">
                    <div className="row">
                        <div className="col">
                            {Branddata.map((ele, i) => {
                                // console.log(ele.Women[0].footWear[0].footWearSportsCollection, "hello");
                                return <div className="d-flex flex-wrap justify-content-start"><div className="w-100 d-flex justify-content-center"><h1>{ele.BrandName}</h1></div>
                                    {ele.Men[0].footWear[2].footWearSportCollection.map((elefootwearsports) => {
                                        return (
                                            <BrandsCard addCart={addCart} setimg={setimg} imgs={elefootwearsports.Images[0]} climg={elefootwearsports.colorImg} Name={elefootwearsports.Name} Sub_name={elefootwearsports.SubName} Price={elefootwearsports.Price} />
                                        )
                                    })
                                    }
                                    {ele.Men[0].footWear[0].footWearChappalCollection.map((elefootwearchapple) => {
                                        return (
                                            <BrandsCard addCart={addCart} setimg={setimg} imgs={elefootwearchapple.Images[0]} climg={elefootwearchapple.colorImg} Name={elefootwearchapple.Name} Sub_name={elefootwearchapple.SubName} Price={elefootwearchapple.Price} />
                                        )
                                    })
                                    }
                                    {ele.Men[0].footWear[1].footWearSandleCollection.map((elefootwearchapple) => {
                                        return (
                                            <BrandsCard addCart={addCart} setimg={setimg} imgs={elefootwearchapple.Images[0]} climg={elefootwearchapple.colorImg} Name={elefootwearchapple.Name} Sub_name={elefootwearchapple.SubName} Price={elefootwearchapple.Price} />
                                        )
                                    })
                                    }
                                    {ele.Women[0].footWear[0].footWearSportsCollection.map((elefootwearsports) => {
                                        return (
                                            <BrandsCard addCart={addCart} setimg={setimg} imgs={elefootwearsports.Images[0]} climg={elefootwearsports.colorImg} Name={elefootwearsports.Name} Sub_name={elefootwearsports.SubName} Price={elefootwearsports.Price} />
                                        )
                                    })
                                    }
                                    {ele.Women[0].footWear[0].footWearSportsCollection.map((elefootwearsports) => {
                                        return (
                                            <BrandsCard addCart={addCart} setimg={setimg} imgs={elefootwearsports.Images[0]} climg={elefootwearsports.colorImg} Name={elefootwearsports.Name} Sub_name={elefootwearsports.SubName} Price={elefootwearsports.Price} />
                                        )
                                    })
                                    }
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>}
            {Flyfoot === true && <div className="d-flex">
                <div className="container-fluid filter">
                    <div className="row">
                        <div className="col">
                            <h3 className="filterfonts">FILTERS</h3>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="d-flex justify-content-between pt-2">
                                <p className="filterfonts">Gender</p>
                                <p className="btn" onClick={() => setGender(!gender)}> {gender ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {gender === true && <div className="pt-3"> <form action=""> <div className="col-12"> <input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label> </div></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12 ">
                            <div className="d-flex justify-content-between pt-2">
                                <p className="filterfonts">Catagories</p>
                                <p className="btn" onClick={() => setCategories(!categories)}> {categories ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {categories === true && <div className="pt-3"> <form action=""> <div className="col-12"> <input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label> </div></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Sub-Categories</p>
                                <p className="btn" onClick={() => setsubCategories(!subCategories)}> {subCategories ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {subCategories === true && <div className="pt-3"> <form action=""><div className="col-12"> <input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>CHAPPALS</h5> </label>  </div> <div className="col-12"> <input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>SANDALS</h5> </label>  </div> <div className="col-12"><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>SPORTS</h5> </label>  </div> </form> </div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Product Type</p>
                                <p className="btn" onClick={() => setproductType(!productType)}> {productType ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {productType === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Brands</p>
                                <p className="btn" onClick={() => setBrands(!Brands)}> {Brands ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Brands === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12 ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Price</p>
                                <p className="btn" onClick={() => setPrice(!Price)}> {Price ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Price === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Color</p>
                                <p className="btn" onClick={() => setColor(!Color)}> {Color ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Color === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Size</p>
                                <p className="btn" onClick={() => setSize(!Size)}> {Size ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Size === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid  filter1 ">
                    <div className="row">
                        <div className="col">
                            {BranddataFlyfoot.map((ele, i) => {
                                console.log(ele.Men[0].footWear[0].footWearChappalCollection, "flyfoot");
                                return <div className="d-flex flex-wrap justify-content-start"><div className="w-100 d-flex justify-content-center"><h1>{ele.BrandName}</h1></div>
                                    {ele.Men[0].footWear[0].footWearChappalCollection.map((elefootwearsports) => {
                                        return (
                                            <BrandsCard addCart={addCart} setimg={setimg} imgs={elefootwearsports.Images[0]} climg={elefootwearsports.colorImg} Name={elefootwearsports.Name} Sub_name={elefootwearsports.SubName} Price={elefootwearsports.Price} />
                                        )
                                    })
                                    }
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>}

            {Addidas === true && <div className="d-flex">
                <div className="container-fluid filter">
                    <div className="row">
                        <div className="col">
                            <h3 className="filterfonts">FILTERS</h3>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="d-flex justify-content-between pt-2">
                                <p className="filterfonts">Gender</p>
                                <p className="btn" onClick={() => setGender(!gender)}> {gender ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {gender === true && <div className="pt-3"> <form action=""> <div className="col-12"> <input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label> </div></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12 ">
                            <div className="d-flex justify-content-between pt-2">
                                <p className="filterfonts">Catagories</p>
                                <p className="btn" onClick={() => setCategories(!categories)}> {categories ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {categories === true && <div className="pt-3"> <form action=""> <div className="col-12"> <input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label> </div></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Sub-Categories</p>
                                <p className="btn" onClick={() => setsubCategories(!subCategories)}> {subCategories ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {subCategories === true && <div className="pt-3"> <form action=""><div className="col-12"> <input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>CHAPPALS</h5> </label>  </div> <div className="col-12"> <input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>SANDALS</h5> </label>  </div> <div className="col-12"><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>SPORTS</h5> </label>  </div> </form> </div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Product Type</p>
                                <p className="btn" onClick={() => setproductType(!productType)}> {productType ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {productType === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Brands</p>
                                <p className="btn" onClick={() => setBrands(!Brands)}> {Brands ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Brands === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12 ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Price</p>
                                <p className="btn" onClick={() => setPrice(!Price)}> {Price ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Price === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Color</p>
                                <p className="btn" onClick={() => setColor(!Color)}> {Color ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Color === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Size</p>
                                <p className="btn" onClick={() => setSize(!Size)}> {Size ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Size === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid  filter1 ">
                    <div className="row">
                        <div className="col">
                            {BranddataAddidas.map((ele, i) => {
                                // return ele.Name== 
                                console.log(ele.Men[0].footWear[0].footWearChappalCollection, "flyfoot");
                                return <div className="d-flex flex-wrap justify-content-start"><div className="w-100 d-flex justify-content-center"><h1>{ele.BrandName}</h1></div>
                                    {ele.Men[0].footWear[0].footWearChappalCollection.map((elefootwearsports) => {
                                        return (
                                            <BrandsCard addCart={addCart} setimg={setimg} imgs={elefootwearsports.Images[0]} climg={elefootwearsports.colorImg} Name={elefootwearsports.Name} Sub_name={elefootwearsports.SubName} Price={elefootwearsports.Price} />
                                        )
                                    })
                                    }
                                    {ele.Men[0].footWear[1].footWearSandleCollection.map((elefootwearchapple) => {
                                        return (
                                            <BrandsCard addCart={addCart} setimg={setimg} imgs={elefootwearchapple.Images[0]} climg={elefootwearchapple.colorImg} Name={elefootwearchapple.Name} Sub_name={elefootwearchapple.SubName} Price={elefootwearchapple.Price} />
                                        )
                                    })
                                    }
                                     {ele.Men[0].footWear[2].footWearSportCollection.map((elefootwearsports) => {
                                        return (
                                            <BrandsCard addCart={addCart} setimg={setimg} imgs={elefootwearsports.Images[0]} climg={elefootwearsports.colorImg} Name={elefootwearsports.Name} Sub_name={elefootwearsports.SubName} Price={elefootwearsports.Price} />
                                        )
                                    })
                                    }
                                    {ele.Women[0].footWear[1].footWearSportCollection.map((elefootwearsports) => {
                                        return (
                                            <BrandsCard addCart={addCart} setimg={setimg} imgs={elefootwearsports.Images[0]} climg={elefootwearsports.colorImg} Name={elefootwearsports.Name} Sub_name={elefootwearsports.SubName} Price={elefootwearsports.Price} />
                                        )
                                    })
                                    }
                                    {ele.Men[0].Apparel[0].apparelTshirtCollection.map((elefootwearsports) => {
                                        return (
                                            <BrandsCard addCart={addCart} setimg={setimg} imgs={elefootwearsports.Images[0]} climg={elefootwearsports.colorImg} Name={elefootwearsports.Name} Sub_name={elefootwearsports.SubName} Price={elefootwearsports.Price} />
                                        )
                                    })
                                    }
                                    {ele.Men[0].Bags[0].bagsCollection.map((elefootwearsports) => {
                                        return (
                                            <BrandsCard addCart={addCart} setimg={setimg} imgs={elefootwearsports.Images[0]} climg={elefootwearsports.colorImg} Name={elefootwearsports.Name} Sub_name={elefootwearsports.SubName} Price={elefootwearsports.Price} />
                                        )
                                    })
                                    }
                                    {ele.Men[0].Apparel[1].apparelTrousersCollection.map((elefootwearsports) => {
                                        return (
                                            <BrandsCard addCart={addCart} setimg={setimg} imgs={elefootwearsports.Images[0]} climg={elefootwearsports.colorImg} Name={elefootwearsports.Name} Sub_name={elefootwearsports.SubName} Price={elefootwearsports.Price} />
                                        )
                                    })
                                    }
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>}

            {Sapphire === true && <div className="d-flex">
                <div className="container-fluid filter">
                    <div className="row">
                        <div className="col">
                            <h3 className="filterfonts">FILTERS</h3>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="d-flex justify-content-between pt-2">
                                <p className="filterfonts">Gender</p>
                                <p className="btn" onClick={() => setGender(!gender)}> {gender ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {gender === true && <div className="pt-3"> <form action=""> <div className="col-12"> <input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label> </div></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12 ">
                            <div className="d-flex justify-content-between pt-2">
                                <p className="filterfonts">Catagories</p>
                                <p className="btn" onClick={() => setCategories(!categories)}> {categories ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {categories === true && <div className="pt-3"> <form action=""> <div className="col-12"> <input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label> </div></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Sub-Categories</p>
                                <p className="btn" onClick={() => setsubCategories(!subCategories)}> {subCategories ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {subCategories === true && <div className="pt-3"> <form action=""><div className="col-12"> <input className="formInp" type="checkbox" onClick={pret} /> <label className="ml-5"> <h5>PRET</h5> </label>  </div> <div className="col-12"> <input className="formInp" type="checkbox" onClick={unstitched} /> <label className="ml-5"> <h5>UNSTITCHED</h5> </label>  </div>  </form> </div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Product Type</p>
                                <p className="btn" onClick={() => setproductType(!productType)}> {productType ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {productType === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Brands</p>
                                <p className="btn" onClick={() => setBrands(!Brands)}> {Brands ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Brands === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12 ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Price</p>
                                <p className="btn" onClick={() => setPrice(!Price)}> {Price ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Price === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Color</p>
                                <p className="btn" onClick={() => setColor(!Color)}> {Color ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Color === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Size</p>
                                <p className="btn" onClick={() => setSize(!Size)}> {Size ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Size === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Collection</p>
                                <p className="btn" onClick={() => setSize(!Size)}> {Size ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Size === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                        <div className="col-12  ">
                            <div className="d-flex justify-content-between">
                                <p className="filterfonts">Fabric</p>
                                <p className="btn" onClick={() => setSize(!Size)}> {Size ? <i class="fas fa-minus toggleIcon"></i> : <i class="fas fa-plus toggleIcon"></i>}</p>
                            </div>
                            {Size === true && <div className="pt-3"> <form action=""><input className="formInp" type="checkbox" /> <label className="ml-5"> <h5>FOOTWEAR</h5> </label></form></div>}
                            <hr className="filterLine" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid  filter1 ">
                    <div className="row">
                        <div className="col">
                            {BranddataSapphire.map((ele, i) => {
                                // console.log(ele.Men[0].footWear[0].footWearChappalCollection, "flyfoot");
                                return <div className="d-flex flex-wrap justify-content-start"><div className="w-100 d-flex justify-content-center"><h1>{ele.BrandName}</h1></div>
                                    
                                    {Pret === true && <div className="d-flex flex-wrap justify-content-start"> {ele.Women[0].apparel[0].apparelPretCollection.map((elefootwearsports) => {
                                        return (
                                            <BrandsCard addCart={addCart} setimg={setimg} imgs={elefootwearsports.Images[0]} climg={elefootwearsports.colorImg} Name={elefootwearsports.Name} Sub_name={elefootwearsports.SubName} Price={elefootwearsports.Price} />
                                        )
                                    })
                                    }</div>}
                                    {Unstitched=== true && <div className="d-flex flex-wrap justify-content-start">{ele.Women[0].apparel[1].apparelUnStitchedCollection.map((elefootwearsports) => {
                                        return (
                                            <BrandsCard addCart={addCart} setimg={setimg} imgs={elefootwearsports.Images[0]} climg={elefootwearsports.colorImg} Name={elefootwearsports.Name} Sub_name={elefootwearsports.SubName} Price={elefootwearsports.Price} />
                                        )
                                    })
                                    }</div>}
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}
export default Datarendering