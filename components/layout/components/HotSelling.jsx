"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";


export default function HotSelling({data}){
    return(
        <div>
            <section className="layout-pt-lg layout-pb-lg relative hotsell trip-month ">
                <Link href = {`package/${data.hot_selling.slug}`}>
                    <div className="sectionBg sectionBg-1">
                        <Image src={data.hot_selling.image} alt="image" className="img-ratio" width={1600}
                                height={700}/>
                    </div>

                    <div className="container"> 
                    <div className="row justify-center text-center">
                    <div className="col-auto">
                        <span id="hot-sell">Hot Selling Trip</span>
                        <h2 className="text-70 md:text-40 sm:text-30 text-white fw-700">{data.hot_selling.title}</h2>
                        <p className="text-white mt-20">{data.hot_selling_short_description}</p>
                    </div>
                    </div>
                </div>
                </Link>
                

                
            </section>
        </div>
    );
}