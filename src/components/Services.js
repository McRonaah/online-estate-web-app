import React from "react";
import Card from "./Card";
import Data from "./Data";

const Services = () => {
    return (
      <div className="serviceBody">
        <h1>Our Services</h1>
        <div className="services">
            {Data.map((values)=>{
                return (
                    <Card 
                        title1={values.stitle}
                        imgsrc={values.imgsrc}
                        desc1={values.desc1}
                        btnServices={values.btnServices}
                    />
                )
            })}
        </div>
      </div>
    );
}

export default Services;
