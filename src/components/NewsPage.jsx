
import { FaEye ,  FaCalendarAlt , } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { BiChevronRight } from "react-icons/bi";



const NewsPage = () => {

    const feeds = [
        {
            img:"/images/feed1.jpg",
            title:"SERVICE CONSTRUCT DEALS PHYSICAL DAMAG0 WITHHIS BASIC ATTACK IN THE MATCH.",
            desc:"Novia's spaciously two bedroom apartments are perfect for families and even business partners. Look out into the Manhattan skyline from the open fully equipped kitchen.",
            catagory:"BUSINESS, DESIGN",
            img2:"/images/author8.png",
            atherName:"BY HETMAYAR",
            icon:FaEye,
            icon2:FaComments,
            icon3:FaCalendarAlt,
            view:"100 views",
            comment:"30 comment",
            time:" 24th June 2023"
        },
        {
            img:"/images/feed2.jpg",
            title:"SERVICE CONSTRUCT DEALS PHYSICAL DAMAG0 WITHHIS BASIC ATTACK IN THE MATCH.",
            desc:"Novia's spaciously two bedroom apartments are perfect for families and even business partners. Look out into the Manhattan skyline from the open fully equipped kitchen.",
            catagory:"BUSINESS, DESIGN",
            img2:"/images/author8.png",
            atherName:"BY HETMAYAR",
            icon:FaEye,
            icon2:FaComments,
            icon3:FaCalendarAlt,
            view:"100 views",
            comment:"30 comment",
            time:" 24th June 2023"
        },
        {
            img:"/images/feed3.jpg",
            title:"SERVICE CONSTRUCT DEALS PHYSICAL DAMAG0 WITHHIS BASIC ATTACK IN THE MATCH.",
            desc:"Novia's spaciously two bedroom apartments are perfect for families and even business partners. Look out into the Manhattan skyline from the open fully equipped kitchen.",
            catagory:"BUSINESS, DESIGN",
            img2:"/images/author8.png",
            atherName:"BY HETMAYAR",
            icon:FaEye,
            icon2:FaComments,
            icon3:FaCalendarAlt,
            view:"100 views",
            comment:"30 comment",
            time:" 24th June 2023"
        }
    ]


    const blogs = [
        {
            img:"/images/quickblog1.jpg",
            title:"Having education in an area helps",
            icon:FaCalendarAlt,
            time:" 24th March 2023"
        },
        {
            img:"/images/quickblog2.png",
            title:"People think, feel, & behave in a way",
            icon:FaCalendarAlt,
            time:" 24th March 2023"
        },
        {
            img:"/images/quickblog3.png",
            title:"That contributes to their success",
            icon:FaCalendarAlt,
            time:" 24th March 2023"
        }
    ]



    const categories = [
        {
            link:"Business",
            number:"26"
        },
        {
            link:"Consultant",
            number:"30"
        },
        {
            link:"Creative",
            number:"71"
        },
        {
            link:"UI/UX",
            number:"56"
        },
        {
            link:"Technologys",
            number:"60"
        }
    ]
  return (
    <section className="bg-white text-white">
    <div className="about-image banner-bg relative py-[150px] ">
    <div className="container px-4 mx-auto text-center z-[1] relative">
          <ul className="flex text-center justify-center gap-5">
              <li className="text-[#e6a3a1] font-normal ">HOME</li>
              <li className="about-before relative font-normal ">NEWS</li>
          </ul>
          <h1 className="text-5xl md:text-7xl font-semibold pt-5">LATEST NEWS</h1>
    </div>
    
    </div>

    <section className=" text-secondColor pt-[120px]">
    <div className="container px-3 mx-auto flex flex-wrap  md:flex-nowrap  basis-auto  gap-5 ">
    <div className="flex justify-center items-center flex-col pb-[50px]  gap-5">
      {feeds.map((feed, index) => (
      <div key={index}   >
        <img src={feed.img}  />
          
        <div className="px-5 pt-[50px]  relative border-[1px] border-[#eeeeee]">
        <div className="absolute top-[-30px]  justify-between  w-full  hidden md:flex ">
        <div className="w-fit">
            <h1 className="py-[7px] px-[15px] bg-firstColor text-white  ">{feed.catagory}</h1>
        </div>
            
        <div className="flex  items-center bg-[#fff] filter drop-shadow-lg p-2 w-[200px]   mr-[50px] lg:mr-[100px]">
            <img src={feed.img2} />
            <h1 className="text-secondColor font-bold ml-3">{feed.atherName}</h1>
        </div>
       </div>
          <h1 className="text-2xl font-bold">{feed.title}</h1>
          <p className="text-[#777777] font-normal border-b-[1px] border-b-[#e7e7e7] py-8 font-family">{feed.desc}</p>

          <div className="flex items-center w-full py-5 flex-wrap gap-5 " >
           <a className="flex items-center text-[#777777]"> <feed.icon  className=" text-secondColor mr-4"/> {feed.view}  </a> 
           <span className="bg-[#d0d0d0] mx-5 w-[1px] h-3  hidden md:inline-block"></span>
           <a className="flex items-center text-[#777777]"> <feed.icon2 className=" text-secondColor mr-4" /> {feed.comment}  </a> 
           <span className="bg-[#d0d0d0] mx-5 w-[1px] h-3   hidden md:inline-block"></span>
           <a className="flex items-center text-[#777777]"> <feed.icon3 className=" text-secondColor mr-4" /> {feed.time}  </a> 

          </div>
        </div>
      </div>
      ))}
    </div>
  
    <div className="flex basis-auto flex-grow flex-col w-full lg:w-[50%] ">
    <div className="sticky top-0">
    <h1 className="before-title2 after-title2 relative pb-4 mb-10 font-[600] text-xl tracking-[-1px]">SEARCH HERE</h1>
    <div className="flex"> 
        <input placeholder='KeyWord...' type='number' className='w-full border-[1px] border-firstColor px-6 pl-4 py-2 focus:outline-none' />
        <button className='py-2 px-5 font-bold tracking-[1px] flex items-center gap-3 text-white bg-firstColor'>
            <IoIosSearch/>
        </button>
    </div>
    <div>
        <h1 className="before-title2 after-title2 relative pb-4 mt-10 font-[600] text-xl tracking-[-1px]">POPULAR FEEDS</h1>
        <div className="pt-10 flex flex-col gap-5">
            {blogs.map((blog,index) => (
                <div key={index} className="flex">
                    <img src={blog.img} className="hover:scale-[1.1] duration-500 cursor-pointer" />
                    <div className="ml-5">
                        <h1 className="font-[600] duration-700 hover:text-firstColor cursor-pointer uppercase">{blog.title}</h1>
                        <span className="flex items-center pt-2"> <blog.icon /> <p className="ml-2 text-[#777777] font-family w-full">{blog.time} </p> </span> 
                    </div>
                </div>
            ))}
        </div>
    </div>

    <div >
    <h1 className="before-title2 after-title2 relative pb-4 mt-10 font-[600] text-xl tracking-[-1px]">CATEGORIES </h1>
    <ul className="pt-5 pb-10">
    {categories.map((cat,index) => (
        <li className="text-[#777777] flex-element w-full gap-2 py-3 " key={index}> <a><BiChevronRight/> </a> <li className="flex-element w-full">{cat.link}   <a className="text-secondColor text-[14px] font-bold">{cat.number}</a>  </li>    </li>
    ))}
    </ul>
    </div>
    </div>
</div>

  
  </div>
  

  

    </section>
    </section>
  )
}

export default NewsPage