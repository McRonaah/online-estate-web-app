import React from "react";
import { NavLink } from "react-router-dom";
import paymentimg from "./images/payment.png";
import updateimg from "./images/update.jpeg";
import handoverimg from "./images/handover.jpg";
import manageimg from "./images/manage.jpg";

function Services () {
    return (
      <div>
        <h1>Our Services</h1>
        <div className="services">
            <div className="card">
                <h2>Payment</h2>
                <img src={paymentimg} alt="payment" />
                <p>A deposit of 30% to be made upon signing the offer letter. 
                    Balance payable within 18 months.</p>
                <div className="btnBox">
                    <div className="btn">
                    <NavLink to='/components/About' className="readMore" activeStyle>
                        Read More
                    </NavLink>
                </div>
                </div>
            </div>
            <div className="card">
                <h2>Update</h2>
                <img src={updateimg} alt="payment" />
                <p>We will keep you updated with the progress of your unit, walk you through 
                    crucial completion stages, and answer any questions that you may have.</p>
                <div className="btnBox">
                    <div className="btn">
                    <NavLink to='/components/About' className="readMore" activeStyle>
                        Read More
                    </NavLink>
                </div>
                </div>
            </div>
            <div className="card">
                <h2>Handover</h2>
                <img src={handoverimg} alt="payment" />
                <p>Upon completion, the investor and developer will do a checklist of unit hand over and officially 
                    hand it over upon signing hand over agreement.</p>
                <div className="btnBox">
                    <div className="btn">
                    <NavLink to='/components/About' className="readMore" activeStyle>
                        Read More
                    </NavLink>
                </div>
                </div>
            </div>
            <div className="card">
                <h2>Management</h2>
                <img src={manageimg} alt="payment" />
                <p>Blue Skies does the work for you! We look for tenants, collect rent and manage the unit on your behalf.
                    Yours is to monitor your investment.</p>
                <div className="btnBox">
                    <div className="btn">
                    <NavLink to='/components/About' className="readMore" activeStyle>
                        Read More
                    </NavLink>
                </div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Services;
