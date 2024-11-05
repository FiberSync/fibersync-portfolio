import { Link } from 'react-router-dom';
import { Facebook , Twitter , Linkedin , Instagram} from "lucide-react";

const Footer= () => {
  return (
    <footer id='footer-4'>
      <div className='relative z-[1] overflow-hidden bg-black text-white'>
        {/* Section Container */}
        <div className='pb-10'>
          {/* Footer Center */}
          <div className='mt-[100px]'>
            {/* Section Container */}
            <div className='global-container'>
              {/* Footer Widgets Block */}
              <div className='grid font-body gap-x-10 gap-y-[60px] sm:grid-cols-2 md:grid-cols-4 lg:flex lg:justify-between lg:gap-x-20'>
                {/* Footer Widget */}
                <div className='flex flex-col gap-y-6'>
                  {/* Footer Title */}
                  <h4 className='text-[21px] font-semibold  capitalize text-white'>
                    Pages
                  </h4>
                  {/* Footer Title */}
                  {/* Footer Navbar */}
                  <ul className='flex flex-col gap-y-[10px] capitalize'>
                    <li>
                      <Link
                        to='/'
                        className='transition-all duration-300 ease-linear hover:text-colorGreen'
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about'
                        className='transition-all duration-300 ease-linear hover:text-colorGreen'
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/features_fa'
                        className='transition-all duration-300 ease-linear hover:text-colorGreen'
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/plans'
                        className='transition-all duration-300 ease-linear hover:text-colorGreen'
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/contact'
                        className='transition-all duration-300 ease-linear hover:text-colorGreen'
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Footer Widget */}
                {/* Footer Widget Item */}
                
                <div className='hidden md:flex flex-col gap-y-6  md:visible'>
                  {/* Footer Title */}
                  <h4 className='text-[21px] font-semibold capitalize text-white'>
                  &nbsp;
                  </h4>
                  {/* Footer Title */}
                  {/* Footer Navbar */}
                  <ul className='flex flex-col gap-y-[10px] capitalize'>
                    <li>
                      <Link
                        
                        className='transition-all duration-300 ease-linear hover:text-colorGreen'
                      >
                         &nbsp;
                      </Link>
                    </li>
                    <li>
                      <Link
                       
                        className='transition-all duration-300 ease-linear hover:text-colorGreen'
                      >
                         &nbsp;
                      </Link>
                    </li>
                    <li>
                      <Link
                        
                        className='transition-all duration-300 ease-linear hover:text-colorGreen'
                      >
                         &nbsp;
                      </Link>
                    </li>
                    <li>
                      <Link
                        
                        className='transition-all duration-300 ease-linear hover:text-colorGreen'
                      >
                       &nbsp;
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Footer Widget Item */}
                {/* Footer Widget Item */}
                <div className='flex flex-col gap-y-6'>
  {/* Footer Title */}
  <h4 className='text-[21px] font-semibold capitalize text-white'>
    Blogs and News
  </h4>
  {/* Footer Navbar */}
      <ul className='flex flex-col gap-y-[10px] capitalize'>
        <li>
          <Link
            rel='noopener noreferrer'
            target='_blank'
            to='https://aptma.org.pk/traceability-essential-for-sustainability/'
            className='transition-all duration-300 ease-linear hover:text-colorGreen'
          >
            APTMA: Traceability Essential for Sustainability
          </Link>
        </li>
        <li>
          <Link
            rel='noopener noreferrer'
            target='_blank'
            to='https://www.dawn.com/news/1739898'
            className='transition-all duration-300 ease-linear hover:text-colorGreen'
          >
            Merchandise exports shrink 19pc in February
          </Link>
        </li>
        <li>
          <Link
            rel='noopener noreferrer'
            target='_blank'
            to='https://www.dawn.com/news/1867247'
            className='transition-all duration-300 ease-linear hover:text-colorGreen'
          >
            Textile, leather industries to emerge stronger (Dawn)
          </Link>
        </li>
        <li>
          <Link
            rel='noopener noreferrer'
            target='_blank'
            to='https://www.fibre2fashion.com/industry-article/textile-engineering/software-solutions-for-textile-industry.asp'
            className='transition-all duration-300 ease-linear hover:text-colorGreen'
          >
            Software Solutions for the Textile Industry (Fibre2Fashion)
          </Link>
        </li>
        <li>
          <Link
            rel='noopener noreferrer'
            target='_blank'
            to='https://www.dawn.com/news/1662021'
            className='transition-all duration-300 ease-linear hover:text-colorGreen'
          >
            Textile exports projected to cross $20bn target (DAWN)
          </Link>
        </li>
      </ul>
    </div>
                {/* Footer Widget Item */}
                {/* Footer Widget Item */}
                <div className='flex flex-col gap-y-6'>
                  {/* Footer Title */}
                  <h4 className='text-[21px] font-semibold capitalize text-white'>
                    Socials
                  </h4>
                  {/* Footer Title */}
                  {/* Footer Navbar */}
                  <ul className='flex flex-col gap-y-[15px] capitalize'>
                    <li>
                      <Link
                        rel='noopener noreferrer'
                        target='_blank'
                        to='http://www.facebook.com'
                        className='group flex items-center gap-x-3'
                      >
                        <div className='flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-green-600'>
                          <Facebook width={40} height={40} color='#39ff14'/>
                        </div>
                        <span className='inline-block flex-1'>Facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        rel='noopener noreferrer'
                        target='_blank'
                        to='http://www.twitter.com'
                        className='group flex items-center gap-x-3'
                      >
                        <div className='flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-green-600'>
                        <Twitter width={40} height={40} color='#39ff14'/>
                        </div>
                        <span className='inline-block flex-1'>Twitter</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        rel='noopener noreferrer'
                        target='_blank'
                        to='http://www.instagram.com'
                        className='group flex items-center gap-x-3'
                      >
                        <div className='flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-green-600'>
                        <Instagram width={40} height={40} color='#39ff14'/>
                        </div>
                        <span className='inline-block flex-1'>Instagram</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        rel='noopener noreferrer'
                        target='_blank'
                        to='http://www.linkedin.com'
                        className='group flex items-center gap-x-3'
                      >
                        <div className='flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-green-600'>
                        <Linkedin width={40} height={40} color='#39ff14'/>
                        </div>
                        <span className='inline-block flex-1'>Linkedin</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Footer Widget Item */}
              </div>
              {/* Footer Widgets Block */}
            </div>
            {/* Section Container */}
          </div>
          {/* Footer Center */}
          {/* Footer Separator */}
          <div className='global-container'>
            <div className='mb-10 mt-[60px] h-[1px] w-full bg-white opacity-10' />
          </div>
          {/* Footer Separator */}
          {/* Footer Bottom */}
          <div>
            <div className='global-container'>
              <div className='flex flex-wrap items-center justify-center gap-5 text-center md:justify-between md:text-left'>
                <Link to='/'>
                  <h2 className='font-poppins font-bold text-colorGreen text-3xl'>FiberSync</h2>
                </Link>
                <p>
                  © Copyright {new Date().getFullYear()}, All Rights Reserved by
                  FiberSync
                </p>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
        </div>
        {/* Section Container */}
        {/* Background Gradient */}
        
      </div>
    </footer>
  );
};

export default Footer;
