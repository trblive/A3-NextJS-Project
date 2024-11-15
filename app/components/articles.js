// app/components/Articles.js

// Import required modules and data
import React from "react";
import articles from "../data/articles";
import Link from "next/link";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faFileText, faUser } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

/**
 * Articles Component
 *
 * Displays a grid of articles with their images, metadata, and content.
 * Each article includes a "Read More" button linking to the full article page.
 *
 * @returns {JSX.Element} The articles grid structure
 */
const Articles = () => {
    return (
        <div className="grid-style1 clearfix">
            {articles.map((item) => (
                <div key={item.id} className="item col-md-4">
                    <div className="image">
                        {/* Link to the detailed article page */}
                        <Link href={`/news/${encodeURIComponent(item.id)}`}>
                            <span className="btn btn-default">
                                Read More <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </Link>
                        <Image src={item.image} alt="" width={300} height={300}/>
                    </div>

                    {/* Article tag icon */}
                    <div className="tag"><FontAwesomeIcon icon={faFileText} /></div>

                    {/* Article metadata and content */}
                    <div className="info-blog">
                        <ul className="top-info">
                            <li className="author">
                                <FontAwesomeIcon icon={faUser}/> {item.author}
                            </li>
                            <li className="date">
                                <FontAwesomeIcon icon={faClock}/> {item.date}
                            </li>
                        </ul>

                        {/* Article title and preview content */}
                        <h2 className="title">{item.title}</h2>
                        <p className="text">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Articles;
