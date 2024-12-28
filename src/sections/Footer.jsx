import React from "react";
import { footerLinks } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h4 className="text-2xl font-bold">Nike</h4>
            <p className="mt-4 text-white-400">
              Discover stylish Nike arrivals, quality comfort, and innovation
              for your active life.
            </p>
          </div>

          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      className="mt-3 text-white-400 font-montserrat text-base leading-normal cursor-pointer hover:text-slate-gray"
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="border border-white-400 my-10" />
        {/* copyright */}
        <div className=" flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img
              src={copyrightSign}
              alt="copy right sign"
              width={20}
              height={20}
              className=" rounded-full m-0"
            />
            <p className="text-sm">Copyright. All Rights Reserved.</p>
          </div>
          <p className=" font-montserrat cursor-pointer">Terms </p>
        </div>
      </div>

    
    </footer>
  );
};

export default Footer;
