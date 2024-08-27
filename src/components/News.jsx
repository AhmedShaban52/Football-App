
import blog7 from '/images/blog-7.jpg'


const News = () => {

    const images =[
        {
          id:"1",
          img:"/images/blog8.jpg",
        },
        {
          id:"2",
          img:"/images/blog9.jpg",
        },
        {
          id:"3",
          img:"/images/blog10.jpg",
        },
        {
          id:"4",
          img:"/images/blog11.jpg",
        }
      ]

    const Tranding =[
        {
          id:"1",
          title:"THE WORLD CUP - WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB",
          img:"/images/blog-1.jpg",
        },
        {
          id:"2",
          title:"WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB",
          img:"/images/blog-2.jpg",
        },
        {
          id:"3",
          title:"WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB",
          img:"/images/blog-3.jpg",
        },
        {
          id:"4",
          title:"WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB",
          img:"/images/blog-4.jpg",
        },
        {
          id:"5",
          title:"WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB",
          img:"/images/blog-5.jpg",
        },
        {
          id:"6",
          title:"WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB",
          img:"/images/blog-6.jpg",
        }
      ]

      const blogs =[
        {
          id:"1",
          img:"/images/blog-sm1.png",
          name:"Football",
          date:"JUNE 21, 2023",
          title:"WHAT TO EXPECT FROM",
          link:"Read More",
        },
        {
          id:"2",
          img:"/images/blog-sm2.png",
          name:"Football",
          date:"JUNE 21, 2023",
          title:"WHAT TO EXPECT FROM",
          link:"Read More",
        },
        {
          id:"3",
          img:"/images/blog-sm3.png",
          name:"Football",
          date:"JUNE 21, 2023",
          title:"WHAT TO EXPECT FROM",
          link:"Read More",
        },
      ]


     
  return (
    <section className='bg-secondColor text-white py-[80px]'>
    <div className=' container mx-auto px-2 flex justify-center lg:justify-start items-center  flex-wrap lg:flex-nowrap  gap-5  '>
    {images.map((item) => (
    <div key={item.id} className='before-News relative w-full   h-[450px] lg:h-[300px] overflow-hidden group cursor-pointer'  > 
        <img src={item.img} className='w-full h-full  group-hover:transform group-hover:scale-[1.1] duration-700 '  />
    <div className='absolute bottom-[90px] left-4 z-[1] flex '>
        <span className="bg-firstColor uppercase font-normal text-[12px]  px-[5px] mr-3 relative z-[1]">Football</span>
        <span className="flex items-center font-light text-[12px] ">
        JUNE 21, 2023
        </span>
        </div>

        <div className='absolute bottom-8 left-4  w-full z-[1]'>
        <h1 className="font-[600] hover:text-firstColor duration-700 cursor-pointer ">WHAT TO EXPECT FROM</h1>
        <a className='relative top-5 after-btn cursor-pointer text-[12px] font-medium uppercase hover:text-firstColor duration-500'>Read More</a>
        
        </div>
      </div>
    ))}
    </div>

    <section className=' py-[80px]'>
    <div className='container mx-auto px-2'>
    <h1 className='text-2xl font-bold uppercase'>Tranding News</h1>
    <div    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5'>
      {Tranding.map((item, index) => (
        <div    key={item.id} className={`before-News relative overflow-hidden group cursor-pointer ${index === 0 || index === Tranding.length - 1 ? "grid lg:col-span-2" : ""}`}>
          <img src={item.img} className='w-full h-full group-hover:transform group-hover:scale-[1.1] duration-700' />
          <div className={`absolute ${index === 0  ? "bottom-[125px] md:bottom-[120px]" : "bottom-[140px] md:bottom-[120px]"}  ${index === 5  ? "bottom-[110px] md:bottom-[120px]" : "bottom-[140px] md:bottom-[120px]"  }  left-4 z-[1] flex`}>
            <span className="bg-firstColor  font-normal text-[12px] px-[5px] mr-3 relative z-[1]">FOOTBALL</span>
            <span className="flex items-center font-light text-[12px]">JUNE 21, 2023</span>
          </div>
          <div className={`absolute ${index === 0 || index === 5 ? "bottom-12 md:bottom-16" :"bottom-20 md:bottom-9"} left-4 w-full z-[1]`}>
            <h1 className="font-[600]   hover:text-firstColor duration-700 cursor-pointer">{item.title}</h1>
            <a className={`relative ${index === 0 || index === 5 ? "top-3" : "top-1"}  after-btn cursor-pointer text-[12px] font-medium uppercase hover:text-firstColor duration-500`}>Read More</a>
          </div>
        </div>
      ))}
    </div>
    </div>
   
  </section>

  <section className='News-image py-[80px]  container mx-auto px-8 text-center'>
  <div className=' lg:flex  lg:items-center lg:justify-between '>
    <h1 className='uppercase font-bold text-2xl lg:text-[28px] tracking-[1px]'>
    SUBSCRIBE NEWSLETTER
    </h1>
    <div className='flex justify-center items-center   mt-10 lg:mt-0'>
    <form className='flex w-[350px] lg:w-[300px] text-center justify-center items-center'>
    <input type='Email' placeholder='Enter Your Email' className='w-full p-[15px] pl-4 outline-0 border-[1px] focus:border-firstColor text-secondColor duration-500 ' />
    </form>
    <button className='p-[16px]  w-[150px] uppercase font-bold tracking-[2px] bg-firstColor'> SUBSCRIBE</button>
    
    </div>
  </div>
  </section>
  
    <section className='py-[80px] px-5'>
    <div className='container mx-auto px-2'>
    <h1 className='text-2xl font-bold'>TRENDING NEWS</h1>
      <div className=' grid grid-cols-1 lg:grid-cols-3 gap-3 mt-5 '>
        <div className='before-News relative overflow-hidden h-[400px]'>
         <img src={blog7} className='w-full' />

         <div className='absolute bottom-[150px] left-4 z-[1] flex '>
         <span className="bg-firstColor  font-normal text-[12px]  px-[5px] mr-3 relative z-[1]">FOOTBALL</span>
         <span className="flex items-center font-light text-[12px] ">
         JUNE 21, 2023
         </span>
         </div>
      
      
      <div className='absolute bottom-[60px] left-4 w-full z-[1]'>
        <h1 className="font-[600] hover:text-firstColor duration-700 cursor-pointer ">THE WORLD CUP - WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB</h1>
        <a className='relative top-5 after-btn cursor-pointer text-[12px] font-medium uppercase hover:text-firstColor duration-500'>Read More</a>
        
        </div>
      </div>

      <div className=' grid grid-cols-1 gap-2 w-full   '>
      {blogs.map((blog) => (
        <div key={blog.id} className='bg-[#1d1d1d] p-3  flex justify-center items-center gap-5   '>
        <div >
        <img src={blog.img} alt='img'   />
        </div>
    
        <div className='w-full'>
        <span className='mr-2 text-firstColor bg-white uppercase text-[10px] py-[3px] px-[4px] font-family'>{blog.name}</span>
        <span className='text-[12px]'>{blog.date}</span>
        <h1 className='mt-3 text-[16px] font-[600] hover:text-firstColor duration-700 cursor-pointer'>{blog.title}</h1>
        <a className='after-link relative hover:text-firstColor duration-700 cursor-pointer '>{blog.link}</a>
        </div>

        </div>
      ))}
      </div>
      <div className='bg-white text-center p-4 mt-4 lg:mt-0'>
      <h1 className='before-title after-title relative text-xl font-bold text-secondColor'>PREMIER LEAGUE</h1>
    
      <table className='w-full mx-auto mt-5  '>
      <thead>
          <tr className='bg-[#f5f5f5]'>
              <th className='th-table'>POS</th>
              <th className='th-table'>CLUB</th>
              <th className='th-table'>W</th>
              <th className='th-table'>D</th>
              <th className='th-table'>L</th>
              <th className='th-table'>PTS</th>
          </tr>
      </thead>
    
      <tbody>
          <tr className='border-[1px] '>
              <td className=' td-table py-2  '>01</td>
              <td className='text-secondColor text-[12px]  '>Kester F.C.</td>
              <td className='td-table'>10</td>
              <td className='td-table'>2</td>
              <td className='td-table'>0</td>
              <td className='td-table'>32</td>
          </tr>
          <tr className='border-[1px]'>
              <td className='td-table py-2 '>02</td>
              <td className='text-secondColor text-[12px]'>Kester F.C.</td>
              <td className='td-table'>10</td>
              <td className='td-table'>2</td>
              <td className='td-table'>0</td>
              <td className='td-table'>32</td>
          </tr>
          <tr className='border-[1px]'>
              <td className='td-table py-2 '>03</td>
              <td className='text-secondColor text-[12px]'>Kester F.C.</td>
              <td className='td-table'>10</td>
              <td className='td-table'>2</td>
              <td className='td-table'>0</td>
              <td className='td-table'>32</td>
          </tr>
          <tr className='border-[1px]'>
              <td className='td-table py-2  '>04</td>
              <td className='text-secondColor text-[12px]'>Kester F.C.</td>
              <td className='td-table'>10</td>
              <td className='td-table'>2</td>
              <td className='td-table'>0</td>
              <td className='td-table'>32</td>
          </tr>
          <tr className='border-[1px]'>
              <td className='td-table py-2 '>05</td>
              <td className='text-secondColor text-[12px]'>Kester F.C.</td>
              <td className='td-table'>10</td>
              <td className='td-table'>2</td>
              <td className='td-table'>0</td>
              <td className='td-table'>32</td>
          </tr>
          <tr className='border-[1px]'>
              <td className='td-table py-2 '>06</td>
              <td className='text-secondColor text-[12px]'>Kester F.C.</td>
              <td className='td-table'>10</td>
              <td className='td-table'>2</td>
              <td className='td-table'>0</td>
              <td className='td-table'>32</td>
          </tr>
      </tbody>
  </table>
  <button className='text-white bg-firstColor p-3 mt-4 w-full'>VIEW FULL TABLE</button>
      </div>
      </div>
    </div>
    
    </section>
    
    </section>
  )
}

export default News





