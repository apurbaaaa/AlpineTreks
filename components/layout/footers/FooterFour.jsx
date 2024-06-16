"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FooterFour() {

  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  // const [mobile, setMobile] = useState("")
  // const [tel , setTel] = useState("")
  // const [socials, setSocials] = useState([]);
  const [error, setError] = useState(null)

  useEffect(()=> {
    const getData = async () => {
      try {
        const response = await axios.get("https://mountaintrekkingnepal.com/api/settings");
        setEmail(response?.data?.email_address)
        setAddress(response?.data?.address)
        setPhone(response?.data?.phone)
        console.log(email)
        // setMobile(response?.data?.mobile)              data not displayed in current footer format
        // setSocials[response?.data?.social_media]       currently un-mapable data by API
        // setInterval(response?.data?.tel)               currently has null in API
      }
      catch(error){
        setError(error);
        console.error(error)
      }
    }; getData();
  }, [])


  return (
    <div>
      <footer className="footer -type-1 -light" >
  <div className="footer__main" style={{backgroundColor:"#f5f5f5"}}>
    <div className="" >
      <Image src="/img/footer.svg" width={1906} height={527} alt=""/>
    </div>
    <div style={{ background: '#21262c' }}>
      <div className="container">
        <div className="footer__content">
          <div className="row y-gap-40 justify-between">
            <div className="col-lg-4 col-md-6 regular-svg image-inver-color">
              <h4 className="text-20 fw-500 text-white">Contact</h4>

              <div className="y-gap-10 mt-20 text-white">
                <Link className="d-block" href="/">{address}</Link>
                <Link className="d-block" href="/">{email} </Link>
                <Link className="d-block" href="/">{phone}</Link>
              </div>
              <div className="footerSocials">
                <div className="footerSocials__title text-white">
                  Follow Us
                </div>  

                <div className="footerSocials__icons text-white" id="footer_svg">
                  <Link href="#"><Image  src="/img/facebook.svg" width = {30} height = {25} alt=""/> </Link>
                  <Link href="#"><Image src="/img/instagram.svg" width = {30} height = {25} alt=""/> </Link>
                  <Link href="#"><Image src="/img/linkedin.svg" width = {30} height = {25} alt=""/> </Link>
                  <Link href="#"><Image src="/img/x-twitter.svg" width = {30} height = {25} alt=""/> </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-auto col-6">
              <h4 className="text-20 fw-500 text-white">About</h4>

              <div className="y-gap-10 mt-20">

                <Link className="d-block fw-500 text-white" href="#">
                  Our team
                </Link>

                <Link className="d-block fw-500 text-white" href="#">
                  Why Us
                </Link>

                <Link className="d-block fw-500 text-white" href="#">
                 How To make a payment
               </Link>

               <Link className="d-block fw-500 text-white" href="#">
                Term and condition
              </Link>

              <Link className="d-block fw-500 text-white" href="#">
                Privacy Policy
              </Link>

            </div>
          </div>

          <div className="col-lg-auto col-6">
            <h4 className="text-20 fw-500 text-white">Quick Links</h4>

            <div className="y-gap-10 mt-20">

              <Link className="d-block fw-500 text-white" href="#">
                Contact
              </Link>

              <Link className="d-block fw-500 text-white" href="#">
                Blog
              </Link>

              <Link className="d-block fw-500 text-white" href="#">
                Spiritual Tours
              </Link>

              <Link className="d-block fw-500 text-white" href="#">
               Nepal Trekking

             </Link>

           </div>
         </div>
         <div className="col-lg-auto col-6">
          <h4 className="text-20 fw-500 text-white">Destinations</h4>

          <div className="y-gap-10 mt-20">

            <Link className="d-block fw-500 text-white" href="#">
              Nepal
            </Link>

            <Link className="d-block fw-500 text-white" href="#">
              India
            </Link>

            <Link className="d-block fw-500 text-white" href="#">
              Bhutan
            </Link>

            <Link className="d-block fw-500 text-white" href="#">
             Tibet

           </Link>

         </div>
       </div>
     </div>
   </div>
  </div>
  </div>
  </div>


  <div className="border-white-15-top" style={{background: '#000'}}>
  <div className="container">
    <div className="footer__bottom">
      <div className="row y-gap-5 justify-between items-center">
        <div className="col-auto text-white">
          <div>© Copyright Alpine treks 2024</div>
        </div>

        <div className="col-auto">
          <div className="footer__images d-flex items-center x-gap-10">
            <Image src="/img/footer/cards/1.png" width = {48} height = {24} alt="image"/>
            <Image src="/img/footer/cards/2.png" width = {48} height = {24} alt="image"/>
            <Image src="/img/footer/cards/3.png" width = {48} height = {24} alt="image"/>
            <Image src="/img/footer/cards/4.png" width = {48} height = {24} alt="image"/>
            <Image src="/img/footer/cards/5.png" width = {48} height = {24} alt="image"/>
            <Image src="/img/footer/cards/6.png" width = {48} height = {24} alt="image"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </footer>
    </div>
  );
}
