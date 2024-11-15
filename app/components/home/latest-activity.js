import React from "react";
import activity from "../../data/home/activity";
import Image from 'next/image'

const LatestActivity = () => {
    return(
        <ul className="activity">
            {activity.map((item) => (
                <li key={item.id} className="col-lg-12">
                    <Image src={item.image} alt="" width={100} height={100}/>
                    <div className="info">
                        <h5>{item.user} {item.action} <a href={item.link}> {item.topic}</a></h5>
                        <p>{item.content}</p>
                        <h6>{item.time}</h6>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default LatestActivity;