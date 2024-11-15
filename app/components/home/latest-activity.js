import React from "react";
import activity from "../../data/home/activity";

const LatestActivity = () => {
    return(
        <ul className="activity">
            {activity.map((item) => (
                <li key={item.id} className="col-lg-12">
                    <img src={item.image} alt=""/>
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