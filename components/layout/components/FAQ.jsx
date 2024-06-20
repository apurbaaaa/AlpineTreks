"use client";
import React from "react";

export default function FAQ({ data} ) {

  return (
    <section className="layout-pt-lg layout-pb-lg" id="faq">
      <div className="container">
        <div className="row y-gap-10 justify-center items-end">
          <div className="col-10 text-center">
            <h2 className="text-30 md:text-24">Frequently Asked Questions by Travelers</h2>
            <p>Join us on our trending adventure this year.</p>
          </div>
        </div>
        {data && data.length > 0 ? (
          data.map((item, i) => (
            <div key={i} className="accordion -simple row y-gap-20 mt-30 js-accordion justify-content-center">
              <div className="col-lg-8 col-12">
                <input
                  type="checkbox"
                  id={`accordion-checkbox-${i}`}
                  className="accordion-checkbox"
                />
                <label
                  htmlFor={`accordion-checkbox-${i}`}
                  className="accordion__item px-20 py-15 border-1 rounded-12"
                >
                  <div className="accordion__button d-flex items-center justify-between">
                    <div className="button text-16 text-dark-1">{item.question}</div>
                    <div className="accordion__icon size-30 flex-center bg-accent-1-05 rounded-full">
                      <i className="icon-plus text-13"></i>
                      <i className="icon-minus text-13"></i>
                    </div>
                  </div>
                  <div className="accordion__content">
                    <div className="pt-20">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          ))
        ) : (
          <p>No offers available.</p>
        )}
      </div>
    </section>
  );
}
