import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="max-h-full bg-[#1C1C1C] p-4 md:p-8">
      <div className="font-normal text-gray-100 text-center py-4 text-3xl">
        <h1>Get in Touch</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly p-4 md:p-8 rounded-lg border border-gray-600">
        <div className="text-white md:w-1/2">
          <h1 className="text-2xl font-thin text-center">More About Me</h1>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2  rounded-lg border border-gray-800 mt-4  p-5 bg-[#0A0A0A] md:mt-0 ">
          <form className="flex flex-col gap-4">
            <div className="w-full">
              <span>
                <input
                  type="text"
                  placeholder="Firstname"
                  className="p-2 mr-2 rounded-lg border w-[48%] border-gray-600 focus:outline-none bg-transparent focus:ring-2 focus:ring-blue-500"
                />
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Lastname"
                  className="p-2 ml-2 rounded-lg border w-[48%] border-gray-600 focus:outline-none bg-transparent  focus:ring-2 focus:ring-blue-500"
                />
              </span>
            </div>
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-lg border border-gray-600 focus:outline-none bg-transparent  focus:ring-2 focus:ring-blue-500"
            />
           
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-2 rounded-lg border min-w-10 border-gray-600 focus:outline-none focus:ring-2 bg-transparent  focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
