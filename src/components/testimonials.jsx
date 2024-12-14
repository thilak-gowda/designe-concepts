import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import client1 from '../assetes/images/client.jpg';
import kitchen from '../assetes/images/kitchen.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

export default function Testimonial() {
  return (
    <>
      <div className="container">


        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className=" swip-alig">
            <div className="testimonial">
              <div className="row d-flex align-items-center">
                <div className="col-lg-8 bord-left">
                  <img src={client1} className='client-img' alt="" />
                  <p className='testimon'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore laborum pariatur ducimus deleniti aliquam quasi cupiditate, odio sequi amet ipsam tempora mollitia molestiae vel saepe iure repellat earum quia.
                  </p>
                </div>
                <div className="col-lg-4">
                  <img src={kitchen} className="clin-plc" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" swip-alig">
            <div className="testimonial">
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore laborum pariatur ducimus deleniti aliquam quasi cupiditate, odio sequi amet ipsam tempora mollitia molestiae vel saepe iure repellat earum quia.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" swip-alig">
            <div className="testimonial">
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore laborum pariatur ducimus deleniti aliquam quasi cupiditate, odio sequi amet ipsam tempora mollitia molestiae vel saepe iure repellat earum quia.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" swip-alig">
            <div className="testimonial">
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore laborum pariatur ducimus deleniti aliquam quasi cupiditate, odio sequi amet ipsam tempora mollitia molestiae vel saepe iure repellat earum quia.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" swip-alig">
            <div className="testimonial">
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore laborum pariatur ducimus deleniti aliquam quasi cupiditate, odio sequi amet ipsam tempora mollitia molestiae vel saepe iure repellat earum quia.
              </p>
            </div>
          </SwiperSlide>


        </Swiper>
      </div>
    </>
  );
}
