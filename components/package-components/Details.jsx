import React from "react";

export default function Details({data}) {
  return (
    <div className="row y-gap-20 justify-between items-center layout-pt-md layout-pb-sm">
      <div className="col-lg-3 col-6">
        <div className="d-flex items-center">
          <div className="flex-center size-50 rounded-12 border-1">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="ml-10">
            <div className="lh-16">Destination</div>
            <div className="text-14 text-light-2 lh-16">{data.destination}</div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-6">
        <div className="d-flex items-center">
          <div className="flex-center size-50 rounded-12 border-1">
            <i className="fa-solid fa-users-medical"></i>
          </div>
          <div className="ml-10">
            <div className="lh-16">Group Size</div>
            <div className="text-14 text-light-2 lh-16">{data.group_size}</div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-6">
        <div className="d-flex items-center">
          <div className="flex-center size-50 rounded-12 border-1">
            <i className="fa-solid fa-mountain"></i>
          </div>
          <div className="ml-10">
            <div className="lh-16">Trip Difficulty</div>
            <div className="text-14 text-light-2 lh-16">{data.trip_grade}</div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-6">
        <div className="d-flex items-center">
          <div className="flex-center size-50 rounded-12 border-1">
            <i className="fa-solid fa-person-skating"></i>
          </div>
          <div className="ml-10">
            <div className="lh-16">Activities</div>
            <div className="text-14 text-light-2 lh-16">{data.activity}</div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-6">
        <div className="d-flex items-center">
          <div className="flex-center size-50 rounded-12 border-1">
            <i className="fa-solid fa-hotel"></i>
          </div>
          <div className="ml-10">
            <div className="lh-16">Accommodation</div>
            <div className="text-14 text-light-2 lh-16">{data.accomodation}</div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-6">
        <div className="d-flex items-center">
          <div className="flex-center size-50 rounded-12 border-1">
            <i className="fa-solid fa-pot-food"></i>
          </div>
          <div className="ml-10">
            <div className="lh-16">Meals</div>
            <div className="text-14 text-light-2 lh-16">{data.meals}</div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-6">
        <div className="d-flex items-center">
          <div className="flex-center size-50 rounded-12 border-1">
            <i className="fa-regular fa-mountain-sun"></i>
          </div>
          <div className="ml-10">
            <div className="lh-16">Max. Altitude</div>
            <div className="text-14 text-light-2 lh-16">{data.max_altitude}</div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-6">
        <div className="d-flex items-center">
          <div className="flex-center size-50 rounded-12 border-1">
            <i className="fa-solid fa-clouds-sun"></i>
          </div>
          <div className="ml-10">
            <div className="lh-16">Best Time</div>
            <div className="text-14 text-light-2 lh-16">{data.best_time}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
