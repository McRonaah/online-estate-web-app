import React from "react";
import './CSS/FooterStyle.css';

function Footer() {
    return (
        <fouter>
            <div className="line">
                    <hr/>
                    <hr/>
                </div>
            <div className="container container-flex">
                <div className="icons">
                    <a href="https://www.linkedin.com/in/ronald-kipchirchir-034983246/" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt=""/>
                    </a>
                    <a  href="https://www.instagram.com/ronaah_254/" target="_blank">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTukXY1LQpi3DrrxOkDt2vCR__8p6eSpGViXIIg0ao&s" alt=""/>
                    </a>
                    <a href="https://github.com/McRonaah" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt=""/>
                    </a>
                    <a href="https://twitter.com/RonaahB" target="_blank">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt=""/>
                    </a>
                    <a href="https://www.facebook.com/ronald.beloved/" target="_blank">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBHbl5XXLerWLdmDKb1vA2tOZP4X4XVKSLb-mvqNBOQ&s" alt=""/>
                    </a>
                    <a href="#">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRRFWVOO3wUC0cSJLAKfY4q3ceT24HxPX-ibqhZANxgg&s" alt=""/>
                    </a>
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