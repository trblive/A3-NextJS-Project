import React from "react";
import regions from "../data/regions";

const RegionGrid = ({ regionName }) => {

    const filteredRegion = regions.find(region => region.name === regionName);

    return(
        <div>
            <h2 className="section-subtitle">Regions in {regionName}</h2>
            <div className="grid-style1 clearfix">
                {filteredRegion.cities.map(city => (
                    <div className="item col-xs-6 col-md-3" key={city.id}>
                        <div className="image">
                            <a href="#">
                                <h3>{city.city}</h3>
                                <span className="location">{city.state ? city.state : city.country}</span>
                            </a>
                            <img src={city.image} alt=""/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RegionGrid;