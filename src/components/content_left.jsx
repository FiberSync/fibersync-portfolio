import { Link } from 'react-router-dom';
import contentImage from '../assets/content1.jfif';

const ContentLeft = ({img=contentImage, title, descOne , desctwo ,btndisabled=false , component=false}) => {
  return (
    <section id="section-content-1" className='bg-white'>
      {/* Section Spacer */}
      <div className="pt-20 xl:pt-[130px] pb-2 xl:pb-[60px]">
        
        {/* Responsive Container */}
        <div className="mx-auto max-w-[1332px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,_1fr)_1.3fr] lg:gap-[60px] xl:gap-x-[94px]">
            
            {/* Image Section with Animation */}
            <div className="jos transition-transform duration-700 transform hover:scale-105" data-jos_animation="fade-right">
              <div className="overflow-hidden rounded-lg">
                {!component? (<img
                  src={img}
                  alt="Securing networks"
                  width={550}
                  height={550}
                  className="h-auto w-full"
                />) : component}
                
              </div>
            </div>
            
            {/* Text Content Section with Animation */}
            <div className="jos transition-transform duration-700 transform hover:scale-105" data-jos_animation="fade-left">
              
              {/* Title Block */}
              <div className="mb-6">
                <h2 className="font-spaceGrotesk text-4xl font-medium leading-tight tracking-tight text-black sm:text-[44px] lg:text-[56px] xl:text-[70px]">
                  {title}
                </h2>
              </div>
              
              {/* Description Blocks */}
              <div>
                <p className="mb-8 text-lg font-body leading-relaxed text-slate-800 lg:text-[17px]">
                {descOne}
                </p>
                
                <p className="mb-8 text-lg font-body leading-relaxed text-slate-800 lg:text-[17px]">
                 {desctwo}
                </p>
                
                {/* Call-to-Action Button */}
                {!btndisabled && (
                  <Link
                  to="/about"
                  className="inline-block rounded bg-[#39FF14] py-3 px-6 text-base font-bold text-black transition-transform duration-300 ease-in-out hover:bg-green-500"
                >
                  Explore the Platform
                </Link>
                )
                }
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ContentLeft;
