import React from "react";
import Eileen from "../images/Eileen.png"
import Robert from "../images/Robert.png"
import Amanda from "../images/Amanda.png"

export default function Chef(){
    return(
        <div>
            <h2 className="Chef--title">TOP CHEFS</h2>
            <hr className="Chef--hr"></hr>
            <div className="Chefs">
                <section className="Chef1">
                    <img className="Eileen" src={Eileen} alt="Eileen"></img>
                    <h3>Eileen Johnson</h3>
                    <h4>Executive Chef, USA</h4>
                </section>
                <div className="chef--robert">
                    <section className="Chef2">
                        <img className="Robert" src={Robert} alt="Robert"></img>
                        <h3>Robert Downey Jr</h3>
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                    </section>
                </div>
                <section className="Chef3">
                    <img className="Amanda" src={Amanda} alt="Amanda"></img>
                    <h3>Amanda Dority</h3>
                    <h4>Sous Chef, India</h4>
                </section>
            </div>
        </div>
    )
}