"use client";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { setupCache } from "axios-cache-interceptor";

const instance = Axios.create();
const axios = setupCache(instance);

export default function FAQ({data}) {

  const [openIndex, setOpenIndex] = useState(null);

 

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-10 justify-center items-end">
          <div className="col-10 text-center">
            <h2 className="text-30 md:text-24">
              Frequently Asked Questions by Travelers
            </h2>
            <p>Join us on our trending adventure this year.</p>
          </div>
        </div>
        {data.traveller_faq.map((data, i) => (
          <div
            key={i}
            className={`accordion -simple row y-gap-20 mt-30 js-accordion justify-content-center ${
              openIndex === i ? "is-active" : ""
            }`}
          >
            <div className="col-lg-8 col-12">
              <div className="accordion__item px-20 py-15 border-1   rounded-12">
                <div
                  className="accordion__button d-flex items-center justify-between"
                  onClick={() => toggleAccordion(i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <div className="button text-16 text-dark-1">
                    {data.question}
                  </div>
                  <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                    <i
                      className={`icon-${openIndex === i ? "minus" : "plus"} text-13`}
                    ></i>
                  </div>
                </div>
                <div
                  className="accordion__content"
                  id={`faq-answer-${i}`}
                  style={{
                    maxHeight: openIndex === i ? "1000px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.5s ease",
                  }}
                >
                  <div className="pt-20">
                    <p>{data.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}