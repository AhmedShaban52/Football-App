import { PiShoppingCart } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";

import { useDispatch } from "react-redux";
import { addToCart } from "./Slice/CartSlice";
import Slider from "react-slick";
const SliderProducts = () => {
    
    const products = [
        {
            id:"1",
            img:"/images/product1.png",
            title:"GOALKEEPER GLOVES",
            price:"$56.00",
            offer:"$38.00 ",
            sale:"SALE"
        },
        {
            id:"2",
            img:"/images/product2.png",
            title:"MEN FOOTBALL JERSEY",
            price:"$60.00",
            offer:"$42.00 ",
            sale:"SALE"
        },
        {
            id:"3",
            img:"/images/product5.png",
            title:"SPORTS SHOES",
            price:"$96.00",
            offer:"$66.00 ",
            sale:"SALE"
        },
        {
            id:"4",
            img:"/images/product6.png",
            title:"STYLISH CAP",
            price:"$70.00",
            offer:"$30.00 ",
            sale:"SALE"
        },
        {
            id:"5",
            img:"/images/product7.png",
            title:"CLUB JERSEY (NEW)",
            price:"$57.00",
            offer:"$39.00 ",
            sale:"SALE"
        },
        {
            id:"6",
            img:"/images/product8.png",
            title:"CLUB JERSEY (NEW)",
            price:"$57.00",
            offer:"$39.00 ",
            sale:"SALE"
        },
        {
            id:"7",
            img:"/images/product8.png",
            title:"CLUB JERSEY (NEW)",
            price:"$57.00",
            offer:"$39.00 ",
            sale:"SALE"
        }
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
      
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 2, 
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

    const dispatch = useDispatch() 
  return (
    
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index} className="group mt-5 w-full ">
          <div className="border-[1px] h-[350px] mx-3 p-[50px] lg:p-[70px] bg-[#ffffff] relative">
            <img
              src={product.img}
              alt="img"
              className="w-full h-full group-hover:scale-[1.1] duration-500 cursor-pointer"
            />
            <div className="absolute bottom-[20px] left-[50%] translate-x-[-50%] bg-black text-white py-2 w-[180px] flex gap-2 justify-center items-center group-hover:bottom-[30px] opacity-0 group-hover:opacity-100 duration-500 transition-all">
              <PiShoppingCart className="text-[20px] hover:text-firstColor duration-500 cursor-pointer" />
              <CiHeart className="text-[20px] hover:text-firstColor duration-500 cursor-pointer" />
              <IoIosSearch className="text-[20px] hover:text-firstColor duration-500 cursor-pointer" />
              <IoShareSocialOutline className="text-[20px] hover:text-firstColor duration-500 cursor-pointer" />
            </div>
            <a className="absolute top-4 left-5 bg-secondColor text-[14px] w-[70px] h-[25px] text-white text-center font-family flex items-center justify-center">
              {product.sale}
            </a>
          </div>
          <div className="flex flex-col gap-1 ml-3">
            <h1 className="font-[600] text-[20px]">{product.title}</h1>
            <div className="flex gap-2">
              <h1 className="text-firstColor font-[600] font-family group-hover:hidden">{product.offer}</h1>
              <h1 className="throw-decoration group-hover:hidden">{product.price}</h1>
              <span
                onClick={() => dispatch(addToCart(product))}
                className="text-firstColor font-bold hidden group-hover:inline-block group-hover:transition-all duration-1000 relative bottom-1 group-hover:bottom-[0] opacity-0 group-hover:opacity-100 cursor-pointer"
              >
                Add to Cart
              </span>
            </div>
          </div>
        </div>
      ))}
    </Slider>

  )
}

export default SliderProducts