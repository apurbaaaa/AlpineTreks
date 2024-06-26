"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Loading from '@/components/homes/others/Loading';

const SideInfo = ({response}) => {
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState(null);
  const [mapURL, setMapURL] = useState('');
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setEmail(response?.data?.email_address);
        setAddress(response?.data?.address);
        setPhone(response?.data?.phone);
        setMobile(response?.data?.mobile);
        setMapURL(response?.data?.map_url);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching data: sideInfo', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', form);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message', error);
      alert('Failed to send message');
    }
  };

  if (loading) {
    return <div><Loading/></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="layout-pt-sm">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-5 col-sm-6">
            <div className="ap-contact">
              <h3 className="text-25 md:text-24 fw-700">Contact Information</h3>
              <div className="mt-20 md:mt-10">
                <div className="contact-information">
                  <h4>
                    <i className="fa-solid fa-location-dot"></i> Address
                  </h4>
                  <span>{address}</span>
                </div>
                <div className="contact-information">
                  <h4>
                    <i className="fa-regular fa-envelope"></i> Email
                  </h4>
                  <span>
                    <a href={`mailto:${email}`}>{email}</a>
                  </span>
                </div>
                <div className="contact-information">
                  <h4>
                    <i className="fa-solid fa-mobile"></i> Mobile
                  </h4>
                  <span>{mobile}</span>
                </div>
                <div className="contact-information">
                  <h4>
                    <i className="fa-solid fa-phone"></i> Phone
                  </h4>
                  <span>{phone}</span>
                </div>
                <div className="contact-information social-contact-information">
                  <h4 className="text-25 md:text-24 fw-700">Follow Us</h4>
                  <ul>
                    <li>
                      <Link href="https://facebook.com" legacyBehavior>
                        <a aria-label="Facebook">
                          <i className="fa-brands fa-facebook-f"></i> Facebook
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://instagram.com" legacyBehavior>
                        <a aria-label="Instagram">
                          <i className="fa-brands fa-instagram"></i> Instagram
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com" legacyBehavior>
                        <a aria-label="Twitter">
                          <i className="fa-brands fa-x-twitter"></i> Twitter
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://linkedin.com" legacyBehavior>
                        <a aria-label="LinkedIn">
                          <i className="fa-brands fa-linkedin-in"></i> LinkedIn
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          {/* Map and COntact page form*/}

          <div className="col-lg-7">
            <iframe
              src={mapURL}
              width="100%"
              height="550"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Maps"
            ></iframe>
          </div>
          <div className="col-lg-7">
            <div className="form-contact">
              <h2 className="text-30 fw-700 text-center mb-30">Leave us your info</h2>
              <form className="contactForm" onSubmit={handleSubmit}>
                <div className="row y-gap-30">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows="3"
                      value={form.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button className="button -md -dark-1 bg-accent-1 text-white col-12" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideInfo;
