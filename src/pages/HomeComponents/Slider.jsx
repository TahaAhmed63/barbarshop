import React, { useRef, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import image1 from './../../assets/img/index/hero01.jpg';
import image2 from './../../assets/img/gallery/gallery06--full.jpg';
import image3 from './../../assets/img/gallery/gallery05--full.jpg';
import image4 from './../../assets/img/gallery/gallery05--full.jpg';
import image5 from './../../assets/img/index/hero01.jpg';
import image6 from './../../assets/img/gallery/gallery02--full.jpg';

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ];

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setTimeout(() => {
        prevRef.current.click();
        nextRef.current.click();
      });
    }
  }, [prevRef, nextRef]);

  return (
    <section className="hero d-flex">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="hero_slider"
        onSwiper={(swiper) => {
          // To reinitialize swiper with navigation elements
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="hero_slider-slide"
            style={{
              backgroundImage: `url(${slide})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100vh'
            }}
          />
        ))}
      </Swiper>
      <div className="hero_slider-pagination swiper-pagination"></div>
      <div className="hero_slider-controls d-none d-md-flex justify-content-between">
        <span className="hero_slider-control hero_slider-control--prev" ref={prevRef}>
          <i className="icon-arrow_left" />
        </span>
        <span className="hero_slider-control hero_slider-control--next" ref={nextRef}>
          <i className="icon-arrow_right" />
        </span>
      </div>
      <div className="container d-flex flex-column justify-content-center align-items-center align-items-md-start align-items-lg-center align-items-xl-start">
        <div className="hero_content col-xl-7 col-xxl-6">
          <h1 className="hero_content-header">We will keep you an impeccable look</h1>
          <p className="hero_content-text text">
            3891 Ranchview Dr. Richardson, <span className="linebreak">California 62639</span>
          </p>
          <span className="hero_content-tel d-inline-flex align-items-center">
            <span className="icon d-flex justify-content-center align-items-center">
              <i className="icon-phone" />
            </span>
            <a className="link" href="tel:+1234567890">+1 234 567 890</a>
          </span>
        </div>
      </div>
      <span className="hero_overlay"></span>
    </section>
  );
};

export default Slider;
