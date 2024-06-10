"use client"
import React, { useEffect, useState } from "react";
import Header4 from "@/components/layout/header/Header4";
import FooterFour from "@/components/layout/footers/FooterFour";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";


export default function page(){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null)
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await axios.get("https://mountaintrekkingnepal.com/api/home")
                setData(response?.data?.whatever) // replace API endpoint and setData
            }
            catch(error){
                console.error(error)
                setError(error)
            }
        }; fetchData();
    }, [])

    return(
        <div>
            <Header4 />
            <section data-anim="fade" className="mt-header pt-30">
  <div className="container">
    <div className="breadcrumbs mb-30 md:mb-15">
      <span className="breadcrumbs__item">
        <Link href="#">Home</Link>
      </span>
      <span> </span>
      <span className="breadcrumbs__item">
        <Link href="#">Review</Link>
      </span>
       
    </div>

    <h1 className="text-30">Our Clients Say's</h1>
  </div>
  </section>

  <section className="layout-pt-sm layout-pb-md">
      <div data-anim-wrap className="container">
        

        <div data-aos="fade-up" data-aos-delay="400" className="row y-gap-30 pt-40 md:pt-30">

          <div className="col-lg-4 col-md-6 d-flex">
            <div className="bg-white py-30 px-30 rounded-12 border-light">
              <h4 className="text-18 fw-500 text-accent-1">Great Work</h4>
              <div className="fw-500 mt-15 testimonial-content">“I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”</div>

              <div className="line mt-20 mb-20"></div>

              <div className="d-flex items-center">
                <Image src="https://mountaintrekkingnepal.com/images/noimage.svg" alt="image" width={421}
                            height={301} className="size-60 object-cover rounded-full"/>

                <div className="ml-20">
                  <div className="fw-500 lh-15">Courtney Henry</div>
                  <div className="text-14 lh-15">Web Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
  </section>
            <FooterFour />
        </div>
    );
}