import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GoPlus } from "react-icons/go";


const Gallary = () => {
    const data = [
        {
            id:"1",
            img:"/images/full1.png"
        },
        {
            id:"2",
            img:"/images/full2.png"
        },
        {
            id:"3",
            img:"/images/full3.png"
        },
        {
            id:"4",
            img:"/images/full4.png"
        },
        {
            id:"5",
            img:"/images/full5.png"
        },
        {
            id:"6",
            img:"/images/full6.png"
        }
    ]

    const [model, setModel] = useState(false)
    const [temImgSrc, setTemImgSrc] = useState('')
    const getImg = (img) => {
        setTemImgSrc(img)
        setModel(true)
    }
  return (
    <section className=" text-white ">
    <div className="about-image banner-bg relative py-[150px] ">
    <div className="container px-4 mx-auto text-center z-[1] relative">
          <ul className="flex text-center justify-center gap-5">
              <li className="text-[#e6a3a1] font-normal ">HOME</li>
              <li className="about-before relative font-normal ">GALLARY</li>
          </ul>
          <h1 className="text-5xl md:text-7xl  font-semibold pt-5">OUR GALLARY</h1>
    </div>
    
    </div>

    <div className="bg-white py-[120px] text-center ">
    <div className="container mx-auto px-5">
    <div className={model ? "model open" : "model"}>
          <img src={temImgSrc} />
          <IoCloseSharp onClick={() => setModel(false)} />
    </div>
    <div className="gallary grid grid-cols-1 sm:grid-cols-2  mt-5 gap-10 ">
       {data.map((item,index) => {
           return (
               <div className="pics relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-firstColor  before:z-[2] before:opacity-0 group  before:hover:opacity-90 overflow-hidden  " key={index} onClick={() => getImg(item.img)}>
               <img src={item.img} className="w-full  object-cover group-hover:scale-[1.1] duration-500  " />
               <div className="absolute top-[50%] left-[50%] w-[40px] h-[40px] rounded-[50%] bg-white flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:scale-[1.1] group-hover:transition-all duration-500 ">
                    <GoPlus className="z-[5] relative text-secondColor" />
               </div>
               </div>
           )
       })}
    </div>
    </div>
  
    </div>
    </section>
   
  )
}

export default Gallary