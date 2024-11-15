import React from "react";
import Image from 'next/image'
import deals from "../../data/home/deals";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const LastMinuteDeals = () => {
    return (
        <ul className="latest-news">
            { deals.map((item) => (
                <li key={item.id} className="col-md-12">
                    <div className="image">
                        <a href={item.link}></a>
                        <Image alt="" src={item.image} width={100} height={100}/>
                    </div>

                    <ul className="top-info">
                        <li><FontAwesomeIcon icon={faCalendar} /> Available {item.availability}</li>
                    </ul>
                    <a href={item.link}>
                        <h4>{item.title}</h4>
                    </a>
                    <p className="location">{item.location}</p>
                </li>
            ))}
        </ul>
    )
}

export default LastMinuteDeals;