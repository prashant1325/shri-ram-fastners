import React from 'react';
import { SiWebmoney } from "react-icons/si";
import { FaUsers, FaShippingFast } from "react-icons/fa";
import WhyUsCard from './WhyUsCard';

const WhyUs = () => {
  return (
    <div className="bg-black text-white px-6 py-10">
      {/* Heading */}
      <h1
        className="text-3xl sm:text-5xl font-bold text-center mb-6 font-serif"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        Experience the Difference with <span className="text-yellow-400">SHRI RAM FASTNERS</span>
      </h1>

      {/* Description */}
      <p className="text-center max-w-3xl mx-auto text-lg mb-10">
        At <span className="text-yellow-400">SHRI RAM FASTNERS,</span> we redefine excellence in every connection. From premium-quality nuts and bolts to unmatched customer service, every detail is crafted with precision and care. Experience a reliable and seamless supply journey built on trust, durability, and top-tier quality that keeps your projects secure and strong.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <WhyUsCard 
          icon={<SiWebmoney size={50} className="mx-auto text-yellow-400" />} 
          title="Flexible Financing" 
          description="We offer convenient and flexible payment options to make purchasing bulk nuts and bolts easy for every business."
        />
        <WhyUsCard 
          icon={<FaUsers size={50} className="mx-auto text-yellow-400" />} 
          title="Trusted by Customers" 
          description="Our customers rely on us for high-quality fasteners and exceptional service. Join thousands who trust SHRI RAM FASTNERS."
        />
        <WhyUsCard 
          icon={<FaShippingFast size={50} className="mx-auto text-yellow-400" />} 
          title="Fast Delivery" 
          description="With quick and reliable delivery across regions, we ensure your orders of nuts and bolts reach you on time, every time."
        />
      </div>
    </div>
  );
};

export default WhyUs;
