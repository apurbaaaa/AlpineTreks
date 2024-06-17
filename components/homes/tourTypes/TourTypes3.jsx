"use client"
import Image from "next/image";
import Link from "next/link";

export default function ActivitiesOffered({data}) {
  return (
    <section className="layout-pt-xl layout-pb-xl bg-accent-1-05">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <h2 data-aos="fade-up" className="text-30"> 
              {data.we_offers_title}              
            </h2>
            <p>{data.we_offers_desc}</p>
          </div>
        </div>
    
        <div className="row y-gap-20 pt-40" data-aos="fade-up">
          {data.we_offers && data.we_offers.length > 0 ? (
            data.we_offers.map((activity, index) => (
              <div key={index} className="col-xl-2 col-md-4 col-6">
                <Link href={`/activity/${activity.slug}`} className="featureCard -type-5 -hover-accent-1">
                  <div className="featureCard__icon">
                    <Image width="40" height="41" src={activity.image} alt="image" />
                  </div>
                  <h4 className="text-18 fw-500 mt-20">{activity.title}</h4>
                  <div className="lh-13 mt-5">{activity.count}+ activities</div>
                </Link>
              </div>
            ))
          ) : (
            <p>No offers available.</p>
          )}
        </div>
      </div>
    </section>
  );
}
