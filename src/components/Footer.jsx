
import logo from '/images/logo.png'

import gallary1 from '/images/news1.png'
import gallary2 from '/images/news2.png'
import gallary3 from '/images/news3.png'
import gallary4 from '/images/news4.png'
import gallary5 from '/images/news5.png'
import gallary6 from '/images/news6.png'
import { FaFacebookF , FaTwitter , FaBehance , FaEnvelopeOpen , FaPhone } from "react-icons/fa";
import { FaYoutube , FaLocationDot } from "react-icons/fa6";


const Footer = () => {
  return (
    <section >
    <div className=' bg-secondColor text-white container px-4 mx-auto mt-[60px] '>
        <div className='bg-firstColor flex justify-center md:justify-between flex-wrap p-5 rounded-lg  '>
            <img src={logo} alt='img'  />
        <div className='flex gap-2 items-center justify-center mt-5'>
        <a className='bg-[#bc1b23] hover:bg-white hover:text-firstColor duration-500 w-[35px] h-[35px] text-[12px] text-white rounded-[50%] cursor-pointer flex justify-center items-center'>  <FaFacebookF /> </a>
        <a className='bg-[#bc1b23] hover:bg-white hover:text-firstColor duration-500 w-[35px] h-[35px] text-[12px] text-white rounded-[50%] cursor-pointer flex justify-center items-center'>  <FaTwitter /> </a>
        <a className='bg-[#bc1b23] hover:bg-white hover:text-firstColor duration-500 w-[35px] h-[35px] text-[12px] text-white rounded-[50%] cursor-pointer flex justify-center items-center' >  <FaBehance /> </a>
        <a className='bg-[#bc1b23] hover:bg-white hover:text-firstColor duration-500 w-[35px] h-[35px] text-[12px] text-white rounded-[50%] cursor-pointer flex justify-center items-center'>  <FaYoutube /> </a>

        </div>
    </div>

    <section className='pt-20 grid grid-cols-1 md:grid-cols-2 '>
        <div className='px-4' >
        <div className='relative'>
         <span className='absolute bg-firstColor h-[2px] w-[20px] top-[50%]'></span>   <h1 className=' text-[18px] font-bold ml-8'>  ABOUT CLUB</h1>
        </div>
          
            <p className='text-[#bcbcbc] max-w-[240px] pt-10'>It was the end of a period in the 1980s
            in which it seemed like every NBA Finals
            matchup featured the Celtics sports club.</p>
            <div className="flex gap-2  mt-10 ">
            <a className="bg-[#1d1d1d] hover:bg-firstColor cursor-pointer duration-200 w-[50px] h-[50px] rounded-[50%] flex justify-center items-center">   <FaFacebookF/> </a>
            <a className="bg-[#1d1d1d] hover:bg-firstColor cursor-pointer duration-200 w-[50px] h-[50px] rounded-[50%] flex justify-center items-center">   <FaTwitter/>  </a>
            <a className="bg-[#1d1d1d] hover:bg-firstColor cursor-pointer duration-200 w-[50px] h-[50px] rounded-[50%] flex justify-center items-center">   <FaBehance/>  </a>
            <a className="bg-[#1d1d1d] hover:bg-firstColor cursor-pointer duration-200 w-[50px] h-[50px] rounded-[50%] flex justify-center items-center">   <FaYoutube/>  </a>
        
            </div>
        </div>

        <div className='px-4 pt-10 md:pt-0' >
        <div className='relative'>
            <span className='absolute bg-firstColor h-[2px] w-[20px] top-[50%]'></span>   <h1 className=' text-[18px] font-bold ml-8'> ESSENTIAL LINKS</h1>
        </div>
        <div className='flex flex-wrap'>
        <ul className='flex-auto'>
            <li className=' text-[#888888] text-[14px] font-bold font-family py-2'>  <a className='before-footer relative mr-5'></a>   ABOUT CLUB</li>
            <li className=' text-[#888888] text-[14px] font-bold font-family py-2'>  <a className='before-footer relative mr-5'></a>    CONTACTS</li>
            <li className=' text-[#888888] text-[14px] font-bold font-family py-2'>  <a className='before-footer relative mr-5'></a>   PRICE TABLE</li>
            <li className=' text-[#888888] text-[14px] font-bold font-family py-2'>  <a className='before-footer relative mr-5'></a>   SHOP</li>
            <li className=' text-[#888888] text-[14px] font-bold font-family py-2'>  <a className='before-footer relative mr-5'></a>  OUR PLAYERS</li>
            <li className=' text-[#888888] text-[14px] font-bold font-family py-2'>  <a className='before-footer relative mr-5'></a>   ARENA</li>
        </ul>
        <ul className='flex-auto'>
            <li className='before-footer relative ml-5 text-[#888888] text-[14px] font-bold font-family py-2'> <a className='before-footer relative mr-5'></a>    MEDIA & KIT</li>
            <li className='before-footer relative ml-5 text-[#888888] text-[14px] font-bold font-family py-2'> <a className='before-footer relative mr-5'></a>   OUR HISTORY</li>
            <li className='before-footer relative ml-5 text-[#888888] text-[14px] font-bold font-family py-2'> <a className='before-footer relative mr-5'></a>    TROPHY ROOM</li>
            <li className='before-footer relative ml-5 text-[#888888] text-[14px] font-bold font-family py-2'> <a className='before-footer relative mr-5'></a>   SHORT CODE</li>
        </ul>
    </div>
        </div>

    <div className='pt-12 px-4'>
        <div className='relative'>
        <span className='absolute bg-firstColor h-[2px] w-[20px] top-[50%]'></span>   <h1 className=' text-[18px] font-bold ml-8'>  GET IN TOUCH</h1>
    </div>
        <ul className='mt-3'>
         <li className='flex text-center  items-center py-4 border-[#212121] border-b-2 max-w-[225px]'><FaEnvelopeOpen className='text-firstColor  text-[18px]' /> <a className='pl-4 text-[#bcbcbc] font-medium'>INFO@WEBMAIL.COM</a>  </li>  
        
         <li className='flex text-center  items-center py-4 border-[#212121] border-b-2 max-w-[225px]'><FaPhone className='text-firstColor text-[18px] ' /> <a className='pl-4 text-[#bcbcbc]'>098777888 90</a>  </li>  
        
         <li className='flex text-center  items-center py-4 border-[#212121] border-b-2 max-w-[225px]'> <FaLocationDot className='text-firstColor  text-[18px] ' /> <a className='pl-4 text-left text-[#bcbcbc]'>USA, CALIFORNIA 20,FIRST <br/>  AVENUE, CALIFORNIA </a>  </li>  
        </ul>
        </div>


        <div className='pt-12 px-4'>
        <div className='relative'>
            <span className='absolute bg-firstColor h-[2px] w-[20px] top-[50%]'></span>   <h1 className=' text-[18px] font-bold ml-8'>POST GALLARY</h1>
        </div>
        <div className='grid grid-cols-3 gap-4 w-fit mt-6 '>
        <div className='overflow-hidden cursor-pointer'  >
            <img src={gallary1} alt='img' className='hover:transform hover:scale-[1.1] duration-500'  />
        </div>
        <div className='overflow-hidden cursor-pointer' >
            <img src={gallary2} alt='img' className='hover:transform hover:scale-[1.1] duration-500'  />
        </div>
        <div className='overflow-hidden cursor-pointer' >
            <img src={gallary3} alt='img' className='hover:transform hover:scale-[1.1] duration-500'  />
        </div>
        <div className='overflow-hidden cursor-pointer' >
            <img src={gallary4} alt='img' className='hover:transform hover:scale-[1.1] duration-500'  />
        </div>
        <div className='overflow-hidden cursor-pointer' >
            <img src={gallary5} alt='img' className='hover:transform hover:scale-[1.1] duration-500'  />
        </div>
        <div className='overflow-hidden cursor-pointer' >
            <img src={gallary6} alt='img' className='hover:transform hover:scale-[1.1] duration-500'  />
        </div>
    </div>
    
   
        </div>


    </section>

    </div>

    <section className='bg-[#1d1d1d] text-[#8b8b8b] mt-[100px] px-4 py-[40px] flex flex-col md:flex-row md:justify-between items-center justify-center text-center'>
    <div className='container mx-auto px-4 flex  flex-col lg:flex-row lg:justify-between  '>
        <div>
            <span>COPYRIGHT &amp; DESIGN BY <span className='text-[#fff] font-bold'>KESTER</span>  - 2023 </span>
    </div>

    <div>
        <ul className='flex  justify-center  pt-4 lg:pt-0'>
            <li className='px-4 hover:text-firstColor duration-500 cursor-pointer'>TERM & CONDITONS</li>
            <li className='px-4 hover:text-firstColor duration-500 cursor-pointer'>FAQ</li>
            <li className='px-4 hover:text-firstColor duration-500 cursor-pointer'>CAREER</li>
        </ul>
    </div>
    </div>
  


    </section>
    </section>
  )
}

export default Footer