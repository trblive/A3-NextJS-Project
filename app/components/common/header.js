// app/components/Header.js

"use client" // Indicates that this is a client-side rendered component

// Import required modules and components
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navigation from "./navigation";

/**
 * Header Component
 *
 * Displays the header section of the application, including:
 * - A top bar with login, register, and language switcher options.
 * - A navigation section with a logo, search bar, and navigation menu.
 * - Provides responsive and user-friendly design.
 *
 * @returns {JSX.Element} The header structure
 */
const Header = () => {
    const [searchValue, setSearchValue] = React.useState(''); // State for search input

    return (
        <header id="header">
            {/* Top bar with login, register, and language switcher */}
            <div id="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul id="top-buttons">
                                <li>
                                    <a href="#"><FontAwesomeIcon icon="sign-in" /> Login</a>
                                </li>
                                <li>
                                    <a href="#"><FontAwesomeIcon icon="pen-to-square" /> Register</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <div className="language-switcher">
                                        <span><FontAwesomeIcon icon="globe" /> English</span>
                                        <ul>
                                            <li><a href="#">Deutsch</a></li>
                                            <li><a href="#">Espa&ntilde;ol</a></li>
                                            <li><a href="#">Fran&ccedil;ais</a></li>
                                            <li><a href="#">Portugu&ecirc;s</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation section with logo, search bar, and navigation menu */}
            <div id="nav-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            {/* Logo linking to the homepage */}
                            <Link href="/" className="nav-logo">
                                <Image
                                    src="/A3-NextJS-Project-Live/assets/images/logo.png"
                                    width={187}
                                    height={85}
                                    alt="One Ring Rentals" />
                            </Link>

                            {/* Search bar */}
                            <div id="sb-search" className="sb-search">
                                <form>
                                    <label htmlFor="search">
                                        <input className="sb-search-input"
                                               placeholder="Search..."
                                               type="text"
                                               value={searchValue}
                                               onChange={(e) => setSearchValue(e.target.value)}
                                               name="search"
                                               id="search" />
                                    </label>
                                    <input className="sb-search-submit" type="submit" value="" />
                                    <FontAwesomeIcon icon="search" className="sb-icon-search" />
                                </form>
                            </div>

                            {/* Navigation menu */}
                            <Navigation />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;