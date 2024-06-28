"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios"; 
import Image from "next/image"; 
import DOMPurify from "dompurify";
import NextBreadcrumb from "@/components/common/BreadCrumbs";

export default function Slug() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/region/${slug}`
        );

        setPosts(response?.data?.packages);
        setTitle(response?.data?.title); 
        const unpurified_desc = response?.data?.description;
        let updatedHtmlString = DOMPurify.sanitize(unpurified_desc);
        setDesc(updatedHtmlString);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };
    if (slug) {
      fetchData();
    }
  }, [slug]); 

  useEffect(() => {
    // Function to split the HTML desc into paragraphs
    const splitIntoParagraphs = (htmlString) => {
      const div = document.createElement("div");
      div.innerHTML = htmlString.trim();
      return Array.from(div.querySelectorAll("p")).map((p) => p.outerHTML);
    };

    if (desc) {
      const paragraphsArray = splitIntoParagraphs(desc);
      setParagraphs(paragraphsArray);
    }
  }, [desc]);

  const ParagraphLimit = 2;

  const slugType = (slug) => {
    return slug === "nepal" ? "activity" : "package";
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to truncate paragraphs after a certain limit
  const truncateParagraphs = (paragraphs, limit) => {
    return paragraphs.slice(0, limit).join("");
  };

  if (error) return <div>Error loading data</div>; 

  return (
    <div>
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
                <NextBreadcrumb
                  homeElement={<span>Home</span>}
                  containerClasses="text-14 breadcrumb-text"
                  listClasses=""
                  activeClasses="active"
                  capitalizeLinks={true}
                />
              </div>
            </div>
          </div>
          <div className="row pt-30">
            <div className="col-auto text-collapse">
              <h1 className="pageHeader__title">{title}</h1>
              <div>
                {!isExpanded ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: truncateParagraphs(paragraphs, ParagraphLimit),
                    }}
                  ></div>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: desc }}></div>
                )}
                {paragraphs.length > ParagraphLimit && (
                  <Link href="#" onClick={toggleExpand}>
                    {isExpanded ? "Read Less" : "Read More"}
                  </Link>
                )}
              </div>
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
                  <Link href={`/package/${post.slug}`}>
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
      </section>
    </div>
  );
}
