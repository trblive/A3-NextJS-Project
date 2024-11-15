import React from "react";
import articles from "../data/articles";
import Link from "next/link";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faFileText, faUser } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Articles = () => {

    return (

        <div className="grid-style1 clearfix">
            {articles.map((item) => (
                <div key={item.id} className="item col-md-4">
                    <div className="image">
                        <Link href={`/news/${encodeURIComponent(item.id)}`}>
                            <span className="btn btn-default">
                                Read More <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </Link>
                        <Image src={item.image} alt="" width={300} height={300}/>
                    </div>
                    <div className="tag"><FontAwesomeIcon icon={faFileText} /></div>
                    <div className="info-blog">
                        <ul className="top-info">
                            <li className="author">
                                <FontAwesomeIcon icon={faUser}/> {item.author}
                            </li>
                            <li className="date">
                                <FontAwesomeIcon icon={faClock}/> {item.date}
                            </li>
                        </ul>
                        <h2 className="title">{item.title}</h2>
                        <p className="text">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Articles;