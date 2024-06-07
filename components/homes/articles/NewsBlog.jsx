"use client"
import Link from "next/link"

export default function NewsBlog(){

    return(
        <section className="layout-pt-lg  bg-light-1">
            <div data-anim-wrap className="container">
                <div data-aos = "fade-up" className="row justify-between items-end y-gap-10"> {/*<div data-anim-child="slide-up" className="row justify-between items-end y-gap-10"> */}
                <div className="col-auto">
                    <h2 className="text-30 md:text-24">News & Blog</h2>
                </div>

                <div className="col-auto">
                    <Link
                    href={"/trek-list-1"}
                    data-aos="fade-up"
                    data-aos-delay=""
                    className="buttonArrow d-flex items-center "
                    >
                    <span>See all</span>
                    <i className="icon-arrow-top-right text-16 ml-10"></i>
                    </Link>
                </div>
                </div>

                <div data-anim-child="delay-2" data-aos = "fade-up" className="row y-gap-30 pt-40 sm:pt-20"> {/* <div data-anim-child="slide-up delay-2" className="row y-gap-30 pt-40 sm:pt-20"> */}

                <div className="col-lg-4 col-md-6">
                    <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image ratio ratio-41:30">
                        <img src="img/tibet.jpg" alt="image" className="img-ratio rounded-12"/>

                        <div className="blogCard__badge">News</div>
                    </div>

                    <div className="blogCard__content mt-30">
                        <div className="blogCard__info text-14">
                        <div className="lh-13">April 06 2023</div>
                        
                        </div>

                        <h3 className="blogCard__title text-18 fw-500 mt-10">Kenya vs Tanzania Safari: The Better African Safari Experience</h3>
                    </div>
                    </a>
                </div>

                <div className="col-lg-4 col-md-6">
                    <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image ratio ratio-41:30">
                        <img src="img/feature-trip-bhutan.jpg" alt="image" className="img-ratio rounded-12"/>

                        <div className="blogCard__badge">Blog</div>
                    </div>

                    <div className="blogCard__content mt-30">
                        <div className="blogCard__info text-14">
                        <div className="lh-13">April 06 2023</div>
                        
                        </div>

                        <h3 className="blogCard__title text-18 fw-500 mt-10">Kenya vs Tanzania Safari: The Better African Safari Experience</h3>
                    </div>
                    </a>
                </div>

                <div className="col-lg-4 col-md-6">
                    <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image ratio ratio-41:30">
                        <img src="img/nepal.jpg" alt="image" className="img-ratio rounded-12"/>

                        <div className="blogCard__badge">News</div>
                    </div>

                    <div className="blogCard__content mt-30">
                        <div className="blogCard__info text-14">
                        <div className="lh-13">April 06 2023</div>
                        
                        </div>

                        <h3 className="blogCard__title text-18 fw-500 mt-10">Kenya vs Tanzania Safari: The Better African Safari Experience</h3>
                    </div>
                    </a>
                </div>

                </div>
            </div>
        </section>
    )
}