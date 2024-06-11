"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DestInfo() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await axios.get("https://mountaintrekkingnepal.com/api/destination")
        setData(response.data)
      }
      catch(error){
        console.log(error)
        setError(error);
      }
    }
    fetchData();
  },[])
  return (
    <div>
        <section>
                <div data-anim="fade" className="container is-in-view">
                <div className="row justify-between py-30 mt-80">
                <div className="col-auto">
                <div className="text-14 breadcrumb-text">
                <a href="https://mountaintrekkingnepal.com">Home</a>
                <Link
              href={"/bhutan-list-1"}
              data-aos="fade-up"
              data-aos-delay=""
              className="buttonArrow d-flex items-center "
            >
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
                <span>Destination</span>
                </div>
                </div>
                </div>
                <h1 className="text-30">Destination</h1>
                </div>
        </section>
   
        <section className="layout-pt-lg layout-pb-lg  about-section">
            <div data-anim-wrap="" className="container animated">
            {data.map((elm, i) => (
              <div key={i} className="row y-gap-20 justify-between">
                <div data-aos="fade-up" className="col-lg-6 is-in-view">
                  <h2>{elm.title}</h2>
                  <p>{elm.description}</p>
                  <br />
                  <Link className="button -md -dark-1 bg-accent-1 text-white col-lg-4 col-12" href={`/destination/${elm.slug}`}>
                    View More <i className="icon-arrow-top-right text-16 ml-10"></i>
                  </Link>
                </div>
                <div data-aos="fade-up" data-aos-delay="400" className="col-lg-5 is-in-view">
                  <div className="video relative container">
                    <div className="video__bg">
                      <Image src={elm.image} alt="Nepal" className="rounded-12" width={800} height={500}/>
                    </div>
                  </div>
                </div>
              </div>    
            ))}

            </div>
            <br />
        </section>
    </div>
    
  );
}
