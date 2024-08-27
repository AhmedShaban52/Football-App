import { useState } from "react";
import { FaStar, FaPlus, FaMinus, FaStarHalfAlt , FaShoppingBasket ,FaFacebookF, FaTwitter ,  FaBehance, FaYoutube , FaLinkedin} from "react-icons/fa";
import SliderProducts from "./SliderProducts";
import {motion} from "framer-motion"


const ProductDetails = () => {
  const images = [
    {
      img:'/images/product1.png'
    },
    {
      img:'/images/product4.png'
    },
    {
      img:'/images/product5.png'
    }
  ] 

  const [selectedImage, setSelectedImage] = useState(images[0]?.img || null);

  const handleClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };



  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };


  const icons = [
    {
      icon:FaFacebookF
    },
    {
      icon:FaTwitter
    },
    {
      icon:FaBehance
    },
    {
      icon:FaYoutube
    },
    {
      icon:FaLinkedin
    }
  ] 

  const [selectedYear, setSelectedYear] = useState('Description');
  return (
    <div className=' bg-white text-white'>
    <div className="about-image banner-bg relative py-[150px] ">
    <div className="container px-4 mx-auto text-center z-[1] relative">
        <ul className="flex text-center justify-center gap-5">
            <li className="text-[#e6a3a1] font-normal ">HOME</li>
            <li className="about-before relative font-normal "> DETAILS</li>
        </ul>
        <h1 className=" text-4xl md:text-7xl  font-semibold pt-5">PRODUCT DETAILS</h1>
    </div>
    
    </div>

    <div className="py-[120px]" >
    <div className="flex justify-center">
      {images.map((item, index) => (
        <div
          key={index}
          className="bg-[#f7f7f7] w-[70px] h-[70px] p-3 cursor-pointer"
          onClick={() => handleClick(item.img)} >
          <img src={item.img} alt={`Image ${index}`} className="opacity-100" />
        </div>
      ))}
    </div>
    {selectedImage && (
      <div className="modal   " onClick={closeModal} >
        <motion.div initial={{ y: 100 , opacity: 0}} animate={{ y:0 , opacity:1  }}  transition={{duration : 1}} whileTap={{y: 0, opacity: 1 }} className="modal-content bg-[#f7f7f7] w-full  flex justify-center items-center gap-20 mt-10">
          <span className="close" onClick={closeModal}>&times;</span>
          <motion.img src={selectedImage} alt="Popup Image"   initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}   />
          <motion.img src={selectedImage} alt="Popup Image" className="hidden lg:block"   initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}   />
        </motion.div>
      </div>
    )}
 
    <div className=" container mx-auto px-3 py-5">
  
    <div className=" flex  gap-5">
  
    <span className="py-[2px] px-[10px] text-[14px] text-[#fff] bg-firstColor font-family">FOOTBALL</span>
    <ul className="list-none flex items-center">
      <li>
        <FaStar className="text-firstColor" />
      </li>
      <li>
        <FaStar className="text-firstColor" />
      </li>
      <li>
        <FaStar className="text-firstColor" />
      </li>
      <li>
        <FaStar className="text-firstColor" />
      </li>
      <li>
        <FaStarHalfAlt className="text-firstColor" />
      </li>
    </ul>
    </div>
    <div className="">
    <h1 className="text-2xl font-bold  text-secondColor py-4">WIDE COTTON TUNIC EXTREME HAMMER</h1>
    <div className="flex gap-5">
    <span className="text-[#cfcfcf] text-[20px] font-medium throw-decoration">$90.35     </span>
    <span className="text-firstColor text-3xl font-bold font-family"> $70.25</span>
    </div>
    <p className="max-w-[540px] text-[#777777] font-normal font-family pt-5">
    Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It is a
    completely modern design and you feel comfortable to put on this hijab.
    Buy it at the best price.
    </p>


    <div className=" flex items-center text-secondColor   mt-4 gap-3 ">
    <div className="  py-3  px-5  w-fit border-[1px] border-[#e2e2e2]">
    <button onClick={handleDecrement} className="mr-2  ">
      <FaMinus className="text-[12px] text-[#d3d3d3]"  />
    </button>
    <span>{count}</span>
    <button onClick={handleIncrement} className="ml-2 ">
      <FaPlus className="text-[12px] text-[#d3d3d3]" />
    </button>
    </div>
    <button className='py-3 px-8   uppercase font-bold tracking-[1px]  flex  items-center  gap-3 text-white  bg-firstColor'> ADD TO CART <FaShoppingBasket/> </button>

      </div>

  <div className="text-secondColor flex flex-col pt-5 "  >
    <span className="font-bold font-family">SKU: <span className="text-[#999999] font-normal text-[14px]"> BO1D0MX8SJ </span> </span>
    <span className="font-bold font-family">Categories:  <span className="text-[#999999] font-normal text-[14px]">  T-Shirts, Tops, Mens </span> </span>
    <span className="font-bold font-family">Tags:   <span className="text-[#999999] font-normal text-[14px]">  fashion, t-shirts, Men </span> </span>

    <ul className="flex items-center gap-2 text-[#999999] font-normal pt-4">
    <span className="text-secondColor ">Share:</span>
    {icons.map((icon,index) => (
      <li key={index}><icon.icon className="hover:text-firstColor duration-500 cursor-pointer" /></li>
    ))}
    </ul>

    <div className="flex flex-col md:flex-row gap-5 pt-10">
    <button  onClick={() => setSelectedYear('Description')} className={`${selectedYear  === 'Description' ? 'btn-true' :  'btn-false'} border-[#ebebeb] border-[1px] border-solid `}>Description</button>
    <button  onClick={() => setSelectedYear('Additional information')} className={`${selectedYear  === 'Additional information' ? 'btn-true' :  'btn-false'} border-[#ebebeb] border-[1px] border-solid `}>Additional information</button>
    <button  onClick={() => setSelectedYear('Reviews (2)')} className={`${selectedYear  === 'Reviews (2)' ? 'btn-true' :  'btn-false'} border-[#ebebeb] border-[1px] border-solid `}>Reviews (2)</button>
    <button  onClick={() => setSelectedYear('Size Chart')} className={`${selectedYear  === 'Size Chart' ? 'btn-true' :  'btn-false'} border-[#ebebeb] border-[1px] border-solid `}>Size Chart</button>
   
    </div>
    <div>
    <p className="py-4 font-normal text-[#777777]">
    In marketing a product is an object or system made available for consumer use
    it is anything that can be offered to a market to the desire
    or need of a \retailing, products are often referred to as merchandise, and in
    manufacturing, products are bought as materials and then sold
    as finished goods. A service regarded to as a type of product. Commodities are usually raw
    materials metals and agricultural products,
    but a commodity can also be anything wide the open market. In project management, the formal
    definition of the project deliverables
    some kind of efforts you have on it.
    </p>

    <p className="font-normal text-[#777777]">
    A product can be classified as tangible or intangible. A tangible product is a physical
    object that can be perceived by touch building, vehicle,
    gadget, An intangible product is a product that can only be perceived indirectly such as an
    insurance policy. can be broadly classified under
    intangible be durable or non durable. A product line is "a group of products that are
    closely either because they function in a similar
    manner, are sold to the same customergroups.
    </p>
    
    </div>

    <section>
    <h1 className="text-4xl md:text-5xl mb-5  font-semibold pt-5 text-secondColor">RELATED PRODUCT</h1>
    <SliderProducts/>
    </section>
    </div>

    </div>
  </div>
    </div>
    </div>
  )
}

export default ProductDetails