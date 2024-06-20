import React from "react";
import Link from "next/link";

const TravelGuideTable = ({ data }) => {
  return (
    <div>
      <section className="layout-pt-md layout-pb-md js-pin-container normal-page tabs -terms js-tabs">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-lg-3">
              <div className="d-flex justify-end">
                <div className="tabs__controls row y-gap-10 js-tabs-controls side-bar">
                  <h2>Travel Guide</h2>
                  {data.pages.map((page) => (
                    <div key={page.slug} className="col-12">
                      <Link
                        href={`/${page.slug}`}
                        className="tabs__button relative pl-20 js-tabs-button"
                      >
                        {page.post_title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelGuideTable;
