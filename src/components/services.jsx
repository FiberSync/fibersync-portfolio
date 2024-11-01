import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { ChartCandlestick } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import {TabletSmartphone} from 'lucide-react';
import {Workflow} from 'lucide-react';
import {FilePen} from 'lucide-react';

const Service = () => {
  return (
    <section id="service-section" className="bg-white py-20 xl:py-20 px-6 md:px-3">
      <div className="container mx-auto">
        <h2 className="text-4xl font-spaceGrotesk font-bold text-center text-black mb-16">
          Get all the tools to Manage Supply Chain
        </h2>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Service Item */}
          <li className="bg-[#121212] rounded-lg p-6 flex flex-col items-start">
            <div className="flex items-center mb-4">
            <ChartCandlestick width={44} height={44} color='#39FF14' className="mx-2"/>
            <h3 className="text-2xl font-semibold text-white">Quality Assurance</h3>
            </div>
            <p className="text-gray-300 mb-4 font-body">
              Monitor and maintain quality standards throughout the production process with advanced tracking.
            </p>
            <Link to="/service-details" className="flex items-center text-white hover:text-green-500">
              Learn More <FaArrowRight className="ml-2" />
            </Link>
          </li>
          <li className="bg-[#121212] rounded-lg p-6 flex flex-col items-start">
            <div className="flex items-center mb-4">
            <ShieldCheck width={44} height={44} color='#39FF14' className='mx-2'/>
            <h3 className="text-2xl font-semibold text-white">Supply Chain Transparency</h3>
  </div>
    <p className="text-gray-300 mb-4 font-body">
      Gain real-time visibility into every stage of your supply chain, ensuring informed decision-making.
    </p>
    <Link to="/service-details" className="flex items-center text-white hover:text-green-500">
      Learn More <FaArrowRight className="ml-2" />
    </Link>
  </li>
          <li className="bg-[#121212] rounded-lg p-6 flex flex-col items-start">
            <div className="flex items-center mb-4">
            <TabletSmartphone  width={44} height={44} color='#39FF14' className="mx-2"/>
            <h3 className="text-2xl font-semibold text-white">Inventory Optimization</h3>
  </div>
  <p className="text-gray-300 mb-4 font-body">
    Leverage data analytics to optimize inventory levels, reducing excess and minimizing shortages.
  </p>
  <Link to="/service-details" className="flex items-center text-white hover:text-green-500">
    Learn More <FaArrowRight className="ml-2" />
  </Link>
</li>
          <li className="bg-[#121212] rounded-lg p-6 flex flex-col items-start">
            <div className="flex items-center mb-4">
            <Workflow width={44} height={44} color='#39FF14' className="mx-2"/>
            <h3 className="text-2xl font-semibold text-white">Sustainable Practices</h3>
  </div>
  <p className="text-gray-300 mb-4 font-body">
    Implement eco-friendly practices and track your sustainability metrics seamlessly.
  </p>
  <Link to="/service-details" className="flex items-center text-white hover:text-green-500">
    Learn More <FaArrowRight className="ml-2" />
  </Link>
</li>
          <li className="bg-[#121212] rounded-lg p-6 flex flex-col items-start">
            <div className="flex items-center mb-4">
            <FilePen width={44} height={44} color='#39FF14' className="mx-2"/>
            <h3 className="text-2xl font-semibold text-white">Enhanced Collaboration</h3>
  </div>
  <p className="text-gray-300 mb-4 font-body">
    Facilitate seamless communication between stakeholders, improving overall supply chain efficiency.
  </p>
  <Link to="/service-details" className="flex items-center text-white hover:text-green-500">
    Learn More <FaArrowRight className="ml-2" />
  </Link>
</li>
          <li className="bg-[#121212] rounded-lg p-6 flex flex-col items-start">
            <div className="flex items-center mb-4">
            <ChartCandlestick width={44} height={44} color='#39FF14' className="mx-2"/>
            <h3 className="text-2xl font-semibold text-white">Risk Management</h3>
  </div>
  <p className="text-gray-300 mb-4 font-body">
    Identify and mitigate risks in your supply chain proactively, ensuring smooth operations.
  </p>
  <Link to="/service-details" className="flex items-center text-white hover:text-green-500">
    Learn More <FaArrowRight className="ml-2" />
  </Link>
</li>
          {/* Service Item */}
          {/* ... other service items ... */}
        </ul>
      </div>
    </section>
  );
};

export default Service;