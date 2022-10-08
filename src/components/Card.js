import React from "react";
import { NavLink } from "react-router-dom";

const Card=(props) =>{
    return (
        <>
        <div className="card">
                <h2>{props.title1}</h2>
                <img src={props.imgsrc} alt="payment" className="serviceImg" />
                <p>{props.desc1}</p>
                <div className="btnBox">
                    <div className="btn">
                    <NavLink to='/components/About' className="readMore">
                        {props.btnServices}
                    </NavLink>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Card;