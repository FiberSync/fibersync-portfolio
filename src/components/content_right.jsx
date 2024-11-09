import { Link } from 'react-router-dom';
import contentImage from '../assets/content1.jfif';
import { Image } from 'lucide-react';

const ContentRight = ({
  bg = `bg-black`,
  component,
  img = `https://img.freepik.com/premium-photo/textile-dyeing-factory-equipment-production-dyed-fabrics_124507-51501.jpg`,
  title,
  descOne,
  descTwo,
  btndisabled = false ,
  gap
}) => {
  const textColor = bg === "bg-black" ? "text-white" : "text-black";

  return (
    <section id="section-content-1" className={bg}>
      {/* Section Spacer */}
      <div className="pt-10 xl:py-[30px]">
        
        {/* Responsive Container */}
        <div className="mx-auto max-w-[1332px] px-4 sm:px-6 lg:px-8 pb-10">
          <div className={`grid items-center gap-24 md:grid-cols-[minmax(0,_1fr)_1.3fr] ${gap? gap : "lg:gap-[60px]"} ${gap? gap : "xl:gap-x-24"}`}>
            
            {/* Text Content Section with Animation - appears on left side */}
            <div className={`jos order-2 md:order-1 transition-transform duration-700 transform hover:scale-105 ${textColor}`} data-jos_animation="fade-right">
              
              {/* Title Block */}
              <div className="mb-6">
                <h2 className={`font-spaceGrotesk text-4xl font-medium leading-tight tracking-tight ${textColor} sm:text-[44px] lg:text-[56px] xl:text-[70px]`}>
                  {title}
                </h2>
              </div>
              
              {/* Description Blocks */}
              <div>
                <p className={`mb-8 text-lg font-body leading-relaxed lg:text-[17px] ${textColor}`}>
                  {descOne}
                </p>
                <p className={`mb-8 text-lg font-body leading-relaxed lg:text-[17px] ${textColor}`}>
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
                )}
                
              </div>
            </div>

            {/* Image Section with Animation - appears on right side */}
            <div className="jos order-1 md:order-2 transition-transform duration-700 transform hover:scale-105" data-jos_animation="fade-left">
              <div className="overflow-hidden rounded-lg">
                {!component ? (
                  <img
                    src={img}
                    alt="Securing networks"
                    width={550}
                    height={550}
                    className="h-auto w-full"
                  />
                ) : component}
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ContentRight;
