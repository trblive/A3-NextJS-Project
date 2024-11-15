// app/pages/news/page.js

// Import the Articles component to display a list of news articles
import Articles from "@/app/components/articles";

/**
 * News Component
 *
 * Renders the news page layout, displaying a list of the latest news articles.
 * This component provides a container for showcasing news content.
 *
 * @returns {JSX.Element} The news page structure
 */
export default function News() {
    return (
        <main>
            {/* Main container for the page content */}
            <div className="container">
                <div className="row">
                    {/* Main column displaying news articles */}
                    <div className="main col-sm-12">
                        <h1 className="section-title">Latest News</h1>
                        {/* List of articles component */}
                        <Articles/>
                    </div>
                </div>
            </div>
        </main>
    );
}
