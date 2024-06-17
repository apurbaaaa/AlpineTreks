import React from 'react';

const WhyUs = ({ data }) => {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-accent-1-05">
      <div data-anim-wrap className="container">
        <div className="row justify-center text-center">
          <div className="col-lg-8 col-12">
            <h2 className="text-30 md:text-24">Why choose Us</h2>
            <p>{data.choose_us_description}</p>
          </div>
        </div>

        <div data-anim-child="delay-2" className="row md:x-gap-20 pt-40 sm:pt-20 mobile-css-slider -w-280 is-in-view">
          {data.choose_us.map((elm, i) => (
            <div key={i} className="col-lg-3 col-sm-6 d-flex">
              <div className="featureIcon -type-1 text-center px-20 py-60 rounded-12 hover-shadow-1 bg-white mb-20">
                <div className="featureIcon__icon">
                  <img src={elm.image} alt={`Icon for ${elm.title}`} />
                </div>
                <h3 className="featureIcon__title text-20 fw-700 mt-30">{elm.title}</h3>
                <p className="featureIcon__text mt-10">{elm.short_text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};  

export default WhyUs;
