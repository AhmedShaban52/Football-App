

const NewsInsights = () => {

  const items = [
    {
      id:"1",
      img:"/images/blog1.jpg",
      name:"football",
      date:" JUNE 21, 2023",
      title:"THE WORLD CUP WHAT TO EXPECT MATCH",
      link:"Read More"
    },
    {
      id:"2",
      img:"/images/blog2.jpg",
      name:"football",
      date:" JUNE 21, 2023",
      title:"THE WORLD CUP WHAT TO EXPECT MATCH",
      link:"Read More"
    },
    {
      id:"3",
      img:"/images/blog3.jpg",
      name:"football",
      date:" JUNE 21, 2023",
      title:"THE WORLD CUP WHAT TO EXPECT MATCH",
      link:"Read More"
    }
  ]
  return (
    <section className='bg-[#111111] text-white pt-[100px] pb-0 relative px-2   '>
 
    <div className='container mx-auto'>
    <h1 className='text-4xl   font-[600]'>NEWS INSIGHTS</h1>
    <div className=' pt-8 grid grid-cols-1 md:grid-cols-2  gap-5'>
    
   {items.map((item) => (
      <div key={item.id} className='before-NewsInsights relative overflow-hidden group  cursor-pointer'>
    <img src={item.img} className='w-full group-hover:transform group-hover:scale-[1.1] duration-500'  />

    <div className='absolute bottom-[150px] left-4 z-[1] flex '>
    <span className="bg-firstColor uppercase font-normal text-[12px]  px-[5px] mr-3 relative z-[1]">{item.name}</span>
    <span className="flex items-center font-light text-[12px] ">
    {item.date}
    </span>
    </div>
 
 <div className='absolute bottom-[90px] left-4 w-full z-[1]'>
   <h1 className="font-[600] hover:text-firstColor duration-700 cursor-pointer ">{item.title}</h1>
   <a className='relative top-5 after-btn cursor-pointer text-[12px] font-medium uppercase hover:text-firstColor duration-500'>{item.link}</a>
   
   </div>
 </div>
  ))}
 </div>
    </div>


    </section>
  )
}

export default NewsInsights