"use client"
import React from "react";
import {useState, useEffect} from "react";
import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import Image from "next/image";
import Link from "next/link";
import Header4 from "@/components/layout/header/Header4";
import FooterFour from "@/components/layout/footers/FooterFour";

const instance = Axios.create(); 
const axios = setupCache(instance);

export default function page(){

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect( () =>{
        const fetchData = async () => {
            try{
                const response = await axios.get({/* URL */})
                // setData(response?.data?.{/* whatever in API*/})
            }
            catch(error){
                setError(error);
                console.log(error);
            }
        }
        fetchData();
    })


    return(
        <div>
            <Header4 />
        <section data-anim="fade" className="mt-header pt-30">
        <div className="container">
          <div className="breadcrumbs mb-30 md:mb-15">
            <span className="breadcrumbs__item">
              <Link href="/">Home</Link>
            </span>
            <span></span>
            <span className="breadcrumbs__item">
              <Link href="/">Blogs</Link>
            </span>
          
          </div>
  
          <h1 className="text-30">Blogs</h1>
        </div>
      </section>
      <section className="layout-pt-md">
        <div className="container">
          <div className="row y-gap-30">
            {data.map((elm, i) => (
                <div className="col-lg-4 col-md-6 d-flex">
                <Link href={`/blog/${elm.slug}`} key = {elm.slug} className="blogCard -type-1">
                <div className="blogCard__image ratio ratio-41:30">
                    <Image src="Image/blogCards/1/1.png" alt="image" className="Image-ratio rounded-12"/>

                    <div className="blogCard__badge">{elm.badge}</div>
                </div>

                <div className="blogCard__content mt-30">
                    <div className="blogCard__info text-14">
                    <div className="lh-13">{elm.date}</div>
                    
                    </div>

                    <h3 className="blogCard__title text-18 fw-500 mt-10">{elm.title}</h3>
                </div>
                </Link>
            </div>    
            ))
            }
    
                  
            </div>
        
          <div className="d-flex justify-center flex-column mt-60">
  
            <div className="pagination justify-center">
              <button className="pagination__button button -accent-1 mr-15 -prev">
                <i className="icon-arrow-left text-15"></i>
              </button>
  
              <div className="pagination__count">
                <a href="#">1</a>
                <a href="#" className="is-active">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <div>...</div>
                <a href="#">20</a>
              </div>
  
              <button className="pagination__button button -accent-1 ml-15 -next">
                <i className="icon-arrow-right text-15"></i>
              </button>
            </div>
  
          </div>
        </div>
      </section>
      <FooterFour />
        </div>
    )
}