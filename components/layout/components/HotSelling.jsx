"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";


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
            <section class="layout-pt-lg layout-pb-lg relative hotsell trip-month ">
                <div class="sectionBg sectionBg-1">
                    <Image src={hotImage} alt="image" class="img-ratio" width={1600}
                            height={700}/>
                </div>

                <div class="container">
                    <div class="row justify-center text-center">
                    <div class="col-auto">
                        <span id="hot-sell">Hot Selling Trip</span>
                        <h2 class="text-70 md:text-40 sm:text-30 text-white fw-700">{hotTitle}</h2>
                        <p class="text-white mt-20">{hotDesc}</p>
                        <ul>
                        <li>    
                        <div class="item">
                            <span class="icon"><i class="far fa-calendar-alt"></i></span>
                            <div class="text">
                            <span class="info-title">Total Duration</span> {/* Not in API*/}
                            <span class="info">08 days</span> {/* Not in API*/}
                            </div>
                        </div>
                        </li>
                        <li>
                        <div class="item">
                            <span class="icon"><i class="fas fa-tags"></i></span>
                            <div class="text">
                            <span class="info-title">Trip Price</span> {/* Not in API*/}
                            <span class="info">US $740</span> {/* Not in API*/}
                            </div>
                        </div>
                        </li>
                    </ul>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}