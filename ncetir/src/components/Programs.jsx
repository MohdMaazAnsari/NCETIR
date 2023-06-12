
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../style/slider.css"

import "../style/programcard.css"
// import required modules



export const Programs = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const [swiperRef, setSwiperRef] = useState(null);

  
  return (

<div className="Slider">
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,  Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide> <div>
        <div className='card'>
<div className="cardimg">
<img src="programs/1.png" alt="" />
</div>
            <h1>Yoga</h1>
            <button>More info</button>
        </div>
    </div></SwiperSlide>
        <SwiperSlide> <div>
        <div className='card'>
<div className="cardimg">
<img src="programs/2.png" alt="" />
</div>
            <h1>xyz</h1>
            <button>More info</button>
        </div>
    </div></SwiperSlide>
        <SwiperSlide> <div>
        <div className='card'>
<div className="cardimg">
<img src="programs/3.png" alt="" />
</div>
            <h1>xyz</h1>
            <button>More info</button>
        </div>
    </div></SwiperSlide>
        <SwiperSlide> <div>
        <div className='card'>
<div className="cardimg">
<img src="programs/4.png" alt="" />
</div>
            <h1>xyz</h1>
            <button>More info</button>
        </div>
    </div></SwiperSlide>
        <SwiperSlide> <div>
        <div className='card'>
<div className="cardimg">
<img src="programs/5.png" alt="" />
</div>
            <h1>xyz</h1>
            <button>More info</button>
        </div>
    </div></SwiperSlide>
        <SwiperSlide> <div>
        <div className='card'>
<div className="cardimg">
<img src="programs/6.jpg" alt="" />
</div>
            <h1>xyz</h1>
            <button>More info</button>
        </div>
    </div></SwiperSlide>
        <SwiperSlide> <div>
        <div className='card'>
<div className="cardimg">
<img src="programs/7.png" alt="" />
</div>
            <h1>xyz</h1>
            <button>More info</button>
        </div>
    </div></SwiperSlide>
        <SwiperSlide> <div>
        <div className='card'>
<div className="cardimg">
<img src="programs/8.png" alt="" />
</div>
            <h1>xyz</h1>
            <button>More info</button>
        </div>
    </div></SwiperSlide>
        <SwiperSlide> <div>
        <div className='card'>
<div className="cardimg">
<img src="programs/9.jpg" alt="" />
</div>
            <h1>xyz</h1>
            <button>More info</button>
        </div>
    </div></SwiperSlide>
        <SwiperSlide> <div>
        <div className='card'>
<div className="cardimg">
<img src="programs/10.jpg" alt="" />
</div>
            <h1>xyz</h1>
            <button>More info</button>
        </div>
    </div></SwiperSlide>
        <SwiperSlide> <div>
        <div className='card'>
<div className="cardimg">
<img src="programs/11.png" alt="" />
</div>
            <h1>xyz</h1>
            <button>More info</button>
        </div>
    </div></SwiperSlide>
        <SwiperSlide> <div>
        <div className='card'>
<div className="cardimg">
<img src="programs/12.png" alt="" />
</div>
            <h1>xyz</h1>
            <button>More info</button>
        </div>
    </div></SwiperSlide>
        <SwiperSlide> <div>
        <div className='card'>
<div className="cardimg">
<img src="programs/13.png" alt="" />
</div>
            <h1>xyz</h1>
            <button>More info</button>
        </div>
    </div></SwiperSlide>
        <SwiperSlide> <div>
        <div className='card'>
<div className="cardimg">
<img src="programs/14.png" alt="" />
</div>
            <h1>xyz</h1>
            <button>More info</button>
        </div>
    </div></SwiperSlide>
        <SwiperSlide> <div>
        <div className='card'>
<div className="cardimg">
<img src="programs/15.jpeg" alt="" />
</div>
            <h1>xyz</h1>
            <button>More info</button>
        </div>
    </div></SwiperSlide>
    <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
</div>

  )
}
