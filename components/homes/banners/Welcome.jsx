"use client"
import React from "react";
import { useRouter } from "next/navigation";

export default function Welcome() {
    const router = useRouter();

    const handleReadMoreClick = () => {
        router.push("/");
    };

    return (
        <section className="layout-pt-xl layout-pb-lg">
            <div className="container">
                <div className="row y-gap-20 justify-between align-items-center">
                    <div className="col-lg-7">
                        <h2 className="text-40 md:text-24 mb-10">Welcome to Mountain Trekking Nepal</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="col-md-4 mt-20">
                            <button className="button -md -dark-1 bg-accent-1 text-white col-12" onClick={handleReadMoreClick}>
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <img
                            src="https://www.mountainmarttreks.com/public/images/wel1.png"
                            alt="Mountain Trekking Nepal"
                            className="rounded-12"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
