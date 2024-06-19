import React from "react";
import DOMPurify from "dompurify";

export default function TripOverview({data}){

    const unpurified_overview = data.overview;
    let updatedHtmlOverview = DOMPurify.sanitize(unpurified_overview);

    const unpurified_highlights = data.highlights;
    let updatedHtmlHighlights = DOMPurify.sanitize(unpurified_highlights);

    return(
        <div>
            <div className="trip-detail tour_details_boxed" id="overview">
            <h2>Trip Overview</h2>
            <p><span dangerouslySetInnerHTML={{ __html: updatedHtmlOverview}}></span></p>
            <div className="highlight">
            <h2>Highlights of the Annapurna Base Camp Trek</h2>
            <p><span dangerouslySetInnerHTML={{ __html: updatedHtmlHighlights}}></span></p>
            </div>
            </div>
        </div>
    )
}