import React from 'react';

const WhyUsCard = ({ icon, title, description }) => {
  return (
    <div className="bg-black text-white p-6 rounded-2xl shadow-lg hover:shadow-yellow-500 transition duration-300 text-center max-w-sm mx-auto hover:scale-105">
      <div className="mb-4 flex justify-center text-yellow-400 hover:text-yellow-500 transition-colors duration-300 text-4xl">
        {icon}
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default WhyUsCard;
