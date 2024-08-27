
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoPlay } from "react-icons/io5";
const History = () => {

    const [showVideo, setShowVideo] = useState(false);

    const openVideo = () => {
      setShowVideo(true);
    };
  
    const closeVideo = () => {
      setShowVideo(false);
    };

    const awards =[
        {
            id:"1",
            img:"/images/award1.png",
            title:"SEASON 2015",
            desc:"FINAL TOUR"
        },
        {
            id:"2",
            img:"/images/award2.png",
            title:"SEASON 2019",
            desc:"FINAL TOUR"
        },
        {
            id:"3",
            img:"/images/award3.png",
            title:"SEASON 2020",
            desc:"FINAL TOUR"
        },
        {
            id:"4",
            img:"/images/award4.png",
            title:"SEASON 2023",
            desc:"FINAL TOUR"
        }
    ]
  return (
    <section className="relative text-white py-[150px] ">
    <div className="about-image banner-bg relative py-[150px] ">
    <div className="container px-4 mx-auto text-center z-[1] relative">
          <ul className="flex text-center justify-center gap-5">
              <li className="text-[#e6a3a1] font-normal ">HOME</li>
              <li className="about-before relative font-normal ">HISTORY </li>
          </ul>
          <h1 className="text-5xl md:text-7xl  font-semibold pt-5"> TEAM HISTORY</h1>
    </div>
    
    </div>
    
    <section className="bg-white text-secondColor   lg:py-[120px]">
    <div className="container mx-auto relative overflow-hidden  px-1 py-[120px]">
        <div className=" line-before relative hidden lg:block ">
                <div className="absolute top-0 left-[-20px] bg-secondColor text-white w-[40px] h-[40px] rounded-[50%] text-center flex items-center justify-center">
                <a> <FaPlus/> </a>
                </div>

                <div className="absolute bottom-0 left-[-20px] bg-firstColor text-white w-[40px] h-[40px] rounded-[50%] text-center flex items-center justify-center">
                <a> <FaPlus/> </a>
                </div>
        </div>

        <div >
            <div className="flex justify-between items-center text-center flex-col-reverse lg:flex-row gap-5  group">
        <div className="border-[#ebebeb] border-[1px] relative p-8 text-right before:absolute  before:bg-firstColor before:top-0 before:right-0 before:h-full before:w-[3px] before:opacity-0 group-hover:before:opacity-100 before:duration-300">

        <h1 className="text-[#111111] text-3xl font-bold">JOURNEY WAS STARTED</h1>
        <p className="max-w-[350px] text-[#777777] text-[18px] font-normal pt-2">It is one of the most popular football club that offer training programs for the youth.</p>
        </div>

        <div className=" before:absolute before:hidden  before:lg:block  before:bg-secondColor group-hover:before:bg-firstColor before:duration-300 before:top-[22%] before:left-[50%] before:h-[8px] before:w-[8px] group-hover:before:w-[12px] group-hover:before:h-[12px] before:rounded-[50%] before:transform before:translate-y-[-50%]   before:translate-x-[-50%]           after:absolute  after:hidden after:lg:block after:border-secondColor after:border-[1px] after:top-[22%] after:left-[50%] after:h-[15px] after:w-[15px] group-hover:after:w-[30px] group-hover:after:h-[30px] group-hover:after:border-firstColor after:duration-300 after:rounded-[50%] after:transform after:translate-y-[-50%]   after:translate-x-[-50%] ">
        <h1 className="history-year ">1965</h1>
        </div>

            </div>

            <div className="flex justify-between items-center text-center flex-col  lg:flex-row group">
        <div className=" before:absolute before:hidden  before:lg:block  before:bg-secondColor group-hover:before:bg-firstColor before:duration-300 before:top-[40%] before:left-[50%] before:h-[8px] before:w-[8px] group-hover:before:w-[12px] group-hover:before:h-[12px] before:rounded-[50%] before:transform before:translate-y-[-50%]   before:translate-x-[-50%]           after:absolute  after:hidden after:lg:block after:border-secondColor after:border-[1px] after:top-[40%] after:left-[50%] after:h-[15px] after:w-[15px] group-hover:after:w-[30px] group-hover:after:h-[30px] group-hover:after:border-firstColor after:duration-300 after:rounded-[50%] after:transform after:translate-y-[-50%]   after:translate-x-[-50%] ">
        <h1 className="history-year">1990</h1>
        </div>

        <div className="border-[#ebebeb] border-[1px] relative p-8 text-right before:absolute  before:bg-firstColor before:top-0 before:left-0 before:h-full before:w-[3px] before:opacity-0 group-hover:before:opacity-100 before:duration-300">
        <h1 className="text-[#111111] text-3xl font-bold">UEFA CHAMPION 1990</h1>
        <p className="max-w-[350px] text-[#777777] text-[18px] font-normal pt-2">It is one of the most popular football club that offer training programs for the youth.</p>
        </div>

            </div>


             <div className="flex justify-between items-center text-center flex-col-reverse lg:flex-row group">
        <div className="border-[#ebebeb] border-[1px] relative p-8 text-right before:absolute  before:bg-firstColor before:top-0 before:right-0 before:h-full before:w-[3px] before:opacity-0 group-hover:before:opacity-100 before:duration-300">

        <h1 className="text-[#111111] text-3xl font-bold">CLOWN REWARD 2016</h1>
        <p className="max-w-[350px] text-[#777777] text-[18px] font-normal pt-2">It is one of the most popular football club that offer training programs for the youth.</p>
        </div>

        <div className=" before:absolute before:hidden before:lg:block  before:bg-secondColor group-hover:before:bg-firstColor before:duration-300 before:top-[60%] before:left-[50%] before:h-[8px] before:w-[8px] group-hover:before:w-[12px] group-hover:before:h-[12px] before:rounded-[50%] before:transform before:translate-y-[-50%]   before:translate-x-[-50%]           after:absolute  after:hidden after:lg:block after:border-secondColor after:border-[1px] after:top-[60%] after:left-[50%] after:h-[15px] after:w-[15px] group-hover:after:w-[30px] group-hover:after:h-[30px] group-hover:after:border-firstColor after:duration-300 after:rounded-[50%] after:transform after:translate-y-[-50%]   after:translate-x-[-50%] ">
        <h1 className="history-year ">2016</h1>
        </div>

            </div>

            <div className="flex justify-between items-center text-center flex-col lg:flex-row group">
        <div className=" before:absolute before:hidden  before:lg:block  before:bg-secondColor group-hover:before:bg-firstColor before:duration-300 before:top-[78%] before:left-[50%] before:h-[8px] before:w-[8px] group-hover:before:w-[12px] group-hover:before:h-[12px] before:rounded-[50%] before:transform before:translate-y-[-50%]   before:translate-x-[-50%]           after:absolute after:hidden after:lg:block after:border-secondColor after:border-[1px] after:top-[78%] after:left-[50%] after:h-[15px] after:w-[15px] group-hover:after:w-[30px] group-hover:after:h-[30px] group-hover:after:border-firstColor after:duration-300 after:rounded-[50%] after:transform after:translate-y-[-50%]   after:translate-x-[-50%] ">
        <h1 className="history-year">2022</h1>
        </div>

        <div className="border-[#ebebeb] border-[1px] relative p-8 text-right before:absolute  before:bg-firstColor before:top-0 before:left-0 before:h-full before:w-[3px] before:opacity-0 group-hover:before:opacity-100 before:duration-300">
        <h1 className="text-[#111111] text-[23px] md:text-3xl  w-full font-bold">WORLD CLUB CUP CHAMPION</h1>
        <p className="max-w-[350px] text-[#777777] text-[18px] font-normal pt-2">It is one of the most popular football club that offer training programs for the youth.</p>
        </div>

            </div>
        </div>
    
    </div>
    </section>

    <section className="bg-white  ">
    <div className="video-image  relative py-[150px] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%] before-rgb ">
    
 
    <div className='absolute   right-[50%] transform translate-x-[50%] top-[50%] '>
    <button className="  bg-white   text-[20px]  w-[70px] h-[70px] text-center flex items-center justify-center  " onClick={openVideo}>
      <IoPlay  className='text-firstColor ' />
      <span className="absolute transition-all  w-[100px] h-[100px] border-[1px] border-white  animate-Square"></span>
    </button>
  

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

 

    <div className='  relative container mx-auto px-2 py-[120px]  text-center'>
    <h1 className=' text-[180px] font-[600] pt-5 text-[#f7f7f7] absolute top-0 transform left-[50%] translate-x-[-50%]'>TROPHY</h1>
    <div className='z-[1] relative'>
    
    <h1 className='text-3xl lg:text-5xl font-bold text-[#111111] '>OUR AWARDS</h1>
    <p className='text-[#999999] mx-auto max-w-[580px] pt-10'>It is one of the most popular football clubs that offer training programs
    for the youth, as well as summer camps.</p>
    </div>

    <div className="text-secondColor grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 px-2 pt-12">
    {awards.map((item) => (
      <div key={item.id} className="h-[365px]  pt-10 w-full  border-[1px] border-secondColor border-opacity-10 flex items-center flex-col group">
        <img src={item.img} className="group-hover:transform group-hover:scale-[1.1] duration-300" />
        <div className="pt-4">
          <h1 className="text-2xl font-[600]">{item.title}</h1>
          <p className="text-[#777777]">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
  
    </div>
    </section>
    </section>
  )
}

export default History