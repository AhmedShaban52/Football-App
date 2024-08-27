import { AccordionCustomIcon } from "./Accordion"

import img1 from "/images/section1.png"
import img2 from "/images/aboutthumb.jpg"

const FAQ = () => {
    
  return (
    <section className="bg-white text-white  ">
    <div className="about-image banner-bg relative py-[150px] ">
    <div className="container px-4 mx-auto text-center z-[1] relative">
          <ul className="flex text-center justify-center gap-5">
              <li className="text-[#e6a3a1] font-normal uppercase">Home</li>
              <li className="about-before relative font-normal uppercase">FAQ</li>
          </ul>
          <h1 className="text-7xl uppercase font-semibold pt-5">FAQ</h1>
    </div>
    </div>

    <div className="pt-[120px] pb-[50px] container px-5  mx-auto  flex flex-col flex-wrap lg:flex-nowrap md:flex-row ">
        <img src={img1} className="w-full h-full lg:w-[450px] lg:h-[450px] "  />
       
        <div className="ml-5 text-center flex flex-col justify-center">
        <AccordionCustomIcon/>
     
        </div>
        </div>
        <div className=" container px-5  mx-auto flex flex-col flex-wrap lg:flex-nowrap md:flex-row bg-[#f5f5f5] pt-[50px] pb-[150px] ">
        <div className="mr-5 text-center flex flex-col justify-center">
        <AccordionCustomIcon/>
        </div>

        <img src={img2} className="w-full h-full lg:w-[450px] lg:h-[450px] "  />
        </div>
      
    </section>
  )
}

export default FAQ