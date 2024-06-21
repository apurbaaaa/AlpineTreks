"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NextBreadcrumb from "@/components/common/BreadCrumbs";
import axios from "axios";
import Loading from "@/components/homes/others/Loading";
import WhyUs from "@/components/homes/features/FeaturesOne";

export default function page(){
  const [dataSettings, setDataSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSettings = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/settings`);
        setDataSettings(responseSettings.data); 
      } catch (error) {
        console.error(error);
        setError(error);
      }
      finally{
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div><Loading/></div>;
  }

    return(
        <div>

             <section data-anim="fade" className="mt-header pt-30">
  <div className="container">
    <div className="breadcrumbs mb-30 md:mb-15">
      <NextBreadcrumb />
    </div>

    
  </div>
</section>
<section className="layout-pt-sm layout-pb-md why-us-inner">
  <div data-anim-wrap className="container">
   <div data-aos="fade-up" className="row justify-center">
    <div className="col-lg-8">
     <h1 className="text-30">Why us</h1>
      <p>Sometimes it seems like a new trekking company pops up every other day. Nepal Hiking Team (NHT) distinguishes itself from the pack by designing exceptional itineraries and organizing all of the logistics so that you can enjoy the adventure. Since our company was founded in 2009, we’ve spent years refining our services and packages, becoming bona fide experts in the travel and tourism industry. Our experienced guides are supported by a network of specialists who will guarantee the best services during your trek. We proudly cater to travelers from across the world, who all agree on one thing: there is no better travel companion than the (NHT) Nepal Hiking Team.</p>
      <p>Sometimes it seems like a new trekking company pops up every other day. Nepal Hiking Team (NHT) distinguishes itself from the pack by designing exceptional itineraries and organizing all of the logistics so that you can enjoy the adventure. Since our company was founded in 2009, we’ve spent years refining our services and packages, becoming bona fide experts in the travel and tourism industry. Our experienced guides are supported by a network of specialists who will guarantee the best services during your trek. We proudly cater to travelers from across the world, who all agree on one thing: there is no better travel companion than the (NHT) Nepal Hiking Team.</p>
      <h2>Our Enthusiastic Team</h2>
      <p>At Nepal Hiking Team, we know that you travel to explore and discover more about the world. We understand the importance of making a genuine personal connection when you travel, and our entire team is full of passion and boundless enthusiasm about our work. That’s why you can trust us to be your companion in every part of Nepal and the greater Himalayan region. We employ professionally trained experts who won’t just guide you on your trek; they’ll also introduce you to the places, culture, and history of the Himalayas. With cheerful dispositions and expert advice, our trekking guides will help you to make the most of your adventure every step of the way.</p>

      <h2>Our Responsibility and Ethics</h2>
      <p>The Himalayas are a fragile environment, and the Nepal Hiking Team is careful to operate under a model of sustainable tourism. Our guides are trained to practice ethical tourism on all of our trekking routes, and we take special care to protect our delicate relationship with nature. We also work closely with local communities to ensure that people enjoy opportunities for development and enhanced livelihoods.</p>

      <h2>Our Reputation and Awards</h2>
      <p>As one of Nepal’s leading travel companies, we’ve had the honor of serving more than 30,000 clients from around the world. With our dedicated team working around the clock to provide quality services 24 hours per day, we’ve earned the trust of countless returning travelers. In recognition of our hard work to become the best trekking agency in Nepal, we’ve been awarded the TripAdvisor Certificate of Excellence each year from 2012 to 2022. We’ve also been inducted into the Certificate of Excellence Hall of Fame, an achievement awarded to agencies dedicated to excellent customer care and top-notch service.</p>

      <h2>Our Concern for your Safety</h2>
      <p>Your safety is our number one priority at Nepal Hiking Team. Each of our itineraries is put together to allow you plenty of time for acclimatization, and our guides are qualified experts who will always pick out a safe route for you to hike. No matter where you’re going, we’ll ensure that your accommodations are clean and hygienic, and you’ll have plenty of nourishing and delicious food to enjoy during your trek. Our guides are also trained in first aid and bring along first aid kits on every trip, and our porters will carry your luggage in secure baggage. If you’re joining a high-altitude trek or summit expedition, we can also provide oxygen cylinders at an additional cost.</p>

      <h2>Our Knowledge and Experience</h2>
      <p>Traveling is a tricky business. When you spend your hard-earned money to visit an unfamiliar country, you need to know that you’re in good hands. We believe that there’s no substitute for firsthand field knowledge and logistical expertise. With over ten years of experience in the industry, Nepal Hiking Team leads the way in curating the very best Himalayan travel itineraries. You can trust us to deliver the ultimate trekking holiday, packed with all of the highlights of a genuine Himalayan adventure.</p>

      <h2>Go Beyond Trekking with Innovative Tour Packages</h2>
      <p>The lure of trekking in the Himalayas draws thousands of tourists to Nepal each year. But there’s more to see and do in the country, especially for adventurous travelers. We’ve put together a staggering variety of tour packages that allow you to experience everything that this part of the world has to offer. In addition to day tours and trekking expeditions, you can join jungle safari trips, whitewater rafting excursions, and scenic mountain flights. If adrenaline is what you crave, you can even go paragliding, bungee jumping, or ultralight flying. And we’re continuously developing new itineraries by talking with our clients, studying emerging tourism markets, and highlighting newly explored routes. Whether you’re traveling alone or with family and friends, our flexible tours will meet and exceed even your most demanding expectations.</p>

      <h2>Custom Itineraries at the Best Prices</h2>
      <p>At Nepal Hiking Team, we strive to develop each itinerary with your input. Your personalized tour of the Himalayas will be created to meet your own needs and specifications, guaranteeing that you’re fully engaged in the planning process and satisfied while you’re traveling. Whether you’re joining a group tour or arranging for a private trip, we can also put your package together at some of the most competitive rates in the industry. But we’ll never compromise when it comes to quality, and your travel experience with Nepal Hiking Team will place you in expert hands from beginning to end.</p>

      <h2>Your Travel Investment is Safe and Valued</h2>
      <p>Book your trip with confidence: Nepal Hiking Team is fully authorized by the Government of Nepal and recognized by the country’s Office of the Company Registrar. We’re also credentialed with the Nepal Tourism Board, the Department of Industry, and the National Nepal Rastra Bank. These assurances guarantee that your trekking fees and tour payments are protected, allowing you to plan your vacation with no risk involved. And while we always recommend purchasing your travel insurance, our trips are specifically designed to maximize the value of every dollar you spend.</p>

      <h2>Discounted Rates Available</h2>
      <p>We’re always looking for ways to increase the value of our Himalayan tours. That’s why we offer discounts for families, and returning customers and for large groups of 12 or more travelers, we’re also able to arrange a free trip for your team leader. Get in touch with us today to see what we can do for your group!</p>

      <h2>24-Hour Service and Individual Attention</h2>
      <p>At Nepal Hiking Team, we’re here to serve you 24 hours per day. Prompt customer service is one of our top priorities, and we don’t use form letters or mass email marketing. Instead, our agents will contact you individually to discuss your travel plans and develop a customized itinerary with your input. We’ll always respond quickly and work closely with you to deliver precisely the services you need—when you need them.</p>
    </div>
  </div> 


</div>
</section>
    {dataSettings && <WhyUs data={dataSettings} />}
        </div>
    )
}