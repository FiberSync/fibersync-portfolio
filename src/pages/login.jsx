import React from 'react'
import Logo from '../components/logo'
import Header from '../components/header'
import Hero from '../components/hero'
import Pricing from '../components/pricing'
import Signup from '../components/signup'
import Login from '../components/login'

const LoginPage = () => {
  return (
    <div className='bg-white z-[1]'> 
        <Header hidden={true}/>
        <hero className='w-full md:h-[140%] '>      
          <main className='w-full h-full bg-white'>
            <Login />
          </main>
         
        </hero>
        <section>
          
        </section>
    </div>

  )
}

export default LoginPage