import React from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="bg-black text-gray-200 py-16 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto bg-black p-8 rounded-lg shadow-lg shadow-yellow-400/50">
        <h2 className="text-4xl font-bold text-center mb-8 text-yellow-400">
          Contact
          <span className="text-yellow-500"> Us</span>
        </h2>

        <p className="text-lg text-center mb-6">
          You can reach us via email, WhatsApp, phone, or visit us at our location:
        </p>

        <div className="flex flex-col items-center space-y-6 text-center">
          {/* Emails */}
          <div className="flex flex-col items-center space-y-2">
            <p className="font-semibold text-yellow-300 mb-1 flex items-center">
              <AiOutlineMail className="mr-2 text-yellow-400" /> Email:
            </p>
            <a
              href="mailto:Shriramfastnersales@gmail.com"
              className="text-yellow-400 hover:text-yellow-500 transition-colors"
            >
              Shriramfastnersales@gmail.com
            </a>
            <a
              href="mailto:Goyalhimanshuindia@gmail.com"
              className="text-yellow-400 hover:text-yellow-500 transition-colors"
            >
              Goyalhimanshuindia@gmail.com
            </a>
          </div>

          {/* Admin WhatsApp */}
          <div className="flex flex-col items-center space-y-2">
            <p className="font-semibold text-yellow-300 mb-1 flex items-center">
              <AiOutlineWhatsApp className="mr-2 text-green-500" /> Admin WhatsApp:
            </p>
            <a
              href="https://wa.me/919463616466?text=Hello%20Admin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-500 transition-colors"
            >
              9463616466
            </a>
          </div>

          {/* Customer Care Call */}
          <div className="flex flex-col items-center space-y-2">
            <p className="font-semibold text-yellow-300 mb-1 flex items-center">
              <AiOutlinePhone className="mr-2 text-yellow-400" /> Customer Care:
            </p>
            <a
              href="tel:7888641023"
              className="text-yellow-400 hover:text-yellow-500 transition-colors"
            >
              7888641023
            </a>
          </div>

          {/* Embedded Google Map */}
          <div className="w-full mt-8 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.145481248795!2d75.91080507544586!3d30.854601674525842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910774cf554dab7%3A0x2b1ed85cf5e20267!2sSHRI%20RAM%20FASTNERS!5e0!3m2!1sen!2sin!4v1765974876266!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SHRI RAM FASTNERS Location"
            ></iframe>
          </div>
        </div>

        <p className="text-gray-400 text-center mt-8">
          We are available Monday to Saturday from 9:00 AM to 6:00 PM.
        </p>
      </div>
    </div>
  );
};

export default Contact;
