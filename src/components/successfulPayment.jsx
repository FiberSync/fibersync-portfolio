import React from 'react'
import { CircleCheckBigIcon } from 'lucide-react'

const SuccessfulPayment = () => {
  return (
    <div className='bg-black rounded-2xl text-white w-[50vw] h-56 flex flex-col justify-center gap-5 items-center p-6'>
        <CircleCheckBigIcon width={44} height={44} color='#39ff14'/>
        <p className='font-body text-2xl font-bold'>Payment Successful !</p>
        <p className='font-body text-xl '>Redirecting to the Home Page ....</p>
    </div>
  )
}

export default SuccessfulPayment