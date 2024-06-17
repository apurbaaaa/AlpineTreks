import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header4 from "@/components/layout/header/Header4";
import FooterFour from "@/components/layout/footers/FooterFour";
import TourSlider3 from "@/components/homes/tours/TourSlider3";
export default function page(){
    return(

        <div>

            <section data-aos="fade-up" className="mt-header pt-30">
                <div className="container">
                    <div className="breadcrumbs mb-30 md:mb-15">
                    <span className="breadcrumbs__item">
                        <Link href="/">Home</Link>
                    </span>
                    <span> </span>
                    <span className="breadcrumbs__item">
                        <Link href="/">Travel Guide</Link>,
                    </span>
                    <span> </span>
                    <span className="breadcrumbs__item">    
                        <Link href="/">Best Trekking Season</Link>
                    </span>
                    </div>
    
                    <h1 className="text-30">Best Trekking Season</h1>
                </div>
            </section>
    
            <section className="layout-pt-md layout-pb-md js-pin-container normal-page tabs -terms js-tabs">
            <div className="container">
                <div className="row y-gap-30 justify-between">
                <div className="col-lg-3">
                    <div className="d-flex justify-end ">
                    <div className="tabs__controls row y-gap-10 js-tabs-controls side-bar">
                        <h2>Tour Guide</h2>
    
                        <div className="col-12">
                        <Link href="/best-season" className="tabs__button relative pl-20 js-tabs-button ">Travel Guide</Link>
                        </div>
    
                        <div className="col-12">
                        <Link href="/best-season" className="tabs__button relative pl-20 js-tabs-button ">Nepal Visa Information</Link>
                        </div>
    
                        <div className="col-12">
                        <Link href="/best-season" className="tabs__button relative pl-20 js-tabs-button ">Equipment Checklist</Link>
                        </div>
    
                        <div className="col-12">
                        <Link href="/best-season" className="tabs__button relative pl-20 js-tabs-button is-tab-el-active" >Best Trekking Season</Link>
                        </div>
    
                        <div className="col-12">
                        <Link href="/best-season" className="tabs__button relative pl-20 js-tabs-button " >Trip Grade</Link>
                        </div>
                        <div className="col-12">
                        <Link href="/best-season" className="tabs__button relative pl-20 js-tabs-button " >Travel Insurancer</Link>
                        </div>
                        <div className="col-12">
                        <Link href="/best-season" className="tabs__button relative pl-20 js-tabs-button " >Recommended Medical Kit</Link>
                        </div>
                        <div className="col-12">
                        <Link href="/best-season" className="tabs__button relative pl-20 js-tabs-button " >Recommended Flights</Link>
                        </div>
    
                    </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="inner-text">
                    
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus nascetur morbi nisl, mi, in semper metus porttitor non. Augue nunc amet fringilla sit. Fringilla eget arcu sodales sed a, parturient fermentum amet scelerisque. Amet purus urna, dictumst aliquet aliquam natoque non, morbi pretium. Integer amet fermentum nibh viverra mollis consectetur arcu, ultrices dolor. Gravida purus arcu viverra eget. Aliquet tincidunt dignissim aliquam tempor nec id. Habitant suscipit sit semper duis odio amet, at.</p>
                        
                        <Image src="https://mountaintrekkingnepal.com/storage/FibK7fvq6keOlAatBZz3bWo6lHSvgR8GYAhfU7ye.jpg" width={421}
                                height={301} alt=""/>
                        <h2>Quick facts</h2>
                        <ul>
                            <li> <span>High Season:</span> April - May, September - October</li>
                            <li><span>High Tourist Season:</span> June - September</li>
                            <li><span>Low Season:</span> November - March</li>
                            <li><span>Ski Season:</span> December - Februaryt</li>
                            <li><span>All Seasons:</span> April - May (spring), June - August (summer), September - October (fall), November - March (winter) The best time to visit is between April - May, and September - October, when the weather is perfect, and the tourist numbers are low.</li>
                            <li>The high season is between June and August, and this is when most of the local and international tourists visit the country, so expect higher prices, and sweltering heat. July is a bad time to travel as the weather will be hot and there is heavy rainfall throughout the peninsula. November to March is winter, which is rather cold. But, if you are a fan of skiing, you should definitely visit the country between December and February, when there is sufficient snowfall for sporting activities.</li>
                            
                        </ul> 
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus nascetur morbi nisl, mi, in semper metus porttitor non. Augue nunc amet fringilla sit. Fringilla eget arcu sodales sed a, parturient fermentum amet scelerisque. Amet purus urna, dictumst aliquet aliquam natoque non, morbi pretium. Integer amet fermentum nibh viverra mollis consectetur arcu, ultrices dolor. Gravida purus arcu viverra eget. Aliquet tincidunt dignissim aliquam tempor nec id. Habitant suscipit sit semper duis odio amet, at.</p>
                            <h3>SEASONAL OVERVIEW</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus nascetur morbi nisl, mi, in semper metus porttitor non. Augue nunc amet fringilla sit. Fringilla eget arcu sodales sed a, parturient fermentum amet scelerisque. Amet purus urna, dictumst aliquet aliquam natoque non, morbi pretium. Integer amet fermentum nibh viverra mollis consectetur arcu, ultrices dolor. Gravida purus arcu viverra eget. Aliquet tincidunt dignissim aliquam tempor nec id. Habitant suscipit sit semper duis odio amet, at.</p>
                            <ul>
                            <li> <span>High Season:</span> April - May, September - October</li>
                            <li><span>High Tourist Season:</span> June - September</li>
                            <li><span>Low Season:</span> November - March</li>
                            <li><span>Ski Season:</span> December - Februaryt</li>
                            <li><span>All Seasons:</span> April - May (spring), June - August (summer), September - October (fall), November - March (winter) The best time to visit is between April - May, and September - October, when the weather is perfect, and the tourist numbers are low.</li>
                            <li>The high season is between June and August, and this is when most of the local and international tourists visit the country, so expect higher prices, and sweltering heat. July is a bad time to travel as the weather will be hot and there is heavy rainfall throughout the peninsula. November to March is winter, which is rather cold. But, if you are a fan of skiing, you should definitely visit the country between December and February, when there is sufficient snowfall for sporting activities.</li>
                            
                        </ul> 
                        <h4>June to August — Summer / High Season</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus nascetur morbi nisl, mi, in semper metus porttitor non. Augue nunc amet fringilla sit. Fringilla eget arcu sodales sed a, parturient fermentum amet scelerisque. Amet purus urna, dictumst aliquet aliquam natoque non, morbi pretium. Integer amet fermentum nibh viverra mollis consectetur arcu, ultrices dolor. Gravida purus arcu viverra eget. Aliquet tincidunt dignissim aliquam tempor nec id. Habitant suscipit sit semper duis odio amet, at.</p>
                            <Image src="https://mountaintrekkingnepal.com/storage/FibK7fvq6keOlAatBZz3bWo6lHSvgR8GYAhfU7ye.jpg" width={421}
                                height={301} alt=""/>
                            <ul>
                            <li> <span>High Season:</span> April - May, September - October</li>
                            <li><span>High Tourist Season:</span> June - September</li>
                            <li><span>Low Season:</span> November - March</li>
                            <li><span>Ski Season:</span> December - Februaryt</li>
                        </ul>
                    </div>
                </div>
                
                </div>
            </div>
            </section>
    
            <section className="layout-pt-md layout-pb-md bg-light-1">
                <div className="container">
                    <div className="row">
                    <div className="col-auto">
                        <h2 className="text-30">You might also like...</h2>
                    </div>
                    </div>
                    </div>
            </section>
            <TourSlider3 />

        </div>
    )
}
