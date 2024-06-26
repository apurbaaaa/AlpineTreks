import React from "react";
import NextBreadcrumb from "../BreadCrumbs";

export default function NavInfo() {
    return (
        <section className="mt-header pt-30">
            {/* <section data-anim="fade" className="mt-header pt-30"> */}
            <div className="container">
                <nav className="breadcrumbs mb-30 md:mb-15" aria-label="breadcrumb">
                    <span className="breadcrumbs__item">
                    <NextBreadcrumb
                        homeElement={<span>Home</span>}
                        containerClasses="text-14 breadcrumb-text"
                        listClasses=""
                        activeClasses="active"
                        capitalizeLinks={true}
                    />
                    </span>
                </nav>
                <h1 className="text-30">Contact Us</h1>
            </div>
        </section>
    );
}



{/* <section data-anim="fade" className="mt-header pt-30"> */}