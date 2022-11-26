import React from "react";
import vege from "../images/vege.png"
import fruits from "../images/fruits.png"
import grains from "../images/wholeGrains.png"
import protein from "../images/healthyProtein.png"


export default function FoodGuide(){
    return(
        <div className="foodGuide">
            <h2 className="foodGuide--title">FOOD GUIDE</h2>
            <hr className="foodGuide--hr"></hr>
            <div className="foodGuide--items">
                <div className="vege">
                    <img className="vege--img" src={vege} alt="veg"></img>
                    <h3>VEGETABLES</h3>
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</h4>
                </div>
                <div className="fruits">
                    <img className="fruits--img" src={fruits} alt="veg"></img>
                    <h3>FRUITS</h3>
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</h4>
                </div>
                <div className="grains">
                    <img className="grains--img" src={grains} alt="veg"></img>
                    <h3>WHOLE GRAINS</h3>
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                </div>
                <div className="protein">
                    <img className="protein--img" src={protein} alt="veg"></img>
                    <h3>HEALTHY PROTEIN</h3>
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</h4>
                </div>
            </div>
        </div>
    )
}