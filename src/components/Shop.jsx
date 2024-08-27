
import { IoShareSocialOutline , IoSearchOutline } from "react-icons/io5";
import { PiShoppingCart } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Slice/CartSlice";

import { FaStar , FaListUl} from "react-icons/fa";
import gridImg from '/images/grid-icon.svg'
import listImg from '/images/list-icon.png'
import { Link } from "react-router-dom";


const Shop = () => {

    const products = [
        {
            id:"1",
            img:"/images/product1.png",
            title:"GOALKEEPER GLOVES",
            price:"56.00",
            offer:"38.00 ",
            sale:"SALE"
        },
        {
            id:"2",
            img:"/images/product2.png",
            title:"MEN FOOTBALL JERSEY",
            price:"60.00",
            offer:"42.00 ",
            sale:"SALE"
        },
        {
            id:"3",
            img:"/images/product3.png",
            title:"MEN FOOTBALL TARF (NEW)",
            price:"56.00",
            offer:"38.00 ",
            sale:"SALE"
        },
        {
            id:"4",
            img:"/images/product4.png",
            title:"NEW WORLD CUP FOOTBALL",
            price:"36.00",
            offer:"20.00 ",
            sale:"SALE"
        },
        {
            id:"5",
            img:"/images/product5.png",
            title:"SPORTS SHOES",
            price:"96.00",
            offer:"66.00 ",
            sale:"SALE"
        },
        {
            id:"6",
            img:"/images/product6.png",
            title:"STYLISH CAP",
            price:"70.00",
            offer:"30.00 ",
            sale:"SALE"
        },
        {
            id:"7",
            img:"/images/product7.png",
            title:"CLUB JERSEY (NEW)",
            price:"57.00",
            offer:"39.00 ",
            sale:"SALE"
        },
        {
            id:"8",
            img:"/images/product8.png",
            title:"CLUB JERSEY (NEW)",
            price:"57.00",
            offer:"39.00 ",
            sale:"SALE"
        },
        {
            id:"9",
            img:"/images/product8.png",
            title:"CLUB JERSEY (NEW)",
            price:"57.00",
            offer:"39.00 ",
            sale:"SALE"
        }
    ]

    const cart = useSelector((state) => state.cart)
    console.log(cart);
 const dispatch = useDispatch() 


 const links = [
    {
        link:"ACCESSORIES (2)"
    },
    {
        link:"BAGPACKS (2)"
    },
    {
        link:"CLOTHES (4)"
    },
    {
        link:"SHOES (5)"
    },
 ]

 const images = [
    {
        img:"/images/small-post1.png",
        icon:FaStar,
        title:"INDIOMANE CAP",
        price:"$38.00"
    },
    {
        img:"/images/small-post2.png",
        icon:FaStar ,
        title:"INDIOMANE CAP",
        price:"$38.00"
    },
    {
        img:"/images/small-post3.png",
        icon:FaStar ,
        title:"INDIOMANE CAP",
        price:"$38.00"
    },
 
 ]

 const links2 = [
    {
        link:"INDIOMANE"
    },
    {
        link:"CAP"
    },
    {
        link:"JERSEY"
    },
    {
        link:"FITA"
    },
    {
        link:"FOOTBALL"
    },
    {
        link:"PANT"
    },
    {
        link:"SHOES"
    },
    {
        link:"TAO"
    },
    {
        link:"SPORTS"
    },
    {
        link:"FITNESS"
    },
    {
        link:"HEALTH"
    },
 ]
  return (
    <section className="text-white bg-white ">
    <div className="about-image banner-bg relative py-[150px] ">
    <div className="container px-4 mx-auto text-center z-[1] relative">
        <ul className="flex text-center justify-center gap-5">
            <li className="text-[#e6a3a1] font-normal ">HOME</li>
            <li className="about-before relative font-normal ">SHOP</li>
        </ul>
        <h1 className="text-7xl  font-semibold pt-5">OUR SHOP</h1>
    </div>
    
    </div>


    <section className="py-[120px]">
    <div className="container mx-auto px-3 flex flex-wrap lg:flex-nowrap  ">
    
    <div className="text-secondColor  flex flex-col basis-auto flex-grow w-full lg:w-[25%] ">
    <h1 className="font-bold text-3xl">SEARCH HERE</h1>
  
    <form className=" flex mt-8" >
    <input type="email" placeholder="Enter Your Email" className="bg-[#f6f6f6] p-4 w-full lg:w-fit"  />
    <button aria-label="Aria Name" className="bg-firstColor p-4"> <IoSearchOutline  className="text-white"/> </button>
    </form>

    <div className="mt-8" >
        <h1  className="font-bold text-2xl">FILTER BY PRICE</h1>
        <p className="pt-4">Price: 100 $ - 500 $</p>
        <button aria-label="Aria Name" className="bg-firstColor text-white p-1 px-5 mt-5">FILTER </button>
    </div>

    <div className="py-8">
    <h1  className="font-bold text-2xl">GATAGORIES</h1>
    <ul className="pt-3">
        {links.map((link,index) => (
            <li key={index} className="text-[#777777] text-[14px] font-family relative py-2 pl-4 before:absolute before:top-[50%] before:transform before:translate-y-[-50%] before:left-0  before:rounded-[50%] before:w-[5px] before:h-[5px] before:bg-[#777777]">{link.link}</li>
        ))}
    </ul>
    </div>

    <div>
    <h1  className="font-bold text-2xl">BEST SELLER</h1>
        {images.map((img,index) => (
            <div  key={index} className="flex ">
            <div className="flex  my-3" >
                <img  src={img.img}  />
            </div>
            <div className="ml-5">
            <ul className="flex my-3">
                <img.icon className="text-firstColor"></img.icon>
                <img.icon className="text-firstColor"></img.icon>
                <img.icon className="text-firstColor"></img.icon>
                <img.icon className="text-firstColor"></img.icon>
                <img.icon className="text-[#777777]"></img.icon>
            </ul>
            <div className="flex flex-col">
            <a className="font-bold mb-3 ">{img.title}  </a>
            <a className="text-firstColor font-family font-bold">{img.price}</a>
            
            </div>
            </div>
            </div>
        ))}
    </div>

    <div >
    <h1  className="font-bold text-2xl py-4">POPULAR TAGS</h1>
    <ul  className="flex flex-wrap">
       {links2.map((link,index) => (
        <li key={index} className="py-[5px] px-2 bg-[#f3f3f3] my-1 mr-2 w-fit hover:bg-firstColor hover:text-white duration-500 cursor-pointer">{link.link}</li>
        ))}
        </ul>
    </div>

    </div>

    
    <div className="text-secondColor lg:mx-2">
    <div className="flex justify-between flex-col lg:flex-row   mt-10  lg:m-0  ">
        <h1 className="font-bold "> <span className="text-firstColor font-bold">30</span> ITEM IN LIST</h1>
   
    <div className="flex items-center gap-[30px] lg:gap-0   justify-between mt-4 " >
    <a className="flex text-center items-center   lg:mr-14 font-bold"> <FaListUl className=" text-firstColor mr-2 " />   FILTER  </a>
    <a className="ml-8  font-bold">SHOW</a>
    <select className=" lg:mx-5 font-bold focus:outline-none" >
        <option value="1" className="bg-secondColor text-white" >12</option>
        <option value="1" className="bg-secondColor text-white" >8</option>
        <option value="1" className="bg-secondColor text-white" >6</option>
        <option value="1" className="bg-secondColor text-white" >4</option>
        <option value="1" className="bg-secondColor text-white" >2</option>
    </select>
        <div className="flex ">
        <img src={gridImg} alt="img" className="mr-5" />
        <img src={listImg} alt="img" className="w-6 h-4" />
        </div>
    </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4   text-secondColor">
    {products.map((product,index) => (
        <div key={index} className="group mt-5 w-full">
        <div className="border-[1px] h-[275px] p-[80px] lg:p-[55px] bg-[#ffffff] relative flex justify-center items-center">
        <Link to={`/shop/${product.id}`} className=" flex items-center justify-center"> <img src={product.img} alt="img" className=" group-hover:scale-[1.1] duration-500 cursor-pointer" /></Link>   
            <div className="absolute bottom-[20px] left-[50%] translate-x-[-50%] bg-black text-white py-2 w-[180px] flex gap-2 justify-center items-center group-hover:bottom-[30px] opacity-0 group-hover:opacity-100 duration-500 transition-all"> 
        <PiShoppingCart className="text-[20px] hover:text-firstColor duration-500 cursor-pointer" /> <CiHeart className="text-[20px] hover:text-firstColor duration-500 cursor-pointer" /> <IoIosSearch className="text-[20px] hover:text-firstColor duration-500 cursor-pointer" /> <IoShareSocialOutline className="text-[20px] hover:text-firstColor duration-500 cursor-pointer" />

        </div>
            <a className="absolute top-5 right-5 bg-secondColor text-[14px] w-[70px] h-[25px] text-white text-center font-family  flex items-center justify-center" >{product.sale}</a>
        </div>
        <div className="flex flex-col gap-1">
            <h1 className="font-[600] text-[20px]">{product.title}</h1>
        <div className="flex gap-2">
            <h1 className="text-firstColor font-[600] font-family group-hover:hidden">${product.offer}</h1>
            <h1 className="throw-decoration group-hover:hidden">${product.price}</h1>
            <span onClick={() => dispatch(addToCart(product))} className="text-firstColor  font-bold hidden group-hover:inline-block group-hover:transition-all duration-1000 relative bottom-1 group-hover:bottom-[0] opacity-0 group-hover:opacity-100 cursor-pointer">Add to Cart</span>
        </div>
        </div>
    </div>
    ))}
    </div>
    </div>
   
    </div>
    </section>
    </section>
  )
}

export default Shop