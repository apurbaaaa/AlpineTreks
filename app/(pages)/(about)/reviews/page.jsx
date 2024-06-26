import React from "react";
import Image from "next/image";
import NextBreadcrumb from "@/components/common/BreadCrumbs";

export async function generateMetadata() {
  return {
    title: "Reviews",
    description: "Reviews Description"
  };
}

//demo API data
export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      title: "Great Work",
      content: "“I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance.”",
      author: "Courtney Henry",
      role: "Web Designer",
      imageUrl: "https://mountaintrekkingnepal.com/images/noimage.svg"
    },
    {
      id: 2,
      title: "Outstanding Support",
      content: "“The support team was incredibly helpful and responsive. They went above and beyond to ensure our satisfaction.”",
      author: "Alex Johnson",
      role: "Software Engineer",
      imageUrl: "https://mountaintrekkingnepal.com/images/noimage.svg"
    },
    {
      id: 3,
      title: "Highly Recommend",
      content: "“This service exceeded my expectations. The team is professional, knowledgeable, and extremely efficient.”",
      author: "Sarah Williams",
      role: "Product Manager",
      imageUrl: "https://mountaintrekkingnepal.com/images/noimage.svg"
    }
  ];

  return (
    <div>
      <section data-anim="fade" className="mt-header pt-30">
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
          <h1 className="text-30">Our Clients Say's</h1>
        </div>
      </section>

      <section className="layout-pt-sm layout-pb-md">
        <div data-anim-wrap className="container">
          <div data-aos="fade-up" data-aos-delay="400" className="row y-gap-30 pt-40 md:pt-30">
            {reviews.map(review => (
              <div key={review.id} className="col-lg-4 col-md-6 d-flex">
                <div className="bg-white py-30 px-30 rounded-12 border-light">
                  <h4 className="text-18 fw-500 text-accent-1">{review.title}</h4>
                  <div className="fw-500 mt-15 testimonial-content">{review.content}</div>
                  <div className="line mt-20 mb-20"></div>
                  <div className="d-flex items-center">
                    <Image src={review.imageUrl} alt="image" width={60} height={60} className="size-60 object-cover rounded-full" />
                    <div className="ml-20">
                      <div className="fw-500 lh-15">{review.author}</div>
                      <div className="text-14 lh-15">{review.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
