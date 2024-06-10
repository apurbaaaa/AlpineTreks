import React from 'react';
import Link from 'next/link';

export default function SideInfo() {
  return (
    <section className="layout-pt-sm"> {/* <section data-anim="fade" className="layout-pt-sm"> */}
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-5 col-sm-6">
            <div className="ap-contact">
              <h3 className="text-25 md:text-24 fw-700">Contact Information</h3>

              <div className="mt-20 md:mt-10">
                <div className="contact-information">
                  <h4><i className="fa-solid fa-location-dot"></i> Address</h4>
                  <span>Lazimpat, Kathmandu, Nepal</span>
                </div>
                <div className="contact-information">
                  <h4><i className="fa-regular fa-envelope"></i> Email</h4>
                  <span><div href="mailto:info@webtechnepal.com">info@webtechnepal.com</div></span>
                </div>
                <div className="contact-information">
                  <h4><i className="fa-solid fa-mobile"></i> Mobile</h4>
                  <span>+977-9851000301</span>
                </div>
                <div className="contact-information">
                  <h4><i className="fa-solid fa-phone"></i> Phone</h4>
                  <span>+977-1-4541620</span>
                </div>
                <div className="contact-information social-contact-information">
                  <h4 className="text-25 md:text-24 fw-700">Follow Us</h4>
                  <ul>
                    <li>
                      <Link href="https://facebook.com">
                        <div aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i> Facebook </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://instagram.com">
                        <div aria-label="Instagram"><i className="fa-brands fa-instagram"></i> Instagram</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com">
                        <div aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i> Twitter</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://linkedin.com">
                        <div aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i> LinkedIn </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14127.182941124678!2d85.3210918!3d27.7235924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fd15c7ab3b%3A0x15ced2461b5b98e0!2sWebtech%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1710488991711!5m2!1sen!2snp"
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
              <div className="contactForm">
                <div className="row y-gap-30">
                  <div className="col-md-6">
                    <input type="text" name="name" placeholder="Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="phone" placeholder="Phone" />
                  </div>
                  <div className="col-12">
                    <input type="text" name="email" placeholder="Email" />
                  </div>
                  <div className="col-12">
                    <textarea name="message" placeholder="Message" rows="3"></textarea>
                  </div>
                  <div className="col-12">
                    <button className="button -md -dark-1 bg-accent-1 text-white col-12">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
