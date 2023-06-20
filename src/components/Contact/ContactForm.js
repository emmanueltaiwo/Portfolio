import React from "react";
import Button from "../Button/Button";

const ContactForm = () => {
  return (
    <div className="w-full bg-gray-800 h-full">
      <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
      <div className="max-w-screen mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
          <p className="text-3xl font-bold leading-7 text-center text-white">
            Contact me
          </p>
          <form>
            <div className="md:flex items-center mt-12">
              <div className="w-full md:w-1/2 flex flex-col">
                <label className="font-semibold leading-none text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="font-semibold leading-none text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="font-semibold leading-none text-gray-300">
                  Message
                </label>
                <textarea
                  type="text"
                  required
                  className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-5">
              <Button type="submit">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

{
  /*  */
}
