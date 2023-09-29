import React from "react";
import {FiArrowRight} from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:text-[30px] text-[23px] text-zinc-100 mb-8">
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <section className="overflow-hidden backdrop-blur-3xl w-8/12 rounded-3xl bg-opacity-70 bg-black ">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div
            className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">
            Are you interested in exploring a partnership with us? 
            </h2>

            <p className="hidden text-white-500 md:mt-4 md:block">
            We welcome your inquiries and invite you to reach out to us for further discussions. Please feel free to contact us here.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="mailto:sauravnavdhare03@gmail.com"
                className="inline-flex align-middle items-center justify-center mx-auto rounded bg-orange-600 px-12 py-3 text-xl font-medium text-white transition hover:bg-emerald-700 focus:outline-none"
              >
                Contact Us <FiArrowRight className="ml-1 text-2xl"/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
