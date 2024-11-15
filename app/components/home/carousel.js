import React from "react";
import carouselItems from "../../data/home/carousel-items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
    return (
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            </ol>

            <div className="carousel-inner" role="listbox">
                { carouselItems.map((item) => (
                    <div key={item.id}
                         className={item.classNames}
                         id={item.slide_id}
                         style={{backgroundImage: item.backgroundImage}}
                    >
                        <div className="carousel-caption">
                            <div className="caption sfr slider-title">{item.title}</div>
                            <div className="caption sfl slider-subtitle">{item.subtitle}</div>
                            <a href={item.link} className="caption sfb btn btn-default btn-lg">Learn More</a>
                        </div>
                    </div>
                ))}
            </div>

            <div id="home-search-section"></div>

            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <FontAwesomeIcon icon={faChevronLeft} className="icon-prev" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <FontAwesomeIcon icon={faChevronRight} className="icon-next fa-solid"></FontAwesomeIcon>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel