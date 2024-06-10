
export default function SideInfo() {

    return(
        <section data-anim="fade" className="layout-pt-sm">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-5 col-sm-6">
            <div className=" ap-contact">
              <h3 className="text-25 md:text-24 fw-700">Contact Information</h3>

              <div className="mt-20 md:mt-10">
                <div className="contact-infomation">
                  
                    <h4><i className="fa-regular fa-location-dot"></i> Address</h4>
                    <span>Lazimpat, Kathmamndu, Nepal</span>
                </div>  
                <div className="contact-infomation">
                  
                    <h4><i className="fa-regular fa-envelope"></i> Email</h4>
                    <span><a href="">info@webtechnepal.com</a></span>
                </div>  
                <div className="contact-infomation">
                  
                    <h4><i className="fa-regular fa-mobile"></i> Mobile</h4>
                    <span>+977-9851000301</span>
                </div>  

                <div className="contact-infomation">
                  
                    <h4><i className="fa-regular fa-phone"></i> Phone</h4>
                    <span>+977-1-4541620</span>
                </div>
                <div className="contact-infomation social-contact-information"> 
                <h4 className="text-25 md:text-24 fw-700">Follow Us</h4> 
                <ul>
                <li> <a href=""> <i className="fa-brands fa-facebook-f"></i> Facebook</a></li>
                <li> <a href=""> <i className="fa-brands fa-instagram"></i> Instagram</a></li>
                <li> <a href=""> <i className="fa-brands fa-x-twitter"></i> Twitter</a></li>
                <li> <a href=""> <i className="fa-brands fa-linkedin-in"></i> Linked In</a> </li>
              </ul>
                </div>
              </div>
              
            </div>
          </div>
          <div className="col-lg-7">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14127.182941124678!2d85.3210918!3d27.7235924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fd15c7ab3b%3A0x15ced2461b5b98e0!2sWebtech%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1710488991711!5m2!1sen!2snp" width="100%" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
          <div className="col-lg-7">
            <div className="form-contact">
            <h2 className="text-30 fw-700 text-center mb-30">Leave us your info</h2>

            <div className="contactForm">
              <div className="row y-gap-30">
                <div className="col-md-6">
                  <input type="text" placeholder="Name"/>
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Phone"/>
                </div>
                <div className="col-12">
                  <input type="text" placeholder="Email"/>
                </div>
                <div className="col-12">
                  <textarea placeholder="Message" rows="3"></textarea>
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