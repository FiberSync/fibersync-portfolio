
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
            <div className='flex flex-col gap-y-6'>
              {/* Accordion items */}
              <div className='collapse collapse-plus bg-black text-white jos' data-jos_animation="grow-right">
                <input type='radio' name='my-accordion' defaultChecked />
                <div className='collapse-title text-xl font-medium flex items-center gap-x-4'>
                  <MessageCircleQuestion width={22} height={22} color="#39FF14"/>
                  <span className="font-poppins">How can FiberSync improve my supply chain visibility?</span>
                </div>
                <div className='collapse-content'>
                  <p className="font-poppins">
                    FiberSync enhances visibility by providing real-time tracking of materials throughout the entire supply chain, ensuring transparency and informed decision-making.
                  </p>
                </div>
              </div>

              <div className='collapse collapse-plus bg-black text-white jos' data-jos_animation="grow-right">
                <input type='radio' name='my-accordion' />
                <div className='collapse-title text-xl font-medium flex items-center gap-x-4'>
                  <MessageCircleQuestion width={22} height={22} color="#39FF14"/>
                  <span className="font-poppins">What measures does FiberSync take for data security?</span>
                </div>
                <div className='collapse-content'>
                  <p className="font-poppins">
                    We implement advanced encryption and blockchain technology to safeguard your data and maintain integrity throughout all transactions.
                  </p>
                </div>
              </div>

              <div className='collapse collapse-plus bg-black text-white jos' data-jos_animation="grow-right">
                <input type='radio' name='my-accordion' />
                <div className='collapse-title text-xl font-medium flex items-center gap-x-4'>
                  <MessageCircleQuestion width={22} height={22} color="#39FF14"/>
                  <span className="font-poppins">Can FiberSync help with inventory management?</span>
                </div>
                <div className='collapse-content'>
                  <p className="font-poppins">
                    Yes! FiberSync optimizes inventory management by providing insights into stock levels, helping to reduce excess and minimize shortages.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Content Block */}
            <div className='jos' data-jos_animation='fade-right'>
              <div className='mb-6'>
                <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-black sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
                  Transform Your Textile Supply Chain
                </h2>
              </div>
              <div>
                <p className='mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[17px] text-justify text-slate-700'>
                  With FiberSync, streamline your supply chain processes and enhance overall efficiency. Our solution enables complete traceability and improves collaboration among stakeholders, ensuring a smoother operation from production to delivery.
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
                      95
                    </span>
                    <span className='font-bold'>%</span>
                  </h3>
                  <span className='mt-4 block text-[21px] font-normal'>
                    Increase Visibility
                  </span>
                </li>
                {/* Counter Items */}
                <li>
                  <h3
                    className='font-spaceGrotesk text-5xl leading-[1.05] tracking-[-1px] text-colorGreen md:text-5xl lg:text-6xl xl:text-[70px]'
                    data-module='countup'
                  >
                    <span className='start-number font-bold' data-countup-number={30}>
                      30
                    </span>
                    <span className='font-bold'>%</span>
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
                    <span className='start-number font-bold' data-countup-number={80}>
                      80
                    </span>
                    <span className='font-bold'>%</span>
                  </h3>
                  <span className='mt-4 block text-[21px] font-normal'>
                    Maximize Efficiency
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
