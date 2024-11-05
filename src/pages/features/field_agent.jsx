import React from 'react'
import Header from '../../components/header'
import Intro from '../../components/intro'
import Footer from '../../components/footer'
import Pricing from '../../components/pricing'
import MobileMock from '../../components/mobile_mock'
import ContentRight from '../../components/content_right'
import ContentLeft from '../../components/content_left'


const FfieldApp = () => {
  return (
    <div className='bg-white z-[1]'> 
        <Header/>
        <hero className='w-full md:h-[140%]'>      
          <main className='w-full h-full bg-white'>
          <Intro title='Field Agent App' subtitle='Leverage data-driven insights to streamline operational reporting through our App.'/>
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
          <ContentRight bg='bg-white'
            title={`Streamlining Reporting Through Field Agent App`} 
            descOne={
              `Innovative supply chain management solution. ensure complete traceability enhances operational efficiency and safeguards your data. Say goodbye to inefficiencies and hello to a seamless, secure and sustainable future in textile. `
            } 
            // desctwo={
            //   `By utilizing data-driven insights, our platform optimizes stock levels, reduces excess, and aligns inventory with real-time demand. Make informed decisions that drive efficiency and cut costs.`
            // }          
            btndisabled
            gap={"lg:gap-60"}
          component={<MobileMock/>}/>
          <ContentRight 
            title={`Ensuring Compliance Control Agent App`} 
            descOne={
              `FiberSync’s Field Agent App is designed to support compliance and quality standards within the textile industry. Operational managers can leverage this tool for on-the-go inspections, streamlined reporting, and real-time status updates. By providing instant access to data and automated reporting capabilities, the app ensures that quality and regulatory requirements are met at every stage of production, empowering managers to uphold standards effectively and efficiently.`
            }
            btndisabled
            img={"https://i.pinimg.com/originals/f2/26/8a/f2268a2a8dc6cab93774b8e28e6491fb.png"}
          />
          <ContentLeft 
            title={`Empowering Inspections with FiberSync Field Agent App`} 
            descOne={
              `FiberSync’s Field Agent App equips textile operational managers with real-time inspection, reporting, and status updating tools, ensuring transparency and streamlined processes across all stages of production. With comprehensive traceability features, managers can seamlessly record data, report on quality standards, and flag any issues directly through the app. This empowers teams to act swiftly, reducing bottlenecks and enhancing productivity throughout the supply chain.`
            }
            btndisabled
            img={"https://www.point-of-rental.com/wp-content/uploads/2020/09/headerImgInspecion.png"}
          />
          </main>
          <Footer/>
        </hero>
        <section>
          
        </section>
    </div>

  )
}

export default FfieldApp