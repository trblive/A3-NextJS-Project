import React from "react";
import popularRegions from "../../data/common/popular-regions";

const PopularRegions = () => {
    return (
        <div id="regions">
            {popularRegions.map((item) => (
                <div key={item.id} className="item col-md-4">
                    <a href={item.link}>
                        <img src={item.image} alt=""/>
                        <h3>{item.name}</h3>
                        <span className="location">{item.country}</span>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default PopularRegions;