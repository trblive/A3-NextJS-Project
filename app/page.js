// app/page.js

// Import components used on the homepage
import Carousel from "@/app/components/home/carousel";
import HomeAdvancedSearch from "@/app/components/home/home-advanced-search";
import FeaturedProperties from "@/app/components/home/featured-properties";
import RecentArticles from "@/app/components/home/recent-articles";
import PopularRegions from "@/app/components/home/popular-regions";
import LastMinuteDeals from "@/app/components/home/last-minute-deals";
import LatestActivity from "@/app/components/home/latest-activity";
import Link from "next/link";

/**
 * Home Component
 *
 * Renders the homepage layout, including several key sections:
 * - Carousel: A slider for featured content
 * - Advanced Search: Search functionality for properties
 * - Featured Properties: Highlighted property listings
 * - Popular Regions: Areas frequently searched by users
 * - Recent Articles: Latest blog or news content
 * - Last Minute Deals: Promotional property deals
 * - Latest Activity: Recent activity updates
 *
 * @returns {JSX.Element} The homepage structure
 */
export default function Home() {
    return (
        <main>
            {/* Carousel for featured content */}
            <Carousel/>

            {/* Advanced search functionality */}
            <HomeAdvancedSearch/>

            {/* Main content container */}
            <div className="container">
                <div className="row">

                    {/* Main column with featured content */}
                    <div className="main col-sm-8">
                        <h1 className="section-title">Featured Properties</h1>

                        {/* List of featured properties */}
                        <FeaturedProperties/>

                        <div className="row">
                            <div className="col-sm-12">
                                <h1 className="section-title">Popular Regions</h1>
                                {/* Popular regions section */}
                                <PopularRegions/>
                            </div>
                        </div>

                        <h1 className="section-title">Recent Articles</h1>
                        {/* List of recent articles */}
                        <RecentArticles/>

                        <div className="center">
                            {/* Link to the news page */}
                            <Link href="/news" className="btn btn-default-color">View all news</Link>
                        </div>
                    </div>

                    {/* Sidebar with additional content */}
                    <div className="sidebar col-sm-4">
                        <div className="col-sm-12">
                            <h2 className="section-title">Last minute deals</h2>
                            {/* Last minute deals section */}
                            <LastMinuteDeals/>
                            <p className="center">
                                <a className="btn btn-fullcolor" href="#">More deals</a>
                            </p>
                        </div>

                        <div className="col-sm-12">
                            <h2 className="section-title">Activity</h2>
                            {/* Recent activity section */}
                            <LatestActivity/>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
