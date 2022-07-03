import Image from "next/image";
import Link from "next/link";
import { dealers } from "../../components/StaticPages/Dealers/data";
import Footer from "../../components/StaticPages/Footer";
import Header from "../../components/StaticPages/Header";
import DealerBikeThree from "../../public/images/bike-dealers.jpg";

export default function Index() {
  return (
    <>
      {/* <Header /> */}
      <div className="">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-light text-indigo-600 text-xl  sm:tracking-tight md:text-2xl  uppercase">
              {`DEALERSHIP`}
            </h2>
            <p className="mt-1 text-4xl font-light text-gray-900  lg:text-5xl font-oswald">
              {`Nireeka Service Centers/Dealers`}
            </p>
            <div className="max-w-xl mt-5 mx-auto text-xl text-gray-500 font-dosis">
              {`If you can't find a dealership or service center in your country, please contact `}

              <Link href="mailto:sales@nireeka.com">
                <a className="text-blue-500 font-light cursor-pointer hover:underline hover:text-customColorNIR">{`sales@nireeka.com`}</a>
              </Link>
            </div>
          </div>
        </div>
        {/* //cards */}
        <div className="py-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
          {dealers.card.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div>
                  <div className="flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.alt_image}
                      height="250"
                      width="400"
                      objectFit="cover"
                      // className="w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <Link href="/">
                        <a className="hover:text-customColorNIR cursor-pointer hover:underline text-xl font-light text-blue-600">
                          {item.head}
                        </a>
                      </Link>

                      <Link href="/#" passHref>
                        <a className="hover:text-customColorNIR block mt-2 text-xl font-light text-gray-900">
                          {item.head_two}
                        </a>
                      </Link>

                      <div className="mt-3 font-light text-gray-500 leading-8">
                        {item.title_1}
                        <br />
                        <Link href={item.href_phone}>
                          <a className="hover:text-customColorNIR inline">
                            {item.phone}
                          </a>
                        </Link>
                        <br />
                        <p className="inline">{item.email}</p>
                        <Link href={item.href_mail}>
                          <a target="_blank" className="text-blue-600">
                            {item.name_href_mail}
                          </a>
                        </Link>
                        <br />
                        <p className="inline">{item.website}</p>
                        <Link href={item.href_website} passHref>
                          <a target="_blank" className="text-blue-600">
                            {item.name_href_website}
                          </a>
                        </Link>
                        <br />
                        <br />
                        <span className="font-light text-gray-900">
                          {item.head_title}
                        </span>
                        {item.title}
                      </div>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <Link href="/">
                          <a>
                            <Image
                              src={item.flag_img}
                              width={26}
                              height={26}
                              className="rounded-full"
                              objectFit="cover"
                              alt={item.alt_img}
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-light text-gray-900">
                          <Link href="#">
                            <a className="hover:text-customColorNIR hover:underline">
                              {item.title_img}
                            </a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative bg-gradient-to-tl from-gray-900 to-gray-600 rounded-lg font-dosis w-11/12 mx-auto mb-24 mt-10">
          <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 rounded-lg">
            <Image
              src={DealerBikeThree}
              alt="dealer-bike"
              layout="fill"
              objectFit="cover"
              className=" rounded-l-lg"
            />

            {/* <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"></div> */}
          </div>
          <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
            <div className="md:ml-auto md:w-1/2 md:pl-10">
              <p className="mt-2 text-white text-3xl font-light  sm:text-4xl font-oswald">
                {`Interested in becoming a dealer?`}
              </p>
              <div className="mt-3 text-lg text-gray-300 font-light">
                {`   If you are interested in becoming a Nireeka dealer or an
                authorized service center, please contact `}
                <Link href="mailto:dealers@nireeka.com">
                  <a
                    target="_blank"
                    className="text-blue-400  hover:text-customColorNIR font-light"
                  >
                    {`dealers@nireeka.com`}
                  </a>
                </Link>
              </div>
              <div className="mt-8 group-hover:text-customColorNIR ">
                <div className="inline-flex rounded-md shadow ">
                  <Link href="mailto:dealers@nireeka.com" passHref>
                    <a className="inline-flex items-center  justify-center px-5 py-3 border border-transparent  font-light rounded-md text-gray-900 bg-white hover:ring-2 hover:ring-customColorNIR">
                      {`Apply`}
                      <svg
                        className="-mr-1 ml-3 h-5 w-5 text-gray-400 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
