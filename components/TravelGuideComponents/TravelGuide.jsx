import React from "react";
import Link from "next/link";

const TravelGuideTable = () => {
  return (
    <div>
      <section className="layout-pt-md layout-pb-md js-pin-container normal-page tabs -terms js-tabs">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-lg-3">
              <div className="d-flex justify-end">
                <div className="tabs__controls row y-gap-10 js-tabs-controls side-bar">
                  <h2>Travel Guide</h2>
                  <div className="col-12">
                    <Link
                      href="/nepal-in-brief"
                      className="tabs__button relative pl-20 js-tabs-button is-tab-el-active"
                    >
                      Nepal In Brief
                    </Link>
                  </div>
                  <div className="col-12">
                    <Link
                      href="/best-season-for-trekking-in-nepal"
                      className="tabs__button relative pl-20 js-tabs-button "
                    >
                      Best Season for Trekking In Nepal
                    </Link>
                  </div>
                  <div className="col-12">
                    <Link
                      href="/equipment-checklist"
                      className="tabs__button relative pl-20 js-tabs-button "
                    >
                      Equipment Checklist
                    </Link>
                  </div>
                  <div className="col-12">
                    <Link
                      href="/nepal-trekking-grades"
                      className="tabs__button relative pl-20 js-tabs-button "
                    >
                      Nepal Trekking Grades
                    </Link>
                  </div>
                  <div className="col-12">
                    <Link
                      href="/nepal-visa-information"
                      className="tabs__button relative pl-20 js-tabs-button "
                    >
                      Nepal Visa Information
                    </Link>
                  </div>
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
