import React from 'react'
import Logo from '../components/logo'
import Header from '../components/header'
import Hero from '../components/hero'
import ContentLeft from '../components/content_left'
import ContentRight from '../components/content_right'
import Service from '../components/services'
import SlideTicker from '../components/slide_ticker'
import VideoTutorial from '../components/video_tutorial'
import InfoBlock from '../components/info_block'
import Banner from '../components/banner'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div className='bg-white z-[1]'> 
        <Header/>
        <hero className='absolute w-full md:h-[140%] '>
          <Hero/>
          <ContentLeft title={`Optimized Inventory, Uninterrupted Supply`} descOne={
            `FiberSync streamlines core processes in your supply chain, including spinning, weaving, dyeing, manufacturing, and distribution .`
          } desctwo={
            `By automating routine tasks and enhancing communication, our platform drives productivity and minimizes bottlenecks. Provide actionable insights for better resource allocation and demand forecasting.`
          }/>
          <hr className="border-t-4 border-[#fff] py-3 bg-white"  />
          <ContentRight title={`Securing SCM with Blockchain`}
          img={`https://litslink.com/wp-content/uploads/2023/01/Types-Of-Smart-Contracts_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-1-1024x683.png`}
          descOne={`FiberSync leverages blockchain technology to provide a highly secure and transparent solution for supply chain management. Each transaction is recorded and protected from unauthorized access, ensuring data integrity across every process.`}
          desctwo={`With FiberSync, you gain a comprehensive view of each stage of production, from inventory and spinning to weaving and dyeing. The blockchain-powered system allows you to trace each fiber, guaranteeing complete visibility.`}
          btndisabled/>
          <Service/>

          <ContentRight 
            title={`Enhancing Traceability in Textile Supply Chains`} 
            descOne={`FiberSync revolutionizes traceability in the textile industry, allowing businesses to track every fiber and fabric through each stage of the supply chain. With our innovative solution, you can ensure compliance with industry standards and enhance product quality by monitoring the origins and processing of materials.`} 
            desctwo={`By integrating advanced tracking technologies, FiberSync provides real-time insights into inventory levels and production processes. This transparency not only boosts operational efficiency but also builds consumer trust, as customers can verify the authenticity and sustainability of their products with ease.`} 
            btndisabled 
          />
          <SlideTicker/>
          <VideoTutorial/>
          <InfoBlock/>
          <Banner/>
          <Footer/>
        </hero>
        <section>
          
        </section>
    </div>

  )
}

export default Home