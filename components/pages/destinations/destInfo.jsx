import { weatherData } from "@/data/weather";
import MyComponent from "./Map";
import Image from "next/image";
import Link from "next/link";

export default function DestInfo() {
  return (
    <div>
        <section>
                <div data-anim="fade" class="container is-in-view">
                <div class="row justify-between py-30 mt-80">
                <div class="col-auto">
                <div class="text-14 breadcrumb-text">
                <a href="https://mountaintrekkingnepal.com">Home</a>
                <Link
              href={"/bhutan-list-1"}
              data-aos="fade-up"
              data-aos-delay=""
              className="buttonArrow d-flex items-center "
            >
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
                <span>Destination</span>
                </div>
                </div>
                </div>
                <h1 class="text-30">Destination</h1>
                </div>
        </section>
   
        <section class="layout-pt-lg layout-pb-lg  about-section">
            <div data-anim-wrap="" class="container animated">
            <div class="row y-gap-20 justify-between">
            <div data-anim-child="slide-up" class="col-lg-6 is-in-view">
            <h2>Nepal</h2>
            <p>Nepal has many different landscapes, cultures, and faiths. Eight of the world's ten tallest mountains are in the hilly north. The tallest is Sagarmatha, also known as Mount Everest. The south is lush and humid, and there are many cities there. Over 240 of its peaks are higher than 20,000 feet (6,096 meters).</p>
            <a class="button -md -dark-1 bg-accent-1 text-white col-lg-4 col-12" href="https://mountaintrekkingnepal.com/destination/nepal">
            View More
            <i class="icon-arrow-top-right text-16 ml-10"></i>
            </a>
            </div>
            <div data-anim-child="slide-up delay-2" class="col-lg-5 is-in-view">
            <div class="video relative container">
            <div class="video__bg">
            <Image src="https://mountaintrekkingnepal.com/storage/t2tapp3CUuqIIjdWatKvrd1tsUESwWuvadyokegF.jpg" alt="Nepal" class="rounded-12" width={800} height={500}/>
            </div>
            </div>
            </div>
            </div>
            </div>
        </section>
    </div>
    
  );
}
