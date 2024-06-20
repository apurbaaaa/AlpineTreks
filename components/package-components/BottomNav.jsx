import React from "react";

export default function BottomNav() {
  return (
    <section id="details">
      <div className="over-view-menu sticky">
        <div className="container">
          <div className="row">
            <div className="header-menu">
              <div className="bottom-menu">
                <ul>
                  <li>
                    <a href="#overview" className="" aria-label="Overview">
                      <i className="fas fa-clipboard-list"></i>
                      <h4>Overview</h4>
                    </a>
                  </li>
                  <li>
                    <a href="#itinerary" className="" aria-label="Itinerary">
                      <i className="fas fa-map"></i>
                      <h4>Itinerary</h4>
                    </a>
                  </li>
                  <li>
                    <a href="#cost" className="" aria-label="Includes/Excludes">
                      <i className="fas fa-tag"></i>
                      <h4>Includes/Excludes</h4>
                    </a>
                  </li>
                  <li>
                    <a href="#departure" className="" aria-label="Departure">
                      <i className="fas fa-calendar-week"></i>
                      <h4>Departure</h4>
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="" aria-label="FAQ">
                      <i className="far fa-question-circle"></i>
                      <h4>FAQ</h4>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
