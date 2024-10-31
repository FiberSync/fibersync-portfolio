import React from 'react'

const Intro = () => {
  return (
    <div className='w-vw h-auto pt-32 bg-black pb-10'>
        <div className='bg-black flex flex-col justify-center'>
        <h1 className="mb-6 text-4xl font-bold text-white md:text-4xl lg:text-4xl font-spaceGrotesk text-center">
            Pricing Plan
          </h1>
          {/* Hero Description */}
          <p className="mx-auto text-white max-w-2xl text-lg leading-relaxed lg:text-lg xl:text-lg font-spaceGrotesk md:font-raleway">
          Explore Subscription Plans and Choose the one that best meets your needs.
          </p>
        </div>
    </div>
  )
}

export default Intro