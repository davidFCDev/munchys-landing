"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./swiper.css";

import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import HeroText from "../herotext";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      speed={1500}
      loop={true}
      effect={"fade"}
      navigation={true}
      modules={[EffectFade, Navigation, Autoplay]}
      className="mySwiper font-roboto"
    >
      <SwiperSlide>
        <Image
          src="/local2.jpg"
          alt="hero"
          layout="fill"
          objectFit="cover"
          className="w-full filter brightness-50"
        />
        <HeroText />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/local3.jpg"
          alt="hero"
          layout="fill"
          objectFit="cover"
          className="w-full filter brightness-50"
        />
        <HeroText />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/local4.jpg"
          alt="hero"
          layout="fill"
          objectFit="cover"
          className="w-full filter brightness-50"
        />
        <HeroText />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
