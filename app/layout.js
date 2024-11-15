// app/layout.js

"use client" // Indicates this file is a client-side rendered component

// Import global CSS styles
import "./styles/bootstrap.css";
import "./styles/bootstrap-datepicker.css";
import "./styles/font.css";
import "./styles/owl.transitions.css";
import "./styles/style.css";

// Import FontAwesome library configuration
import "./lib/fontawesome.js";
import React from "react";
import Script from 'next/script';

// Configure FontAwesome to prevent auto-adding CSS as we use custom styles
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// Import reusable components for the layout
import Header from "./components/common/header";
import Footer from "./components/common/footer";

/**
 * RootLayout Component
 *
 * Defines the structure and global elements of the application.
 * - Wraps all child components with a common header and footer.
 * - Loads global styles and scripts.
 * - Configures meta tags and document structure for the app.
 *
 * @param {Object} props - React props
 * @param {React.ReactNode} props.children - Nested child components
 * @returns {JSX.Element} The root layout structure
 */
export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            {/* Meta tags for character encoding and responsive design */}
            <meta charSet="utf-8"/>
            <title>One Ring Rentals</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>

            {/* Load custom fonts from Google Fonts */}
            <link href="https://fonts.googleapis.com/css?family=Raleway:300,500,900%7COpen+Sans:400,700,400italic&display=optional"
                  rel="stylesheet" type="text/css"/>
        </head>

        <body>
        <div id="wrapper"> {/* Wrapper div for the entire app layout */}
            <Header/> {/* Header component */}
            {children} {/* Render dynamic content passed as children */}
            <Footer/> {/* Footer component */}

            {/* Load external JavaScript files for global functionality */}
            <Script src="/js/common.js"></Script>
            <Script src="/js/common/bootstrap.min.js"></Script>
            <Script src="/js/common/bootstrap-datepicker.js"></Script>
            <Script src="/js/common/chosen.min.js"></Script>
            <Script src="/js/common/bootstrap-checkbox.js"></Script>
            <Script src="/js/common/nice-scroll.js"></Script>
            <Script src="/js/common/jquery-browser.js"></Script>
            <Script src="/js/scripts.js"></Script>
        </div>
        </body>
        </html>
    );
}
