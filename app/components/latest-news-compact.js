// app/components/LatestNews.js

// Import required modules and data
import React from "react";
import articles from "../data/articles";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-regular-svg-icons";

/**
 * LatestNews Component
 *
 * Displays a list of the latest news articles, showing the top three articles.
 * Each article includes an image, a publication date, and a link to the full article.
 *
 * @returns {JSX.Element} The latest news list
 */
export default function LatestNews() {
    return (
        <ul className="latest-news">
            {articles.slice(0, 3).map((item) => (
                <li key={item.id} className="col-md-12">
                    <div className="image">
                        {/* Link to the detailed article page */}
                        <Link href={`/news/${encodeURIComponent(item.id)}`}></Link>
                        <Image src={item.image} width={100} height={100} alt=""/>
                    </div>

                    {/* Display article metadata */}
                    <ul className="top-info">
                        <li><FontAwesomeIcon icon={faClock}/> July 30, 2014</li>
                    </ul>

                    {/* Article title as a link */}
                    <h3>
                        <Link href={`/news/${encodeURIComponent(item.id)}`}>
                            How to get your dream property for the best price?
                        </Link>
                    </h3>
                </li>
            ))}
        </ul>
    );
}