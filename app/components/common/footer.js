// app/components/Footer.js

"use client" // Indicates that this is a client-side rendered component

// Import required modules and data
import React from "react";
import Image from 'next/image';
import footerLinks from "../../data/common/footer-links";
import popularRegions from "../../data/common/popular-regions";
import socialNetworks from "../../data/common/social-networks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Footer Component
 *
 * Displays the footer section of the application, including:
 * - A top section with the company logo, description, helpful links, and popular regions.
 * - A bottom section with copyright information and social network links.
 *
 * @returns {JSX.Element} The footer structure
 */
const Footer = () => {
    return (
        <footer id="footer">

            {/* Top section of the footer */}
            <div id="footer-top" className="container">
                <div className="row">

                    {/* Company logo and description */}
                    <div className="block col-sm-3">
                        <a href="#">
                            <Image src="/assets/images/logo.png" width={187} height={85} alt="One Ring Rentals"/>
                        </a>
                        <br/><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo eros nibh, et dictum
                            elit tincidunt eget. Pellentesque volutpat quam dignissim, convallis elit id, efficitur sem.
                            Vivamus ac scelerisque sem. Aliquam sed enim rutrum nibh gravida pellentesque nec at metus.
                            In hac habitasse platea dictumst. Etiam in rhoncus mi. In hac habitasse platea dictumst.
                            Mauris congue blandit venenatis.</p>
                    </div>

                    {/* Helpful links */}
                    <div className="block col-sm-3">
                        <h3>Helpful Links</h3>
                        <ul className="footer-links">
                            {footerLinks.map((item) => (
                                <li key={item.id}>
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular regions */}
                    <div className="block col-sm-6">
                        <h3>Popular regions</h3>
                        <div className="row">
                            <div className="col-sm-6">
                                <ul className="footer-listings">
                                    {popularRegions.slice(0, 3).map((item) => (
                                        <li key={item.id}>
                                            <div className="image">
                                                <a href={item.link}>
                                                    <Image
                                                        src={item.image}
                                                        width={100}
                                                        height={100}
                                                        alt=""/>
                                                </a>
                                            </div>
                                            <a href={item.link}>{item.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-sm-6">
                                <ul className="footer-listings">
                                    {popularRegions.slice(3, 6).map((item) => (
                                        <li key={item.id}>
                                            <div className="image">
                                                <a href={item.link}>
                                                    <Image src={item.image}
                                                           width={100}
                                                           height={100}
                                                           alt=""/>
                                                </a>
                                            </div>
                                            <a href={item.link}>{item.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom section of the footer */}
            <div id="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            &copy; 2014 One Ring Rentals

                            {/* Social network links */}
                            <ul className="social-networks">
                                {socialNetworks.map((item) => (
                                    <li key={item.id}>
                                        <a href={item.link}>
                                            <FontAwesomeIcon icon={[item.iconPack, item.name]} />
                                            <span className="sr-only">{item.screenreaderText}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;