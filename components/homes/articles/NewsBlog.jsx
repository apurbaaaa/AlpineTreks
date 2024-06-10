"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import Image from "next/image";
import FooterFour from "@/components/layout/footers/FooterFour";

const instance = Axios.create(); 
const axios = setupCache(instance);


export default function NewsBlog(){
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);


    useEffect(()=> {
        const fetchData = async () => {
            try{
                const response = await axios.get("https://mountaintrekkingnepal.com/api/home")
                setBlogs(response?.data?.blogs)

            }
            catch(error){
                setError(error);
                console.log(error);
            }
        }   
        fetchData()
    },[])

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
                {blogs.map((elm, i) => (
                <div key = {i} className="col-lg-4 col-md-6">
                    
                        <Link href = {`/blog/${elm.slug}`} key = {elm.slug} className="blogCard -type-1">
                        <div className="blogCard__image ratio ratio-41:30"> 
                            <Image src={elm.image} alt={elm.image} className="img-ratio rounded-12" width={616} height={451}/>
    
                            <div className="blogCard__badge">Blog</div> {/* Data not in API, "Blog" used as default*/}
                        </div>
    
                        <div className="blogCard__content mt-30">       
                            <div className="blogCard__info text-14">
                            <div className="lh-13">{elm.created_at}</div>
                            
                            </div>
    
                            <h3 className="blogCard__title text-18 fw-500 mt-10">{elm.title}</h3>
                        </div>
                        </Link>

                    
                    
                </div>
                ))}
                </div>
            </div>
            <FooterFour />
        </section>
    )
}