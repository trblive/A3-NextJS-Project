import React from "react";
import articles from "../data/articles";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from "@fortawesome/free-regular-svg-icons";

export default function LatestNews() {
    return (
        <ul className="latest-news">
            {articles.slice(0, 3).map((item) => (
                <li key={item.id} className="col-md-12">
                    <div className="image">
                        <Link href={`/news/${encodeURIComponent(item.id)}`}></Link>
                        <img src={item.image} alt=""/>
                    </div>

                    <ul className="top-info">
                        <li><FontAwesomeIcon icon={faClock}/> July 30, 2014</li>
                    </ul>

                    <h3><Link href={`/news/${encodeURIComponent(item.id)}`}>How to get your dream property for the best price?</Link></h3>
                </li>
            ))}
        </ul>
    )
}