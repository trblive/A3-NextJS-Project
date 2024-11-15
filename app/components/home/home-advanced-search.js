// app/components/HomeAdvancedSearch.js

// Import required modules and data
import React from "react";
import { searchStatusItems, searchBedroomItems } from "../../data/home/home-search-items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

/**
 * HomeAdvancedSearch Component
 *
 * Renders an advanced search form for home properties.
 *
 * - Includes fields for arrival date, stay type, number of bedrooms, and location.
 * - Utilizes dropdowns populated with predefined data and a date picker for arrival date.
 * - Provides a search button to initiate a property search.
 *
 * @returns {JSX.Element} The advanced search form
 */
const HomeAdvancedSearch = () => {
    return (
        <div id="home-advanced-search" className="open">
            <div id="opensearch"></div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <form>
                            <div className="form-group">

                                {/* Date picker for arrival date */}
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

                                {/* Dropdown for stay type */}
                                <div className="form-control-small">
                                    <label>
                                        <select id="search_status" name="search_status" className="form-control" data-placeholder="Stay..." style={{color: "#999"}}>
                                            <option value="">Stay...</option>
                                            {searchStatusItems.map((item) => (
                                                <option key={item.id} value={item.value}>{item.text}</option>
                                            ))}
                                        </select>
                                    </label>
                                </div>

                                {/* Dropdown for number of bedrooms */}
                                <div className="form-control-small">
                                    <label>
                                        <select id="search_bedrooms" name="search_bedrooms" className="form-control" data-placeholder="Bedrooms" style={{color: "#999"}}>
                                            <option value="">Bedrooms</option>
                                            {searchBedroomItems.map((item) => (
                                                <option key={item.id} value={item.value}>{item.text}</option>
                                            ))}
                                        </select>
                                    </label>
                                </div>

                                {/* Text input for location */}
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

                                {/* Search button */}
                                <button type="submit" className="btn btn-fullcolor">
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAdvancedSearch;
