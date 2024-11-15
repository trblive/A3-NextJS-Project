// app/components/FeaturedProperties.js

// Import required modules and data
import React from "react";
import properties from "../../data/home/properties";
import Image from 'next/image';

/**
 * FeaturedProperties Component
 *
 * Displays a grid of featured properties with relevant details such as title,
 * location, price, and amenities.
 *
 * - Shows up to 6 properties.
 * - Each property includes a title, image, location, price, and amenities.
 * - Links redirect users to the respective property page.
 *
 * @returns {JSX.Element} The featured properties grid
 */
const FeaturedProperties = () => {
    return (
        <div className="grid-style1 clearfix">

            { properties.slice(0, 6).map((item) => (
                <div key={item.id} className="item col-md-4">

                    {/* Property image and title link */}
                    <div className="image">
                        <a href={item.link}>
                            <h3>{item.title}</h3>
                            <span className="location">{item.location}</span>
                        </a>
                        <Image src={item.image} width={300} height={300} alt=""/>
                    </div>

                    {/* Property price */}
                    <div className="price">
                        <span>${item.price}</span>
                        <p>per night</p>
                    </div>

                    {/* Property amenities */}
                    <ul className="amenities">
                        <li><i className="icon-bedrooms"></i>{item.bed}</li>
                        <li><i className="icon-bathrooms"></i>{item.bath}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default FeaturedProperties;
