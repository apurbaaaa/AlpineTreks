"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Header4 from "@/components/layout/header/Header4";
import FooterFour from "@/components/layout/footers/FooterFour";

    
export default function slug(){
    const { slug } = useParams();
    


    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("")

    useEffect (()=> {
        const fetchData = async () => {
            try{
                const response = await axios.get(`https://mountaintrekkingnepal.com/api/destination/${slug}`);
                console.log(response)
                setPosts(response?.data?.posts)
                setTitle(response?.data?.title)
                setDesc(response?.data?.description)
                console.log(slug)

            }   
            catch(error){
                setError(error);
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return(
        <div>
            <Header4 />
            <div className="menu js-menu">
                <div className="menu__overlay js-menu-button"></div>


                <div className="menu__container">
                    <div className="menu__header">
                    <h4>Main Menu</h4>

                    <button className="js-menu-button"><i className="icon-cross text-10"></i></button>
                    </div>

                    <div className="menu__content">
                    <ul className="menuNav js-navList">
                        <li className="menuNav__item">
                        <Link>
                            Home
                        </Link>
                        </li>

                        <li className="menuNav__item -has-submenu js-has-submenu">
                        <Link>
                            Nepal
                            <i className="icon-chevron-right"></i>
                        </Link>
                        

                        <ul className="submenu">
                            <li className="submenu__item js-nav-list-back">
                            <Link>Back</Link>
                            </li>


                            <li className="submenu__item">
                            <Link href="tour-list-1.html">Nepal Trekking </Link>
                            </li>


                        </ul>
                        </li>

                        <li className="menuNav__item -has-submenu js-has-submenu">
                        <Link>
                            Tibet
                            <i className="icon-chevron-right"></i>
                        </Link>

                        <ul className="submenu">
                            <li className="submenu__item js-nav-list-back">
                            <Link>Back</Link>
                            </li>


                            <li className="submenu__item">
                            <Link href="db-main.html">Tibet Tours</Link>
                            </li>

                            <li className="submenu__item">
                            <Link href="db-booking.html">Tibet Trekking</Link>
                            </li>

                            <li className="submenu__item">
                            <Link href="db-listing.html">Mount Kailash Tour</Link>
                            </li>

                            <li className="submenu__item">
                            <Link href="db-add-tour.html">Tibet Spiritual Tours</Link>
                            </li>



                        </ul>
                        </li>

                        <li className="menuNav__item -has-submenu js-has-submenu">
                        <Link>
                            Bhutan
                            <i className="icon-chevron-right"></i>
                        </Link>

                        <ul className="submenu">
                            <li className="submenu__item js-nav-list-back">
                            <Link>Back</Link>
                            </li>


                            <li className="submenu__item">
                            <Link href="blog-list-1.html">Bhutan Tour</Link>
                            </li>

                            <li className="submenu__item">
                            <Link href="blog-list-2.html">Bhutan Trek</Link>
                            </li>

                            <li className="submenu__item">
                            <Link href="blog-list-3.html">Bhutan Spiritual Tours</Link>
                            </li>

                        </ul>
                        </li>

                        <li className="menuNav__item -has-submenu js-has-submenu">
                        <Link>
                            Spiritual Tours
                            <i className="icon-chevron-right"></i>
                        </Link>

                        <ul className="submenu">
                            <li className="submenu__item js-nav-list-back">
                            <Link>Back</Link>
                            </li>


                            <li className="submenu__item">
                            <Link href="destinations.html">Nepal</Link>
                            </li>

                            <li className="submenu__item">
                            <Link href="about.html">Bhutan</Link>
                            </li>

                            <li className="submenu__item">
                            <Link href="contact.html">Tibet</Link>
                            </li>



                        </ul>
                        </li>
                        <li className="menuNav__item">
                        <Link href="contact.html">Blog</Link>
                        </li>
                        <li className="menuNav__item">
                        <Link href="contact.html">Contact</Link>
                        </li>
                    </ul>
                    </div>


                    <div className="menu__footer">
                    <i className="icon-headphone text-50"></i>

                    <div className="text-20 lh-12 fw-500 mt-20">
                        <div>Speak to our expert at</div>
                        <div className="text-accent-1">1-800-453-6744</div>
                    </div>

                    <div className="d-flex items-center x-gap-10 pt-30">

                        <div>
                        <Link className="d-block">
                            <i className="icon-facebook"></i>
                        </Link>
                        </div>

                        <div>
                        <Link className="d-block">
                            <i className="icon-twitter"></i>
                        </Link>
                        </div>

                        <div>
                        <Link className="d-block">
                            <i className="icon-instagram"></i>
                        </Link>
                        </div>

                        <div>
                        <Link className="d-block">
                            <i className="icon-linkedin"></i>
                        </Link>
                        </div>

                    </div>
                    </div>
                </div>
            </div>

            <section id="details">
                <div className="over-view-menu">
                    <div className="container">


                    <div className="row">
                        <div className="header-menu">
                        <div className="bottom-menu regular-svg"/>
                            <ul>
                            <li>
                                <Link href="#overview" className="">
                                <Image src="Image/square-list.svg" alt=""/>
                                <h4>Overview</h4>
                                </Link>
                            </li>
                            <li>
                                <Link href="#itinery" className="">
                                <Image src="Image/map-location-dot.svg" alt=""/>
                                <h4>Itinerary</h4>
                                </Link>
                            </li>
                            <li>
                                <Link href="#cost" className="">
                                <Image src="Image/tag.svg"/>
                                <h4>Includes/Excludes</h4>
                                </Link>
                            </li>
                            <li>
                                <Link href="#depature" className="">
                                <Image src="Image/calendar-day.svg" alt=""/>
                                <h4>Depature</h4>
                                </Link>
                            </li>
                            <li>
                                <Link href="#map" className="">
                                <Image src="Image/map.svg" alt=""/>
                                <h4>Map</h4>
                                </Link>
                            </li>
                            <li>
                                <Link href="#equipment" className="">
                                <Image src="Image/backpack.svg" alt=""/>
                                <h4>Equipments</h4>
                                </Link>
                            </li>
                            <li>
                                <Link href="#photo" className="">
                                <Image src="Image/gallery-thumbnails.svg" alt=""/>
                                <h4>Photo</h4>
                                </Link>
                            </li>
                            <li>
                                <Link href="#faq" className="">
                                <Image src="Image/question.svg" alt=""/>
                                <h4>FAQ</h4>
                                </Link>
                            </li>
                            <li>
                                <Link href="#review" className="">
                                <Image src="Image/comment.svg" alt=""/>
                                <h4>Review</h4>
                                </Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </section>


            <section data-anim="fade" class="pageHeader -type-3">
            
                <div class="container">
                    <div class="row justify-between">
                    <div class="col-auto">
                        <div class="text-14 breadcrumb-text"><Link href="  ">Home</Link> <Image src="Image/chevron-right.svg"/>
                            <Link href="  ">Nepal </Link><Image src="Image/chevron-right.svg"/>
                            <Link href="  ">Trekking in nepal </Link><Image src="Image/chevron-right.svg"/>
                            <Link href="">Everest base camp trek</Link>
                        </div>
                    </div>
                    </div>


                    <div class="row pt-30">
                        <div class="col-auto text-collapse">
                    <h1 class="pageHeader__title">{title}</h1>
                    <p>
                        {desc}
                    </p>
                   
                    <Link href="#" id="readMore">Read More</Link>
                    </div>
                        </div>
                    </div>
            </section>

            <section className="layout-pt-md bg-light-1">
            {posts.map((elm, i) => (
                <div className="container">
                <div className="row y-gap-30">
                    <div className="col-lg-4 col-md-6 d-flex">
                    <div className="w-100">
                        <Link href="/" className="featureCard -type-8 -hover-image-scale">
                        <div className="featureCard__image -hover-image-scale__image">
                            <Image src="/Image/feature-trip.jpg" alt="image" />
                        </div>
                        <div className="featureCard__content">
                            <h3 className="text-18 fw-500">Nepal Trek</h3>
                        </div>
                        </Link>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex">
                    <div className="w-100">
                        <Link href="/trek.html" className="featureCard -type-8 -hover-image-scale">
                        <div className="featureCard__image -hover-image-scale__image">
                            <Image src="/Image/feature-trip.jpg" alt="image" />
                        </div>
                        <div className="featureCard__content">
                            <h3 className="text-18 fw-500">Nepal tour</h3>
                        </div>
                        </Link>
                    </div>
                    </div>
                </div>

                <div className="d-flex justify-center flex-column mt-60">
                    <div className="pagination justify-center">
                    <button className="pagination__button button -accent-1 mr-15 -prev">
                        <i className="icon-arrow-left text-15"></i>
                    </button>
                    <div className="pagination__count">
                        <Link href="#">1</Link>
                        <Link href="#" className="is-active">2</Link>
                        <Link href="#">3</Link>
                        <Link href="#">4</Link>
                        <Link href="#">5</Link>
                        <div>...</div>
                        <Link href="#">20</Link>
                    </div>
                    <button className="pagination__button button -accent-1 ml-15 -next">
                        <i className="icon-arrow-right text-15"></i>
                    </button>
                    </div>
                </div>
                </div>         
            ))}
                
            </section>


            <FooterFour />
        </div>
    )
}