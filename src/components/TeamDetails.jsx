
import { FaFacebookF , FaTwitter } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
const TeamDetails = () => {
  const teams =[
    {
      id:"1",
      img:'/images/team01.png',
      number:"11",
      desc:"FORWARD",
      name:"MAXIELS DAVID"
    },
    {
      id:"2",
      img:'/images/team02.png',
      number:"7",
      desc:"WINGER",
      name:"VEN DIESEL"
    },
    
    {
      id:"3",
      img:'/images/team03.png',
      number:"9",
      desc:"WINGER",
      name:"NED STARK"
    },
    {
      id:"4",
      img:'/images/team04.png',
      number:"10",
      desc:"MID-FIELDER",
      name:"JOHN WICK"
    },
    {
      id:"5",
      img:'/images/team05.png',
      number:"9",
      desc:"WINGER",
      name:"TYRION LENNISTER"
    },
    {
      id:"6",
      img:'/images/team06.png',
      number:"10",
      desc:"MID-FIELDER",
      name:"SAMWELL TARLY"
    },
    {
      id:"7",
      img:'/images/team07.png',
      number:"7",
      desc:"WINGER",
      name:"EURON GREYJOY"
    },
    {
      id:"8",
      img:'/images/team08.png',
      number:"11",
      desc:"FORWARD",
      name:"JOHN SNOW"
    },
  ]


  const status =[
    {
      id:"1",
      img:"/images/financial.jpg",
      name:"COACH JOSE MOURIN",
      NATIONALITY:" ARGENTINA",
      flag:"/images/arg.png",
      PAST_TEAM:"INTER MILAN"
    },
    {
      id:"2",
      img:"/images/physician.jpg",
      name:"PHYSICIAN SAM FOSTER",
      NATIONALITY:" ITALY",
      flag:"/images/ita.png",
      PAST_TEAM:"ASTON VILLA"
    },
    {
      id:"3",
      img:"/images/coach.jpg",
      name:"FINANCIAL ADVISOR STEPHEN CORR",
      NATIONALITY:" PORTUGAL",
      flag:"/images/por.png",
      PAST_TEAM:"ATLANTA"
    }
  ]

  const icons =[
    {
      icon:FaFacebookF
    },
    {
      icon:FaTwitter
    },
    {
      icon:FaLinkedinIn
    },
  ]
  return (
    <section className="bg-white  relative text-white ">
    <div className="about-image banner-bg relative py-[150px] ">
     <div className="container px-4 mx-auto text-center z-[1] relative">
           <ul className="flex text-center justify-center gap-5">
               <li className="text-[#e6a3a1] font-normal ">HOME</li>
               <li className="about-before relative font-normal ">TEAM </li>
           </ul>
           <h1 className="text-5xl md:text-7xl  font-semibold pt-5"> TEAM MEMBER</h1>
     </div>
     
     </div>

    <section className='container  mx-auto bg-white py-[120px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 '>
      {teams.map((team) => (
       <div key={team.id} className=' px-3'>
       <div className='bg-[#f6f6f6] pt-5 px-8 relative z-[1] mt-8 group overflow-hidden'> 
       <Link to={`/player details/${team.id}`}><img src={team.img} alt="img" className='cursor-pointer group-hover:transform group-hover:scale-[1.1] duration-500 ' /></Link> 
 
        <div className='absolute  top-[20%] right-[-8%] flex flex-col gap-5 group-hover:right-[20%] opacity-0 group-hover:opacity-100 duration-500'>
        <span className=" before-team relative"> </span>
 
        {icons.map((icon,index) => (
          <a key={index} className="icon-team"> <icon.icon/>   </a>
        ))}

        </div>

        <div className='absolute top-0 left-10   '>
        <a className='z-[-1] relative text-[#e7e7e7] text-[100px] font-bold'>{team.number}</a>
 
        </div>
       </div>
       <div className='text-secondColor'> 
       <p className='font-normal text-[20px] text-[#999999] pt-5'>{team.desc}</p>
       <h1 className='text-3xl font-bold pt-2'>{team.name}</h1>
       </div>
   </div>
      ))}
     </section>
 
     <section className=" bg-white text-secondColor  pb-[80px]">
     <div className="container mx-auto px-5">
   
     {status.map((item) => (
       <div key={item.id} >
          <div className='relative border-[#e2e6e8] w-full border-b-[1px] pb-5'>
          <span className='absolute bg-firstColor h-[2px] w-[20px] top-[30%]'></span>   
          <h1 className=' text-2xl  font-bold ml-8'> {item.name}</h1>
      </div>
    
      <div className="lg:flex ">
      <div>
      <img  src={item.img}  className=" lg:w-[300px] lg:h-[300px] pt-5"/>
      </div>
 
      <div className="w-full m-auto lg:ml-6">
      <div className="border-person  py-5">
      <span className="info-person">NATIONALITY:</span>
      <a className=" sub-info" >  <img src={item.flag}  className="pr-1" /> {item.NATIONALITY}</a>
      </div>
    
      <div className="border-person pb-5">
    <span className="info-person">CURRENT TEAM:</span>
    <a className=" flex items-center text-firstColor font-family cursor-pointer" > KESTER</a>
      </div>
  
      <div className="border-person pb-5">
    <span className="info-person">PAST TEAM</span>
    <a className=" sub-info" > {item.PAST_TEAM}</a>
      </div>

      <div className="flex justify-between  pb-5">
    <span className="info-person">AGE</span>
    <a className=" sub-info" > 45</a>
        </div>
      </div>
      </div>
      </div>
    ))}
    
    </div>
    </section>
    </section>
  )
}

export default TeamDetails