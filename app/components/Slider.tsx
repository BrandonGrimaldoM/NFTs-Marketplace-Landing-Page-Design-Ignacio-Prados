"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import SwiperCore, { EffectCards } from "swiper";
import Image from "next/image";

SwiperCore.use([EffectCards]);

export default function SliderCard() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      cardsEffect={{
        perSlideOffset: 25,
        perSlideRotate: 0,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-full h-full bg-gray-600/10 backdrop-blur-sm flex justify-center items-center rounded-[18px]">
          <Image
            width={225}
            height={288}
            src="/images/sell/one.jpg"
            alt="sell"
            className="rounded-[18px]"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-full h-full bg-gray-600/10 backdrop-blur-sm flex justify-center items-center rounded-[18px]">
          <Image
            width={225}
            height={288}
            src="/images/sell/two.jpg"
            alt="sell"
            className="rounded-[18px]"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-full h-full bg-gray-600/10 backdrop-blur-sm flex justify-center items-center rounded-[18px]">
          <Image
            width={225}
            height={288}
            src="/images/sell/three.jpg"
            alt="sell"
            className="rounded-[18px]"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
