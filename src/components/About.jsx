

import CountUp from './CountUp';
import img1 from '/images/img4.jpg'
import img2 from '/images/img5.jpg'
import { FaCheck } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import player from '/images/player2.png'
import { IoPlay } from "react-icons/io5";

import img from "/images/video1.png"
import { useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };
   
  const [selectedYear, setSelectedYear] = useState('1990');

  const images = [
    {
      id:"1",
      img:"/images/slider1.png"
    },
    {
      id:"2",
      img:"/images/slider2.png"
    },
    {
      id:"3",
      img:"/images/slider3.png"
    },
    {
      id:"4",
      img:"/images/slider4.png"
    },
    {
      id:"5",
      img:"/images/slider5.png"
    },
    {
      id:"6",
      img:"/images/slider6.png"
    },
  ]


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-white text-white  ">
   
    <div className="about-image banner-bg relative py-[150px] ">
    <div className="container px-4 mx-auto text-center z-[1] relative">
          <ul className="flex text-center justify-center gap-5">
              <li className="text-[#e6a3a1] font-normal ">HOME</li>
              <li className="about-before relative font-normal ">ABOUT US</li>
          </ul>
          <h1 className="text-7xl  font-semibold pt-5">ABOUT US</h1>
    </div>
    
    </div>
     
    <div className="bg-white py-[120px]  px-4 flex justify-center flex-col lg:flex-row  lg:gap-16 ">
      <div className='flex lg:justify-center lg:items-center gap-5'>
      <div className=' lg:w-[150px] lg:h-[150px]'>
          <img src={img1} />
      </div>
      <div className=' lg:w-[200px] lg:h-[200px]'>
          <img src={img2} />
      </div>
      </div>

      <div className='text-secondColor'>
        <h1 className='text-6xl font-bold'> <span className='text-4xl font-bold'>ABOUT THE  </span> <br/> CLUB KESTER  </h1>
        <p className='pt-5 text-[#999999]'>Nulla habitant commodo euismod feugiat aenean quisque platea ac, nisl potenti
         <br/>
         fusce
         conubia ventis blandit iaculis, curabitur enim inceptos a odio taciti sapien. 
         <br/>
         Dictumst dis metus inceptos curae fermentum nvel, ridiculus a dapibus egestas 
         <br/>
         penatibus mus, cubilia fusce iaculis
        </p>

        <ul className='flex flex-col lg:flex-row gap-4 pt-6'>
        <div className='flex items-center gap-4'>
            <FaCheck /> <li className=' text-[#111111]  font-family text-[15px] w-full'> MANAGER   <h1 className='font-[800] text-[18px]'>PRO 05</h1> </li>
        </div>
        <div className='flex items-center gap-4'>
            <FaCheck /> <li className=' text-[#111111]  font-family text-[15px] w-full'> PLAYERS  <h1 className='font-[800] text-[18px]'>PRO 107</h1> </li>
        </div>
        <div className='flex items-center gap-4'>
            <FaCheck /> <li className=' text-[#111111]  font-family text-[15px] w-full'> COACH   <h1 className='font-[800] text-[18px]'>PRO 119</h1> </li>
        </div>
        </ul>
        <button className='py-3 px-8  mt-8 uppercase font-bold tracking-[1px]  flex  items-center  gap-3 text-white  bg-firstColor'> OUR TEAM <FaArrowRightLong /></button>
        </div>

       
        </div>

        <div className=' container px-1 mx-auto grid grid-cols-2  lg:grid-cols-4 '>
        
        <div className=' counter-before relative  py-[100px] '>
        <CountUp start={0} end={69}/>
        </div>
        <div className='counter-before relative  py-[100px]'>
        <CountUp start={0} end={46}/>
        </div>
        <div className='counter-before relative  py-[100px]'>
        <CountUp start={0} end={63}/>
        </div>
        <div className='counter-before relative py-[100px] '>
        <CountUp start={0} end={58}/>
        </div>
        </div>

        <div className='champion-image relative overflow-hidden '>
        <div className='container px-4 mx-auto'>
        
      
        <div className='animate-[moveRight_20s_ease-in-out_infinite] absolute top-0'>
            <img src={player} className=''/>
        </div>
       
  
        <div className='relative'>
        <div className=' flex flex-col  lg:flex-row py-[120px] '>
            <div className=' w-full '>
                <button onClick={() => setSelectedYear('1990')} className={`${selectedYear  === '1990' ? 'btn-true' : 'btn-false'} m-1`}>1990</button>
                <button onClick={() => setSelectedYear('2010')} className={`${selectedYear  === '2010' ? 'btn-true' : 'btn-false'} m-1`}>2010</button>
                <button onClick={() => setSelectedYear('2012')} className={`${selectedYear === '2012' ? 'btn-true' :  `btn-false`} m-1`}>2012</button>
                <button onClick={() => setSelectedYear('2015')} className={`${selectedYear === '2015' ? 'btn-true' :  `btn-false`} m-1`}>2015</button>
                <button onClick={() => setSelectedYear('2022')} className={`${selectedYear === '2022' ? 'btn-true' :  `btn-false`} m-1`}>2022</button>

                <div className='text-[#777777] max-w-[610px]'>
                <h1 className='text-4xl font-[600] text-[#111111] pt-5 '>THE CHAMPIONS LEAGUE
                TROPHY SINCE 2010</h1>
    
                <p className='pt-5'>It is one of the most popular football clubs that offer training programs
                for the youth, as well as summer camps. Play the fastest NFT based fantasy
                football manager earn coins, collect & trade officially.</p>
    
                <p className='pt-4'>
                Welcome to the official Chelsea FC website. Get all the latest news, videos
                & ticket information as well as player profiles.
                </p>
                </div>
            </div>

         
            
          <div className='ml-0 lg:ml-8 pt-10 lg:pt-0'>
            <div className='  relative '>
                <img src={img} className=' ' />
                <button className=" bg-secondColor absolute bottom-[50%] left-[50%] hover:bg-firstColor duration-700  rounded-[50%] text-[20px]  w-[50px] h-[50px] text-center flex items-center justify-center  " onClick={openVideo}> <IoPlay  className='text-white ' /></button>
                {showVideo && (
                  <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-50  bg-black bg-opacity-80' onClick={closeVideo}>
                  <div className="video-container">
                  <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/G4t6TqG5LM8"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
            </div>
        </div>
        </div>
    
        </div>
        </div>
        </div>

        <div className='bg-white py-[120px] relative text-center'>
        <div className='container px-2 mx-auto'>
        <h1 className='text-[80px] sm:text-[120px] md:text-[180px] font-[600] pt-5 text-[#f7f7f7] absolute top-0 transform left-[50%] translate-x-[-50%]'>SPONSOR</h1>
        <div className='z-[1] relative'>
        
        <h1 className='text-3xl lg:text-5xl font-bold text-[#111111] '>HAPPY SPONSORS</h1>
        <p className='text-[#999999] mx-auto max-w-[580px] pt-10'>It is one of the most popular football clubs that offer training programs
        for the youth, as well as summer camps.</p>
        </div>
        
       
        <Slider  {...settings}>
        {images.map((item) => (
          <div key={item.id} className='pt-10 w-full flex justify-cente items-center mx-10 '>
          <img src={item.img} className='relative cursor-pointer left-20 lg:left-8 ' />
        
          </div>
        ))}
        </Slider>
        </div>
        </div>
      
    </section>
  )
}

export default About