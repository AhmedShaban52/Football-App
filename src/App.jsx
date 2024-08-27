
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Hero from './components/Hero'
import LatestPosts from './components/LatestPosts'
import MatchHighLight from './components/MatchHighLight'
import Navbar from './components/Navbar'
import News from './components/News'
import NewsInsights from './components/NewsInsights'
import TeamDetails from './components/TeamDetails'
import PlayerDetails from './components/PlayerDetails'
import History from './components/History'
import FAQ from './components/FAQ'
import Gallary from './components/Gallary'
import Event from './components/Event'
import Event_Details from './components/Event_Details'
import MatchSchedule from './components/MatchSchedule'
import MatchResult from './components/MatchResult'
import PointTable from './components/PointTable'
import Shop from './components/Shop'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import NewsPage from './components/NewsPage'
import Contact from './components/Contact'

import { RiArrowDropUpLine } from "react-icons/ri";
import { FaCircleNotch } from "react-icons/fa";
import { useEffect, useRef } from 'react'

function App() {

  const location = useLocation()

  const top = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
const scroll = useRef()


useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY >= 200) {
      scroll.current.style.bottom = "12px";
    } else {
      scroll.current.style.bottom = "-100px";
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []); 
  
  useEffect(() => {
    window.scrollTo(0,0)
  },[location])
  return (
    <div className='overflow-hidden sm:overflow-visible' >
 
      <Navbar/>
      <Routes>
          <Route path='/' element={<> <Hero/> <News/> <MatchHighLight/> <LatestPosts/> <Blog/> <NewsInsights/>  </>} />

          <Route path='/about' element={ <About/>}  />
          <Route path='/team details' element={ <TeamDetails/>}  />
          <Route path='/player details/:id' element={ <PlayerDetails/>}  />
          
          <Route path='/history' element={ <History/>}  />
          <Route path='/faq' element={ <FAQ/>}  />
          <Route path='/gallary' element={ <Gallary/>}  />
          <Route path='/event' element={ <Event/>}  />
          <Route path='/event details' element={<Event_Details/> }  />
          <Route path='/match schedule' element={<MatchSchedule/> }  />
          <Route path='/match result' element={<MatchResult/> }  />
          <Route path='/point table' element={<PointTable/> }  />

          <Route path='/shop' element={<Shop/> }  />
          <Route path='/product details' element={<ProductDetails/> }  />
          <Route path='/cart' element={<Cart/> }  />
          <Route path='/shop/:id' element={<Cart/> } />
         
          <Route path='/news' element={<NewsPage/> }  />
          <Route path='/contact' element={<Contact/> }  />
      </Routes>
      <Footer/>
      <div ref={scroll} onClick={top} className='fixed z-50 right-5 duration-[1s] transition-all bg-firstColor text-white rounded-[20px] w-[40px] h-[60px] flex justify-center items-center flex-col cursor-pointer'>
      <a className='absolute top-0'><RiArrowDropUpLine className='text-3xl font-extrabold'/></a>
      <a className='absolute bottom-3'><FaCircleNotch className='font-bold'/></a>
      </div>
    </div>
  )
}

export default App
