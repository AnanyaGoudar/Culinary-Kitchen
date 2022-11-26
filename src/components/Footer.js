import React from "react";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

export default function Footer(){
    return(
        <nav className="footer">
            <FiFacebook className="footer--facebook"/>
            <BsInstagram className="footer--insta" />
            <FiTwitter className="footer--twitter"/>
        </nav>
    )
}