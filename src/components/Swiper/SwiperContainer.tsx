import React, { ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Mousewheel, Parallax } from 'swiper'

import 'swiper/css'
import 'swiper/css/parallax'
import 'swiper/css/free-mode'
import './swiper.css'

// パララックスさせたい背景要素
const PrallaxContent: React.FC = () => {
  return (
    <div
      slot="container-start"
      className="parallax-bg"
      data-swiper-parallax-y="-23%"
    ></div>
  )
}

export const SwiperContainer: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <Swiper
      loop={false}
      freeMode={true}
      modules={[FreeMode, Mousewheel, Parallax]}
      parallax={true}
      mousewheel={true}
    >
      <PrallaxContent />
      <SwiperSlide>{children}</SwiperSlide>
      <SwiperSlide></SwiperSlide>
    </Swiper>
  )
}
