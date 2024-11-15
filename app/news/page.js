// app/pages/news/page.js
import Articles from "@/app/components/articles";

export default function News() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="main col-sm-12">
                        <h1 className="section-title">Latest News</h1>
                        <Articles/>
                    </div>
                </div>
            </div>
        </main>
    );
}