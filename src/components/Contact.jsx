import { MdLocationOn } from "react-icons/md";
import { FaRegEnvelopeOpen ,FaPhoneVolume } from "react-icons/fa";

import { BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { TbMessage2Check } from "react-icons/tb";


const Contact = () => {
    
    const contacts= [
        {
            icon: MdLocationOn,
            title:"HEADQUARTERS",
            desc:"236 Dotland Street, STKD NY Frankfurt Germany"
        },
        {
            icon: FaRegEnvelopeOpen,
            title:"MAIL US 24/7",
            desc:"236 Dotland Street, STKD NY Frankfurt Germany"
        },
        {
            icon: FaPhoneVolume,
            title:"SPONSORS ONLY",
            desc:"236 Dotland Street, STKD NY Frankfurt Germany"
        },
    ]

    const form =[
        {
            icon:BsPerson
        },
        {
            icon: HiOutlineMail
        },
        {
            icon:TbMessage2Check
        }
    ]
  return (
    <section className=" bg-white text-white">
    <div className="about-image banner-bg relative py-[150px] ">
    <div className="container px-4 mx-auto text-center z-[1] relative">
          <ul className="flex text-center justify-center gap-5">
              <li className="text-[#e6a3a1] font-normal ">HOME</li>
              <li className="about-before relative font-normal ">CONTACT </li>
          </ul>
          <h1 className="text-5xl md:text-7xl  font-semibold pt-5"> CONTACT US</h1>
    </div>
    
    </div>


    <div className="text-secondColor py-[120px] ">
    <div className="container px-3 mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
    {contacts.map((item, index) => (
      <div key={index} className="flex  border-[1px] border-[#e7e7e7] p-8 group hover:bg-firstColor duration-500  ">
        <div className="bg-[#fff2f3] w-[60px] h-14 flex items-center justify-center ">
          <a><item.icon className="text-firstColor text-xl" /></a>
        </div>
        <div className="ml-3 ">
          <h1 className="text-2xl font-bold  relative pb-5 group-hover:text-white  ">{item.title}
          <span className="absolute  w-[55px] h-[3px] top-[50px] left-0 bg-firstColor  transition-opacity duration-500  group-hover:bg-white"></span>
          </h1>
          <p className="text-[#999999] font-normal font-family pt-8 group-hover:text-white ">{item.desc}</p>
        </div>
      </div>
    ))}

  
  </div>
  
  <div className=" py-[80px] ">
  <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8  mx-auto bg-secondColor p-16">
  <iframe className="w-full h-[410px]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7301.830223850229!2d90.425238!3d23.786037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c781b4c7f3f5%3A0xc93971c0e57c8be6!2sReacThemes!5e0!3m2!1sen!2sbd!4v1713105804465!5m2!1sen!2sbd"  ></iframe>
  
  <div className=" flex gap-5 flex-col ">
  <h1 className="text-[40px] text-[#fff] font-bold">GET IN TOUCH</h1>
  {form.map((item, index) => (
    <div key={index} >
      <a className="flex items-center bg-[#1a1a1a] pl-5">
        {item.icon === BsPerson && (
          <div className="flex items-center ">
            <item.icon className="text-white text-xl" /> 
            <input type="text" placeholder="Your Name" className="bg-[#1a1a1a] text-white placeholder:text-[#737373] h-16 w-full ml-3 focus:outline-none" /> 
          </div>
        )}
        {item.icon === HiOutlineMail && (
          <div className="flex items-center ">
            <item.icon className="text-white text-xl" /> 
            <input type="email" placeholder="Email" className="bg-[#1a1a1a] text-white placeholder:text-[#737373] h-16 w-full ml-3 focus:outline-none" /> 
          </div>
        )}
        {item.icon === TbMessage2Check && (
          <div className="flex items-center  justify-center ">
            <item.icon className="text-white text-xl" /> 
            <input placeholder="Message" className="flex justify-center bg-[#1a1a1a] text-white placeholder:text-[#737373] h-16 w-full ml-3 focus:outline-none" /> 
          </div>
        )}
      </a>  
    </div>
  ))}
  <button className=" w-fit text-white bg-firstColor py-4 px-8 font-bold mt-5 ">LEARN MORE</button>

  </div>
  </div>
  </div>
    </div>
    </section>
  )
}

export default Contact