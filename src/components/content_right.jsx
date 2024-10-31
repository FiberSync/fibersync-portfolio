import { Link } from 'react-router-dom';
import contentImage from '../assets/content1.jfif';
import { Image } from 'lucide-react';

const ContentRight = ({img=`https://img.freepik.com/premium-photo/textile-dyeing-factory-equipment-production-dyed-fabrics_124507-51501.jpg`
  , title, descOne , descTwo ,btndisabled=false}) => {
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
                 {title}
                </h2>
              </div>
              
              {/* Description Blocks */}
              <div>
                <p className="mb-8 text-lg font-body leading-relaxed text-white lg:text-[21px]">
                {descOne}
                </p>
                <p className="mb-8 text-lg font-body leading-relaxed text-white lg:text-[21px]">
                {descTwo}
                </p>
                
                {/* Call-to-Action Button */}
                {!btndisabled && (
                    <Link
                    to="/about"
                    className="inline-block rounded bg-[#39FF14] py-3 px-6 text-base font-bold text-white transition-transform duration-300 ease-in-out hover:bg-green-500"
                  >
                    Explore the Platform
                  </Link>
                )
                }
                
              </div>
            </div>

            {/* Image Section with Animation - appears on right side */}
            <div className="jos rder-1 md:order-2 transition-transform duration-700 transform hover:scale-105" data-jos_animation="fade-left">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={img}
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
