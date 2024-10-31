
import { MessageCircleQuestion } from "lucide-react";
import React from "react";



 const InfoBlock = () => {
  return (
    <section id='content-section-4'>
      {/* Section Spacer */}
      <div className='py-10 xl:py-10 bg-white font=body'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid items-center gap-12 lg:grid-cols-[minmax(0,_.75fr)_1fr] lg:gap-20 xl:gap-24'>
            {/* Process Accordion */}
            <div className='flex flex-col gap-y-6 ' >
              {/* Accordion items */}
              <div className='collapse collapse-plus bg-black text-white jos' data-jos_animation="grow-right">
                <input type='radio' name='my-accordion' defaultChecked />
                <div className='collapse-title text-xl font-medium flex items-center gap-x-4'>
                <MessageCircleQuestion width={22} height={22} color="#39FF14"/>
                  <span className="font-poppins">Create a free account</span>
                </div>
                <div className='collapse-content'>
                  <p className="font-poppins">
                    You can easily create a custom AI account. You need to input
                    some required information.
                  </p>
                </div>
              </div>

              {/* Additional Accordion items */}
              <div className='collapse collapse-plus bg-black text-white jos' data-jos_animation="grow-right">
                <input type='radio' name='my-accordion' />
                <div className='collapse-title text-xl font-medium flex items-center gap-x-4'>
                <MessageCircleQuestion width={22} height={22} color="#39FF14"/>
                  
                  <span className="font-poppins">Optimize security settings</span>
                </div>
                <div className='collapse-content'>
                  <p className="font-poppins">
                    Ensure your security settings are optimized for the best protection.
                  </p>
                </div>
              </div>

              <div className='collapse collapse-plus bg-black text-white jos' data-jos_animation="grow-right">
                <input type='radio' name='my-accordion' />
                <div className='collapse-title text-xl font-medium flex items-center gap-x-4'>
                <MessageCircleQuestion width={22} height={22} color="#39FF14"/>
                  <span className="font-poppins">Receive AI recommendations</span>
                </div>
                <div className='collapse-content'>
                  <p className="font-poppins">
                    Get personalized recommendations based on your activity and preferences.
                  </p>
                </div>
              </div>
            </div>
            {/* Process Accordion */}
            <div className='jos' data-jos_animation='fade-right'>
              {/* Section Content Block */}
              <div className='mb-6'>
                <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-black sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
                  Optimize the highest security standards
                </h2>
              </div>
              {/* Section Content Block */}
              <div>
                <p className='mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[21px] text-slate-700'>
                  With AI cybersecurity solutions, you can also save time and
                  money integrating disparate vendors, reduce training time, and
                  accelerate your time to discovery and response with everything
                  you need.
                </p>
              </div>
              {/* Counter Scroll */}
              <ul className='mt-[50px] grid grid-cols-1 gap-10 gap-y-5 text-center sm:grid-cols-3'>
                {/* Counter Items */}
                <li>
                  <h3
                    className='font-spaceGrotesk text-5xl leading-[1.05] tracking-[-1px] text-colorGreen md:text-5xl lg:text-6xl xl:text-[70px]'
                    data-module='countup'
                  >
                    <span className='start-number font-bold' data-countup-number={95}>
                      92
                    </span>
                    <span  className='font-bold'>%</span>
                  </h3>
                  <span className='mt-4 block text-[21px] font-normal'>
                    Reduce Risk
                  </span>
                </li>
                {/* Counter Items */}
                <li>
                  <h3
                    className='font-spaceGrotesk text-5xl leading-[1.05] tracking-[-1px] text-colorGreen md:text-5xl lg:text-6xl xl:text-[70px]'
                    data-module='countup'
                  >
                    <span className='start-number font-bold' data-countup-number={50}>
                      50
                    </span>
                    <span  className='font-bold'>%</span>
                  </h3>
                  <span className='mt-4 block text-[21px] font-normal'>
                    Reduce Costs
                  </span>
                </li>
                {/* Counter Items */}
                <li>
                  <h3
                    className='font-spaceGrotesk text-5xl leading-[1.05] tracking-[-1px] text-colorGreen md:text-5xl lg:text-6xl xl:text-[70px]'
                    data-module='countup'
                  >
                    <span className='start-number font-bold' data-countup-number={76}>
                      76
                    </span>
                    <span  className='font-bold'>%</span>
                  </h3>
                  <span className='mt-4 block text-[21px] font-normal'>
                    Maximize Value
                  </span>
                </li>
                {/* Counter Items */}
              </ul>
              {/* Counter Scroll */}
            </div>
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};


export default InfoBlock;