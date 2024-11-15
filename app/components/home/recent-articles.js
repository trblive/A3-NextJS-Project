import React from "react";
import Image from 'next/image'
import articles from "../../data/articles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronRight, faFileText, faCalendar, faTags } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";

const RecentArticles = () => {
    return (
        <div className="grid-style1">
            { articles.slice(0, 3).map((item) => (
                <div key={item.id} className="item col-md-4">
                    <div className="image">
                        <a href={item.link}>
                            <span className="btn btn-default">
                                Read More <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </a>
                        <Image src={item.image} alt="" width={300} height={300}/>
                    </div>

                    <div className="tag"><FontAwesomeIcon icon={faFileText} /></div>
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
}

export default RecentArticles;