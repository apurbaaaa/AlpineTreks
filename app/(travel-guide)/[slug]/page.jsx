"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import DOMPurify from "dompurify";
import NextBreadcrumb from "@/components/common/BreadCrumbs";
import TravelGuideTable from "@/components/TravelGuideComponents/TravelGuide";
import Loading from "@/components/homes/others/Loading";
import Head from "next/head";

export default function Page() {
    const slugParam  = useParams();
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [content, setContent] = useState("");
    const [pages, setPages] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [seoTitle, setSeoTitle] = useState("");
    const [seoDesc, setSeoDesc] = useState("");
    const [data, setData] = useState(null);

    const router = useRouter()

    useEffect(() => {   
        const fetchData = async () => {
            try {
                const slug = slugParam.slug.toString();
                console.log(slug)
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${slug}`);
                console.log(response?.data)
                if(response?.data.length == 0){
                    router.push('/404')
                }
                
                setTitle(response?.data?.title);
                setSlug(response?.data.slug);

                const sanitizedContent = DOMPurify.sanitize(response?.data?.content);
                setContent(sanitizedContent);
                setPages(response?.data?.pages);
                setSeoDesc(response?.data?.seo_description);
                setSeoTitle(response?.data?.seo_title);
                setData(response?.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        if (slugParam) {
            fetchData();
        }
    }, [slugParam]);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Head>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDesc} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

                <div data-anim="fade" className="container is-in-view">
                    <div className="row justify-between py-30 mt-80">
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
                    <h1 className="text-30">{title}</h1>
                </div>

                <section className="layout-pt-md layout-pb-md js-pin-container normal-page tabs -terms js-tabs">
                    <div className="container">
                        <div className="row y-gap-30 justify-between">
                            <TravelGuideTable data={data} />
                            <div className="col-lg-9">
                                <div className="inner-text">
                                    <p dangerouslySetInnerHTML={{ __html: content }}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}
