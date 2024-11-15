// app/components/LastMinuteDeals.js

// Import required modules and data
import React from "react";
import Image from 'next/image';
import deals from "../../data/home/deals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

/**
 * LastMinuteDeals Component
 *
 * Displays a list of last-minute deals for properties.
 *
 * - Each deal includes an image, availability date, title, and location.
 * - Links redirect users to the respective deal page.
 * - Provides a visual and informative list for users to browse quickly.
 *
 * @returns {JSX.Element} The last-minute deals list
 */
const LastMinuteDeals = () => {
    return (
        <ul className="latest-news">
            {deals.map((item) => (
                <li key={item.id} className="col-md-12">

                    {/* Deal image */}
                    <div className="image">
                        <a href={item.link}></a>
                        <Image alt="" src={item.image} width={100} height={100} />
                    </div>

                    {/* Deal availability information */}
                    <ul className="top-info">
                        <li>
                            <FontAwesomeIcon icon={faCalendar} /> Available {item.availability}
                        </li>
                    </ul>

                    {/* Deal title and location */}
                    <a href={item.link}>
                        <h4>{item.title}</h4>
                    </a>
                    <p className="location">{item.location}</p>
                </li>
            ))}
        </ul>
    );
};

export default LastMinuteDeals;
