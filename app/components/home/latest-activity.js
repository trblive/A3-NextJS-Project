// app/components/LatestActivity.js

// Import required modules and data
import React from "react";
import activity from "../../data/home/activity";
import Image from 'next/image';

/**
 * LatestActivity Component
 *
 * Displays a list of the latest user activities.
 *
 * - Each activity includes an image, user action, topic, content, and timestamp.
 * - Provides an engaging way to showcase recent user actions or updates.
 *
 * @returns {JSX.Element} The latest activity list
 */
const LatestActivity = () => {
    return (
        <ul className="activity">
            {activity.map((item) => (
                <li key={item.id} className="col-lg-12">

                    {/* Activity image */}
                    <Image src={item.image} alt="" width={100} height={100} />

                    {/* Activity details */}
                    <div className="info">
                        <h5>{item.user} {item.action} <a href={item.link}> {item.topic}</a></h5>
                        <p>{item.content}</p>
                        <h6>{item.time}</h6>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default LatestActivity;