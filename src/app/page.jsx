"use client";
import HomeComponent from "./home/page";
import Service from "./service/page";
import News from "./news/page";
import Contact from "./contact/page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import About from "./about/page";
import AOS from "aos";
import { useEffect } from "react";
import Portfolio from "./portfolio/page";
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1200, // duration of animation
      once: true, // whether animation happens only once
    });
    router.push("home");
  }, []);

  return (
   
      <div id="__next">
        <div className="tokyo_tm_all_wrap">
          <HomeComponent />
          <About />
          <Service />
          <Portfolio />
          <News />
          <Contact />
        </div>
      </div>

  )
}
