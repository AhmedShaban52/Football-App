
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <section className='blog-image before-blog relative  bg-secondColor text-white  py-[120px]    '>
    <div className='container mx-auto px-4 text-center  relative  '>
    <h1 className=' font-bold text-2xl lg:text-[28px] tracking-[1px]'>
    WATCH THE LIVE MATCH NOW
    </h1>
    <div className=' mt-10 lg:mt-0'>

    <button className='p-3 text-[14px] mt-8 font-bold flex justify-center items-center mx-auto  gap-3  bg-firstColor'> WATCH LIVE HERE <FaArrowRightLong /> </button>
    
    </div>
  </div>
  </section>
  )
}

export default Blog