
import img from '/images/recap.jpg'
import img2 from '/images/01.png'
import img3 from '/images/06.png'

import videoImg from '/public/images/insgt.jpg'
import { FaDiscord , FaArrowRightLong } from "react-icons/fa6";
import { useState } from 'react';
import { IoPlay } from "react-icons/io5";

import { IoIosFootball } from "react-icons/io";

const MatchResult = () => {

  const [showVideo, setShowVideo] = useState(false);

    const openVideo = () => {
      setShowVideo(true);
    };
  
    const closeVideo = () => {
      setShowVideo(false);
    };

    const items = [
      {
        id:"1",
        number:"02",
        title:"A. BEKAR",
        desc:"GOAL KEEPER",
        icon:IoIosFootball
      },
      {
        id:"2",
        number:"02",
        title:"L. MARTIN",
        desc:"DEFENDER",
        icon:IoIosFootball
      },
      {
        id:"3",
        number:"02",
        title:"VAN DIJK",
        desc:"MID FIELDER",
        icon:IoIosFootball
      }
    ]



    const items2 = [
      {
        id:"1",
        number:"02",
        title:"S. PEDRI",
        desc:"DEFENDER",
        icon:IoIosFootball
      },
      {
        id:"2",
        number:"02",
        title:"M. BUFFON",
        desc:"GOAL KEEPER",
        icon:IoIosFootball
      },
      {
        id:"3",
        number:"02",
        title:"L. GIROUND",
        desc:"FORWARD",
        icon:IoIosFootball
      }
    ]
  return (
    <section className="text-white">
    <div className="about-image banner-bg relative py-[150px] ">
    <div className="container px-4 mx-auto text-center z-[1] relative">
          <ul className="flex text-center justify-center gap-5">
              <li className="text-[#e6a3a1] font-normal ">HOME</li>
              <li className="about-before relative font-normal ">RESULT</li>
          </ul>
          <h1 className=" text-5xl md:text-7xl  font-semibold pt-5"> MATCH RESULT</h1>
    </div>
    </div>

    <section className='bg-white py-[120px]'>
    <div className='container mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-5'>
    <div className='overflow-hidden'>
    <img src={img} className='w-full hover:scale-[1.1] duration-500' />
    </div>

    <section className='pt-10'>
    <h1 className='text-[#111111] text-2xl lg:text-4xl font-bold'>UNITED FC <span className=' py-[2px] px-[10px]  bg-firstColor text-white rounded-[50%]'>VS</span>  MAGNETIC TM </h1>
    <p className='text-[#777777] font-family py-5'>
    It is one of the most popular football clubs that offer training programs
    for the youth, as well as summer camps. Play the fastest NFT based fantasy
    football manager earn coins, collect & trade officially.
    </p>

    <div className=' bg-firstColor flex justify-between text-center py-[10px] px-[20px]'>
    <p>DECEMBER 25, 2022 (4.00PM)</p>
    <p>(FULLTIME)</p>
    </div>

    <div className='flex justify-between items-center flex-col lg:flex-row border-[1px] border-[#e7e7e7] p-5'>
    <div className='flex justify-center items-center text-center my-8 '>
    <img src={img2} alt='img' />
    <p className='text-[#111111] font-medium mx-6 border-[#e7e7e7] border-[1px] w-[40px] h-[40px] rounded-[50%] text-center flex justify-center items-center'>VS</p>
    <img src={img3} alt='img' />
    
    </div>

    <div className='text-[#111111] text-5xl font-bold flex'>
    <p >3</p>
    <span className='mx-2'>-</span>
    <p >2</p>
    </div>

    </div>
    <button className='py-[15px] px-[30px] mt-10 bg-firstColor text-white font-[600] flex items-center justify-center mx-auto lg:mx-0 gap-2'> WATCH HIGHLIGHT <FaDiscord />  </button>
    </section>
    </div>
    </section>

    <section className='bg-[#ffffff]  py-[120px]'>
    <div className='container mx-auto px-4 '>
        <h1 className='text-4xl font-bold text-secondColor'>MATCH INSIGHTS</h1>
    <div className=' bg-[#F5F5F5] result-before relative mt-10'>
        <img src={videoImg} alt='videoImg' />
        <button className=" bg-white absolute top-[50%] left-[50%] hover:bg-firstColor duration-700  rounded-[50%] text-[20px]  w-[60px] h-[60px] text-center flex items-center justify-center group " onClick={openVideo}> <IoPlay  className='text-secondColor group-hover:text-white duration-700  ' /></button>

      
    </div>
    {showVideo && (
      <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-50  bg-black bg-opacity-80' onClick={closeVideo}>
      <div className="video-container">
      <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/G4t6TqG5LM8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
      ></iframe>
    </div>
  </div>
)}
  </div>
    </section>
    <section className=' bg-[#ffffff] overflow-x-auto '>
    <div className='container px-1 mx-auto'>
        <table className='w-full text-center '>
          <thead >
          <tr className='bg-[#f5f5f5] border-[1px] '>
          <th className='th-table  py-4 '>DATE</th>
          <th className='th-table'>TIME</th>
          <th className='th-table '>LEAGUE</th>
          <th className='th-table '>SEASON</th>
          <th className='th-table '>MATCH DAY</th>
          <th className='th-table '>FULL TIME</th>

          </tr>
          </thead>

          <tbody>
 
          <tr className='border-[1px] bg-[#ffffff]  '>
          <td className='td-table  py-2 '>May 11, 2022</td>
          <td className='td-table      '>1:41 pm</td>
          <td className='td-table '>Premier League</td>
          <td className='td-table  '>2018</td>
          <td className='td-table  '>15:00 Sat 11th July 2018</td>
          <td className='text-firstColor  text-[12px]'>90’</td>
          </tr>
          </tbody>
        </table>

    </div>
    </section>

    <section className='bg-[#ffffff]  py-[120px]'>
      <div className='container mx-auto px-4'>
       <div className='flex justify-between flex-col md:flex-row  '>
       <h1 className='text-4xl font-bold text-secondColor'>LOCATION GROUND</h1>
       <button className='py-[15px] px-[30px] mt-10 md:mt-0  bg-firstColor text-white font-[600] flex items-center justify-center mx-auto lg:mx-0 gap-2 '> GET DIRECTION  <FaArrowRightLong />  </button>

       </div>
       <iframe className='w-full h-[450px] mt-10' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7301.830223850229!2d90.425238!3d23.786037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c781b4c7f3f5%3A0xc93971c0e57c8be6!2sReacThemes!5e0!3m2!1sen!2sbd!4v1712497487762!5m2!1sen!2sbd" ></iframe>
      </div>
      </section>
      

      <section className='bg-white  '>
      <div className='container mx-auto px-4'>
          <h1 className='text-3xl md:text-4xl font-bold text-secondColor'>MATCH RESULT</h1>

          <table className='w-full text-center bg-[#ffffff] mt-10 '>
              <thead >
              <tr className=' border-[1px] '>
              <th className='text-secondColor  text-[12px]    text-left py-5 px-8'>CLUB NAME</th>
              <th className='text-secondColor  text-[12px]'>1ST HALF</th>
              <th className='text-secondColor  text-[12px] '>2ND HALF</th>
              <th className='text-secondColor  text-[12px] '>PTS</th>

              </tr>
              </thead>
              <tbody>
              <tr className='border-[1px] bg-[#ffffff]  '>
              <td className='text-secondColor font-bold font-family  text-[12px]  text-left py-5 px-8'>Kester F.C.</td>
              <td className='text-[#777777]  text-[12px]     '>02</td>
              <td className='text-[#777777]   text-[12px]'>02</td>
              <td className='text-firstColor  text-[12px] '>03</td>

              </tr>
              <tr className='border-[1px] bg-[#ffffff]  '>
              <td className='text-secondColor font-bold font-family  text-[12px]  text-left py-5 px-8'>Romada Football Club</td>
              <td className='text-[#777777]  text-[12px] '>00</td>
              <td className='text-[#777777]   text-[12px]'>00</td>
              <td className='text-firstColor  text-[12px] '>01</td>

              </tr>
              </tbody>
          </table>
      </div>
          </section>

      <section className='bg-white  py-[50px]'>
      <div className='container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-5 '>
      <div className=' text-secondColor p-10 border-[1px] border-[#e7e7e7] '>
      <h1 className='text-2xl md:text-4xl font-bold text-secondColor border-b-[1px] w-fit pb-5 border-[#f1f1f1]'>MANCHESTER UNITED</h1>

      {items.map((item, index) => (
        <div key={index} className='flex items-center mt-5 justify-between'> 
          <p className='text-[#111111] font-medium border-[#f1f1f1] bg-[#f1f1f1] border-[1px] text-[12px] p-2 rounded-[50%] text-center flex justify-center items-center'>{item.number}</p>
      
          <div className='flex flex-col w-full ml-5'>
            <h1 className='text-[18px] font-[600]'> {item.title}</h1>
            <p className='text-[#999999] text-[14px]'>{item.desc}</p>
          </div>
      
          <div className='flex items-end'>
            {index === 2 && <item.icon  />}
      
            {index !== 2 && (
              <div className='flex'>
                <item.icon className='mr-1'  />
                <item.icon className='text-firstColor '/>
              </div>
            )}
          </div>
        </div>
      ))}
      </div>

      <div className=' text-secondColor p-10 border-[1px] border-[#e7e7e7]'>
  
      <h1 className=' text-2xl md:text-4xl font-bold text-secondColor border-b-[1px] w-fit pb-5 border-[#f1f1f1]'>LIVERPOOL F.C.</h1>
      {items2.map((item, index) => (
        <div key={index} className='flex items-center mt-5 justify-between'> 
          <p className='text-[#111111] font-medium border-[#f1f1f1] bg-[#f1f1f1] border-[1px] text-[12px] p-2 rounded-[50%] text-center flex justify-center items-center'>{item.number}</p>
      
          <div className='flex flex-col w-full ml-5'>
            <h1 className='text-[18px] font-[600]'> {item.title}</h1>
            <p className='text-[#999999] text-[14px]'>{item.desc}</p>
          </div>
      
          <div className='flex items-end'>
            {index === 2 &&  (
              <div className='flex'>
              <item.icon className='mr-2' /> 
              <span className='w-[20px] h-[20px] bg-firstColor rounded-[5px] '></span>
              </div>
            )}
      
            {index !== 2 && (
              <div className='flex'>
               <span className='w-[20px] h-[20px] bg-[#ffde00] rounded-[5px] mr-2'></span>
               <span className='w-[20px] h-[20px] bg-firstColor rounded-[5px]'></span>
              </div>
            )}
          </div>
        </div>
      ))}
      </div>

      </div>
      </section>

      <section className='bg-white overflow-x-auto pb-[80px] '>
      <div className='container mx-auto px-4'>
      <h1 className='text-3xl md:text-4xl font-bold text-secondColor border-b-[1px] w-fit pb-5 border-[#f1f1f1]'>OFFICIAL TRAINERS</h1>
      <table className='w-full text-center '>
      <thead >
        <tr className='bg-[#f5f5f5] border-[1px] '>
            <th className='th-table  py-4 '>REFEREE</th>
            <th className='th-table'>ASSISTANT REFEREE</th>
            <th className='th-table '>TIMEKEEPERS</th>
        </tr>
      </thead>
      <tbody>
        <tr className='border-[1px] bg-[#ffffff]  '>
            <td className='td-table py-2 '>Alonso D. Dowson</td>
            <td className='td-table '>Peter Jackson</td>
            <td className='td-table'>Franklin Rhys, Theodore Lewis</td>
        </tr>
      </tbody>
      </table>
      </div>
    
          </section>
    </section>
  )
}

export default MatchResult