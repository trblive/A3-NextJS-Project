// app/components/Navigation.js

// Import required modules and data
import React from "react";
import Link from 'next/link';
import menuItems from "../../data/common/menu-items.js";

/**
 * Navigation Component
 *
 * Renders the navigation bar with menu items.
 *
 * - Includes a responsive button for mobile navigation.
 * - Dynamically generates menu items from the `menuItems` data.
 * - Provides a clean and accessible structure for navigating the site.
 *
 * @returns {JSX.Element} The navigation bar structure
 */
const Navigation = () => {
    return (
        <nav className="navbar">
            {/* Mobile navigation button */}
            <button id="nav-mobile-btn">
                <i className="fa-solid fa-bars"></i>
            </button>

            {/* Navigation menu */}
            <ul className="nav navbar-nav">
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <Link href={item.link}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;