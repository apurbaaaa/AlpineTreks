"use client"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ActivitiesOffered() {
  const [activities, setActivities] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get("https://mountaintrekkingnepal.com/api/home");
        // Ensure that the path to the data is correct
        if(response.data && response.data.we_offers) {
          setActivities(response.data.we_offers);
        }
      } catch (err) {
        console.error(err);
        setError(err);
      }
    };
    fetchActivities();
  }, []); 

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await axios.get("https://mountaintrekkingnepal.com/api/home");
        // Ensure that the path to the data is correct
        if(response.data && response.data.we_offers_title) {
          setTitle(response.data.we_offers_title);
        }
        if(response.data && response.data.we_offers_desc) {
          setDesc(response.data.we_offers_desc);
        }
      } catch (err) {
        console.error(err);
        setError(err);
      }
    };
    fetchTitle();
  }, []); 

  return (
    <section className="layout-pt-xl layout-pb-xl bg-accent-1-05">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <h2 data-aos="fade-up" className="text-30"> 
              {title}              
            </h2>
            <p>{desc}</p>
          </div>
        </div>
    
        <div className="row y-gap-20 pt-40" data-aos="fade-up">
          {activities.map((activity, index) => (
            <div key={index} className="col-xl-2 col-md-4 col-6">
              <Link href={`/activity/${activity.slug}`} className="featureCard -type-5 -hover-accent-1">
                <div className="featureCard__icon">
                  <Image width="40" height="41" src={activity.image} alt="image" />
                </div>
                <h4 className="text-18 fw-500 mt-20">{activity.title}</h4>
                <div className="lh-13 mt-5">{activity.count}+ activities</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
