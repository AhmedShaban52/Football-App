import  { useEffect, useRef, useState } from 'react'

const CountUp = ({start =0 , end}) => {
    const [value,setValue] = useState(null)
    const ref = useRef(start)

    const counter = end /200

    const Count  = () =>  {
        if(ref.current < end) {
            const result = Math.ceil(ref.current + counter)
            if (result > end) return setValue(end)
            setValue(result)
        ref.current = result
        }
        setTimeout(Count , 70)
    }

    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            Count()
        }
        return () => (isMounted = false)
    },[end])


   
  return (
    <div className=' text-secondColor absolute top-[20px] left-[60px] flex gap-5 '>
    <h1 className='text-5xl font-bold ' >{value} </h1>
  
    <span className='relative bottom-5 right-3 font-[600] text-[18px]' >CLUB MEMBER</span>
    </div>
  )
}

export default CountUp