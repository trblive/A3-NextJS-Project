"use client"

import React from "react";
import footerLinks from "../../data/common/footer-links";
import popularRegions from "../../data/common/popular-regions";
import socialNetworks from "../../data/common/social-networks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer id="footer">

            <div id="footer-top" className="container">

                <div className="row">
                    <div className="block col-sm-3">
                        <a href="#"><img src="/assets/images/logo.png" alt="One Ring Rentals"/></a>
                        <br/><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo eros nibh, et dictum
                            elit tincidunt eget. Pellentesque volutpat quam dignissim, convallis elit id, efficitur sem.
                            Vivamus ac scelerisque sem. Aliquam sed enim rutrum nibh gravida pellentesque nec at metus.
                            In hac habitasse platea dictumst. Etiam in rhoncus mi. In hac habitasse platea dictumst.
                            Mauris congue blandit venenatis.</p>
                    </div>
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
                    <div className="block col-sm-6">
                        <h3>Popular regions</h3>
                        <div className="row">
                            <div className="col-sm-6">
                                <ul className="footer-listings">
                                    {popularRegions.slice(0, 3).map((item) => (
                                        <li key={item.id}>
                                            <div className="image">
                                                <a href={item.link}>
                                                    <img src={item.image} alt=""/>
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
                                                    <img src={item.image} alt=""/>
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

            <div id="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            &copy; 2014 One Ring Rentals

                            <ul className="social-networks">
                                { socialNetworks.map((item) => (
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
    )
}

export default Footer;