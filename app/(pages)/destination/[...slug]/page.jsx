"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios"; // Ensure axios is imported
import Header4 from "@/components/layout/header/Header4";
import FooterFour from "@/components/layout/footers/FooterFour";
import Image from "next/image"; // Ensure next/image is imported for Image component

export default function Slug({params}) {
    console.log(params,'dd');
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://mountaintrekkingnepal.com/api/destination/${slug}`
        );
        console.log(response);
        setPosts(response?.data?.posts);
        setTitle(response?.data?.title); 
        setDesc(response?.data?.description);
        console.log(slug);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };
    if (slug) {
      fetchData();
    }
  }, [slug]); 

  if (error) return <div>Error loading data</div>; 

  return (
    <div>
      <Header4 />
      <div className="menu js-menu">
        <div className="menu__overlay js-menu-button"></div>
        <div className="menu__container">
          <div className="menu__header">
            <h4>Main Menu</h4>
            <button className="js-menu-button">
              <i className="icon-cross text-10"></i>
            </button>
          </div>
          <div className="menu__content">
            <ul className="menuNav js-navList">
              <li className="menuNav__item">
                <Link href="/"> 
                  Home
                </Link>
              </li>
              <li className="menuNav__item -has-submenu js-has-submenu">
                <Link href="/nepal">
                  Nepal
                  <i className="icon-chevron-right"></i>
                </Link>
                <ul className="submenu">
                  <li className="submenu__item js-nav-list-back">
                    <Link href="/">Back</Link> 
                  </li>
                  <li className="submenu__item">
                    <Link href="/tour-list-1.html">Nepal Trekking</Link>
                  </li>
                </ul>
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
                <Link href="#">
                  <i className="icon-facebook"></i>
                </Link>
              </div>
              <div>
                <Link href="#">
                  <i className="icon-twitter"></i>
                </Link>
              </div>
              <div>
                <Link href="#">
                  <i className="icon-instagram"></i>
                </Link>
              </div>
              <div>
                <Link href="#">
                  <i className="icon-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>    

      <section data-aos="fade-up" className="pageHeader -type-3">
        <div className="container">
          <div className="row justify-between">
            <div className="col-auto">
              <div className="text-14 breadcrumb-text">
                <Link href="/">Home</Link>
                <Image src="/Image/chevron-right.svg" alt="chevron" width={12} height={12} />
                <Link href="/nepal">Nepal</Link>
                <Image src="/Image/chevron-right.svg" alt="chevron" width={12} height={12} />
                <Link href="/trekking">Trekking in Nepal</Link>
                <Image src="/Image/chevron-right.svg" alt="chevron" width={12} height={12} />
                <Link href="/everest-base-camp-trek">Everest Base Camp Trek</Link>
              </div>
            </div>
          </div>
          <div className="row pt-30">
            <div className="col-auto text-collapse">
              <h1 className="pageHeader__title">{title}</h1>
              <p>{desc}</p>
              <Link href="#" id="readMore">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md bg-light-1">
        
    <div className="container">
        <div className="row y-gap-30">
            {posts.map((post, index) => (
            <div className="col-lg-4 col-md-6 d-flex" key={index}>
                <div className="w-100">
                <Link href={`/destination/${slug}/${post.slug}`}>
                    <div className="featureCard -type-8 -hover-image-scale">
                    <div className="featureCard__image -hover-image-scale__image">
                        <Image src={post.image} alt="feature" width={750} height={563} />
                    </div>
                    <div className="featureCard__content">
                        <h3 className="text-18 fw-500">{post.title}</h3>
                    </div>
                    </div>
                </Link>
                </div>
            </div>
            ))}
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
        
      </section>
      <FooterFour />
    </div>
  );
}

