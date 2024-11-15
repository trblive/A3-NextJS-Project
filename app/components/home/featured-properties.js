import React from "react";
import properties from "../../data/home/properties";

const FeaturedProperties = () => {
    return (
        <div className="grid-style1 clearfix">

            { properties.slice(0, 6).map((item) => (
                <div key={ item.id } className="item col-md-4">
                    <div className="image">
                        <a href={ item.link }>
                            <h3>{ item.title }</h3>
                            <span className="location">{ item.location }</span>
                        </a>
                        <img src={ item.image } alt=""/>
                    </div>
                    <div className="price">
                        <span>${ item.price }</span>
                        <p>per night</p>
                    </div>
                    <ul className="amenities">
                        <li><i className="icon-bedrooms"></i>{ item.bed }</li>
                        <li><i className="icon-bathrooms"></i>{ item.bath }</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default FeaturedProperties