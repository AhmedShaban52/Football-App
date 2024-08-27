
import CountDown from './CountDown'
import logo1 from '/images/01.png'
import logo2 from '/images/06.png'
import blog from '/images/blog-bg.jpg'
import logo from '/images/logo.png'

const LatestPosts = () => {
    const blogs =[
        {
          id:"1",
          img:"/images/13.png",
          name:"Football",
          date:"JUNE 21, 2023",
          title:"THE WORLD CUP – WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN POLICY SOLUTION",
          link:"Read More",
        },
        {
          id:"2",
          img:"/images/14.png",
          name:"Football",
          date:"JUNE 21, 2023",
          title:"THE WORLD CUP – WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN POLICY SOLUTION",
          link:"Read More",
        },
        {
          id:"3",
          img:"/images/15.png",
          name:"Football",
          date:"JUNE 21, 2023",
          title:"THE WORLD CUP – WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN POLICY SOLUTION",
          link:"Read More",
        },
        {
            id:"4",
            img:"/images/16.png",
            name:"Football",
            date:"JUNE 21, 2023",
            title:"THE WORLD CUP – WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN POLICY SOLUTION",
            link:"Read More",
          },
          {
            id:"5",
            img:"/images/17.png",
            name:"Football",
            date:"JUNE 21, 2023",
            title:"THE WORLD CUP – WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN POLICY SOLUTION",
            link:"Read More",
          },
          {
            id:"6",
            img:"/images/18.png",
            name:"Football",
            date:"JUNE 21, 2023",
            title:"THE WORLD CUP – WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN POLICY SOLUTION",
            link:"Read More",
          },
      ]
  return (
    <section className="bg-secondColor text-white relative py-[120px] ">
    <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold'>LATEST POSTS</h1>
 
        <div className=" grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-4 pt-10">
        <div className="grid gap-5">
        {blogs.map((item) => (
            <div key={item.id} className="bg-[#1d1d1d] flex items-center gap-5  p-3">
            <div className=" lg:w-[30%] flex items-center" >
            <img src={item.img}  />
            </div>
        
            <div className='' >
            <div className="flex text-center items-center  ">
            <a className="mr-4 text-white bg-firstColor uppercase text-[10px] py-[3px] px-[4px] font-family">{item.name}</a>
            <p className="text-[12px]">{item.date}</p>
            </div>
            <h1 className="mt-3 text-[16px] font-[600] hover:text-firstColor duration-700 cursor-pointer">{item.title}</h1>
            <a className='after-link relative hover:text-firstColor duration-700 cursor-pointer '>{item.link}</a>
            </div>
            </div>
            ))}
            </div>
            <div>

            <div className=' bg-white text-secondColor h-[220px]   rounded-lg p-6'>
            <h1 className="after-next before-next relative pl-16 text-[20px] font-[600] mb-5">NEXT MATCH</h1>
            <div className='flex-element border-t-[1px] pt-5 border-[#e7e7e7]'>
            <div>
            <img src={logo1} />
            <p>REAL M.</p>
            </div>
            <div>
            <p className='bg-firstColor text-white uppercase font-normal text-[12px]  px-[5px] mr-3 relative'>PLAYOFF, JULY 21</p>
            <p className='mt-2 font-medium'>MC ARMY STADIUM</p>
            </div>
            <div>
            <img src={logo2} />
            <p>HEMILTON H.</p>
            </div>
            </div>
            </div>

            <div className='bg-[#1d1d1d] text-white h-[150px]  rounded-lg mt-4 pt-10 '>
            <CountDown/>
            </div>

            <div className='bg-white text-center p-4 mt-5 '>
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
                    <td className='td-table '>10</td>
                    <td className='td-table '>2</td>
                    <td className='td-table '>0</td>
                    <td className='td-table '>32</td>
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

            <div className=' text-white relative mt-5 h-[400px]  overflow-hidden'>
            <img src={blog} className='w-full' />
            <img src={logo} className='absolute top-10 left-10' />
            <div className='w-full md:w-80% absolute bottom-5 left-10 '>
                <h1 className='text-2xl font-[600] text-left'>WATCH THE AMAZING LIVE <br/>  SEASON NOW</h1>
                <button className='text-white bg-[#1c4cae] p-3 mt-4 w-[250px]'>START FREE TRIAL</button>
            </div>
        </div>

            </div>
            </div>
        </div>
    </section>

  )
}

export default LatestPosts