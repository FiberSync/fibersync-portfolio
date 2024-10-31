import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section id='cta-section' className='bg-white flex justify-center'>
      <div className='bg-colorGreen w-[70%] m-10'>
        <div className='rounded-[10px] px-5 py-[60px] md:py-20 xl:py-[100px]'>
          {/* Section Content Block */}
          <div className='jos mx-auto max-w-[500px] text-center lg:max-w-2xl xl:max-w-[840px]'>
            <h2 className='font-spaceGrotesk text-[2.8rem] font-medium leading-[1.06] -tracking-[2px] text-black'>
              Manage your Textile LifeCycle with the Help of FiberSync
            </h2>
          </div>
          {/* Section Content Block */}
          <div
            className='jos mt-8 flex flex-wrap justify-center gap-6 md:mt-[50px]'
            data-jos_animation='fade'
          >
            <Link
              rel='noopener noreferrer'
              to='/contact'
              className='button inline-block h-full rounded border-2 border-transparent bg-black py-3 text-base text-colorGreen after:border-colorGreen after:bg-colorGreen hover:text-black'
            >
              Go To Platform
            </Link>
            <Link
              to='/plans'
              className='button inline-block h-full rounded border-2 border-black bg-colorGreen py-3 text-base text-black after:bg-black hover:text-colorGreen'
            >
              View Our Plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
