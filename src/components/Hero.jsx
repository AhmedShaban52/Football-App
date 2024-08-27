import  {  useState } from 'react';
import { TbCalendarTime } from "react-icons/tb";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoPlay } from "react-icons/io5";


const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };


  return (
    <section className="hero-image before-hero  relative pt-[200px] pb-[120px]   ">
      <div className="container mx-auto px-3 relative z-[1] ">
        <div className="text-white relative">
          <span className="bg-firstColor uppercase font-normal text-[10px] py-[1px] px-[10px]">Football</span>
          <h1   className="text-[26px]  w-full  md:text-5xl font-medium uppercase mt-3">The World Cup 2023 What to <br /> Expect ourfrom france</h1>
          <div className="flex gap-4 mt-4">
            <span className="flex items-center font-light text-[12px] ">
              <TbCalendarTime className="mr-2 w-[12px] h-[12px]" />
              JUNE 21, 2023
            </span>
            <span className="flex items-center font-light text-[12px]">
              <MdOutlinePersonOutline className="mr-2 w-[12px] h-[12px]" />
              BY DAVID SMITH
            </span>
          </div>
          <div className="mt-10">
            <button className="uppercase bg-firstColor py-3 px-4 font-bold text-[12px] mr-5">Watch HighLights</button>
            <button className="uppercase text-secondColor bg-white py-3 px-4 font-bold text-[12px]">Learn More</button>
          </div>
          <section className='absolute right-5 top-[50%] hidden sm:block'>
          <button className="border-[1px] border-secondColor  bg-secondColor  rounded-[50%] text-[20px]  w-[50px] h-[50px] text-center flex items-center justify-center  " onClick={openVideo}>
            <IoPlay  className='text-white ' />
            <span className="absolute transition-all  w-[80px] h-[80px] border-[1px] border-secondColor rounded-[50%] animate-pulse"></span>
          </button>
        </section>
        
        </div>
        
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
    </section>
  );
}

export default Hero;
