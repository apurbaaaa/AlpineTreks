import React from "react";
import Link from "next/link";
import PropTypes from 'prop-types';  

const TravelGuideTable = ({ data }) => {
  return (
    <div className="col-lg-3">
      <div className="d-flex justify-end">
        <div className="tabs__controls row y-gap-10 js-tabs-controls side-bar">
          <h2>Travel Guide</h2>
          {data.pages?.length > 0 ? (
            data.pages.map((page) => (
              <div key={page.slug} className="col-12">
                <Link
                  href={`/${page.slug}`}
                  className="tabs__button relative pl-20 js-tabs-button"
                >
                  {page.post_title}
                </Link>
              </div>
            ))
          ) : (
            <p>No pages available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Optional: Add PropTypes for validation
TravelGuideTable.propTypes = {
  data: PropTypes.shape({
    pages: PropTypes.arrayOf(
      PropTypes.shape({
        slug: PropTypes.string.isRequired,
        post_title: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default TravelGuideTable;
