
import CountDown from './CountDown'
import img1 from '/images/01.png'
import img2 from '/images/06.png'
const PointTable = () => {
  return (
    <section className="  bg-white relative text-white ">
    <div className="about-image banner-bg relative py-[120px] ">
     <div className="container px-4 mx-auto text-center z-[1] relative">
           <ul className="flex text-center justify-center gap-5">
               <li className="text-[#e6a3a1] font-normal ">HOME</li>
               <li className="about-before relative font-normal ">POINT TABLE</li>
           </ul>
           <h1 className="text-4xl md:text-7xl  font-semibold pt-5"> LEAGUE STANDINGS</h1>
     </div>
     
     </div>


     <section className=' bg-[#f6f6f6] py-[120px]  after:absolute after:top-[0]   after:left-[50%] lg:after:top-[-5%]   after:transform after:translate-x-[-50%]   relative after:content-["LIVE"] after:text-[300px] after:font-bold after:text-[#fff] after:z-[-1] z-[1]'>
        <div className=" text-secondColor container mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-between items-center ">
     
           <div className='flex items-center '>
           <img src={img1}  />

           <div className=' mx-4  flex flex-col'>
           <span className=' font-[600] w-full'>KESTER F.C  <br/>  CHAMPIONS DI CLUB</span>
           <span className=' px-[8px] bg-firstColor text-white w-fit text-[12px] font-medium mt-4'>SEMI FINAL</span>
           </div>

           </div>

           <div className='py-10'>
           <CountDown/>
           </div>
        
           <div className='flex items-center   '>
           <div className='flex flex-col mx-4'>
           <span className='font-[600] '>KESTER F.C  <br/>  CHAMPIONS DI CLUB</span>
           <span className=' px-[8px] bg-firstColor text-white w-fit text-[12px] font-medium mt-4'>SEMI FINAL</span>
           </div>
           <img src={img2}   />
           </div>
   
        </div>
    </section>

    <section className=' overflow-x-auto px-3 bg-[#ffffff]  py-[120px]'>
     <div className='container px-3 mx-auto'>
     <h1 className='text-3xl md:text-4xl font-bold text-secondColor  border-b-[1px] w-fit pb-5 border-[#f1f1f1]'>PRIMARY LEAGUE 2022</h1>
     <table className='w-full text-center '>
         <thead >
     <tr className='bg-firstColor text-white '>
         <th className='text-[12px] py-4 px-2'>POSITION</th>
         <th className='text-[12px]'>CLUB NAME</th>
         <th className='text-[12px]'>MATCH</th>
         <th className='text-[12px]'>WIN</th>
         <th className='text-[12px]'>DRWA</th>
         <th className='text-[12px]'>LOSE</th>
         <th className='text-[12px]'>DUE</th>
         <th className='text-[12px]'>PTS</th>
     </tr>
         </thead>
     <tbody>
   <tr className='border-[1px] '>
       <td className='th-table   py-2 font-[600]'>01</td>
       <td className='th-table font-family   font-bold  '>Kester F.C.</td>
       <td className='td-table'>39</td>
       <td className='td-table'>30</td>
       <td className='td-table'>02</td>
       <td className='td-table'>01</td>
       <td className='td-table'>03</td>
       <td className='text-firstColor text-[12px]'>60</td>

   </tr>
   <tr className='border-[1px]'>
       <td className='th-table   py-2 font-[600] '>02</td>
       <td className='th-table font-family   font-bold'>Romada Football Club</td>
       <td className='td-table'>27</td>
       <td className='td-table'>10</td>
       <td className='td-table'>02</td>
       <td className='td-table'>01</td>
       <td className='td-table'>03</td>
       <td className='text-firstColor  text-[12px]'>56</td>
   
   </tr>
   <tr className='border-[1px]'>
       <td className='th-table   py-2 font-[600] '>03</td>
       <td className='th-table font-family  font-bold'>Holonso F.C.</td>
       <td className='td-table'>24</td>
       <td className='td-table'>35</td>
       <td className='td-table'>02</td>
       <td className='td-table'>01</td>
       <td className='td-table'>03</td>
       <td className='text-firstColor  text-[12px]'>46</td>

   </tr>
   <tr className='border-[1px]'>
       <td className='th-table   py-2 font-[600]  '> 04 </td>
       <td className='th-table font-family  font-bold'>Real Madrid</td>
       <td className='td-table'>25</td>
       <td className='td-table'>19</td>
       <td className='td-table'>02</td>
       <td className='td-table'>01</td>
       <td className='td-table'>03</td>
       <td className='text-firstColor   text-[12px]'>58</td>

   </tr>
   <tr className='border-[1px]'>
       <td className='th-table   py-2 font-[600] '>05</td>
       <td className='th-table font-family  font-bold'>Barcelona F.C.</td>
       <td className='td-table'>19</td>
       <td className='td-table'>25</td>
       <td className='td-table'>02</td>
       <td className='td-table'>01</td>
       <td className='td-table'>03</td>
       <td className='text-firstColor   text-[12px]'>47</td>
    
   </tr>
   <tr className='border-[1px]'>
       <td className='th-table   py-2 font-[600] '>06</td>
       <td className='th-table font-family  font-bold'>Chelsea</td>
       <td className='td-table'>10</td>
       <td className='td-table'>23</td>
       <td className='td-table'>02</td>
       <td className='td-table'>01</td>
       <td className='td-table'>03</td>
       <td className='text-firstColor   text-[12px]'>-10</td>
   </tr>
   <tr className='border-[1px]'>
       <td className='th-table   py-2 font-[600] '>07</td>
       <td className='th-table font-family  font-bold'>Burusia Dortmond</td>
       <td className='td-table'>10</td>
       <td className='td-table'>23</td>
       <td className='td-table'>02</td>
       <td className='td-table'>01</td>
       <td className='td-table'>03</td>
       <td className='text-firstColor   text-[12px]'>-10</td>
   </tr>
   <tr className='border-[1px]'>
       <td className='text-secondColor  text-[12px] py-2 font-[600] '>08</td>
       <td className='text-secondColor font-family text-[12px] font-bold'>Del Rio</td>
       <td className='td-table'>10</td>
       <td className='td-table'>23</td>
       <td className='td-table'>02</td>
       <td className='td-table'>01</td>
       <td className='td-table'>03</td>
       <td className='text-firstColor   text-[12px]'>-10</td>
   </tr>
   <tr className='border-[1px]'>
       <td className='th-table   py-2 font-[600] '>09</td>
       <td className='th-table font-family  font-bold'>Wakanda Forever</td>
       <td className='td-table'>10</td>
       <td className='td-table'>23</td>
       <td className='td-table'>02</td>
       <td className='td-table'>01</td>
       <td className='td-table'>03</td>
       <td className='text-firstColor   text-[12px]'>-10</td>
   </tr>
   <tr className='border-[1px]'>
       <td className='th-table py-2 font-[600] '>10</td>
       <td className='th-table font-family  font-bold'>Avengers</td>
       <td className='td-table'>10</td>
       <td className='td-table'>23</td>
       <td className='td-table'>02</td>
       <td className='td-table'>01</td>
       <td className='td-table'>03</td>
       <td className='text-firstColor   text-[12px]'>-10</td>
   </tr>
     </tbody>
     </table>
     </div>
    </section>
    </section>
  )
}

export default PointTable