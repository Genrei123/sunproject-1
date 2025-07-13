'use client'

import Slider from 'react-slick';
import Image from 'next/image';

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <>
      <div className="">
        <Slider className="" {...settings}>
          <div className="w-full h-full justify-center items-center flex">
            <Image
              src="https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Placeholder Image"
              width={500}
              height={300}
              className='object-cover'
            />

          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Placeholder Image"
              width={500}
              height={300}
              className='object-cover'
            />
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Placeholder Image"
              width={500}
              height={300}
              className='object-cover'
            />
          </div>
        </Slider>
      </div>

      <div>
        <h1>Card</h1>
        <img src="https://via.placeholder.com/150" alt="Placeholder Image" />
        <p>Sample Card Content</p>

      </div>
    </>
  );
}
