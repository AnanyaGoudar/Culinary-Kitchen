import React from "react";
import vector from "../images/Vector.png"

export default function Header(){
    return(
        <>
            <div className="header">
                <img src={vector} className="header--img" alt="culinary--logo"></img>
                <h3 className="header--title">Culinary kitchen</h3>
            </div>
            <hr className="header--hr"></hr>
        </>
    )
}