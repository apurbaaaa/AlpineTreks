
import React from "react";
import Link from "next/link";
import Image from "next/image";
import NextBreadcrumb from "@/components/common/BreadCrumbs";
import fetchData from "@/utils/fetchData";

export async function generateMetadata() {
    return {
      title: "Blog", 
      description: "Decription data from api"
    }
  }

export default async function page(){
    const response = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog`);

    return(
        <div>
            <section data-aos="fade" className="mt-header pt-30">
                <div className="container">
                    <div className="breadcrumbs mb-30 md:mb-15">
                    <NextBreadcrumb
                        homeElement={<span>Home</span>}
                        containerClasses="text-14 breadcrumb-text"
                        listClasses=""
                        activeClasses="active"
                        capitalizeLinks={true}
                    />
                    
                    </div>

                    <h1 className="text-30">{response.title}</h1>
                </div>
            </section>
            <section className="layout-pt-md">
            <div className="container">
                <div className="row y-gap-10">
                    {response.posts.map((elm, i) => (
                        <div key={i} className="col-lg-4 col-md-6 d-flex">
                        <Link href={`/blog/${elm.slug}`} className="blogCard -type-1 d-block w-100">
                            <div className="blogCard__image">
                            <Image src={elm.image} alt={elm.title} className="Image-ratio rounded-12" width={600} height={450}/>
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

                <div className="d-flex justify-center flex-column mt-60">


                {/* Pagination static v */}    

                {/* <div className="pagination justify-center">
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
                </div> */}

                </div>
            </div>
            </section>
        </div>
    );

}