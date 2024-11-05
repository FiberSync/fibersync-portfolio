import React from 'react'
import Header from '../../components/header'
import Intro from '../../components/intro'
import Footer from '../../components/footer'
import Pricing from '../../components/pricing'
import MobileMock from '../../components/mobile_mock'
import ContentLeft from '../../components/content_left'
import PcMock from '../../components/pcMock'

const FinventoryMang = () => {
  return (
    <div className='bg-white z-[1]'> 
        <Header/>
        <hero className='w-full md:h-[140%]'>      
          <main className='w-full h-full bg-white'>
          <Intro title='Inventory Management' subtitle='Leverage data-driven insights to streamline stock management and ensure precision across every production stage through FiberSync Inventory management portal'/>
          {/* <div className='p-4 grid grid-cols-2'>
          <MobileMock/>
          <div>
            <h1 className='text-black font-spaceGrotesk text-4xl font-bold mt-14 px-4'>Streamlining Reporting Through <br/> Field Agent App</h1>
            <div className='m-5'/>
            <p className='text-black font-body text-[24px] text-justify px-4'>
            Innovative supply chain management solution. ensure complete traceability enhances operational efficiency and safeguards your data. Say goodbye to inefficiencies and hello to a seamless, secure and sustainable future in textile. 
            </p>
          </div>
          </div> */}
          <ContentLeft 
            title={`Efficient Inventory, Precise Demand`} 
            descOne={
              `FiberSync brings a transformative approach to inventory management, enabling seamless coordination across every phase of textile production. From sourcing raw materials through the processes of spinning, weaving, and dyeing, to warehousing and distribution, our system tracks and manages inventory levels with precision. By providing a real-time, end-to-end view, FiberSync reduces stockouts, minimizes waste, and enhances order fulfillment accuracy, helping you to keep production running smoothly without disruptions.`
            } 
            desctwo={
              `By utilizing data-driven insights, our platform optimizes stock levels, reduces excess, and aligns inventory with real-time demand. Make informed decisions that drive efficiency and cut costs.`
            }          
            btndisabled
          component={<PcMock img={"https://www.veeqo.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fhfb264dqso7g%2F7BIuhKgTlUYlNRQrWwd9FE%2Fd3bd1aa1d0a9dadd21a4601035a2e123%2Fmultichannel-orders-screenshot.jpg&w=2560&q=75"}/>} />
          </main>
          <Footer/>
        </hero>
        <section>
          
        </section>
    </div>

  )
}

export default FinventoryMang