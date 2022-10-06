import React from "react";
import './CSS/FooterStyle.css';

function Footer() {
    return (
        <fouter>
            <div className="container container-flex">
                <div className="icons"></div>
                <div className="line">
                    <hr/>
                    <hr/>
                </div>
                <div className="copyright">
                    <p>All rights reserved &copy;</p>
                    <p>CopyRight By Ronald Kipchirchir</p>
                </div>
            </div>
        </fouter>
    );
}

export default Footer;