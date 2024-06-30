import React from "react";
import DOMPurify from "dompurify";
import Link from "next/link";

export default function TripOverview({ data }) {
  const unpurified_overview = data.overview;
  const updatedHtmlOverview = DOMPurify.sanitize(unpurified_overview);

  const unpurified_highlights = data.highlights;
  const updatedHtmlHighlights = DOMPurify.sanitize(unpurified_highlights);

  const ParagraphLimit = 3;

  const slugType = (slug) => {
    return slug === "nepal" ? "activity" : "package";
  };

  // Function to split the HTML content into paragraphs
  const splitIntoParagraphs = (htmlString) => {
    const div = document.createElement("div");
    div.innerHTML = htmlString.trim();
    return Array.from(div.querySelectorAll("p")).map((p) => p.outerHTML);
  };

  // Function to truncate paragraphs after a certain limit
  const truncateParagraphs = (paragraphs, limit) => {
    return paragraphs.slice(0, limit).join("");
  };

  // Split HTML content into paragraphs
  const paragraphs = splitIntoParagraphs(updatedHtmlOverview);

  const handleToggleExpand = (event) => {
    event.preventDefault();
    const detailElement = event.target.closest(".trip-detail");
    const isExpanded = detailElement.classList.toggle("expanded");
    const overviewDiv = detailElement.querySelector("#overview-content");

    if (isExpanded) {
      overviewDiv.innerHTML = updatedHtmlOverview;
      event.target.innerText = "Read Less";
    } else {
      overviewDiv.innerHTML = truncateParagraphs(paragraphs, ParagraphLimit);
      event.target.innerText = "Read More";
    }
  };

  return (
    <div>
      <div className="trip-detail tour_details_boxed" id="overview">
        <h2>Trip Overview</h2>
        <div>
          <div
            id="overview-content"
            dangerouslySetInnerHTML={{
              __html: truncateParagraphs(paragraphs, ParagraphLimit),
            }}
          ></div>
          {paragraphs.length > ParagraphLimit && (
            <Link href="#" onClick={handleToggleExpand}>
              Read More
            </Link>
          )}
        </div>
        <div className="highlight">
          <h2>Highlights of the Annapurna Base Camp Trek</h2>
          <p>
            <span
              dangerouslySetInnerHTML={{ __html: updatedHtmlHighlights }}
            ></span>
          </p>
        </div>
      </div>
    </div>
  );
}
