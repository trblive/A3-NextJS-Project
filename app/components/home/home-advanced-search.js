import React from "react";
import { searchStatusItems, searchBedroomItems } from "../../data/home/home-search-items";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const HomeAdvancedSearch = () => {
    return (
        <div id="home-advanced-search" className="open">
            <div id="opensearch"></div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <form>
                            <div className="form-group">
                                <div className="form-control-small">
                                    <div className="input-group date chzn-container" data-datepicker>
                                        <label>
                                            <input
                                                placeholder="Arrive on..."
                                                type="text"
                                                className="form-control"
                                                data-date-format="DD/MM/YYYY"
                                            />
                                            <span className="input-group-addon">
                                            <FontAwesomeIcon icon={faCalendar} />
                                        </span>
                                        </label>
                                    </div>
                                </div>

                                <div className="form-control-small">
                                    <label>
                                        <select id="search_status" name="search_status" className="form-control" data-placeholder="Stay..." style={{color: "#999"}}>
                                            <option value="">Stay...</option>
                                            { searchStatusItems.map((item) => (
                                                <option key={item.id} value={item.value}>{item.text}</option>
                                            ))}
                                        </select>
                                    </label>
                                </div>

                                <div className="form-control-small">
                                    <label>
                                        <select id="search_bedrooms" name="search_bedrooms" className="form-control" data-placeholder="Bedrooms" style={{color: "#999"}}>
                                            <option value="">Bedrooms</option>
                                            { searchBedroomItems.map((item) => (
                                                <option key={item.id} value={item.value}>{item.text}</option>
                                            ))}
                                        </select>
                                    </label>
                                </div>
                                <div className="form-control-large">
                                    <label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="location"
                                            placeholder="City, State, Country, etc..."
                                        />
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-fullcolor">
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAdvancedSearch