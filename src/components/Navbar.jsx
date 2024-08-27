
import { MdEmail } from "react-icons/md";
import logo from '/images/logo.png'

import { PiShoppingCart } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose ,IoIosArrowDown  } from "react-icons/io";

import { FaFacebookF ,  FaTwitter , FaBehance  } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";


import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [showPages, setShowPages] = useState(false);
    const [showShop, setShowShop] = useState(false);
    const [showNews, setShowNews] = useState(false);

const handleClose = () => {
    setOpen(false);
}

const togglePages = () => {
    setShowPages(!showPages);
};
const toggleShop = () => {
    setShowShop(!showShop);
};
const toggleNews = () => {
    setShowNews(!showNews);
};

  return (
    <header className="bg-secondColor fixed top-0 w-full  z-10">
    {open && (
        <div onClick={handleClose} className="fixed inset-0 bg-black opacity-80 z-[1]"> </div>
    )}
    <section className="container mx-auto px-5 py-3  flex-element ">
    <button className="subscribe-button text-white hover:bg-firstColor duration-500 py-[10px] px-7 tracking-[1px] h-full flex items-center text-center  text-[14px] border-[1px] uppercase font-[600] border-[#2a2a2a]">
    <MdEmail className="mr-2" /> Subscribe
  </button>
    <img src={logo} alt='logo' className="cursor-pointer" />

    <div className='flex items-center text-white  gap-2 '>
   <div className="p-[10px] border-2 border-[#2a2a2a] hover:bg-firstColor  duration-300 cursor-pointer ">
    <PiShoppingCart className={`w-[22px] h-[22px]   `} /> 
    </div> 
    <div onClick={() => setOpen(!open)} className="border-[2px] h-[14px] w-full  py-5 px-5  border-[#2a2a2a] hover:bg-firstColor duration-300 cursor-pointer group relative ">
        <span className="span-menu  top-[10px]   group-hover:rotate-[45deg]  "></span>
        <span className="w-[18px] h-[2px] bg-white absolute top-[20px]  left-[30%] group-hover:opacity-0 duration-300"></span>
        <span className="span-menu top-[30px]   group-hover:rotate-[-45deg]   "></span>
    </div>

    <div className={`text-white h-full w-[65%]  fixed px-7 top-0  ${open? "right-0" :"right-[-100%]"} duration-500  bg-secondColor overflow-y-auto overflow-x-hidden  z-[1]`}>
        <button aria-label="Aria Name" onClick={() => setOpen(!open)} className=" px-3 py-2 text-secondColor text-[20px] mt-3  right-5  absolute group-hover:rotate-[45deg]  hover:text-firstColor duration-700  bg-white"><IoMdClose  /> </button>
    <div className="relative  top-0 ">
    <div className="flex justify-center py-10 mt-10">
    <img src={logo} alt="img"  />
    </div>
    
    <div >
    <ul className="h-full text-left" >
        <li className="border-bootom pb-2" > 
            <Link to='/' className=" main-link">Home</Link> 
        </li>  
        <li className="border-bootom py-3">  
            <Link to ='/about' className="main-link">About</Link> 
        </li>  
        <li className=" border-bootom py-3 w-full relative "> 
        <a  onClick={togglePages} className="main-link   ">
          Pages 
        </a>
        <a className="absolute left-[92%]" >  <IoIosArrowDown className={`w-[25px] h-[25px] bg-firstColor text-white duration-300 absolute  ${showPages ? "transform rotate-[180deg]" : ""}  `} /> </a>  
        {showPages && (
          <ul className="pl-8">
            <li className="py-3"> <Link to='/team details' className=" sub-link">Team Details</Link>  </li>
            <li className="py-3"> <Link to='/history' className=" sub-link">History</Link>  </li>
            <li className="py-3"> <Link to='/faq' className=" sub-link">FAQ</Link>  </li>
            <li className="py-3"> <Link to='/gallary' className=" sub-link">Gallery</Link>  </li>
            <li className="py-3"> <Link to='/event' className=" sub-link">Event</Link>  </li>
            <li className="py-3"> <Link to='/event details' className=" sub-link">Event Details</Link>  </li>
            <li className="py-3"> <Link to='/match schedule' className=" sub-link">Match Schedule</Link>  </li>
            <li className="py-3"> <Link to='/match result' className=" sub-link">Match Result</Link>  </li>
            <li className="py-3"> <Link to='/point table' className=" sub-link">Point Table</Link>  </li>
          </ul> 
        )}
      </li>  
      <li className=" border-bootom py-2 relative"> 
      <a className="absolute left-[92%]"><IoIosArrowDown className={`w-[25px] h-[25px] bg-firstColor text-white duration-300 absolute   ${showShop ? "transform rotate-[180deg]" : ""}  `} /></a>
      <a onClick={toggleShop} className="main-link  element-center ">
        Shop 
      </a>
      {showShop && (
        <ul className="pl-7">
          <li className="py-3"> <Link to='/shop' className=" sub-link">Shop</Link>  </li>
          <li className="py-3"> <Link to="/product details" className=" sub-link">Product Details</Link>  </li>
          <li className="py-3"> <Link to="/cart" className=" sub-link">Cart</Link>  </li>
        </ul> 
      )}
    </li>    
    <li className=" border-bootom py-2 relative"> 
    <a onClick={toggleNews} className="main-link  element-center ">
  <a className="absolute left-[92%]"><IoIosArrowDown className={`w-[25px] h-[25px] bg-firstColor text-white duration-300 absolute  ${showNews ? "transform rotate-[180deg]" : ""}  `} />  </a>  
        News 
    </a>
    {showNews && (
      <ul className="pl-7">
        <li className="py-4"> <Link to="/news" className=" sub-link">News</Link>  </li>
      </ul> 
    )}
  </li>  
        <li className=" border-bootom py-3"> 
            <Link to="/contact" className="main-link">Contact</Link> 
        </li>  
    </ul>
    <section className="flex gap-2 items-center justify-center mt-10 ">
    <a className="socail-icon">   <FaFacebookF/> </a>
    <a className="socail-icon">   <FaTwitter/>  </a>
    <a className="socail-icon">   <FaBehance/>  </a>
    <a className="socail-icon">   <FaYoutube/>  </a>

    </section>
    </div>
    </div>

    </div>

   </div>
    </section>

    <section className="text-white hidden lg:block ">
    <div className="container  mx-auto  flex justify-between">
    <ul className="flex ">
        <li className=" text-firstColor list-style ">
            <Link to="/">HOME</Link>
        </li>
        <li className="list-style ">
            <Link to="/about">ABOUT</Link>
        </li>
        <li className="list-style relative group">
            <a>PAGES</a>
            <ul className=" grid grid-cols-3  absolute top-16 bg-white text-secondColor p-5 w-[500px] h-[160px] invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:top-14 duration-700  border-t-4 border-firstColor ">
            <li>
            <ul>
                <li className="py-2"><Link to="/team details" className="sub-link"> TEAM DETAILS </Link> </li>
                <li className="py-2"><Link to="/history" className="sub-link"> HISTORY </Link> </li>
                <li className="py-2"><Link to="/faq" className="sub-link"> FAQ</Link> </li>
            </ul>
            </li>

            <li >
            <ul>
                <li className="py-2" ><Link to="/gallary" className="sub-link"> GALLARY </Link> </li>
                <li className="py-2" ><Link to="/event" className="sub-link"> EVENT </Link> </li>
                <li className="py-2" ><Link to="/event details" className="sub-link"> EVENT DETAILS </Link> </li>
            </ul>
            </li>

            <li >
            <ul>
                <li className="py-2"> <Link to="/match schedule" className="sub-link"> MATCH SCHEDULE  </Link> </li>
                <li className="py-2"> <Link to="match result" className="sub-link"> Match RESULT  </Link> </li>
                <li className="py-2"> <Link to="/point table" className="sub-link"> POINT TABLE </Link> </li>
            </ul>
            </li>
            
            </ul>
          
        </li>
        <li className="list-style relative group">
            <a >SHOP</a>
            <ul className="grid absolute top-16 bg-white text-secondColor  w-[180px] h-[145px] invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:top-14 duration-700  border-t-4 border-firstColor ">
            <li>
            <ul>
                <li className=" border-b-[1px] border-bottom p-3"><Link to="/shop" className="sub-link "> SHOP </Link> </li>
                <li className=" border-b-[1px] border-bottom p-3" ><Link to="/product details" className="sub-link">PRODUCT DETAILS </Link> </li>
                <li className="  p-3" ><Link to="/cart" className="sub-link"> CART </Link> </li>
            </ul>
            </li>

         
            
            </ul>
        </li>
        <li className="list-style ">
            <Link to="/news">NEWS</Link>
        </li>
        <li className="list-style ">
            <Link to="/contact">CONTACT</Link>
        </li>
    </ul>
    <div className="flex justify-center items-center">
    <IoSearchOutline className="mr-2" /> <input placeholder="SEARCH HERE..."  className="w-[80px] bg-secondColor"/>
    </div>
    </div>
    </section>
 
    </header>
  )
}

export default Navbar




