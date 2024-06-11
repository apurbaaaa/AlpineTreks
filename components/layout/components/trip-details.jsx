"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TripDetails() {
    return (
        <div>
            {/* <section id="details">
                <div className="over-view-menu">
                    <div className="container">
                        <div className="row">
                            <div className="header-menu">
                                <div className="bottom-menu regular-svg"/></div>
                                <ul>
                                    <li>
                                        <Link href="/overview" passHref>
                                            <div>
                                                <Image src="/images/square-list.svg" width={16} height={16} alt="Overview" width={24} height={24} />
                                                <h4>Overview</h4>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/itinerary" passHref>
                                            <div>
                                                <Image src="/images/map-location-dot.svg" width={16} height={16} alt="Itinerary" width={24} height={24} />
                                                <h4>Itinerary</h4>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/cost" passHref>
                                            <div>
                                                <Image src="/images/tag.svg" width={16} height={16} alt="Includes/Excludes" width={24} height={24} />
                                                <h4>Includes/Excludes</h4>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/departure" passHref>
                                            <div>
                                                <Image src="/images/calendar-day.svg" width={16} height={16} alt="Departure" width={24} height={24} />
                                                <h4>Departure</h4>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/map" passHref>
                                            <div>
                                                <Image src="/images/map.svg" width={16} height={16} alt="Map" width={24} height={24} />
                                                <h4>Map</h4>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/equipment" passHref>
                                            <div>
                                                <Image src="/images/backpack.svg" width={16} height={16} alt="Equipments" width={24} height={24} />
                                                <h4>Equipments</h4>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/photo" passHref>
                                            <div>
                                                <Image src="/images/gallery-thumbnails.svg" width={16} height={16} alt="Photo" width={24} height={24} />
                                                <h4>Photo</h4>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq" passHref>
                                            <div>
                                                <Image src="/images/question.svg" width={16} height={16} alt="FAQ" width={24} height={24} />
                                                <h4>FAQ</h4>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/review" passHref>
                                            <div>
                                                <Image src="/images/comment.svg" width={16} height={16} alt="Review" width={24} height={24} />
                                                <h4>Review</h4>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <div data-aos="fade-up" className="container">
                <div className="row justify-between py-30 mt-80">
                    <div className="col-auto">
                        <div className="text-14 breadcrumb-text">
                            <Link href="/" passHref>
                                <div>Home</div>
                            </Link> 
                            <Image src="/images/chevron-right.svg" width={16} height={16} alt="Chevron Right" />
                            <Link href="/nepal" passHref>   
                                <div>Nepal</div>
                            </Link>
                            <Image src="/images/chevron-right.svg" width={16} height={16} alt="Chevron Right" />
                            <Link href="/nepal/trekking" passHref>
                                <div>Trekking in Nepal</div>
                            </Link>
                            <Image src="/images/chevron-right.svg" width={16} height={16} alt="Chevron Right" />
                            <h1>Annapurna Base Camp Trek - 11 Days</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className=" js-pin-container layout-pb-md ">   
                <div className="container js-pin-container-inner">
                    <div className="row y-gap-30 justify-between">
                    <div data-aos="fade-up" data-aos-delay="400" className="col-lg-8">
                        <div className="">


                        <h2 className="text-30 sm:text-30 lh-14">
                            Annapurna Base Camp Trek - 11 Days
                        </h2>

                        <div className="row y-gap-20 justify-between pt-20">
                            <div className="col-auto">
                            <div className="row x-gap-20 y-gap-20 items-center">
                                <div className="col-auto ratings-star Imagee-star-color">
                                <div className="d-flex items-center">
                                    <div className="d-flex x-gap-5 pr-10">

                                    <Image src="Image/star.svg" width={16} height={16} />

                                    <Image src="Image/star.svg" width={16} height={16} />

                                    <Image src="Image/star.svg" width={16} height={16} />

                                    <Image src="Image/star.svg" width={16} height={16} />

                                    <Image src="Image/star.svg" width={16} height={16} />

                                    </div>
                                    4.8 (269)
                                </div>
                                </div>

                                <div className="col-auto svg-icon image-theme-color">
                                <div className="d-flex items-center">
                                    <Image src="Image/location-dot.svg" width={16} height={16} alt=""/>
                                    Nepal
                                </div>
                                </div>

                                <div className="col-auto svg-icon image-theme-color">
                                <div className="d-flex items-center">
                                    <Image src="Image/campground.svg" width={16} height={16} alt=""/>
                                    Tea House
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="col-auto">
                            <div className="col-auto">
                                <div className="d-flex x-gap-30 y-gap-10">
                                <Link href="#" className="d-flex items-center svg-icon image-theme-color">
                                <Image src="Image/share.svg" width={16} height={16} alt=""/>
                                    Share
                                </Link>
                                <Link href="#" className="d-flex items-center svg-icon image-theme-color">
                                    <Image src="Image/download.svg" width={16} height={16} alt=""/>
                                    Download
                                </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="row justify-center pt-30">
                        <div className="col-12">
                            <div className="relative overflow-hidden js-section-slider" data-gap="10" data-slider-cols="xl-1 lg-1 md-1 sm-1 base-1" data-nav-prev="js-sliderMain-prev" data-nav-next="js-sliderMain-next" data-loop>
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                <Image src="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16} alt="image" className="Image-cover rounded-12"/>
                                </div>
                                <div className="swiper-slide">
                                <Image src="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-912301-1692159956.webp" width={16} height={16} alt="image" className="Image-cover rounded-12"/>
                                </div>

                                <div className="swiper-slide">
                                <Image src="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16} alt="image" className="Image-cover rounded-12"/>
                                </div>

                            </div>

                            <div className="navAbsolute -type-2">
                                <button className="navAbsolute__button bg-white js-sliderMain-prev">
                                <i className="icon-arrow-left text-14"></i>
                                </button>

                                <button className="navAbsolute__button bg-white js-sliderMain-next">
                                <i className="icon-arrow-right text-14"></i>
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>


                        <div className="row y-gap-20 justify-between items-center layout-pt-md layout-pb-sm svg-icon-star image-theme-color">

                        <div className="col-lg-4 col-6">
                            <div className="d-flex items-center mb-20">
                            <div className="flex-center size-50">
                            <Image src="Image/location-dot.svg" width={16} height={16} alt=""/>
                            </div>

                            <div className="ml-10">
                            <div className="text-14 text-light-2 lh-16">Destination</div>
                            <div className="lh-16">Nepal</div>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-6">
                        <div className="d-flex items-center mb-20">
                            <div className="flex-center size-50 ">
                            <Image src="Image/person-hiking.svg" width={16} height={16} alt=""/>
                            </div>

                            <div className="ml-10">
                            <div className="text-14 text-light-2 lh-16">Activity</div>
                            <div className=" lh-16">Annapurna Treks</div>
                            </div>
                        </div>
                        </div>



                        <div className="col-lg-4 col-6">
                        <div className="d-flex items-center mb-20">
                            <div className="flex-center size-50 ">
                            <Image src="Image/map-location-dot.svg" width={16} height={16} alt=""/>
                            </div>

                            <div className="ml-10">
                            <div className="lh-16">Region</div>
                            <div className="text-14 text-light-2 lh-16">Annapurna Region</div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-6">
                        <div className="d-flex items-center mb-20">
                            <div className="flex-center size-50 ">
                            <Image src="Image/distance.svg" width={16} height={16} alt=""/>
                        </div>

                        <div className="ml-10">
                            <div className="text-14 text-light-2 lh-16">Distance</div>
                            <div className="lh-16">110km/68Miles</div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-6">
                        <div className="d-flex items-center mb-20">
                        <div className="flex-center size-50 ">
                            <Image src="Image/signs-post.svg" width={16} height={16} alt=""/>
                        </div>

                        <div className="ml-10">
                            <div className="text-14 text-light-2 lh-16">Start / End Point</div>
                            <div className="lh-16">Kathmandu / Kathmandu</div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-6">
                        <div className="d-flex items-center mb-20">
                        <div className="flex-center size-50 ">
                            <Image src="Image/calendar-clock.svg" width={16} height={16} alt=""/>
                        </div>

                        <div className="ml-10">
                            <div className="text-14 text-light-2 lh-16">Duration</div>
                            <div className="lh-16">11 Days</div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-6">
                        <div className="d-flex items-center mb-20">
                        <div className="flex-center size-50 ">
                            <Image src="Image/mountains.svg" width={16} height={16} alt=""/>
                        </div>

                        <div className="ml-10">
                            <div className="text-14 text-light-2 lh-16">Max. Altitude</div>
                            <div className="lh-16">4,130m at Annapurna Base Camp</div>
                        </div>
                        </div>
                    </div>



                    <div className="col-lg-4 col-6">
                        <div className="d-flex items-center mb-20 ">
                        <div className="flex-center size-50 ">
                            <Image src="Image/people-group.svg" width={16} height={16} alt=""/>
                        </div>

                        <div className="ml-10">
                            <div className="text-14 text-light-2 lh-16">Group Size</div>
                            <div className="lh-16">2 - 30</div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-6">
                        <div className="d-flex items-center mb-20">
                        <div className="flex-center size-50 ">
                            <Image src="Image/mountain-sun.svg" width={16} height={16} alt=""/>
                        </div>

                        <div className="ml-10">
                            <div className="text-14 text-light-2 lh-16">Nature Of Trek</div>
                            <div className="lh-16">Lodge to Lodge Trekking</div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6">
                        <div className="d-flex items-center mb-20">
                        <div className="flex-center size-50 ">
                        <Image src="Image/cloud-moon-rain.svg" width={16} height={16} alt=""/>
                        </div>

                        <div className="ml-10">
                        <div className="text-14 text-light-2 lh-16">Best Season</div>
                        <div className=" lh-16">Feb, Mar, Apri, May, June, Sep, Oct, Nov & Dec.</div>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-6">
                    <div className="d-flex items-center mb-20">
                        <div className="flex-center size-50 ">
                        <Image src="Image/person-walking.svg" width={16} height={16} alt=""/>
                        </div>

                        <div className="ml-10">
                        <div className="text-14 text-light-2 lh-16">Activity Per Day</div>
                        <div className=" lh-16">Approx. 4-6 hrs walking</div>
                        </div>
                    </div>
                    </div>



                    <div className="col-lg-4 col-6">
                    <div className="d-flex items-center mb-20">
                        <div className="flex-center size-50 ">
                        <Image src="Image/taco.svg" width={16} height={16} alt=""/>
                        </div>

                        <div className="ml-10">
                        <div className="text-14 text-light-2 lh-16">Grade</div>
                        <div className=" lh-16">Moderate</div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-6">
                    <div className="d-flex items-center mb-20">
                        <div className="flex-center size-50 ">
                        <Image src="Image/house.svg" width={16} height={16} alt=""/>
                        </div>

                        <div className="ml-10">
                        <div className="text-14 text-light-2 lh-16">Accommodation</div>
                        <div className="lh-16">Hotel in Pokhara and Hotel/Lodge/ Tea House during the trek</div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-6">
                    <div className="d-flex items-center mb-20">
                        <div className="flex-center size-50 ">
                        <Image src="Image/van-shuttle.svg" width={16} height={16} alt=""/>
                        </div>

                        <div className="ml-10">
                        <div className="text-14 text-light-2 lh-16">Transportation</div>
                        <div className="lh-16">Kathmandu- Pokhara-Kathmandu by Tourist Bus, Pokhara - Birethanti, Ghandruk Phedi - Pokhara on a private vehicle</div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-6">
                    <div className="d-flex items-center mb-20">
                        <div className="flex-center size-50 ">
                        <Image src="Image/pan-food.svg" width={16} height={16} alt=""/>
                        </div>

                        <div className="ml-10">
                        <div className="text-14 text-light-2 lh-16">Meals Included</div>
                        <div className=" lh-16">Breakfast in a hotel in Pokhara and all meals (breakfast, lunch, dinner) during the trek</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="trip-detail tour_details_boxed " id="overview">
                    <div className="text-collapse">
                    <h2>Trip Overview</h2>
                    <p>Annapurna Base Camp Trek is one of the most beautiful treks on earth that takes you through different climates, diverse landscapes, and culturally enriching villages. From the Annapurna Base Camp, you can witness the stunning views of Fishtail, Hiunchuli, Annapurna Massif, Dhaulagiri, Tilicho, Pisang, Pungda Danda, in addition to numerous other peaks. Along the way, you will be visiting the famous Poon Hill viewpoint and relaxing in the natural hot water pool at Jhinu Danda.</p>
                    </div>

                    <div className="highlight">
                    <h2>Highlights of the Everest Base Camp Trek</h2>
                    <ul>
                        <li>Experience the thrill of a speedboat to the stunning Phi Phi Islands</li>
                        <li>Be amazed by the variety of marine life in the archepelago</li>
                        <li>Enjoy relaxing in paradise with white sand beaches and azure turquoise water</li>
                        <li>Feel the comfort of a tour limited to 35 passengers</li>
                        <li>Catch a glimpse of the wild monkeys around Monkey Beach</li>
                    </ul>
                    </div>
                    <h2>  Online Trip Briefing</h2>
                    <p> The online briefing will clear all your doubts about the trek, including things to bring (equipment checklist) for the hike, the itinerary details, and what you can expect on the trails. As soon as you complete the booking, we will email you the available dates and times for the trek briefing, and once we receive your essential documents, we will conduct the online trek briefing.</p>
                </div>
                <div className="line mt-30 mb-20"></div>
                <div className="trip-detail tour_details_boxed regular-svg" id="itinery">
                    <h2>Itinerary</h2>
                    <div className="mt-30">
                    <div className="roadmap accordion -roadmap js-accordion">
                        <div className="roadmap__item accordion__item js-accordion-item-active">
                        <div className="roadmap__iconBig">
                            <Image src="Image/location-dot.svg" width={16} height={16}/>
                        </div>
                        <div className="roadmap__wrap">
                            <div className="accordion__button  justify-between">
                            <div className="roadmap__title">Day 1: Drive to Pokhara (820m / 2,690ft) west of the Kathmandu Valley</div>
                            </div>
                            <div className="accordion__content">
                            <div className="roadmap__content">
                                <p>After an early breakfast, we take a tourist bus (probably a 6-7 hours journey) to Pokhara. On our way, we can see the picturesque Trishuli and Marsyangdi rivers along the green, rocky mountains, rivers connecting each other, and small springs. </p>  <p>  Pokhara is a beautiful valley known for several lakes - including Phewa and Begnas, and it sits on the laps of Annapurna (8,091m), Machapuchare (6,993m), Dhaulagiri (8,169m), Manaslu (8,156m), and Lamjung Himal (6,983m).</p><p> Pokhara is a tourist paradise with all modern amenities providing all comforts. We encourage you to explore Pokhara to experience different cultures and visit various centers of attractions. </p></div>

                                <div className="itnery-detail-info">
                                <ul>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/van.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Driving Hours</div>
                                        <div className=" lh-16">(205km / 127miles) 6-7hrs </div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/house.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Accommodation</div>
                                        <div className="lh-16">Silver Oaks Inn</div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/meal.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Meals Included</div>
                                        <div className=" lh-16">Breakfast </div>
                                        </div>
                                    </div>
                                    </li>

                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="roadmap__item accordion__item">
                            <div className="roadmap__iconBig">
                            <Image src="Image/location-dot.svg" width={16} height={16}/>
                            </div>
                            <div className="roadmap__wrap">
                            <div className="accordion__button d-flex items-center justify-between">
                                <div className="roadmap__title">Day 2: Drive From Pokhara to Nayapul /Birethanti /Tikhedhunga (1,570m). Trek to Ulleri (1,540m / 5,050ft)</div>
                            </div>
                            <div className="accordion__content">
                                <div className="roadmap__content"> <p>  After a nourishing breakfast on the banks of Phewa Lake, we take a short drive through the beautiful landscapes and head to Tikhedhunga. The road is quite gentle and passes through Nayapul and then Birethanti. While on the road, you will see stunning terraced farms along the Bhurungdi Khola.</p> <p>  After Birethanti, it is an offroad drive that takes us to Tikhedunga. The hike starts at Tikhedhunga passes through Sudame and Hile villages, and ends at Ulleri (2073 meters). You will be hiking for about three hours.</p></div>
                                <div className="itnery-detail-info">
                                <ul>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/van.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Driving Hours</div>
                                        <div className=" lh-16">2hrs</div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/person-simple.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Trek Distance</div>
                                        <div className="lh-16">7km / 4.34miles</div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/mountain-1.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Highest Altitude</div>
                                        <div className=" lh-16">1,540m / 5,050ft </div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/house.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Accomodation</div>
                                        <div className=" lh-16">Hotel</div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/meal.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Meals </div>
                                        <div className=" lh-16">1Breakfast + Lunch + Dinner </div>
                                        </div>
                                    </div>
                                    </li>

                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="roadmap__item accordion__item">
                            <div className="roadmap__iconBig">
                            <Image src="Image/location-dot.svg" width={16} height={16}/>
                            </div>
                            <div className="roadmap__wrap">
                            <div className="accordion__button d-flex items-center justify-between">
                                <div className="roadmap__title">Day 3: Trek from Ulleri (1,540m / 5,050ft) to Ghorepani (2,860m / 9,385ft)</div>
                            </div>
                            <div className="accordion__content">
                                <div className="roadmap__content"> <p>  After a nourishing breakfast on the banks of Phewa Lake, we take a short drive through the beautiful landscapes and head to Tikhedhunga. The road is quite gentle and passes through Nayapul and then Birethanti. While on the road, you will see stunning terraced farms along the Bhurungdi Khola.</p> <p>  After Birethanti, it is an offroad drive that takes us to Tikhedunga. The hike starts at Tikhedhunga passes through Sudame and Hile villages, and ends at Ulleri (2073 meters). You will be hiking for about three hours.</p></div>
                                <div className="itnery-detail-info">
                                <ul>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/van.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Driving Hours</div>
                                        <div className=" lh-16">2hrs</div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/person-simple.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Trek Distance</div>
                                        <div className="lh-16">7km / 4.34miles</div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/mountain-1.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Highest Altitude</div>
                                        <div className=" lh-16">1,540m / 5,050ft </div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/house.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Accomodation</div>
                                        <div className=" lh-16">Hotel</div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/meal.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Meals </div>
                                        <div className=" lh-16">1Breakfast + Lunch + Dinner </div>
                                        </div>
                                    </div>
                                    </li>

                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="roadmap__item accordion__item">
                            <div className="roadmap__iconBig">
                            <Image src="Image/location-dot.svg" width={16} height={16}/>
                            </div>
                            <div className="roadmap__wrap">
                            <div className="accordion__button d-flex items-center justify-between">
                                <div className="roadmap__title">Day 4: Early morning hike to Poon Hill viewpoint (3,210m / 10,525ft) , then trek to Tadapani (2,630m) / Chuile (2,309m)</div>
                            </div>
                            <div className="accordion__content">
                                <div className="roadmap__content"> <p>  After a nourishing breakfast on the banks of Phewa Lake, we take a short drive through the beautiful landscapes and head to Tikhedhunga. The road is quite gentle and passes through Nayapul and then Birethanti. While on the road, you will see stunning terraced farms along the Bhurungdi Khola.</p> <p>  After Birethanti, it is an offroad drive that takes us to Tikhedunga. The hike starts at Tikhedhunga passes through Sudame and Hile villages, and ends at Ulleri (2073 meters). You will be hiking for about three hours.</p></div>
                                <div className="itnery-detail-info">
                                <ul>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/van.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Driving Hours</div>
                                        <div className=" lh-16">2hrs</div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/person-simple.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Trek Distance</div>
                                        <div className="lh-16">7km / 4.34miles</div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/mountain-1.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Highest Altitude</div>
                                        <div className=" lh-16">1,540m / 5,050ft </div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/house.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Accomodation</div>
                                        <div className=" lh-16">Hotel</div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/meal.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Meals </div>
                                        <div className=" lh-16">1Breakfast + Lunch + Dinner </div>
                                        </div>
                                    </div>
                                    </li>

                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="roadmap__item accordion__item">
                            <div className="roadmap__iconBig">
                            <Image src="Image/location-dot.svg" width={16} height={16}/>
                            </div>
                            <div className="roadmap__wrap">
                            <div className="accordion__button d-flex items-center justify-between">
                                <div className="roadmap__title">Day 5: Trek from Tadapani (2,630m) / Chuile (2,309m) to Chomrong (2,165m)/ Sinuwa (2,340m)k</div>
                            </div>
                            <div className="accordion__content">
                                <div className="roadmap__content"> <p>  After a nourishing breakfast on the banks of Phewa Lake, we take a short drive through the beautiful landscapes and head to Tikhedhunga. The road is quite gentle and passes through Nayapul and then Birethanti. While on the road, you will see stunning terraced farms along the Bhurungdi Khola.</p> <p>  After Birethanti, it is an offroad drive that takes us to Tikhedunga. The hike starts at Tikhedhunga passes through Sudame and Hile villages, and ends at Ulleri (2073 meters). You will be hiking for about three hours.</p></div>
                                <div className="itnery-detail-info">
                                <ul>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/van.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Driving Hours</div>
                                        <div className=" lh-16">2hrs</div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/person-simple.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Trek Distance</div>
                                        <div className="lh-16">7km / 4.34miles</div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/mountain-1.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Highest Altitude</div>
                                        <div className=" lh-16">1,540m / 5,050ft </div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/house.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Accomodation</div>
                                        <div className=" lh-16">Hotel</div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/meal.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Meals </div>
                                        <div className=" lh-16">1Breakfast + Lunch + Dinner </div>
                                        </div>
                                    </div>
                                    </li>

                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="roadmap__item accordion__item">
                            <div className="roadmap__iconBig">
                            <Image src="Image/location-dot.svg" width={16} height={16}/>
                            </div>
                            <div className="roadmap__wrap">
                            <div className="accordion__button d-flex items-center justify-between">
                                <div className="roadmap__title">Day 6: Day Trek from Chomrong (2,165m)/ Sinuwa (2,340m) to Himalaya (2,890m)/Deurali (3,174m)</div>
                            </div>
                            <div className="accordion__content">
                                <div className="roadmap__content"> <p>  After a nourishing breakfast on the banks of Phewa Lake, we take a short drive through the beautiful landscapes and head to Tikhedhunga. The road is quite gentle and passes through Nayapul and then Birethanti. While on the road, you will see stunning terraced farms along the Bhurungdi Khola.</p> <p>  After Birethanti, it is an offroad drive that takes us to Tikhedunga. The hike starts at Tikhedhunga passes through Sudame and Hile villages, and ends at Ulleri (2073 meters). You will be hiking for about three hours.</p></div>
                                <div className="itnery-detail-info">
                                <ul>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/van.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Driving Hours</div>
                                        <div className=" lh-16">2hrs</div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/person-simple.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Trek Distance</div>
                                        <div className="lh-16">7km / 4.34miles</div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/mountain-1.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Highest Altitude</div>
                                        <div className=" lh-16">1,540m / 5,050ft </div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/house.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Accomodation</div>
                                        <div className=" lh-16">Hotel</div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" mt-10 d-flex">
                                        <div className="flex-center size-50 ">
                                        <Image src="Image/meal.svg" width={16} height={16} alt=""/>
                                        </div>

                                        <div className="ml-10">
                                        <div className="text-14 text-light-2 lh-16">Meals </div>
                                        <div className=" lh-16">1Breakfast + Lunch + Dinner </div>
                                        </div>
                                    </div>
                                    </li>

                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="line mt-30 mb-20"></div>
                    <div className="trip-detail tour_details_boxed" id="cost">
                    <div className="row x-gap-130 y-gap-20">
                        <div className="col-lg-12">
                        <h2>Cost Includ</h2>
                        <div className="include">
                            <ul>
                            <li>All ground transport by private vehicle, including airport transfers.</li>
                            <li>Four nights' accommodation with breakfast at a 3-star hotel in Kathmandu.</li>
                            <li>Three daily meals (breakfast, lunch, and dinner) with tea/coffee during the trek.</li>
                            <li>Best availabe twin-sharing lodge accommodation during the trek. This includes private bathrooms with hot showers in Phakding, Namche, and Lukla.</li>
                            <li>Snacks of seasonal fruits during the trek.</li>
                            <li>One highly experienced, helpful, and friendly guide. Porters (1 porter for every two trekkers) and their provisions for food, accommodation, salary, and equipment. This also includes accident insurance for all staff.</li>
                            <li>Round-trip airfare to/from Lukla, including transfers. During the peak season (March to May and Sept to November) Lukla flight will operate via Ramechhap Airport.</li>
                            <li>Complementary use of down jacket and sleeping bag while trekking.</li>
                            <li>Duffle bag to put your trekking gear. Your suitcase will stay in Kathmandu at the hotel while you are on the trek.</li>
                            <li>Trekking map and trip achievement certificate.</li>
                            <li>First aid medical kit with provisions for an oximeter to check oxygen levels and heart rate.</li>
                            <li>All required trekking permits.</li>
                            <li>Government taxes and office service charges.</li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-12">
                        <h2>Cost Exclude</h2>
                        <div className="exclude">
                            <ul>
                            <li>All ground transport by private vehicle, including airport transfers.</li>
                            <li>Four nights' accommodation with breakfast at a 3-star hotel in Kathmandu.</li>
                            <li>Three daily meals (breakfast, lunch, and dinner) with tea/coffee during the trek.</li>
                            <li>Best availabe twin-sharing lodge accommodation during the trek. This includes private bathrooms with hot showers in Phakding, Namche, and Lukla.</li>
                            <li>Snacks of seasonal fruits during the trek.</li>
                            <li>One highly experienced, helpful, and friendly guide. Porters (1 porter for every two trekkers) and their provisions for food, accommodation, salary, and equipment. This also includes accident insurance for all staff.</li>
                            <li>Round-trip airfare to/from Lukla, including transfers. During the peak season (March to May and Sept to November) Lukla flight will operate via Ramechhap Airport.</li>
                            <li>Complementary use of down jacket and sleeping bag while trekking.</li>
                            <li>Duffle bag to put your trekking gear. Your suitcase will stay in Kathmandu at the hotel while you are on the trek.</li>
                            <li>Trekking map and trip achievement certificate.</li>
                            <li>First aid medical kit with provisions for an oximeter to check oxygen levels and heart rate.</li>
                            <li>All required trekking permits.</li>
                            <li>Government taxes and office service charges.</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="line mt-30 mb-20"></div>
                    <div className="trip-detail tour_details_boxed depature tabs -tourSingle js-tabs" id="depature">
                    <div className=" fixed-depature-tab">
                        <div>
                        <h2>Fixed Depature</h2>
                        <div className="trip-note">
                            <h2>Note to solo travelers:</h2>
                            <p>If you are a solo traveler, please contact us via Call/WhatsApp/Viber at <Link href="">+977-987654321 </Link> or email <Link href="">info@mountaintravelnepal.com</Link> before booking the trip to confirm the departure date.</p>
                        </div>
                        </div>

                    </div>
                    <div className="">
                        <div className="tabs__controls row x-gap-30 y-gap-10 js-tabs-controls">

                        <div className="col-auto">
                            <button className="tabs__button text-16 md:text-20 fw-700 js-tabs-button is-tab-el-active" data-tab-target=".-tab-item-1"> Group Depature</button>
                        </div>

                        <div className="col-auto">
                            <button className="tabs__button text-16 md:text-20 fw-700 js-tabs-button " data-tab-target=".-tab-item-2"> Private Depature</button>
                        </div>



                        </div>


                        <div className="tabs__content pt-40 js-tabs-content">
                        <div className="tabs__pane -tab-item-1 is-tab-el-active">
                            <div className="tab-container">
                            <div className="tab-container-list">
                                <button id="tab1-btn" className="tab-btn active" onclick="openTab('tab1')"><span>Feb </span><span>2024</span> </button>
                                <button id="tab2-btn"  className="tab-btn" onclick="openTab('tab2')"><span>Mar </span> <span>2024</span></button>

                            </div>

                            <div id="tab1" className="tab-content active"><div className="depature">
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div><div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                            </div></div>
                            <div id="tab2" className="tab-content"><div className="depature">
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2024
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2024
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div><div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                            </div></div>
                            <div id="tab3" className="tab-content"><div className="depature">
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2026
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2026
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div><div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                            </div></div>
                            </div>
                        </div>

                        <div className="tabs__pane -tab-item-2">
                            <div className="tab-container">
                            <div className="tab-container-list">
                                <button id="tab1-btn" className="tab-btn active" onclick="openTab('tab1')"><span>Feb </span><span>2024</span> </button>
                                <button id="tab2-btn"  className="tab-btn" onclick="openTab('tab2')"><span>Mar </span> <span>2024</span></button>
                                <button id="tab3-btn" className="tab-btn" onclick="openTab('tab3')"><span>Apr</span> <span>2024</span></button>
                                <button id="tab4-btn" className="tab-btn " onclick="openTab('tab3')"><span>May</span> <span>2024</span></button>
                                <button id="tab5-btn"  className="tab-btn" onclick="openTab('tab5')"><span>Jun</span> <span>2024</span></button>
                                <button id="tab6-btn" className="tab-btn" onclick="openTab('tab6')"><span>Jul </span><span>2024</span></button>
                                <button id="tab7-btn" className="tab-btn " onclick="openTab('tab7')"><span>Aug </span><span>2024</span></button>
                                <button id="tab8-btn"  className="tab-btn" onclick="openTab('tab8')"><span>Sep </span><span>2024</span></button>
                                <button id="tab9-btn" className="tab-btn" onclick="openTab('tab9')"><span>Oct </span><span>2024</span></button>
                                <button id="tab10-btn" className="tab-btn " onclick="openTab('tab10')"><span>Nov </span><span>2024</span></button>
                                <button id="tab11-btn"  className="tab-btn" onclick="openTab('tab11')"><span>Dec </span><span>2024</span></button>
                                <button id="tab12-btn" className="tab-btn" onclick="openTab('tab12')"><span>Jan </span><span>2025</span></button>
                            </div>

                            <div id="tab1" className="tab-content active"><div className="depature">
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div><div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                            </div></div>
                            <div id="tab2" className="tab-content" ><div className="depature">
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2024
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2024
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div><div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                            </div></div>
                            <div id="tab3" className="tab-content" ><div className="depature">
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2026
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2026
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div><div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="depature-section">
                                <div className="date">
                                    <div className="time font-lg-bold">
                                    03 Nov 2025
                                    </div>
                                    <div className="place">
                                    Starts/Ends: Kathmandu
                                    </div>
                                </div>
                                <div className="price">
                                    <span>
                                    From</span> <span className="font-lg-bold">US$ 116</span>
                                </div>
                                <div className="book">
                                    <div className="submit-button">
                                    <Link className="button -sm -dark-1 col-12 border-1" href="booking-form.html">Booking Now </Link>
                                    </div>
                                </div>
                                </div>
                            </div></div>
                            </div>
                        </div>




                        </div>
                    </div>

                    <div className="submit-button text-center">
                        <Link className="button -sm -dark-1 col-lg-4 col-12 bg-accent-1 text-white mt-20 w-auto" href="customization.html">Customized This Trip </Link>
                    </div>
                    </div>
                    <div className="line mt-30 mb-20"></div>
                    <div className="trip-detail tour_details_boxed" id="map">
                    <h2>Official Annapurna Base Camp Trek Map</h2>
                    <Image src="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16} alt=""/>
                    </div>
                    <div className="line mt-30 mb-20"></div>
                    <div className="trip-detail tour_details_boxed" id="equipment">
                    <h2>Equipment list for ABC Tour Package</h2>
                    <p>Depending on the season, you need different gear (clothing) for ABC Trek, but here is a list we have compiled for you. We advise you to bring only the essentials. Your luggage weight limit is 9 kg.</p>

                    <p>We assign a porter for two persons. Hence, we recommend you find a fellow trekker and pack your things together in a duffle bag with a capacity of over sixty liters. You can store your excess luggage at Discovery World Trekking for free.</p>
                    <h3>Head</h3>
                    <ul>
                        <li>Sun hat or scarf</li>
                        <li>Winter hat or insulating hat or a wide-brimmed hat</li>
                        <li>Headlight with extra batteries</li>
                    </ul>
                    <h3>Face</h3>
                    <ul>
                        <li>Sun hat or scarf</li>
                        <li>Winter hat or insulating hat or a wide-brimmed hat</li>
                        <li>Headlight with extra batteries</li>
                    </ul>
                    <h3>Hands</h3>
                    <ul>
                        <li>Lightweight gloves</li>

                        <li>Heavyweight winter gloves</li>
                    </ul>
                    <h3>Body</h3>
                    <ul>
                        <li>Hiking shirts</li>

                        <li>Long-sleeved shirt made of synthetic fiber</li>

                        <li>Hooded rain jacket</li>

                        <li>Fleece jacket</li>

                        <li>Lightweight cotton pants</li>

                        <li>T-Shirt (bring lightweight wool)</li>

                        <li>Polypropylene underwear</li>

                        <li>Down jacket (available for rent in Kathmandu)</li>

                        <li>Sweater</li>

                        <li>Waterproof jacket and pants</li>
                    </ul>

                    <h3>Footwear</h3>
                    <ul>
                        <li>Hiking Boots</li>

                        <li>Thick wool socks (Take an extra pair of thick light socks)</li>
                    </ul>

                    <h3>Essential gear</h3>
                    <ul>
                        <li>Backpack or daypack (Size depends on whether you take porter or not)</li>

                        <li>Thermal bottle</li>

                        <li>Water purification</li>

                        <li>Trekking pole</li>

                        <li>Sleeping bag (-15 degree bag is best for high altitude trekking)</li>
                    </ul>

                    <h3>Toiletries</h3>
                    <ul>
                        <li>Medium size drying towel</li>

                        <li>Toothbrush</li>

                        <li>Toothpaste</li>
                        <li>Toilet paper</li>
                        <li>Deodorant/ floss</li>

                        <li>Biodegradable bar soap</li>

                        <li>Nail clippers</li>

                        <li>Small mirror</li>
                    </ul>
                    <h3>Personal accessories</h3>
                    <ul>
                        <li>Money</li>

                        <li>Watch</li>

                        <li>Cell phone</li>

                        <li>Camera</li>
                    </ul>

                    <h3>Extra items</h3>
                    <ul>
                        <li>First aid kiti
                        </li>
                        <li>Extra passport photos and photocopies of passport</li>

                        <li>Notebook and pen</li>

                        <li>Binoculars</li>
                    </ul>
                    </div>
                    <div className="line mt-30 mb-20"></div>
                    <div className="trip-detail tour_details_boxed" id="photo">
                    <h2>Photo</h2>
                    <div className="ttm-row welcome-section-2 clearfix ttm-bgcolor-grey ">
                        <div className="container gallery-container">
                        <div className="tz-gallery">
                            <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <Link href="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16}>
                                <Image src="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16} alt="Bridge"/>
                                </Link>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <Link href="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16}>
                                <Image src="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16} alt="Park"/>
                                </Link>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <Link href="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16}>
                                <Image src="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16} alt="Bridge"/>
                                </Link>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <Link href="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16}>
                                <Image src="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16} alt="Park"/>
                                </Link>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <Link href="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16}>
                                <Image src="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16} alt="Bridge"/>
                                </Link>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <Link href="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16}>
                                <Image src="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16} alt="Park"/>
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="line mt-30 mb-20"></div>
                    <div className="trip-detail tour_details_boxed" id="faq">
                    <h2>FAQ</h2>
                    <div className="accordion -simple row y-gap-20 mt-30 js-accordion">
                        <div className="col-12">
                        <div className="accordion__item px-20 py-15 border-1 rounded-12">
                            <div className="accordion__button d-flex items-center justify-between">
                            <div className="button text-16 text-dark-1">Can I get the refund?</div>
                            <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                                <i className="icon-plus"></i>
                                <i className="icon-minus"></i>
                            </div>
                            </div>
                            <div className="accordion__content">
                            <div className="pt-20">
                                <p>Phang Nga Bay Sea Cave Canoeing &amp; James Bond Island w/ Buffet Lunch by Big Boat cancellation policy: For a full refund, cancel at least 24 hours in advance of the start date of the experience. Discover and book Phang Nga Bay Sea Cave Canoeing &amp; James Bond Island w/ Buffet Lunch by Big Boat</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-12">
                        <div className="accordion__item px-20 py-15 border-1 rounded-12">
                            <div className="accordion__button d-flex items-center justify-between">
                            <div className="button text-16 text-dark-1">Can I change the travel date?</div>
                            <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                                <i className="icon-plus"></i>
                                <i className="icon-minus"></i>
                            </div>
                            </div>
                            <div className="accordion__content">
                            <div className="pt-20">
                                <p>Phang Nga Bay Sea Cave Canoeing &amp; James Bond Island w/ Buffet Lunch by Big Boat cancellation policy: For a full refund, cancel at least 24 hours in advance of the start date of the experience. Discover and book Phang Nga Bay Sea Cave Canoeing &amp; James Bond Island w/ Buffet Lunch by Big Boat</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-12">
                        <div className="accordion__item px-20 py-15 border-1 rounded-12">
                            <div className="accordion__button d-flex items-center justify-between">
                            <div className="button text-16 text-dark-1">When and where does the tour end?</div>
                            <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                                <i className="icon-plus"></i>
                                <i className="icon-minus"></i>
                            </div>
                            </div>
                            <div className="accordion__content">
                            <div className="pt-20">
                                <p>Phang Nga Bay Sea Cave Canoeing &amp; James Bond Island w/ Buffet Lunch by Big Boat cancellation policy: For a full refund, cancel at least 24 hours in advance of the start date of the experience. Discover and book Phang Nga Bay Sea Cave Canoeing &amp; James Bond Island w/ Buffet Lunch by Big Boat</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-12">
                        <div className="accordion__item px-20 py-15 border-1 rounded-12">
                            <div className="accordion__button d-flex items-center justify-between">
                            <div className="button text-16 text-dark-1">Do you arrange airport transfers?</div>
                            <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                                <i className="icon-plus"></i>
                                <i className="icon-minus"></i>
                            </div>
                            </div>
                            <div className="accordion__content">
                            <div className="pt-20">
                                <p>Phang Nga Bay Sea Cave Canoeing &amp; James Bond Island w/ Buffet Lunch by Big Boat cancellation policy: For a full refund, cancel at least 24 hours in advance of the start date of the experience. Discover and book Phang Nga Bay Sea Cave Canoeing &amp; James Bond Island w/ Buffet Lunch by Big Boat</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="line mt-30 mb-20"></div>
                    <div className="trip-detail tour_details_boxed" id="review">
                    <h2>Customer Reviews</h2>
                    <div className="row justify-center pt-60 md:pt-20 justify-center">
                        <div className="col-xl-12 col-md-12 col-sm-12">
                        <div>
                        <div className="row justify-between">
                            <div className="col-auto">
                            <div className="d-flex items-center">
                                <div className="size-40 rounded-full">
                                <Image src="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16} alt="image" className="Image-cover"/>
                                </div>

                                <div className="text-16 fw-500 ml-20">Ali Tufan</div>
                            </div>
                            </div>

                            <div className="col-auto">
                            <div className="text-14 text-light-2">April 2023</div>
                            </div>
                        </div>

                        <div className="d-flex items-center mt-15 svg-icon-star Imagee-star-color">
                            <div className="d-flex x-gap-5">

                            <Image src="Image/star.svg" width={16} height={16} />

                            <Image src="Image/star.svg" width={16} height={16} />

                            <Image src="Image/star.svg" width={16} height={16} />

                            <Image src="Image/star.svg" width={16} height={16} />

                            <Image src="Image/star.svg" width={16} height={16} />

                            </div>
                            <div className="text-16 fw-500 ml-10">Take this tour! Its fantastic!</div>
                        </div>

                        <p className="mt-10">Great for 4-5 hours to explore. Really a lot to see and tons of photo spots. Even have a passport for you to collect all the stamps as a souvenir. Must see for a Harry Potter fan.</p>




                        </div>

                        <div className="pt-30">xss
                        <div className="row justify-between">
                            <div className="col-auto">
                            <div className="d-flex items-center">
                                <div className="size-40 rounded-full">
                                <Image src="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16} alt="image" className="Image-cover"/>
                                </div>

                                <div className="text-16 fw-500 ml-20">Ali Tufan</div>
                            </div>
                            </div>

                            <div className="col-auto">
                            <div className="text-14 text-light-2">April 2023</div>
                            </div>
                        </div>

                        <div className="d-flex items-center mt-15 svg-icon-star Imagee-star-color">
                            <div className="d-flex x-gap-5">

                            <Image src="Image/star.svg" width={16} height={16} />

                            <Image src="Image/star.svg" width={16} height={16} />

                            <Image src="Image/star.svg" width={16} height={16} />

                            <Image src="Image/star.svg" width={16} height={16} />

                            <Image src="Image/star.svg" width={16} height={16} />

                            </div>
                            <div className="text-16 fw-500 ml-10">Take this tour! Its fantastic!</div>
                        </div>

                        <p className="mt-10">Great for 4-5 hours to explore. Really a lot to see and tons of photo spots. Even have a passport for you to collect all the stamps as a souvenir. Must see for a Harry Potter fan.</p>




                        </div>

                        <div className="pt-30">
                        <div className="row justify-between">
                            <div className="col-auto">
                            <div className="d-flex items-center">
                                <div className="size-40 rounded-full">
                                <Image src="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16} alt="image" className="Image-cover"/>
                                </div>

                                <div className="text-16 fw-500 ml-20">Ali Tufan</div>
                            </div>
                            </div>

                            <div className="col-auto">
                            <div className="text-14 text-light-2">April 2023</div>
                            </div>
                        </div>

                        <div className="d-flex items-center mt-15 svg-icon-star Imagee-star-color">
                            <div className="d-flex x-gap-5">

                            <Image src="Image/star.svg" width={16} height={16} />

                            <Image src="Image/star.svg" width={16} height={16} />

                            <Image src="Image/star.svg" width={16} height={16} />

                            <Image src="Image/star.svg" width={16} height={16} />

                            <Image src="Image/star.svg" width={16} height={16} />

                            </div>
                            <div className="text-16 fw-500 ml-10">Take this tour! Its fantastic!</div>
                        </div>

                        <p className="mt-10">Great for 4-5 hours to explore. Really a lot to see and tons of photo spots. Even have a passport for you to collect all the stamps as a souvenir. Must see for a Harry Potter fan.</p>




                        </div>
                    </div>
                    <div className=" col-lg-4 col-12 col-md-4">
                        <button className="button -sm -dark-1 w-100 bg-accent-1 text-white mt-20 w-auto">load More </button>
                    </div>

                    </div>
                </div>

                </div>

                <div className="col-lg-4">
                <div className="d-flex  js-pin-content">
                    <div className="tourSingleSidebar p-0">
                <div className="d-flex justify-content-between price-tag">
                
                    <div className="trip-price d-flex svg-icon-star image-theme-color">
                    <Image src="Image/tag.svg" width={16} height={16} alt=""/>
                    <div className="price-per">
                    <span className="content-title">Price per person</span>
                    <span className="normal"><del>Us$699</del> US$599 </span>
                    </div>
                    </div>
                </div>
                <div className="group-discount-list" id="discountTable">
                    <h2>Group Discount Available</h2>
                    <p>**Discounts apply to groups you bring, not those arranged by us.</p>
                    <table className="discount-card__table">
                    <thead className="discount-card__header">
                        <tr>
                        <th className="discount-card__header-title">No. of Persons</th>
                        <th className="discount-card__header-title">Price per Person</th>
                        </tr>
                    </thead>
                    <tbody className="sidebar-block__card-item discount-card__list">
                        <tr>
                        <td className="person">2 Pax</td>
                        <td className="discount-price">US$ 720</td>
                        </tr>
                        <tr>
                        <td className="person">3 Pax</td>
                        <td className="discount-price">US$ 690</td>
                        </tr>
                        <tr>
                        <td className="person">4 - 6 Pax</td>
                        <td className="discount-price">US$ 650</td>
                        </tr>
                        <tr>
                        <td className="person">7 - 12 Pax</td>
                        <td className="discount-price">US$ 620</td>
                        </tr>
                        <tr>
                        <td className="person">13 - 18 Pax</td>
                        <td className="discount-price">US$ 590</td>
                        </tr>
                        <tr>
                        <td className="person">19 - 24 Pax</td>
                        <td className="discount-price">US$ 560</td>
                        </tr>
                    </tbody>
                    </table>
                    
                </div>
                <div className="button-book button-book-padding regular-svg"/>
                    <Link className="button -md -dark-1 col-12 bg-accent-1 text-white mt-20 image-inver-color" href="#depature">
                    Book Now
                    <Image src="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16}/>
                    </Link>
                    <button className="button -md -dark-1 col-12 mt-20 border-1" id="modalBtn">
                    Make an Enquiry
                    <Image src="https://images.bookmundi.com/tour/750x420/everest-base-camp-kalapathar-trek-942-1582439967.jpg" width={16} height={16}/>
                    </button>

                </div>
                <div className="points">
                    <ul>
                    <li>Team of highly experienced Experts</li>
                <li>No Booking or Credit Card Fee</li>
                <li>Hassle-Free Booking</li>
                <li>Your Happiness Guaranteed</li>
                <li>Best Price Guarantee</li>
                    </ul>
                </div>
                </div>

                </div>
                </div>
                </div>
            </section>
        </div>
    );
}
