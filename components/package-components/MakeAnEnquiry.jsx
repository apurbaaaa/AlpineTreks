'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function MakeAnEnquiry({ onClose }) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        address: '',
        numberOfPeople: '',
        tripStartDate: '',
        comment: '',
        agree: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;    
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to an API
        console.log(formData);
        onClose();
        router.push('/');
    };

    return (
        <section>
            <div className="modal-container" id="myModal" style={{ display: 'block' }}>
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h2 className="modal-title">Make an Enquiry</h2>
                        <p>Have a question before you book? Send your enquiry below and our travel experts will get back with the necessary answer(s).</p>
                        <button type="button" className="close" id="closeModal" onClick={onClose}>&times;</button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row y-gap-30 contactForm pt-30">
                                <div className="col-md-6">
                                    <div className="form-input">
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                        />
                                        <label className="lh-1 text-16 text-light-1">Full Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-input">
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        <label className="lh-1 text-16 text-light-1">Email</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-input">
                                        <input
                                            type="text"
                                            name="contactNumber"
                                            required
                                            value={formData.contactNumber}
                                            onChange={handleChange}
                                        />
                                        <label className="lh-1 text-16 text-light-1">Contact Number</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-input">
                                        <input
                                            type="text"
                                            name="address"
                                            required
                                            value={formData.address}
                                            onChange={handleChange}
                                        />
                                        <label className="lh-1 text-16 text-light-1">Address</label>    
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-input">
                                        <input
                                            type="number"
                                            name="numberOfPeople"
                                            required
                                            value={formData.numberOfPeople}
                                            onChange={handleChange}
                                        />
                                        <label className="lh-1 text-16 text-light-1">No Of People</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-input">
                                        <input
                                            type="date"
                                            name="tripStartDate"
                                            required
                                            value={formData.tripStartDate}
                                            onChange={handleChange}
                                        />
                                        <label className="lh-1 text-16 text-light-1">Trip Start Date</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-input">
                                        <textarea
                                            name="comment"
                                            value={formData.comment}
                                            onChange={handleChange}
                                        ></textarea>
                                        <label className="lh-1 text-16 text-light-1">Enter text here...</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row y-gap-20 items-center justify-between">
                                        <div className="col-auto">
                                            <div className="policy">
                                                <input
                                                    type="checkbox"
                                                    id="signup-check"
                                                    name="agree"
                                                    className="custom-checkbox"
                                                    checked={formData.agree}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="signup-check">
                                                    By proceeding, you accept our
                                                    <Link href="/legal" target="_blank" rel="noopener"> terms of use</Link> and 
                                                    <Link href="/info/data-policy" target="_blank" rel="noopener"> data policy</Link>.
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-auto col-12">
                                            <button type="submit" className="button -md -dark-1 bg-accent-1 text-white col-12">
                                                Submit <i className="icon-arrow-top-right text-16 ml-10"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
