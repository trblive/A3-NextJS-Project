// app/components/RecentArticles.js

// Import required modules and data
import React from "react";
import Image from 'next/image';
import articles from "../../data/articles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faFileText, faCalendar, faTags } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";

/**
 * RecentArticles Component
 *
 * Displays a grid of the most recent articles.
 *
 * - Shows up to 3 articles with details like image, title, date, comments, tags, and content preview.
 * - Each article includes a "Read More" button linking to its full page.
 * - Provides a visually appealing layout for featured content.
 *
 * @returns {JSX.Element} The recent articles grid
 */
const RecentArticles = () => {
    return (
        <div className="grid-style1">
            {articles.slice(0, 3).map((item) => (
                <div key={item.id} className="item col-md-4">
                    {/* Article image with Read More button */}
                    <div className="image">
                        <a href={item.link}>
                            <span className="btn btn-default">
                                Read More <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </a>
                        <Image src={item.image} alt="" width={300} height={300} />
                    </div>

                    {/* Article tag icon */}
                    <div className="tag"><FontAwesomeIcon icon={faFileText} /></div>

                    {/* Article metadata and content */}
                    <div className="info-blog">
                        <ul className="top-info">
                            <li><FontAwesomeIcon icon={faCalendar} /> {item.date}</li>
                            <li><FontAwesomeIcon icon={faComments} /> {item.comments}</li>
                            <li><FontAwesomeIcon icon={faTags} /> {item.tags}</li>
                        </ul>

                        <h3><a href={item.link}>{item.title}</a></h3>
                        <p>{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecentArticles;