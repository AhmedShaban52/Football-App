import { useEffect } from "react"
import { useState } from "react"

const CountDown = () => {
    const[days,setDays] = useState(0)
    const[hours,setHours] = useState(0)
    const[minutes,setMinutes] = useState(0)
    const[seconds,setSeconds] = useState(0)

    const NewYear = new Date("jan 1, 2025").getTime()
    
    useEffect(() => {
        const timerId = setInterval(() => {
            const dateNow = new Date().getTime()  

            const diff = (NewYear - dateNow) / 1000
            if(diff > 0) {
                const days = Math.floor(diff  / 60 / 60 / 24)

                const hours = Math.floor(diff / 60 / 60 % 24)
        
                const minutes = Math.floor((diff  / 60 ) % 60) 
            
                const seconds = Math.floor(diff % 60 )

                setDays(days)
                setHours(hours)

                setMinutes(minutes)
                setSeconds(seconds)
            }else {
                clearInterval(timerId)
            }
        }, 1000)
        return () => clearInterval(timerId)
   
        
        
    },[NewYear])
  return (
    <div className=" flex gap-[5px] justify-center text-center  items-center  " >
    <div className="time">
        <div className="font-bold text-4xl">{days} :</div>
        <p className="text-[#999999] uppercase font-[600] text-[14px] mr-6 mt-3">days</p>
    </div>
    <div className="time">
        <div className="font-bold text-4xl">{hours} :</div>
        <p className="text-[#999999] uppercase font-[600] text-[14px] mr-6 mt-3 ">hours</p>
    </div>
    <div className="time">
        <div className="font-bold text-4xl">{minutes} :</div>
        <p className="text-[#999999] uppercase font-[600] text-[14px] mr-6 mt-3 ">minutes</p>
    </div>
    <div className="time">
        <div className="font-bold text-4xl">{seconds} </div>
        <p className="text-[#999999] uppercase font-[600] text-[14px]  mt-3 ">seconds</p>
    </div>
    </div>
  )
}

export default CountDown