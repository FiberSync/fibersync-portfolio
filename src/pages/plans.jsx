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
import Intro from '../components/intro'
import Footer from '../components/footer'
import Pricing from '../components/pricing'

const Plans = () => {
  return (
    <div className='bg-white z-[1]'> 
        <Header/>
        <hero className='w-full md:h-[140%] '>      
          <main className='w-full h-full bg-white'>
          <Intro/>
          <Pricing/>
          </main>
          <Footer/>
        </hero>
        <section>
          
        </section>
    </div>

  )
}

export default Plans