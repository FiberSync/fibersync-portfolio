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
          <ContentLeft/>
          <hr className="border-t-4 border-[#fff] py-3 bg-white"  />
          <ContentRight/>
          <Service/>

          <ContentRight/>
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