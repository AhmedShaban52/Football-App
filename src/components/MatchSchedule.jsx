import logo1 from '/images/01.png'
import logo2 from '/images/06.png'


const MatchSchedule = () => {
    const clubs =[
        {
            id:"1",
            name1:"VALENCIA",
            img:"/images/03.png",
            name2:"BRIGHTON",
            img2:"/images/04.png",
            date:"JULY 21, 2023",
            stadium:"MC ARMY STADIUM"
        },
        {
            id:"2",
            name1:"REAL BETIS",
            img:"/images/04.png",
            name2:"HEMILTON FC",
            img2:"/images/05.png",
            date:"JULY 21, 2023",
            stadium:"MC ARMY STADIUM"
        },
        {
            id:"3",
            name1:"ASTON VILLA",
            img:"/images/06.png",
            name2:"MAN UTD.",
            img2:"/images/07.png",
            date:"JULY 21, 2023",
            stadium:"MC ARMY STADIUM"
        },
        {
            id:"4",
            name1:"LIVERPOOL",
            img:"/images/08.png",
            name2:"MAN CITY",
            img2:"/images/09.png",
            date:"JULY 21, 2023",
            stadium:"MC ARMY STADIUM"
        },
        {
            id:"5",
            name1:"DORTMUND",
            img:"/images/logo10.png",
            name2:"AC MILAN",
            img2:"/images/logo11.png",
            date:"JULY 21, 2023",
            stadium:"MC ARMY STADIUM"
        },
        {
            id:"6",
            name1:"INTER MILAN",
            img:"/images/logo12.png",
            name2:"BENFICA",
            img2:"/images/logo13.png",
            date:"JULY 21, 2023",
            stadium:"MC ARMY STADIUM"
        },
        {
            id:"7",
            name1:"BOCA JUNIORS",
            img:"/images/logo16.png",
            name2:"ATHELETIC VILVAO",
            img2:"/images/logo14.png",
            date:"JULY 21, 2023",
            stadium:"MC ARMY STADIUM"
        },
        {
            id:"8",
            name1:"GRANDA",
            img:"/images/logo15.png",
            name2:"ARSENAL",
            img2:"/images/logo17.png",
            date:"JULY 21, 2023",
            stadium:"MC ARMY STADIUM"
        },
        
    ]
    
  return (
    <section className="text-white ">
    <div className="about-image banner-bg relative py-[150px] ">
    <div className="container px-4 mx-auto text-center z-[1] relative">
          <ul className="flex text-center justify-center gap-5">
              <li className="text-[#e6a3a1] font-normal ">HOME</li>
              <li className="about-before relative font-normal ">SCHEDULE</li>
          </ul>
          <h1 className="text-4xl md:text-7xl  font-semibold pt-5"> MATCH SCHEDULE</h1>
    </div>
    
    </div>

    <section className="bg-secondColor py-[120px]">
    <section className='flex justify-center items-center flex-col md:flex-row  '>
        <div className='flex items-center '>
        <span className=' mx-4 text-3xl  text-[#FFFFFF] font-[600] w-full'>REAL SOCCER</span>
        <img src={logo1} alt='logo'  />
        </div>

        <div className='mx-4'>
        <span className='text-[#c5c5c5]  text-5xl font-[600]'>VS</span>
        </div>

        <div className='flex items-center '>
        <img src={logo2} alt='logo'   />
        <span className=' mx-4 text-3xl text-[#FFFFFF] font-[600] w-full'>HEMILTON FC</span>
        </div>
    </section>

    <section className='container px-1 mx-auto text-center mt-10 '>
    <span className='text-[14px] font-[600] py-[1px] px-8 bg-firstColor'>JULY 21, 2023</span>
    <h1 className='mt-2 text-[20px] text-[#fff] font-normal'>MC ARMY STADIUM</h1>
    <div className='bg-[#222222] py-4 px-5 mt-10 flex justify-center flex-wrap gap-14 relative'>
    <a className='ml-5 text-[#999999] hover:text-white duration-500 cursor-pointer'>GET TICKETS</a>
    <span className=' text-[#999999] hover:text-white duration-500 cursor-pointer before:absolute before:left-[50%]  before:top-[50%] before:translate-y-[-50%] before:w-[1px] before:h-[50%] before:bg-[#383838] '>WATCH STREAM</span>
    </div>
    </section>



    <section className='container px-1 mx-auto mt-20'  >
    {clubs.map((club,index) => (
        <div key={index} className='flex justify-center md:justify-between items-center flex-col md:flex-row  gap-5 bg-[#171717] py-5 md:px-5 mt-5'>
    
        <div  className='flex items-center flex-col sm:flex-row'>
          <div className='flex items-center'>
            <span className='mx-4 text-[#FFFFFF] font-[600] w-full'>{club.name1}</span>
            <img src={club.img} alt='Valencia Logo' />
          </div>
    
          <div className='mx-4'>
            <span className='text-[#c5c5c5] text-2xl font-[600]'>VS</span>
          </div>
    
          <div className='flex items-center'>
            <img src={club.img2} alt='Brighton Logo' />
            <span className='mx-4 text-[#FFFFFF] font-[600] w-full'>{club.name2}</span>
          </div>
        </div>
        
        <div className='text-center flex justify-center items-center   gap-4 '>
          <span className='text-[14px] font-[600] py-[1px] px-4 bg-firstColor'>{club.date}</span>
          <h1 className='text-[14px] text-[#fff] font-normal'>{club.stadium}</h1>
        </div>
        </div>
    ))}
   


      
  
  </section>
    </section>
    </section>
  )
}

export default MatchSchedule