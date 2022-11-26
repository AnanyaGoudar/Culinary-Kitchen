import React from "react";
import { AiOutlineStar } from "react-icons/ai";

export default function Varieties(){
    document.getElementById("Item1--content").onmouseenter = function () {mouseEnterItem1()};
    document.getElementById("Item1--content").onmouseleave = function() {mouseLeaveItem1()};
    
    function mouseEnterItem1(){
        document.getElementById("Item1--content").style.backgroundColor="rgba(0, 0, 0, 0.8)"
        document.getElementById("Item1--content").style.color="white"
    }

    function mouseLeaveItem1(){
        document.getElementById("Item1--content").style.backgroundColor="white"
        document.getElementById("Item1--content").style.color="black"
    }

    document.getElementById("Item2--content").onmouseenter = function () {mouseEnterItem2()};
    document.getElementById("Item2--content").onmouseleave = function() {mouseLeaveItem2()};
    
    function mouseEnterItem2(){
        document.getElementById("Item2--content").style.backgroundColor="rgba(0, 0, 0, 0.8)"
        document.getElementById("Item2--content").style.color="white"
    }

    function mouseLeaveItem2(){
        document.getElementById("Item2--content").style.backgroundColor="white"
        document.getElementById("Item2--content").style.color="black"
    }

    document.getElementById("Item3--content").onmouseenter = function () {mouseEnterItem3()};
    document.getElementById("Item3--content").onmouseleave = function() {mouseLeaveItem3()};
    
    function mouseEnterItem3(){
        document.getElementById("Item3--content").style.backgroundColor="rgba(0, 0, 0, 0.8)"
        document.getElementById("Item3--content").style.color="white"
    }

    function mouseLeaveItem3(){
        document.getElementById("Item3--content").style.backgroundColor="white"
        document.getElementById("Item3--content").style.color="black"
    }

    document.getElementById("Item4--content").onmouseenter = function () {mouseEnterItem4()};
    document.getElementById("Item4--content").onmouseleave = function() {mouseLeaveItem4()};
    
    function mouseEnterItem4(){
        document.getElementById("Item4--content").style.backgroundColor="rgba(0, 0, 0, 0.8)"
        document.getElementById("Item4--content").style.color="white"
    }

    function mouseLeaveItem4(){
        document.getElementById("Item4--content").style.backgroundColor="white"
        document.getElementById("Item4--content").style.color="black"
    }

    return(
        <div>
            <div>
                <h3 className="Variety--title">VARIETIES</h3>
                <hr className="variety--hr"></hr>
            </div>
            <div className="Variety--main">
                <div className="Variety--mainContent">
                    <h3>Pizza is a savory dish of Italian origin</h3>
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</h4>
                    <hr></hr>
                    <div className="main--footer">
                        <button className="main--btn">Explore {'>'}</button>
                        <AiOutlineStar className="main--icon"/>
                        <h4>Rated</h4>
                    </div>
                </div>
            </div>
            <div className="Variety--subItem">
                <div className="Item1">
                    <div id="Item1--content">
                        <h3>Crispy French Fries</h3>
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                        <hr></hr>
                        <div className="Item1--footer">
                            <button>Explore {'>'}</button>
                            <AiOutlineStar className="Item1--icon"/>
                            <h4>Rate</h4>
                        </div>
                    </div>
                </div>
                <div className="Item2">
                    <div id="Item2--content">
                        <h3>Paneer Tikka</h3>
                        <hr></hr>
                        <div className="Item2--footer">
                            <button>Explore {'>'}</button>
                            <AiOutlineStar className="Item2--icon"/>
                            <h4>Rated</h4>
                        </div>
                    </div>
                </div>
                <div className="Item3">
                    <div id="Item3--content">
                        <h3>Macaroon</h3>
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                        <hr></hr>
                        <div className="Item3--footer">
                            <button>Explore {'>'}</button>
                            <AiOutlineStar className="Item3--icon"/>
                            <h4>Rate</h4>
                        </div>
                    </div>
                </div>
                <div className="Item4">
                    <div id="Item4--content">
                        <h3>Doughnut</h3>
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                        <hr></hr>
                        <div className="Item4--footer">
                            <button>Explore {'>'}</button>
                            <AiOutlineStar className="Item4--icon"/>
                            <h4>Rate</h4>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
                // <img style={{height:"245px"}} src={fries} alt="frenchFries">
                //     {/* <h3>Crispy French Fries</h3>
                //     <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</h4>
                //     <hr></hr>
                //     <div className="main--footer">
                //         <button>Explore `{'>'}`</button>
                //         <AiOutlineStar/>
                //         <h4>Rate</h4>
                //     </div> */}
                // </img>
                // <img style={{height:"245px"}} src={paneer} alt="Paneer"></img>
                // <img style={{height:"245px"}} src={macroons} alt="Macaroons"></img>
                // <img style={{height:"245px"}} src={donut} alt="Donut"></img>