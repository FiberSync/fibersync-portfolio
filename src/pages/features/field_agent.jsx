import React from 'react'
import Header from '../../components/header'
import Intro from '../../components/intro'
import Footer from '../../components/footer'
import Pricing from '../../components/pricing'
import MobileMock from '../../components/mobile_mock'

const FfieldApp = () => {
  return (
    <div className='bg-white z-[1]'> 
        <Header/>
        <hero className='w-full md:h-[140%]'>      
          <main className='w-full h-full bg-white'>
          <Intro/>
          <div className='p-4 grid grid-cols-2'>
          <MobileMock/>
          <div>
            <h1 className='text-black font-spaceGrotesk text-4xl font-bold mt-14 px-4'>Streamlining Reporting Through <br/> Field Agent App</h1>
            <div className='m-5'/>
            <p className='text-black font-body text-[24px] text-justify px-4'>
            Innovative supply chain management solution. ensure complete traceability enhances operational efficiency and safeguards your data. Say goodbye to inefficiencies and hello to a seamless, secure and sustainable future in textile. 
            </p>
          </div>
          </div>
          </main>
          <Footer/>
        </hero>
        <section>
          
        </section>
    </div>

  )
}

export default FfieldApp