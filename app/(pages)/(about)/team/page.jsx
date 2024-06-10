"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterFour from "@/components/layout/footers/FooterFour";
import Header4 from "@/components/layout/header/Header4";
import axios from "axios";
import { useState, useEffect } from "react";

export default function page(){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async () => { 
            try{
                const response = await axios.get({/* Whatever Url */})
                // setData(response?.data?.whatever)
            }
            catch(error){
                setError(error)
                console.log(error)
            }
        }
        fetchData();
    })

    return(
        <div>
            <Header4 />
            <section data-anim="fade" className="mt-header pt-30">
                <div className="container">
                    <div className="breadcrumbs mb-30 md:mb-15">
                    <span className="breadcrumbs__item">
                        <Link href="/">Home</Link>
                    </span>
                    <span> </span>
                    <span className="breadcrumbs__item">
                        <Link href="/whoarewe">About</Link>
                    </span>
                     
                    <span>Our Team</span>
                    </div>

                    <h1 className="text-30">Our Team</h1>
                </div>
            </section>

            <section className="">
            <div data-anim-wrap className="container">
            

                <div className="row y-gap-30 pt-40 sm:pt-20">
                {data.map((elm, i) => (
                    <div data-aos="fade-up"
                    data-aos-delay="400"  className="col-lg-3 col-md-4 col-sm-6">
                        <div className=" team-page">
                        <div className="ratio ratio-23:26">
                        <Image src={elm.image} alt="image" width={421}
                                height={301} className="Image-ratio bg-light-1 rounded-12"/>
                        </div>
    
                        <h3 className="text-16 fw-500 mt-20">{elm.name}</h3>
                        <p className="text-14 lh-16">{elm.post}</p>
                    </div>
                    </div>
                ))}

                

                </div>
            </div>
            </section>
            <FooterFour />
        </div>
    )
        
    
}