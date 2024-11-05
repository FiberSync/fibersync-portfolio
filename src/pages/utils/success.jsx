import React,{useEffect} from 'react'

import Header from '../../components/header'
import Intro from '../../components/intro'
import Footer from '../../components/footer'
import SuccessfulPayment from '../../components/successfulPayment'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const PaymentSucess = () => {
  const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('https://fiber-sync.vercel.app/sendPurchaseEmail', {params:{
          token: sessionStorage.getItem("token"),
          plan: sessionStorage.getItem("plan"),
        }});
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
          <SuccessfulPayment/>
          </div>

          </main>
          <Footer/>
        </hero>
        <section>
          
        </section>
    </div>

  )
}

export default PaymentSucess