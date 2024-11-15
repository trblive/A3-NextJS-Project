// app//pages/regions/page.js
import RegionGrid from "@/app/components/region-items";

export default function Regions() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="main col-sm-12">
                        <h1 className="section-title">Regions</h1>
                        <RegionGrid regionName="Europe"/>
                        <RegionGrid regionName="Asia"/>
                        <RegionGrid regionName="North America"/>
                        <RegionGrid regionName="South America"/>
                        <RegionGrid regionName="Oceania"/>
                        <RegionGrid regionName="Africa"/>
                    </div>
                </div>
            </div>
        </main>
    );
}