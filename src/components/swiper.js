import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../assets/img/Products/xbox.png";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Autoplay, Navigation, A11y } from "swiper/modules";

function AutoFreeSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="swir">
      <button ref={prevRef} className="prev">
        ‹
      </button>
      <button ref={nextRef} className="next">
        ›
      </button>

      <Swiper
        className="gallery"
        modules={[FreeMode, Autoplay, Navigation, A11y]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={6}
        freeMode={true}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        a11y={{ enabled: true }}
        style={{ width: "90vw" }}
      >
        {/* {[...Array(9)].map((_, i) => (
          <SwiperSlide key={i}>
            <div className="item">y</div>
          </SwiperSlide>
        ))} */}
        <SwiperSlide>
          <div className="item">
            <img src={img} alt="sample" />
          </div>
        </SwiperSlide>
        {/* <h1>Xbox Controller</h1> */}
        <SwiperSlide>
          <div className="item">
            <img src={img} alt="sample" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <img src={img} alt="sample" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <img src={img} alt="sample" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <img src={img} alt="sample" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <img src={img} alt="sample" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <img src={img} alt="sample" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <img src={img} alt="sample" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <img src={img} alt="sample" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <img src={img} alt="sample" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default AutoFreeSlider;
