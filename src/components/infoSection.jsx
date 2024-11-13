// import React from 'react'

import { FaHeadset, FaLock, FaShippingFast, FaTag } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Free shipping",
      description: "Get your orders deliverid with no extra cost",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "24/7 customer support",
      description: "We are here to help you with any issues",
    },
    {
      icon: <FaMoneyBill1Wave className="text-3xl text-red-600" />,
      title: "Money-back guarantee",
      description: "Return your order within 30 days for a full refund",
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Secure payment",
      description:
        "We use SSL encryption to protect your sensitive information",
    },
    {
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "Best deals & discounts",
      description: "Check out our latest deals and promotions",
    },
  ];
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 ">
        {infoItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            {item.icon}
            <h3 className="mt-4 text-xl font-semibold ">{item.title}</h3>
            <p className="mt-2 text-gray-600 "> {item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
