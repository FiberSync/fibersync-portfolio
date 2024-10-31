import { Link } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import axios from 'axios';
import Swal from 'sweetalert2';

const Hero = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    try {
      const response = await axios.get('https://fiber-sync.vercel.app/sendIntroEmail', {
        params: {
          email,
        }
      });
      console.log("Hello");
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: `Email will be sent shortly to ${email}`,
      });
    } catch (error) {
      Swal.fire({
        icon: 'info',
        title: 'Sorry for Inconvinence',
        text: `Email can't be sent to ${email} at the moment please try again later`,
      });
    }
  };



  return (
    <section id="hero-section" className="relative text-center h-[80%] text-white overflow-hidden">
      {/* Hero Background */}
      <div className={`bg-[url('/worker.jpg')] bg-cover bg-no-repeat pb-20 pt-28 md:pb-[265px] md:pt-40 lg:pt-44 xl:pt-[224px]`}>
        
        {/* Container */}
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          
          {/* Hero Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-[5rem] font-spaceGrotesk">
            Proper SCM Solution for Your Textile Industry
          </h1>
          
          {/* Hero Description */}
          <p className="mx-auto max-w-2xl text-lg leading-relaxed lg:text-xl xl:text-2xl font-spaceGrotesk md:font-raleway">
          Innovative supply chain management solution. ensure complete traceability enhances operational efficiency and safeguards your data. Say goodbye to inefficiencies and hello to a seamless, secure and sustainable future in textile. 
          </p>
          
          {/* Email Form */}
          <form onSubmit={handleSubmit} className="mt-11">
            <div className="relative mx-auto max-w-md h-14 overflow-hidden rounded">
              <input
                type="email"
                name='email'
                placeholder="Enter your email..."
                className="w-full h-full px-6 pr-[150px] bg-[#191919] text-white text-base font-semibold placeholder-gray-400 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 h-full px-6 bg-[#39FF14] text-black font-bold transition-transform duration-300"
              >
                Get Started
              </button>
            </div>
          </form>
          
          {/* Terms and Conditions */}
          <div className="mt-4 flex items-center justify-center gap-2 text-sm lg:text-base">
            <div className='invisible  md:visible'><FaCheckCircle/></div>
          
            <p>
              By signing up, you agree to our
              <Link to="#" className="ml-1 underline hover:text-[#39FF14]">
                Terms & Conditions
              </Link>.
            </p>
          </div>
        </div>
      </div>


      
    </section>
  );
};

export default Hero;
