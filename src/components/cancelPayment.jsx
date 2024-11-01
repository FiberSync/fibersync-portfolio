import React,{useEffect} from 'react'
import { BanIcon } from 'lucide-react'

const CancelPayment = () => {

    useEffect(() => {
        setTimeout(() => {
            window.location.href = '/index'
        }, 3000)
    }, [])
  return (
    <div className='bg-black rounded-2xl text-white w-[50vw] h-56 flex flex-col justify-center gap-5 items-center p-6'>
        <BanIcon width={44} height={44} color='#ff0000'/>
        <p className='font-body text-2xl font-bold'>Cancelled Payment !</p>
        <p className='font-body text-xl '>Redirecting to the Home Page ....</p>
    </div>
  )
}

export default CancelPayment