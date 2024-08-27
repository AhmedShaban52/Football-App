
import flag from '/images/eng.webp'
import { useParams } from 'react-router-dom'
const PlayerDetails = () => {

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

      
    const teams =[
        {
            id:"1",
            img:'/images/team01.png',
            number:"11",
            name:"MAXIELS DAVID",
            title:"POSITION:",
            desc:"FORWARD",
            hight:"182Cm",
            weight:"75Kg",
            currentTeam:"KESTER",
            gamesPlayed:"220",
            seasons:"2019,2020"
        },
        {
            id:"2",
            img:'/images/team02.png',
            number:"7",
            name:"VEN DIESEL",
            title:"POSITION:",
            desc:"WINGER",
            hight:"170Cm",
            weight:"75Kg",
            currentTeam:"KESTER",
            gamesPlayed:"280",
            seasons:"2019,2020,2021"
        },
        
        {
            id:"3",
            img:'/images/team03.png',
            number:"9",
            name:"NED STARK",
            title:"POSITION:",
            desc:"WINGER",
            hight:"190Cm",
            weight:"70Kg",
            currentTeam:"KESTER",
            gamesPlayed:"300",
            seasons:"2018,2020,2022"
        },
        {
            id:"4",
            img:'/images/team04.png',
            number:"10",
            name:"JOHN WICK",
            title:"POSITION:",
            desc:"MID-FIELDER",
            hight:"195Cm",
            weight:"90Kg",
            currentTeam:"KESTER",
            gamesPlayed:"200",
            seasons:"2018,2019,2020,2023"
        },
        {
            id:"5",
            img:'/images/team05.png',
            number:"9",
            name:"TYRION LENNISTER",
            title:"POSITION:",
            desc:"WINGER",
            hight:"172Cm",
            weight:"65Kg",
            currentTeam:"KESTER",
            gamesPlayed:"188",
            seasons:"2018,2019,2021"
        },
        {
            id:"6",
            img:'/images/team06.png',
            number:"10",
            name:"SAMWELL TARLY",
            title:"POSITION:",
            desc:"MID-FIELDER",
            hight:"180Cm",
            weight:"70Kg",
            currentTeam:"KESTER",
            gamesPlayed:"240",
            seasons:"2018,2019,2020,2022"
        },
        {
            id:"7",
            img:'/images/team07.png',
            number:"7",
            name:"EURON GREYJOY",
            title:"POSITION:",
            desc:"WINGER",
            hight:"175Cm",
            weight:"73Kg",
            currentTeam:"KESTER",
            gamesPlayed:"190",
            seasons:"2018,2019,2020,2021"
        },
        {
            id:"8",
            img:'/images/team08.png',
            number:"11",
            name:"JOHN SNOW",
            title:"POSITION:",
            desc:"FORWARD",
            hight:"185",
            weight:"85Kg",
            currentTeam:"KESTER",
            gamesPlayed:"230",
            seasons:"2018,2019,2020"
        },
    ]

    const {id} = useParams()

    console.log(id);

    const player = teams.find(team => team.id === id)

    console.log(player);
return (
    <section className="relative text-white py-[150px] ">
    <div className="about-image banner-bg relative py-[150px] ">
    <div className="container px-4 mx-auto text-center z-[1] relative">
          <ul className="flex text-center justify-center gap-5">
              <li className="text-[#e6a3a1] font-normal ">HOME</li>
              <li className="about-before relative font-normal ">PLAYER DEATAILS </li>
          </ul>
          <h1 className="text-4xl  md:text-7xl font-semibold pt-5"> PLAYER DEATAILS</h1>
    </div>
    
    </div>

    <section className="bg-secondColor py-[150px] px-5 ">
       <div className=' container px-1 mx-auto lg:flex  relative'>
            <div   >
                <img src={player.img} className='bg-gray-100 bg-opacity-75  px-8 pt-5 lg:w-[500px] lg:h-[450px]' />
            </div>

            <div className='absolute top-0 left-10   '>
            <a className=' relative text-[#e7e7e7] text-opacity-40 text-[100px] font-bold'>{player.number}</a>
            </div>

            <div className='lg:ml-5  lg:w-full pt-10 lg:pt-0'>
            <div>
                <div className='player-info border-b-[1px] border-[#282525]' >
                <p>NATIONALITY:</p>
                <a className="flex items-center text-[#999999]"> <img src={flag} className='pr-1' />  ENGLAND  </a>
                </div>
            </div>

            <div>
                <div  className='player-info border-b-[1px] border-[#282525]' >
                <p>POSITION</p>
                <a className="flex items-center text-[#999999]"> {player.desc}  </a>
                </div>
                <div  className='player-info border-b-[1px] border-[#282525]' >
                <p>HEIGHT</p>
                <a className="flex items-center text-[#999999]"> {player.hight}  </a>
                </div>
                <div  className='player-info border-b-[1px] border-[#282525]' >
                <p>WEIGHT</p>
                <a className="flex items-center text-[#999999]"> {player.weight}  </a>
                </div>
                <div  className='player-info border-b-[1px] border-[#282525]' >
                <p>CURRENT TEAM</p>
                <a className={`flex items-center ${player.currentTeam === "KESTER" ? "text-firstColor" : ""} `}> {player.currentTeam}  </a>
                </div>
                <div  className='player-info border-b-[1px] border-[#282525]' >
                <p>GAMES PLAYED</p>
                <a className="flex items-center text-[#999999]"> {player.gamesPlayed}  </a>
                </div>
                <div  className='player-info border-b-[1px] border-[#282525]' >
                <p>SEASONS</p>
                <a className="flex items-center text-[#999999]"> {player.seasons}  </a>
                </div>

            
            </div>

            </div>
        </div>
    </section>

    <section className=' bg-white pt-[50px] '>
    <div className=' py-[120px] relative text-center'>
    <div className='container px-1 mx-auto'>
    <h1 className='text-[180px] font-[600] pt-5 text-[#f7f7f7] absolute top-0 transform left-[50%] translate-x-[-50%]'>PLAYER</h1>
    <div className='z-[1] relative'>
    
    <h1 className='text-3xl lg:text-5xl font-bold text-[#111111] '>PLAYER ACTIVITY</h1>
    <p className='text-[#999999] mx-auto max-w-[580px] pt-10'>It is one of the most popular football clubs that offer training programs
    for the youth, as well as summer camps.</p>
    </div>

    </div>
    </div>

    <section className=' overflow-x-auto px-1'>
    <div className='container px-1 mx-auto'>
  
    <table className='w-full text-center '>
    <thead >
        <tr className='bg-[#f5f5f5] '>
            <th className='th-table py-4 px-2'>SEASON</th>
            <th className='th-table '>CLUB</th>
            <th className='th-table '>GOALS</th>
            <th className='th-table '>ASSISTS</th>
            <th className='th-table '>YELLOW CARDS</th>
            <th className='th-table '>RED CARDS</th>
            <th className='th-table '>APPEARANCES</th>
            <th className='th-table '>WIN RATIO</th>
            <th className='th-table '>DRAW RATIO</th>
            <th className='th-table '>LOSS RATIO</th>
            <th className='th-table '>OWN GOALS</th>
        </tr>
    </thead>
    
    <tbody>
    <tr className='border-[1px] '>
        <td className=' th-table py-2 '>2017</td>
        <td className='text-secondColor font-family text-[10px] lg:text-[14px]  font-bold  '>Kester F.C.</td>
        <td className='td-table'>39</td>
        <td className='td-table'>30</td>
        <td className='td-table'>02</td>
        <td className='td-table'>01</td>
        <td className='td-table'>04</td>
        <td className='td-table'>04</td>
        <td className='td-table'>06</td>
        <td className='td-table'>03</td>
        <td className='td-table'>00</td>
    </tr>
    <tr className='border-[1px]'>
        <td className='th-table py-2 '>2018</td>
        <td className='text-secondColor font-family text-[10px] lg:text-[14px]  font-bold'>Romada Football Club</td>
        <td className='td-table'>27</td>
        <td className='td-table'>10</td>
        <td className='td-table'>02</td>
        <td className='td-table'>01</td>
        <td className='td-table'>05</td>
        <td className='td-table'>03</td>
        <td className='td-table'>07</td>
        <td className='td-table'>01</td>
        <td className='td-table'>01</td>
    </tr>
    <tr className='border-[1px]'>
        <td className='th-table py-2 '>2019</td>
        <td className='text-secondColor font-family text-[10px] lg:text-[14px] font-bold'>Holonso F.C.</td>
        <td className='td-table'>24</td>
        <td className='td-table'>35</td>
        <td className='td-table'>02</td>
        <td className='td-table'>01</td>
        <td className='td-table'>05</td>
        <td className='td-table'>08</td>
        <td className='td-table'>06</td>
        <td className='td-table'>02</td>
        <td className='td-table'>00</td>
    </tr>
    <tr className='border-[1px]'>
        <td className='th-table py-2  '>2020</td>
        <td className='text-secondColor font-family text-[10px] lg:text-[14px] font-bold'>Real Madrid</td>
        <td className='td-table'>25</td>
        <td className='td-table'>19</td>
        <td className='td-table'>02</td>
        <td className='td-table'>01</td>
        <td className='td-table'>04</td>
        <td className='td-table'>05</td>
        <td className='td-table'>06</td>
        <td className='td-table'>03</td>
        <td className='td-table'>00</td>
    </tr>
    <tr className='border-[1px]'>
        <td className='th-table py-2 '>2021</td>
        <td className='text-secondColor font-family text-[10px] lg:text-[14px] font-bold'>Barcelona F.C.</td>
        <td className='td-table'>19</td>
        <td className='td-table'>25</td>
        <td className='td-table'>0</td>
        <td className='td-table'>01</td>
        <td className='td-table'>04</td>
        <td className='td-table'>07</td>
        <td className='td-table'>02</td>
        <td className='td-table'>01</td>
        <td className='td-table'>00</td>
    </tr>
    <tr className='border-[1px]'>
        <td className='th-table py-2 '>2022</td>
        <td className='text-secondColor font-family text-[10px] lg:text-[14px] font-bold'>Chelsea</td>
        <td className='td-table'>10</td>
        <td className='td-table'>23</td>
        <td className='td-table'>02</td>
        <td className='td-table'>01</td>
        <td className='td-table'>04</td>
        <td className='td-table'>04</td>
        <td className='td-table'>03</td>
        <td className='td-table'>03</td>
        <td className='td-table'>01</td>
    </tr>
</tbody>
    </table>
    </div>
    </section>

    <section className='bg-white text-white pb-[80px] relative px-4   '>
    <div className='container  mx-auto'>
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
    </section>
    </section>
)
}

export default PlayerDetails