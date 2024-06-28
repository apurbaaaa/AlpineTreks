"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
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
  const [data, setData] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/region/${slug}`
        );
        setPosts(response?.data?.packages);
        setTitle(response?.data?.title);
        const unpurifiedDesc = response?.data?.description;
        const sanitizedDesc = DOMPurify.sanitize(unpurifiedDesc);
        setDesc(sanitizedDesc);
        setData(response?.data);
      } catch (error) {
        setError(error);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  if (error) return <div>Error loading data</div>;

  const ParagraphLimit = 2;

  const splitIntoParagraphs = (htmlString) => {
    const div = document.createElement("div");
    div.innerHTML = htmlString.trim();
    return Array.from(div.querySelectorAll("p")).map((p) => p.outerHTML);
  };

  const truncateParagraphs = (paragraphs, limit) => {
    return paragraphs.slice(0, limit).join("");
  };

  const paragraphs = splitIntoParagraphs(desc);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Head>
        <title>{data.seo_title}</title>
        <meta name="description" content={data.seo_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
