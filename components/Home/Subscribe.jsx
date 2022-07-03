import React from "react";

function Subscribe() {
  return (
    <>
      <div className=" mt-16 bg-customRed ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center grid grid-cols-6 gap-4 md:items-center xl:mt-0 md:text-center">
          <div className="col-span-3">
            <h3 className="text-xl font-light  text-center text-gray-100 capitalize lp:text-2xl lg:text-left lg:text-2xl ">
              join <span className="lowercase">the</span> nireeka adventure
            </h3>
            <p className="mt-2 text-xl text-gray-100 text-center lg:text-left lowercase lp:text-2xl lg:text-2xl font-light">
              <span className="capitalize font-light">Subscribe</span> for news,
              event and more.
            </p>
          </div>
          <div className="col-span-3">
            <form className="mt-4 md:flex lg:mt-0 md:m-auto md:max-w-xs sm:mx-auto  ">
              <label className="sr-only font-light">Email address</label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required=""
                className="font-light w-full h-10 px-4 mt-3 text-sm text-gray-900 placeholder-gray-400 transition-all bg-white border border-gray-200 rounded-md shadow-sm appearance-none focus:outline-none Min-w focus:ring-2 focus:ring-offset-gray-800 md:max-w-xs md:mt-2 md:ml-3 md:flex-shrink-0 "
                placeholder="Your E-Mail Address"
              />
              <div className="mt-3 md:mt-2 md:ml-3 md:flex-shrink-0">
                <button
                  type="submit"
                  className=" w-full border border-orange-400 rounded-md py-2 px-4 flex items-center justify-center text-base font-light text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-400 focus:ring-orange-400"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
