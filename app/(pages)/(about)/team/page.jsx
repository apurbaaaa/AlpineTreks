import React from "react";
import NextBreadcrumb from "@/components/common/BreadCrumbs";

export async function generateMetadata() {
    return {
      title: "Our Team", 
      description: "Description for our team to be fetched from API, It is not there yet"
    }
  }

export default function page({data}){

    return(
        <div>
            <section className="mt-header pt-30">
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
                    <h1 className="text-30">Team Page</h1>
                    </div>
            </section>

            {/* The code is given below: */}


            {/* <section data-anim="fade" className="mt-header pt-30">
                <div className="container">
                    <div className="breadcrumbs mb-30 md:mb-15">
                    
             <section className="mt-header pt-30">
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
          <h1 className="text-30">Why Us</h1>
        </div>
      </section>
                    </div>

                    <h1 className="text-30">Our Team</h1>
                </div>
            </section>

            <section className="">
            <div data-anim-wrap className="container">
            

                <div className="row y-gap-30 pt-40 sm:pt-20">
                {data.map((elm, i) => (
                    <div data-aos="fade-up"
                    data-aos-delay="400"  className="col-lg-3 col-md-4 col-sm-6">
                        <div className=" team-page">
                        <div className="ratio ratio-23:26">
                        <Image src={elm.image} alt="image" width={421}
                                height={301} className="Image-ratio bg-light-1 rounded-12"/>
                        </div>
    
                        <h3 className="text-16 fw-500 mt-20">{elm.name}</h3>
                        <p className="text-14 lh-16">{elm.post}</p>
                    </div>
                    </div>
                ))}

                

                </div>
            </div>
            </section> */}

        </div>
    )
        
    
}