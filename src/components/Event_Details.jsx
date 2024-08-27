
import overview from '/images/overview.jpg';
import fs1 from '/images/fs1.jpg';
import fs2 from '/images/fs2.jpg';
import { MdPerson } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { GoClock } from "react-icons/go";
import { IoHomeOutline , IoLocationOutline } from "react-icons/io5";
import { CiMap } from "react-icons/ci";


const Event_Details = () => {
    const icons = [
        {
            icon: MdPerson,
            title: "Name :",
            desc: "Mike Dawson"
        },
        {
            icon: AiOutlinePhone,
            title: "Phone :",
            desc: "8 (800) 123-45-67"
        },
        {
            icon: FaRegEnvelopeOpen,
            title: "Email :",
            desc: "info@example.com"
        },
        {
            icon: FiGlobe,
            title: "Website :",
            desc: "www.webmail.com"
        },
    ];  


    const time = [
       {
        icon: GoClock,
        title:"Start",
        desc:"10:00 AM"
       },
       {
        icon: GoClock,
        title:"Break",
        desc:"8 (800) 123-45-67"
       },
       {
        icon: GoClock,
        title:"End",
        desc:"02:00PM"
       }
    ]


    const info = [
       {
        icon: IoHomeOutline,
        desc:"Donald Stadium",
       },
       {
        icon: CiMap,
        desc:"350 5th Ave, New York",
       },
       {
        icon: IoLocationOutline,
        desc:"United States",
       }
    ]
    return (
        <section className="text-white bg-white">
            <div className="about-image banner-bg relative py-[150px] ">
                <div className="container px-4 mx-auto text-center z-[1] relative">
                    <ul className="flex text-center justify-center gap-5">
                        <li className="text-[#e6a3a1] font-normal ">HOME</li>
                        <li className="about-before relative font-normal ">EVENT DETAILS </li>
                    </ul>
                    <h1 className="text-5xl md:text-7xl  font-semibold pt-5"> EVENT DETAILS</h1>
                </div>
            </div>

            <section className='pt-[120px]'>
                <div className=" container mx-auto px-4  ">
                    <div className='relative'>
                        <img src={overview} className="w-full  " />
                        <div className="absolute bottom-0 pt-4 pb-2 px-4 pl-5 bg-secondColor text-white">
                            <h1 className="text-3xl font-[600]">20</h1>
                            <p className="text-[14px] font-family font-bold">JANUARY</p>
                            <p className="text-[14px] font-family font-bold">2023</p>
                        </div>
                    </div>

                    <section className='text-secondColor'>
                        <h1 className='text-3xl font-[600] py-10'>EVENT OVERVIEW</h1>
                        <p className='text-[#777777] font-normal font-family'>
                            What makes Thomas Tuchel tick? The will to win, of course. His love of football. A
                            constant desire to
                            improve and innovate. But our boss always knows of being able to
                            unwind, so that’s
                            why we have a at Chelsea. Meet Lars, our C R O. A firm believer
                            in the power and
                            art of relaxation, Lars is tasked with bringing smiles to the Chelsea players’ faces,
                            lifting their moods
                            and even, in some cases, booking their family holidays.
                        </p>

                        <p className='text-[#777777] font-normal font-family pt-5'>

                            Earlier this year, official Chelsea Football Club partner trivago supported the Chelsea
                            Foundation and its
                            female participants in the Goal Getters programme, promoting positive female role models
                            under the
                            theme of allyship.

                        </p>
                    </section>
                </div>
            </section>

            <section className=' text-secondColor pt-[50px] '>
                <div className='container mx-auto px-4'>
                    <h1 className='text-3xl font-[600]'>LOCATION</h1>

                    <div className='py-8'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7301.830223850229!2d90.425238!3d23.786037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c781b4c7f3f5%3A0xc93971c0e57c8be6!2sReacThemes!5e0!3m2!1sen!2sbd!4v1712412341925!5m2!1sen!2sbd" className='w-full h-[450px]' allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </section>

            <section className=' text-secondColor  '>
                <div className='container mx-auto px-4'>
                    <h1 className='text-3xl font-[600] py-5'>FACILITIES</h1>
                    <p className='text-[#777777] font-normal font-family '>The Foundation’s Goal Getters platform is a female-targeted programme delivered across secondary schools in the UK and aims to inspire and empower young women to set new goals, embed positive values and connect with other young females. </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pt-8'>
                        <img src={fs1} className='w-full  ' />
                        <img src={fs2} className='w-full  ' />
                    </div>
        <section className='py-[50px] text-secondColor'>
                <div className='border-[1px] border-[#f0f0f0] p-8'>
                <h1 className='text-3xl font-[600] pb-5 border-b-[1px] border-[#f0f0f0]'>ORGANIZER</h1>
                <div>
                <div >
                    {icons.map((icon,index) => (
                    <div key={index} className='flex pt-5  items-center'>
                    <a className='icon flex justify-center items-center'><icon.icon className='text-firstColor'/></a>
                    <span className='font-bold font-family'>{icon.title}</span>
                    <a className='text-[#777777] font-normal font-family '>  {icon.desc}</a>
                    </div>

                    ))}
                    </div>

                </div>
            </div>

            <div className='border-[1px] border-[#f0f0f0] p-8 mt-10'>
            <h1 className='text-3xl font-[600] pb-5 border-b-[1px] border-[#f0f0f0]'>TIME & DATE</h1>

            <div>
            <div >
                {time.map((icon,index) => (
                <div key={index} className='flex pt-5  items-center'>
                <a className='icon flex justify-center items-center'><icon.icon className='text-firstColor'/></a>
                <span className='font-bold font-family'>{icon.title}</span>
                <a className='text-[#777777] font-normal font-family '>{icon.desc}</a>
                </div>
                ))}
                </div>
            </div>
        </div>

        <div className='border-[1px] border-[#f0f0f0] p-8 mt-10'>
        <h1 className='text-3xl font-[600] pb-5 border-b-[1px] border-[#f0f0f0]'>VENUE</h1>
        <div>
        <div >
            {info.map((icon,index) => (
            <div key={index} className='flex pt-5  items-center'>
            <a className='icon flex justify-center items-center'><icon.icon className='text-firstColor'/></a>
            <a className='text-[#777777] font-normal font-family '>{icon.desc}</a>
            </div>

            ))}
            </div>
            
        </div>
    </div>
    
    </section>
            </div>
            </section>
        </section>
    )
}

export default Event_Details;
