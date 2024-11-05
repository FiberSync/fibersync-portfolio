import React from 'react'

let defaultProps = {
  title: ' Pricing Plan',
  Subtitles: 'Explore Subscription Plans and Choose the one that best meets your needs.',}


  const Intro = ({ title=defaultProps.title, subtitle=defaultProps.Subtitles }) => {
    return (
      <div className='w-vw h-auto pt-32 bg-black pb-10'>
        <div className='bg-black flex flex-col justify-center'>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-4xl lg:text-4xl font-spaceGrotesk text-center">
            {title}
          </h1>
          {/* Hero Description */}
          <p className="mx-auto px-2 md:px-0 text-center text-white max-w-2xl text-lg leading-relaxed lg:text-lg xl:text-lg font-spaceGrotesk md:font-raleway">
            {subtitle}
          </p>
        </div>
      </div>
    );
  };
  
  export default Intro;
  