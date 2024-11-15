// app/page.js
import Carousel from "@/app/components/home/carousel";
import HomeAdvancedSearch from "@/app/components/home/home-advanced-search";
import FeaturedProperties from "@/app/components/home/featured-properties";
import RecentArticles from "@/app/components/home/recent-articles";
import PopularRegions from "@/app/components/home/popular-regions";
import LastMinuteDeals from "@/app/components/home/last-minute-deals";
import LatestActivity from "@/app/components/home/latest-activity";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <Carousel/>
            <HomeAdvancedSearch/>
            <div className="container">
                <div className="row">

                    <div className="main col-sm-8">
                        <h1 className="section-title">Featured Properties</h1>

                        <FeaturedProperties/>

                        <div className="row">
                            <div className="col-sm-12">
                                <h1 className="section-title">Popular Regions</h1>
                                <PopularRegions/>
                            </div>
                        </div>

                        <h1 className="section-title">Recent Articles</h1>
                        <RecentArticles/>

                        <div className="center">
                            <Link href="/news" className="btn btn-default-color">View all news</Link>
                        </div>
                    </div>

                    <div className="sidebar col-sm-4">
                        <div className="col-sm-12">
                            <h2 className="section-title">Last minute deals</h2>
                            <LastMinuteDeals/>
                            <p className="center">
                                <a className="btn btn-fullcolor" href="#">More deals</a>
                            </p>
                        </div>

                        <div className="col-sm-12">
                            <h2 className="section-title">Activity</h2>
                            <LatestActivity/>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}