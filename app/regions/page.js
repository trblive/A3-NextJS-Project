// app/pages/regions/page.js

// Import the RegionGrid component to display region-specific content
import RegionGrid from "@/app/components/region-items";

/**
 * Regions Component
 *
 * Renders the regions page layout, displaying a grid of region-specific items.
 * Each region grid showcases content categorized by region.
 *
 * @returns {JSX.Element} The regions page structure
 */
export default function Regions() {
    return (
        <main>
            {/* Main container for the page content */}
            <div className="container">
                <div className="row">
                    {/* Main column displaying region grids */}
                    <div className="main col-sm-12">
                        <h1 className="section-title">Regions</h1>

                        {/* Region grids for different geographical areas */}
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
