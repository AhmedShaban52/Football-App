
import { MdKeyboardDoubleArrowRight , MdKeyboardDoubleArrowLeft } from "react-icons/md";


const Event = () => {
    const events =[
        {
            img:"/images/event1.jpg",
            title:"How Do You GEt Ready For Match?",
            desc:"Welcome to the official Sportius FC website.Get all the latest news, videos and ticket info as well as player profiles.",
            day:"20",
            month:"JANUARY",
            year:"2023",
        },
        {
            img:"/images/event2.jpg",
            title:"It's What you Were Waiting for This...",
            desc:"Welcome to the official Sportius FC website.Get all the latest news, videos and ticket info as well as player profiles.",
            day:"20",
            month:"JANUARY",
            year:"2023",
        },
        {
            img:"/images/event3.jpg",
            title:"Are You Ready For New Season?",
            desc:"Welcome to the official Sportius FC website.Get all the latest news, videos and ticket info as well as player profiles.",
            day:"20",
            month:"JANUARY",
            year:"2023",
        },
        {
            img:"/images/event4.jpg",
            title:"Win a Jersey Of kester New Sign.",
            desc:"Welcome to the official Sportius FC website.Get all the latest news, videos and ticket info as well as player profiles.",
            day:"20",
            month:"JANUARY",
            year:"2023",
        },
        {
            img:"/images/event5.jpg",
            title:"Win Two Tickets For Kester VS Madrid",
            desc:"Welcome to the official Sportius FC website.Get all the latest news, videos and ticket info as well as player profiles.",
            day:"20",
            month:"JANUARY",
            year:"2023",
        },
        {
            img:"/images/event6.jpg",
            title:"How Do You GEt Ready For Match?",
            desc:"Welcome to the official Sportius FC website.Get all the latest news, videos and ticket info as well as player profiles.",
            day:"20",
            month:"JANUARY",
            year:"2023",
        },
        {
            img:"/images/event7.jpg",
            title:"Win a Jersey Of kester New Sign.",
            desc:"Welcome to the official Sportius FC website.Get all the latest news, videos and ticket info as well as player profiles.",
            day:"20",
            month:"JANUARY",
            year:"2023",
        },
        {
            img:"/images/event8.jpg",
            title:"How Do You GEt Ready For Match?",
            desc:"Welcome to the official Sportius FC website.Get all the latest news, videos and ticket info as well as player profiles.",
            day:"20",
            month:"JANUARY",
            year:"2023",
        },
        {
            img:"/images/event9.jpg",
            title:"It's What you Were Waiting for This...",
            desc:"Welcome to the official Sportius FC website.Get all the latest news, videos and ticket info as well as player profiles.",
            day:"20",
            month:"JANUARY",
            year:"2023",
        },
    ]

    const btns =[
        {
            number:"02",
        },
        {
            number:"---",
        },
        {
            number:"07",
        },
        {
            number:"08",
        },
    ]
return (
    <section className="text-white">
    <div className="about-image banner-bg relative py-[150px] ">
    <div className="container px-4 mx-auto text-center z-[1] relative">
        <ul className="flex text-center justify-center gap-5">
            <li className="text-[#e6a3a1] font-normal ">HOME</li>
            <li className="about-before relative font-normal ">EVENT</li>
        </ul>
        <h1 className="text-5xl md:text-7xl  font-semibold pt-5">OUR EVENT</h1>
    </div>
    

    </div>

    <section className=" bg-white text-secondColor py-[120px]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-5">
            {events.map((event,index) => (
                <div key={index}  className="group">
                <div className="relative overflow-hidden">
                    <img src={event.img} className="w-full group-hover:scale-[1.1] duration-700" />
                    <div className="absolute bottom-0 pt-4 pb-2 px-4 pl-5 bg-secondColor text-white">
                        <h1 className="text-3xl font-[600]">{event.day}</h1>
                        <p className="text-[14px] font-family font-bold">{event.month}</p>
                        <p className="text-[14px] font-family font-bold">{event.year}</p>
                    </div>
                </div>

                <div className="py-4">
                    <h1 className="text-2xl font-[600] cursor-pointer hover:text-firstColor duration-500">{event.title}</h1>
                    <p className="text-[#777777] font-normal font-family pt-4">{event.desc}</p>
                </div>
                </div>
            ))}

            </div>
            <div className=" container mx-auto  px-4 lg:px-10 flex flex-row gap-2 pt-8">
            <button className="w-[50px] h-[50px] hover:bg-firstColor hover:text-white duration-500  border-[1px] border-[#f0f0f0] flex justify-center items-center"><MdKeyboardDoubleArrowRight className="text-secondColor " /> </button>
            <button className="w-[50px] h-[50px] bg-firstColor text-white border-[1px] border-[#f0f0f0] flex justify-center items-center text-[14px] font-bold font-family">01 </button>
            {btns.map((btn,index) => (
                <div key={index} >
                <button className="w-[50px] h-[50px] hover:bg-firstColor hover:text-white duration-500 border-[1px] border-[#f0f0f0] flex justify-center items-center text-[14px] font-bold font-family">{btn.number}</button>
                </div>
            ))}
            <button className="w-[50px] h-[50px] hover:bg-firstColor hover:text-white duration-500  border-[1px] border-[#f0f0f0] flex justify-center items-center"><MdKeyboardDoubleArrowLeft  className="text-secondColor "/> </button>
            </div>
    </section>
    </section>
)


}

export default Event