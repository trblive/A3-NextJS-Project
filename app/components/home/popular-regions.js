// app/components/PopularRegions.js

// Import required modules and data
import React from "react";
import popularRegions from "../../data/common/popular-regions";
import Image from 'next/image';

/**
 * PopularRegions Component
 *
 * Displays a grid of popular regions with associated images and details.
 *
 * - Each region includes an image, name, and country.
 * - Clicking on a region redirects users to its detailed page via a link.
 * - Provides a visually appealing layout to highlight popular locations.
 *
 * @returns {JSX.Element} The popular regions grid
 */
const PopularRegions = () => {
    return (
        <div id="regions">
            {popularRegions.map((item) => (
                <div key={item.id} className="item col-md-4">
                    <a href={item.link}>
                        <Image src={item.image} alt="" width={300} height={300} />
                        <h3>{item.name}</h3>
                        <span className="location">{item.country}</span>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default PopularRegions;