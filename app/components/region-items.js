// app/components/RegionGrid.js

// Import required modules and data
import React from "react";
import Image from "next/image";
import regions from "../data/regions";

/**
 * RegionGrid Component
 *
 * Displays a grid of cities for a specific region. Each city includes its name, location,
 * and an associated image.
 *
 * @param {Object} props - React props
 * @param {string} props.regionName - The name of the region to display
 * @returns {JSX.Element} The region grid structure
 */
const RegionGrid = ({ regionName }) => {

    // Find the region data matching the provided regionName
    const filteredRegion = regions.find(region => region.name === regionName);

    return(
        <div>
            {/* Subtitle indicating the region */}
            <h2 className="section-subtitle">Regions in {regionName}</h2>

            {/* Grid layout for cities */}
            <div className="grid-style1 clearfix">
                {filteredRegion.cities.map(city => (
                    <div className="item col-xs-6 col-md-3" key={city.id}>
                        <div className="image">
                            {/* City information with a link */}
                            <a href="#">
                                <h3>{city.city}</h3>
                                <span className="location">{city.state ? city.state : city.country}</span>
                            </a>
                            {/* City image */}
                            <Image src={city.image} width={300} height={300} alt=""/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RegionGrid;