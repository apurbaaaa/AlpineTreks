"use client";
import React from "react";
import DOMPurify from "dompurify";
import { useState } from "react";
import Link from "next/link";

export default function TripOverview({ data }) {
  const ParagraphLimit = 4;
  const [isExpanded, setIsExpanded] = useState(false); // State to track full description visibility

  const toggleExpand = (event) => {
    event.preventDefault();
    setIsExpanded(!isExpanded);
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
  const paragraphs = splitIntoParagraphs(data.overview);

  const sanitizedOverview = DOMPurify.sanitize(data.overview);
  const sanitizedHighlights = DOMPurify.sanitize(data.highlights);

  return (
    <div>
      <div className="trip-detail tour_details_boxed" id="overview">
        <h2>Trip Overview</h2>
        <div className="highlight">
          <h2>Highlights of the Annapurna Base Camp Trek</h2>
          <div>
            {!isExpanded ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: truncateParagraphs(paragraphs, ParagraphLimit),
                }}
              ></div>
            ) : (
              // Render all paragraphs when expanded
              <div dangerouslySetInnerHTML={{ __html: sanitizedOverview }}></div>
            )}
            {/* Show "Read More" link if more than two paragraphs */}
            {paragraphs.length > ParagraphLimit && (
              <Link href="#" onClick={toggleExpand}>
                {isExpanded ? "Read Less" : "Read More"}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
