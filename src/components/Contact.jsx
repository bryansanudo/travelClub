import React from "react";
import contact from "@/assets/contact.jpg";
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="py-20">
      <h1 className="text-4xl lg:text-5xl text-center py-10">contactanos</h1>

      <div className="flex flex-col lg:flex-row items-center md:gap-20 gap-4">
        <div className="w-full lg:w-1/2 h-full p-4 flex items-center flex-col justify-center">
          <img
            src={contact}
            alt=""
            className="object-cover duration-300 w-[350px] h-[200px] md:w-[500px] md:h-[250px] shadow-lg shadow-thBlue rounded-lg"
          />
          <p className="py-12 max-w-md text-center">
            Para una asesoria directa, No dudes en contactarnos.
          </p>

          <div className="">
            <div>
              <div className="flex gap-6">
                <a
                  href="https://api.whatsapp.com/send/?phone=573044855215&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center rounded-full shadow-md shadow-thBlue hover:scale-110 duration-300 p-3 cursor pointer w-[7rem]"
                >
                  <FaWhatsapp size={32} />
                </a>
                <a
                  href="https://www.instagram.com/prestigio.travel.club/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center rounded-full shadow-md shadow-thBlue hover:scale-110 duration-300 p-3 cursor-pointer w-[7rem]"
                >
                  <FaInstagram size={32} />
                </a>
              </div>
              <div className="flex flex-col">
                <div className="mt-6 flex items-center justify-center rounded-full shadow-sm shadow-thBlue p-3 gap-6  ">
                  <FaPhoneAlt size={20} />
                  +57 300 355 6841
                </div>
                <div className="mt-6 flex items-center justify-center rounded-full shadow-sm shadow-thBlue p-3 gap-6 ">
                  <FaPhoneAlt size={20} />
                  +57 301 664 4326
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
