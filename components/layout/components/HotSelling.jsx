"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";


export default function HotSelling(){
    const [hotTitle, setHotTitle] = useState("");
    const [hotDesc, setHotDesc] = useState("");
    const [error, setError] = useState(null);
    const [hotSlug, setHotSlug] = useState("");
    const [hotImage, setHotImage] = useState("");
    useEffect(()=>{
        const fetchData = async () => {
            try{    
                const response = await axios.get("https://mountaintrekkingnepal.com/api/home")
                setHotTitle(response?.data?.hot_selling?.title);
                setHotDesc(response?.data?.hot_selling_short_description);
                setHotImage(response?.data?.hot_selling?.image)
                setHotSlug(response?.data?.hot_selling?.slug);


            }
            catch(error){
                setError(error)
                console.error(error);
            }
        }; fetchData(); 
    })
    return(
        <div>
            <section className="layout-pt-lg layout-pb-lg relative hotsell trip-month ">
                <Link href = {`package/${hotSlug}`}>
                    <div className="sectionBg sectionBg-1">
                        <Image src={hotImage} alt="image" className="img-ratio" width={1600}
                                height={700}/>
                    </div>

                    <div className="container"> 
                    <div className="row justify-center text-center">
                    <div className="col-auto">
                        <span id="hot-sell">Hot Selling Trip</span>
                        <h2 className="text-70 md:text-40 sm:text-30 text-white fw-700">{hotTitle}</h2>
                        <p className="text-white mt-20">{hotDesc}</p>
                    </div>
                    </div>
                </div>
                </Link>
                

                
            </section>
        </div>
    );
}