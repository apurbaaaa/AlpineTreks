"use client"

import React from "react"
import Link from "next/link"


export default function Welcome(){

    return(
        <section className="layout-pt-xl  layout-pb-lg  ">
            <div data-anim-wrap className="container">
                <div className="row y-gap-20 justify-between align-items-center">

                    <div data-aos="fade-up" className="col-lg-7">
                        <h2 className="text-40 md:text-24 mb-10">Welcome to Mountain Trekking Nepal</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="col-md-4 mt-20">
                        <Link href="/" >
                            <button className="button -md -dark-1 bg-accent-1 text-white">
                                Read More
                            </button>
                        </Link>
                                
                                </div>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400" className="col-lg-5">
                        
                        <img src="https://www.mountainmarttreks.com/public/images/wel1.png" alt="image" className="rounded-12"/>
                
                    </div>
                </div>
            </div>
        </section>
    )
}