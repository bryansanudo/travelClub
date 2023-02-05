import React from "react";
import contact from "@/assets/contact.jpg";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center md:gap-20 gap-4">
      <div className="w-full lg:w-1/2 h-full p-4 flex items-center flex-col justify-center">
        <img
          src={contact}
          alt=""
          className="object-cover duration-300 w-[350px] h-[200px] md:w-[500px] md:h-[250px] shadow-xl shadow-thBlue rounded-lg"
        />
        <p className="py-12 max-w-md text-center">recibe la mejor acesoaira</p>

        <div className="flex gap-10 py-10">
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-full shadow-lg shadow-thBlue hover:scale-110 duration-300 p-3 cursor pointer w-[7rem]"
          >
            <FaWhatsapp size={40} />
          </a>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-full shadow-lg shadow-thBlue hover:scale-110 duration-300 p-3 cursor-pointer w-[7rem]"
          >
            <FaInstagram size={40} />
          </a>
        </div>
      </div>

      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
