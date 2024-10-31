import { Link } from 'react-router-dom';
import contentImage from '../assets/content1.jfif';

const ContentRight = () => {
  return (
    <section id="section-content-1" className="bg-black">
      {/* Section Spacer */}
      <div className="pt-10 xl:py-[30px]">
        
        {/* Responsive Container */}
        <div className="mx-auto max-w-[1332px] px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,_1fr)_1.3fr] lg:gap-[60px] xl:gap-x-[94px]">
            
            {/* Text Content Section with Animation - appears on left side */}
            <div className="jos order-2 md:order-1 transition-transform duration-700 transform hover:scale-105" data-jos_animation="fade-right">
              
              {/* Title Block */}
              <div className="mb-6">
                <h2 className="font-spaceGrotesk text-4xl font-medium leading-tight tracking-tight text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]">
                  Securing SCM with Blockchain
                </h2>
              </div>
              
              {/* Description Blocks */}
              <div>
                <p className="mb-8 text-lg font-body leading-relaxed text-white lg:text-[21px]">
                FiberSync leverages blockchain technology to provide a highly secure and transparent solution for supply chain management. Each transaction is recorded and protected from unauthorized access, ensuring data integrity across every process.
                </p>
                <p className="mb-8 text-lg font-body leading-relaxed text-white lg:text-[21px]">
                With FiberSync, you gain a comprehensive view of each stage of production, from inventory and spinning to weaving and dyeing. The blockchain-powered system allows you to trace each fiber, guaranteeing complete visibility.
                </p>
                
                {/* Call-to-Action Button */}
                <Link
                  to="/about"
                  className="inline-block rounded bg-[#39FF14] py-3 px-6 text-base font-bold text-white transition-transform duration-300 ease-in-out hover:bg-green-500"
                >
                  Explore the Platform
                </Link>
              </div>
            </div>

            {/* Image Section with Animation - appears on right side */}
            <div className="jos rder-1 md:order-2 transition-transform duration-700 transform hover:scale-105" data-jos_animation="fade-left">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://img.freepik.com/premium-photo/textile-dyeing-factory-equipment-production-dyed-fabrics_124507-51501.jpg"
                  alt="Securing networks"
                  width={550}
                  height={550}
                  className="h-auto w-full"
                />
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ContentRight;
