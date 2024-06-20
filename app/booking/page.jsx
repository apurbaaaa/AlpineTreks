import React from "react";
import NextBreadcrumb from "@/components/common/BreadCrumbs";

export default function Page() {
    return (
        <div>
            <section data-anim="fade" className="mt-header pt-30 is-in-view">
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
                    <h1 className="text-30">Booking Form</h1>
                </div>
            </section>
            <section data-anim-wrap="" className="layout-pt-sm layout-pb-sm animated">
                <div className="container">
                    <div className="row justify-content-center">
                        <div data-anim-child="fade" className="col-lg-8 is-in-view">
                            <div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20 mt-30">
                                <h2 className="text-24 md:text-24 fw-700">Fill the form</h2>
                                <form action="https://mountaintrekkingnepal.com/booking" method="POST">
                                    <input type="hidden" name="_token" value="KHYDaLexKIuG5cSjK1k8ZOpHgwVOsW2E8eWarjEy" autoComplete="off" />
                                    <input type="hidden" name="_method" value="PUT" />
                                    <div className="row y-gap-30 contactForm pt-30">
                                        <div className="col-lg-12">
                                            <div className="form-input">
                                                <input type="text" name="package" value="Annapurna Base Camp Trek" readOnly disabled />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-input">
                                                <input type="text" name="full_name" required />
                                                <label className="lh-1 text-16 text-light-1">Full Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-input">
                                                <input type="text" name="email_address" required />
                                                <label className="lh-1 text-16 text-light-1">Email</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-input">
                                                <input type="text" name="phone_number" required />
                                                <label className="lh-1 text-16 text-light-1">Phone Number</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-input">
                                                <input type="text" name="address" required />
                                                <label className="lh-1 text-16 text-light-1">Address</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-input">
                                                <input type="text" name="no_of_people" required />
                                                <label className="lh-1 text-16 text-light-1">No of People</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-input">
                                                <textarea name="message" required rows="8"></textarea>
                                                <label className="lh-1 text-16 text-light-1">Text Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row y-gap-20 items-center justify-between">
                                                <div className="col-auto d-flex">
                                                    <input type="checkbox" name="accept" value="I agree to tours Terms of Use and Privacy Policy." required />
                                                    <div className="text-14">By proceeding with this booking, I agree to tours Terms of
                                                        Use and Privacy Policy.</div>
                                                </div>
                                                <input type="hidden" name="package_price" value="700" />
                                                <input type="hidden" name="package_date" value="05 Sep 2024" />
                                                <input type="hidden" name="package_url" value="https://mountaintrekkingnepal.com/package/annapurna-base-camp-trek" />
                                                <div className="col-md-auto col-12">
                                                    <button type="submit" className="button -md -dark-1 bg-accent-1 text-white col-12">
                                                        Submit
                                                        <i className="icon-arrow-top-right text-16 ml-10"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
