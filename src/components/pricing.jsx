import { useState } from 'react';
import { Link } from 'react-router-dom';
import {CircleCheckBig} from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import Swal from 'sweetalert2';




const Pricing = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handlePayment = async (plan) => {
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
    try {

      const response = await fetch("https://fiber-sync.vercel.app/payment/paymentSubscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan }),
      });
      const data = await response.json();
      console.log("Payment data:", data);
      
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: "There was an issue initiating your payment. Please try again.",
      });
    }
  };

  const handleTab = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const plans = [
    {
      title: 'Starter',
      price: '50000',
      period: '/Per month',
      description: 'Perfect for small textile businesses exploring blockchain-powered supply chain management.',
      members: '1 user',
      features: [
        'Basic Inventory Tracking',
        'Process Monitoring (Spinning & Weaving)',
        'Data Encryption for Secure Access',
      ],
    },
    {
      title: 'Enterprise Plus',
      price: '200000',
      period: '/Per month',
      description: 'Enterprise-level control and flexibility for high-volume production and secure data handling.',
      members: 'Unlimited users',
      features: [
        'Data Driven Analysis',
        'Distrbution Quotes',
        'Enhanced Supply Chain Mangement',
        'Dedicated Support & Features',
      ],
    },
  ];

  return (
    <div className="container mx-auto pt-20 pb-10">
      {/* Tab Buttons for Monthly/Annually */}
      <section className='bg-white'>
      <div className="flex justify-center mb-8 ">
        <div className="inline-flex space-x-4 rounded-[50px] border-2 border-black font-semibold">
          <button
            className={`py-2 px-6 rounded-full ${activeTab === 0 ? 'bg-black text-white' : 'text-black'}`}
            onClick={() => handleTab(0)}
          >
            Monthly
          </button>
          <button
            className={`py-2 px-6 rounded-full ${activeTab === 1 ? 'bg-black text-white' : 'text-black'}`}
            onClick={() => handleTab(1)}
          >
            Annually
          </button>
        </div>
      </div>

      {/* Pricing List */}
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-">
        {plans.map((plan, index) => (
          <li
            key={index}
            className="group flex flex-col rounded-[10px] bg-black p-8 transition-all duration-300 hover:bg-black"
          >
            <h3 className="text-2xl font-bold leading-tight text white transition-all duration-300 group-hover:text-white">
              {plan.title}
            </h3>
            <span className="text-lg text white transition-all duration-300 group-hover:text-white">
              {plan.members}
            </span>
            <div className="my-5 h-px w-full bg-[#DBD6CF]" />

            <h4 className="mb-4 text-5xl font-bold text white transition-all duration-300 group-hover:text-white">
              PKR &nbsp;
              {activeTab === 1? `${parseInt(plan.price.slice(0)) * 4.5}` : plan.price}
              <span className="text-lg font-semibold">{activeTab === 1? "/per year" : plan.period}</span>
            </h4>

            <p className="mb-6 text-lg text white transition-all duration-300 group-hover:text-white">
              {plan.description}
            </p>

            {/* Plan Features */}
            <ul className="mb-10 flex flex-col gap-y-3">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-6 w-6">
                    <CircleCheckBig width={20} height={20} color='#39ff14'/>
                    
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Call-to-Action Button */}
            <div
              onClick={()=>plan.title === "Enterprise Plus"?  handlePayment("enterprise"):handlePayment("starter")}
              className="mt-auto cursor-pointer inline-block rounded-full border-2 border-black py-4 text-center text white transition-all duration-300 hover:bg-[#37ff14a1] hover:text-white"
            >
              Choose the plan
            </div>
          </li>
        ))}
      </ul>
      </section> 
    </div>
  );
};

export default Pricing;
