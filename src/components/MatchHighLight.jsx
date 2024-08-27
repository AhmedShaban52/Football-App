import { useState } from "react";
import { IoPlay } from "react-icons/io5";


const MatchHighLight = () => {
    const [showVideo, setShowVideo] = useState(false);

    const openVideo = () => {
      setShowVideo(true);
    };
  
    const closeVideo = () => {
      setShowVideo(false);
    };


    const items = [
    { 
        id:"1",
        img:"/images/10.png",
        time:" 06:00PM",
        title:"ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY",
        date:"15 DECEMBER 2023"
    },
    { 
        id:"2",
        img:"/images/11.png",
        time:" 06:00PM",
        title:"ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY",
        date:"15 DECEMBER 2023"
    },
    { 
        id:"3",
        img:"/images/12.png",
        time:" 06:00PM",
        title:"ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY",
        date:"15 DECEMBER 2023"
    },
    { 
        id:"4",
        img:"/images/13.png",
        time:" 06:00PM",
        title:"ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY",
        date:"15 DECEMBER 2023"
    }
]
  return (
    <div className=" text-white bg-secondColor ">
    <div className="container mx-auto px-4 ">
    <h1 className='text-3xl font-bold'>MATCH HIGHLIGHTS</h1>
    <div className="grid  grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden pt-10">
    {items.map((item) => (
    <div key={item.id} className="p-5 bg-[#1d1d1d] h-full ">
    <div  className="  overflow-hidden relative ">
    <img src={item.img} className="w-full h-full  hover:transform hover:scale-[1.1] duration-700 cursor-pointer" />
    <button className=" bg-secondColor absolute bottom-[50%] left-[50%] hover:bg-firstColor duration-700  rounded-[50%] text-[20px]  w-[50px] h-[50px] text-center flex items-center justify-center  " onClick={openVideo}> <IoPlay  className='text-white ' /></button>
    <a className=" flex items-center w-fit text-[12px] font-[400] font-family px-2 py-[2px] bottom-0  absolute bg-firstColor "><IoPlay className="mr-1" /> 06:00PM </a>
    </div>
    <div className="h-full pt-10">
    <h1 className="font-bold hover:text-firstColor text-xl duration-700 cursor-pointer">ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY</h1>
   
    <p className="mt-8 pt-4 border-t-[1px] border-[#282828] font-family font-medium">15 DECEMBER 2023</p>
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
    ))}
  
    </div>
    </div>
    </div>
  )
}

export default MatchHighLight



