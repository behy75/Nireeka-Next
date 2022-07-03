import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Data from "./Data";
import Image from "next/image";
import Eletrek from "../../public/images/electrek-logo.png";
// import eletrekSmall from "../../public/images/electric-small.png";
import Atlas from "../../public/images/new-atlas-logo.png";
import Ebr from "../../public/images/ebr-logo.png";
import EVNords from "../../public/images/ev-nords-logo.png";
import Link from "next/link";
// const images = [
//   {
//     name: Eletrek,
//     alte: "Eletrek",
//     id: 1,
//     site: "Electrek.co",
//   },
//   {
//     name: Atlas,
//     alte: "Atlas",
//     id: 2,
//     site: "Newatlas.com",
//   },
//   {
//     name: Ebr,
//     alte: "EBR",
//     id: 3,
//     site: "Electricbikereview.com",
//   },
//   {
//     name: EVNords,
//     alte: "EVNords",
//     id: 4,
//     site: "Evnerds.com",
//   },
// ];

function SliderHomePage() {
  const [people, setPeople] = useState(Data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
      {/* <section className="mt-10 mb-6">
        <div>
          <h6 className="py-6 mx-auto text-lg font-light text-center text-gray-500 uppercase">
            nireeka as reviwed by the press
          </h6>
        </div>
   
      </section> */}
      <section className="section">
        <div className="mx-auto section-center">
          {people.map((person, personIndex) => {
            const {
              id,
              image,
              name,
              sizeImage_w,
              sizeImage_h,
              quote,
              smallImage,
              company,
              site,
            } = person;
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <div key={id} className="px-6 lg:px-12">
                <article className={position}>
                  <Image
                    src={image}
                    alt={name}
                    width={sizeImage_w}
                    height={sizeImage_h}
                  />

                  <h5 className="w-full px-2 pb-3 mx-auto text-2xl font-light pt-7 lg:px-10 lg:w-600">
                    {name}
                  </h5>
                  <div className="px-2 mx-auto text-lg font-light w-900 lg:px-10 lg:w-600">
                    <p className="px-6 text-lg text-gray-500 font-dosis ">
                      {quote}
                    </p>
                  </div>
                  <div className="mt-5 md:flex md:items-center md:justify-center">
                    <div className="md:flex-shrink-0">
                      <div className="w-10 h-10 mx-auto rounded-full h-35 relativ">
                        <Image
                          src={smallImage}
                          alt={name}
                          width={100}
                          height={100}
                          className={"rounded-full"}
                        />
                      </div>
                    </div>
                    <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                      <div className="text-base font-light text-gray-900">
                        {company}
                      </div>

                      <svg
                        className="hidden w-5 h-5 mx-1 text-indigo-600 md:block"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 0h3L9 20H6l5-20z"></path>
                      </svg>

                      <div className="text-base font-light text-gray-500 cursor-pointer">
                        <Link href={site}>
                          <a>{site}</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </>
  );
}

export default SliderHomePage;
