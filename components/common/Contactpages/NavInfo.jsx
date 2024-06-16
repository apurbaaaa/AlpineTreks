import React from "react";
import Link from "next/link";

export default function NavInfo() {
    return (
        <section className="mt-header pt-30">
            {/* <section data-anim="fade" className="mt-header pt-30"> */}
            <div className="container">
                <nav className="breadcrumbs mb-30 md:mb-15" aria-label="breadcrumb">
                    <span className="breadcrumbs__item">
                        <Link href="/">Home</Link>
                    </span>
                    <span className="breadcrumbs__separator" aria-hidden="true">/</span>
                    <span className="breadcrumbs__item">
                        <Link href="/contact" aria-current="page">Contact Us</Link>
                    </span>
                </nav>
                <h1 className="text-30">Contact Us</h1>
            </div>
        </section>
    );
}



{/* <section data-anim="fade" className="mt-header pt-30"> */}