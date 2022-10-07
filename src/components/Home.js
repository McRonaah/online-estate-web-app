import React from "react";
import { NavLink } from "react-router-dom";
// import homeimg from "./images/image5.jpg";

function Home(){
    return (
        <div className="mainSection">
           <div className="contentBox">
           <h3>ARE YOU LOOKING FOR</h3>
            <h2>LEGIT LAND AND APARTMENTS</h2>
            <p>We make it easier for you to own genuine land for residential and commercial
                make our apartments your home at affordable price</p>
            <p>The residences are situated in a quite neighborhood with easy access to Schools,
                 Hotels & Restaurants, Sports Park, Transportation Services & Shopping malls. 
                 These luxurious residence offers 3 options of either 1, 2 or 3 spacious bedrooms
                  all ensuite with a large shower, a balcony and a separate visitors cloak room. 
                  The cozy and comfortable rooms also feature in built wardrobes. The master bedroom incorporates 
                  a full-size sitting area combined with a serene view, all of which provide a restful, peaceful and habitable space</p>
            <h2>WHY BLUE SKY ESTATE</h2>
            <p>Blue Sky Estate was purposefully incorporated with a focus to BUILD, SELL & MANAGE quality affordable 
                housing in strategic locations with high rental yields.</p>
            <p>We transform areas into places where people want to live.
                Our effective project management skills together with our in-house material sourcing capability will enable us to build cost-efficient and deliver within the agreed timeline.</p>
            <h3>What we do;</h3>
            <h2>WE BUILD</h2>
            <h2>WE MANAGE</h2>
            <h2>WE SELL</h2>
            <div className="btnBox">
                <div className="btn">
                <NavLink to='/components/About' className="readMore" activeStyle>
                    Read More
                </NavLink>
                </div>
            </div>
           </div>
           {/* <div className="imageContainer">
                <img src ={homeimg} alt="home"/>
           </div> */}
        </div>
    )
}
export default Home;