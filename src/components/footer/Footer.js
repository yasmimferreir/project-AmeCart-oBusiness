import React from "react";
import "../footer/footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function Footer() {
    return (
        <div className="container-footer">
            <div className="container-box">
                <h3>
                    AME
                    2022 ©
                </h3>

                <div className="icons-footer">
                    <BsInstagram className="icon" />
                    <BsTwitter className="icon" />
                    <BsFacebook className="icon" />
                </div>
            </div>
        </div>
    )
}

export default Footer;