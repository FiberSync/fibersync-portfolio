import React from 'react'

import Header from '../../components/header'
import Intro from '../../components/intro'
import Footer from '../../components/footer'
import  CancelPayment from '../../components/cancelPayment'
import { useNavigate } from 'react-router-dom'

const PaymentCancel = () => {
  const navigate = useNavigate();
    
    useEffect(() => {
      setTimeout(() => {
          navigate(`/`);
          }, 3000)
    }, [])
  return (
    <div className='bg-white z-[1]'> 
        <Header/>
        <hero className='w-full md:h-[140%] '>      
          <main className='w-full h-full bg-white'>
          <div className='flex flex-col items-center justify-center py-[8rem] '>
          <CancelPayment/>
          </div>

          </main>
          <Footer/>
        </hero>
        <section>
          
        </section>
    </div>

  )
}

export default PaymentCancel