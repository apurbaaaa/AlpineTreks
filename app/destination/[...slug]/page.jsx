"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios"; 
import Image from "next/image"; 
import DOMPurify from "dompurify";
import Head from "next/head";
import NextBreadcrumb from "@/components/common/BreadCrumbs";

export default function Slug() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [seoTitle, setSeoTile] = useState("");
  const [seoDesc, setSeoDesc] = useState("")
  const [isExpanded, setIsExpanded] = useState(false); // State to track full description visibility

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/destination/${slug[0]}`
        );

        setPosts(response?.data?.posts);
        setTitle(response?.data?.title);
        const unpurified_desc = response?.data?.description;
        let updatedHtmlString = DOMPurify.sanitize(unpurified_desc);
        setDesc(updatedHtmlString);

        setSeoDesc(response?.data?.seo_description);
        setSeoTile(response?.data?.seo_titile);

      } catch (error) {
        setError(error);
      }
    };
    if (slug && slug.length > 0) {

      fetchData();
    }
  }, [slug]);
  const ParagraphLimit = 3;

  const slugType = (slug) => {
    return slug === "nepal" ? "activity" : "package";
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  if (error) return <div>Error loading data</div>;

  // Function to split the HTML content into paragraphs
  const splitIntoParagraphs = (htmlString) => {
    const div = document.createElement("div");
    div.innerHTML = htmlString.trim();
    return Array.from(div.querySelectorAll("p")).map((p) => p.outerHTML);
  };

  // Function to truncate paragraphs after a certain limit
  const truncateParagraphs = (paragraphs, limit) => {
    return paragraphs.slice(0, limit).join("");
  };

  // Split HTML content into paragraphs
  const paragraphs = splitIntoParagraphs(desc);

  return (
    
    <div>
      <Head>
      <title>{seoTitle}</title>
        <meta
          name="description"
          content= {seoDesc}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   

      <section data-aos="fade-up" className="pageHeader -type-3">
        <div className="container">
          <div className="row justify-between">
            <div className="col-auto">
              <NextBreadcrumb
                homeElement={<span>Home</span>}
                containerClasses="text-14 breadcrumb-text"
                listClasses=""
                activeClasses="active"
                capitalizeLinks={true}
              />
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
                  // Render all paragraphs when expanded
                  <div dangerouslySetInnerHTML={{ __html: desc }}></div>
                )}
                {/* Show "Read More" link if more than two paragraphs */}
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
                <Link href={`/${slugType(slug[0])}/${post.slug}`}>
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

                {/* static pagination commented"*/}

                {/* <div className="pagination__count">
                  <Link href="/" className="is-active">1</Link>
                  <Link href="/">2</Link>
                  <Link href="/">3</Link>
                  <Link href="/">4</Link>
                  <div>...</div>
                  <Link href="/">20</Link>
                </div> */}
                {/* <button className="pagination__button button -accent-1 ml-15 -next">
                  <i className="icon-arrow-right text-15"></i>
                </button> */}
              </div>
            </div>
        
      </section>
    </div>
  );
}
