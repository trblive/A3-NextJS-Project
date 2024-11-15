// app/pages/news/[id]/page.js

// Import required modules and components
import React, { use } from "react";
import Image from "next/image";
import articles from "@/app/data/articles";
import shareLinks from "@/app/data/common/share-links";
import LatestNews from "@/app/components/latest-news-compact";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFileText, faTags, faPencil } from "@fortawesome/free-solid-svg-icons";
import { faClock, faComments } from "@fortawesome/free-regular-svg-icons";

// Set the runtime environment for this page
export const runtime = "nodejs";

/**
 * generateStaticParams
 *
 * Generates static parameters for each article based on its ID.
 * This enables static generation for individual news articles.
 *
 * @returns {Array} List of static params for articles
 */
export async function generateStaticParams() {
    return articles.map((article) => ({
        id: article.id.toString(),
    }));
}

/**
 * NewsArticle Component
 *
 * Renders a detailed view of a specific news article based on the article ID.
 * Includes the article content, images, metadata, share options, comments, and a sidebar.
 *
 * @param {Object} props - React props
 * @param {Object} props.params - Parameters from the route
 * @returns {JSX.Element} The article detail page structure
 */
export default function NewsArticle({ params }) {

    const { id } = use(params);
    const article = articles.find((item) => item.id.toString() === id);

    return (
        <main>
            <div className="content">
                <div className="container">
                    <div className="row">

                        <div className="main col-sm-8">

                            <h1 className="blog-title">{article.title}</h1>

                            {/* Article main image with overlay tag */}
                            <div className="blog-main-image">
                                <Image src={article.image} width={720} height={447} alt="" style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover"
                                }}/>
                                <div className="tag"><FontAwesomeIcon icon={faFileText} /></div>
                            </div>

                            {/* Article metadata */}
                            <div className="blog-bottom-info">
                                <ul>
                                    <li><FontAwesomeIcon icon={faClock} /> {article.date}</li>
                                    <li><FontAwesomeIcon icon={faComments} /> {article.comments}</li>
                                    <li><FontAwesomeIcon icon={faTags} /> {article.tags}</li>
                                </ul>

                                <div id="post-author"><FontAwesomeIcon icon={faPencil} /> By {article.author}</div>
                            </div>

                            {/* Article content */}
                            <div className="post-content">
                                <div className="highlight-bold">{article.content}</div>

                                <div className="divider"></div>

                                <p>Curabitur dapibus hendrerit dui, vel sagittis lectus laoreet et. Cras vitae purus
                                    dictum,
                                    fringilla urna sit amet, elementum leo. Etiam blandit enim eu arcu blandit sagittis.
                                    Aliquam ligula mi, luctus ut est non, hendrerit scelerisque eros. Integer a velit
                                    massa.
                                    Pellentesque eu convallis purus, nec elementum neque. Donec arcu elit, venenatis nec
                                    mauris convallis, suscipit elementum metus. Vivamus dictum turpis in venenatis
                                    auctor.</p>

                                <Image src={article.image} width={300} height={300} alt="" className="right" style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover"
                                }}/>
                                <p>Vestibulum rhoncus consequat aliquet. Mauris varius posuere mattis. Duis vitae
                                    molestie
                                    arcu. Curabitur sollicitudin, velit ut eleifend auctor, nibh orci pharetra risus, a
                                    malesuada nisi felis vel turpis. Aliquam fermentum nulla felis, sed molestie libero
                                    porttitor in.</p>
                                <p>Quisque ut dictum justo. Vestibulum lacinia arcu ac dui volutpat consectetur. Nulla
                                    dui
                                    mauris, consequat non aliquet vitae, volutpat at nunc. Sed eget hendrerit odio.
                                    Donec
                                    sagittis venenatis est ac fringilla.</p>
                                <p>Phasellus suscipit aliquam nisl et porttitor. Suspendisse potenti. Fusce libero
                                    velit,
                                    tristique eu mauris vitae, convallis facilisis sapien. Mauris urna diam, fringilla
                                    sit
                                    amet eleifend id, commodo ac lorem. Curabitur at erat justo. Morbi tincidunt, nisi
                                    in
                                    hendrerit adipiscing, lacus orci pellentesque orci, ac tempus purus libero in
                                    lectus.</p>

                                <div className="divider"></div>

                                <div className="highlight-color">Donec suscipit, sapien quis vehicula dictum, massa odio
                                    posuere nisl, consectetur viverra purus dui vel elit.
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis purus
                                    sed
                                    justo egestas dapibus. Etiam vel sagittis nisi. Curabitur ac egestas lorem. Sed ut
                                    odio
                                    iaculis, interdum magna non, mattis dolor. Vestibulum id dignissim elit. Cras ut
                                    scelerisque dolor. Vestibulum aliquet eu purus quis pellentesque. Nam eget lacus
                                    dolor. </p>

                                <p className="quote">Vivamus suscipit <span>magna eu</span> turpis facilisis ornare.
                                    Aliquam
                                    ac ipsum dui. Nulla tincidunt orci nec elit dictum euismod ut lectus <span>ultricies mollis</span> pellentesque.
                                </p>

                                <p>Phasellus pulvinar purus turpis, a consequat orci pellentesque vitae. Donec suscipit,
                                    sapien quis vehicula dictum, massa odio posuere nisl, consectetur viverra purus dui
                                    vel
                                    elit. Fusce tempor ante in metus egestas egestas.</p>

                                <p>Sed in mauris consectetur lectus ultricies mollis. Nulla at vulputate mi. Phasellus
                                    mauris augue, sollicitudin nec ornare congue, posuere eget nulla. Vestibulum
                                    pulvinar
                                    mauris ut magna interdum lacinia. Nam eu viverra urna. Quisque turpis massa, gravida
                                    ut
                                    faucibus nec, faucibus non turpis. Mauris facilisis et est a mollis. Mauris non
                                    sagittis
                                    risus</p>
                            </div>

                            {/* Comments section */}
                            <h1 className="section-title">Comments</h1>
                            <div className="comments">
                                <ul>
                                    <li>
                                        <Image width={100} height={100} src="/assets/images/comment-man.jpg" alt=""/>
                                        <div className="comment">
                                            <a href="#" className="btn btn-default-color">Reply</a>
                                            <h3>John Doe<small>30 July, 2014</small></h3>
                                            <p>Etiam eget felis lacus. In hendrerit, urna in fringilla interdum, nunc
                                                mauris
                                                condimentum purus, vel ullamcorper dui risus sed tellus. Nullam lacinia
                                                porttitor velit fermentum accumsan. Etiam dui lorem, lobortis
                                                pellentesque
                                                malesuada nec, lacinia pulvinar libero.</p>
                                        </div>
                                        <ul>
                                            <li>
                                                <Image width={100} height={100} src="/assets/images/comment-man.jpg" alt=""/>
                                                <div className="comment">
                                                    <a href="#" className="btn btn-default-color">Reply</a>
                                                    <h3>John Doe<small>30 July, 2014</small></h3>
                                                    <p>In hendrerit, urna in fringilla interdum, nunc mauris condimentum
                                                        purus, vel ullamcorper dui risus sed tellus. Nullam lacinia
                                                        porttitor velit fermentum accumsan. Etiam dui lorem, lobortis
                                                        pellentesque malesuada nec, lacinia pulvinar libero.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Image width={100} height={100}
                                               src="/assets/images/comment-woman.jpg" alt=""/>
                                        <div className="comment">
                                            <a href="#" className="btn btn-default-color">Reply</a>
                                            <h3>Mary Doe<small>31 July, 2014</small></h3>
                                            <p>Etiam eget felis lacus. In hendrerit, urna in fringilla interdum, nunc
                                                mauris
                                                condimentum purus, vel ullamcorper dui risus sed tellus. Nullam lacinia
                                                porttitor velit fermentum accumsan. Etiam dui lorem, lobortis
                                                pellentesque
                                                malesuada nec, lacinia pulvinar libero. Quisque pretium nunc sed nisl
                                                vehicula gravida. Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit.</p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="comments-form">
                                    <div className="col-sm-12">
                                        <h3>Leave a Reply</h3>
                                        <p>Your email address will no be published. Required fields are marked*</p>
                                    </div>

                                    <form className="form-style">
                                        <div className="col-sm-6">
                                            <input type="text" name="Name" placeholder="Name*"
                                                   className="form-control"/>
                                        </div>

                                        <div className="col-sm-6">
                                            <input type="email" name="Email" placeholder="Email*"
                                                   className="form-control"/>
                                        </div>

                                        <div className="col-sm-12">
                                        <textarea name="Comment" placeholder="Comment*"
                                                  className="form-control"></textarea>
                                        </div>

                                        <div className="center">
                                            <button type="submit" className="btn btn-default-color btn-lg">Post Comment
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="sidebar gray col-sm-4">
                            <h2 className="section-title">Categories</h2>
                            <ul className="categories">
                                <li><a href="#">Business <span>(2)</span></a></li>
                                <li><a href="#">Commercial <span>(1)</span></a></li>
                                <li><a href="#">Land <span>(3)</span></a></li>
                                <li><a href="#">Loans <span>(2)</span></a></li>
                                <li><a href="#">News and Updates <span>(6)</span></a></li>
                                <li><a href="#">Properties for Sale <span>(1)</span></a></li>
                                <li><a href="#">Real Estate <span>(1)</span></a></li>
                            </ul>

                            <h2 className="section-title">Archives</h2>
                            <div id="accordion" className="panel-group blog-accordion">
                                <div className="panel">
                                    <div className="panel-heading">
                                        <div className="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
                                               className="">
                                                <i className="fa fa-chevron-right"></i> 2014 (15)
                                            </a>
                                        </div>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse in">
                                        <div className="panel-body">
                                            <ul>
                                                <li><a href="#">July (3)</a></li>
                                                <li><a href="#">June (4)</a></li>
                                                <li><a href="#">May (1)</a></li>
                                                <li><a href="#">April (2)</a></li>
                                                <li><a href="#">March (3)</a></li>
                                                <li><a href="#">February (1)</a></li>
                                                <li><a href="#">January (1)</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel">
                                    <div className="panel-heading">
                                        <div className="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"
                                               className="collapsed">
                                                <i className="fa fa-chevron-right"></i> 2013 (6)
                                            </a>
                                        </div>
                                    </div>
                                    <div id="collapseTwo" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <ul>
                                                <li><a href="#">May (1)</a></li>
                                                <li><a href="#">April (2)</a></li>
                                                <li><a href="#">March (1)</a></li>
                                                <li><a href="#">February (2)</a></li>
                                                <li><a href="#">January (1)</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel">
                                    <div className="panel-heading">
                                        <div className="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree"
                                               className="collapsed">
                                                <i className="fa fa-chevron-right"></i> 2012 (5)
                                            </a>
                                        </div>
                                    </div>
                                    <div id="collapseThree" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <ul>
                                                <li><a href="#">April (1)</a></li>
                                                <li><a href="#">March (1)</a></li>
                                                <li><a href="#">February (2)</a></li>
                                                <li><a href="#">January (1)</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2 className="section-title">Tags</h2>
                            <ul className="tags col-sm-12">
                                <li><a href="#">Apartments</a></li>
                                <li><a href="#">Residential</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Real estate</a></li>
                                <li><a href="#">Land</a></li>
                                <li><a href="#">Business</a></li>
                                <li><a href="#">Villas</a></li>
                                <li><a href="#">Loans</a></li>
                                <li><a href="#">Commercial</a></li>
                                <li><a href="#">Rent</a></li>
                            </ul>

                            <h2 className="section-title">Latest News</h2>
                            <LatestNews />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}