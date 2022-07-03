import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import NireekaLogo from "../../public/images/logo_nireeka_white.svg";
import SearchHelpCenter from "./Search";

const HeaderHelpCenter = () => {
  return (
    <div>
      <header className="bg-gradient-to-r from-black to-BrownHelpCenter h-fit ">
        <div>
          <div className="absolute flex justify-end left-4 top-10 md:hidden show">
            <button
              className="ml-auto text-gray-200 md:hidden"
              onClick={() => Router.back()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          <div>
            <div className="flex justify-center lg:justify-start ">
              {/* <img src="{{ asset('images/logo_nireeka_white.svg') }}" alt="" className="w-64 px-8 py-8"> */}
              <div className="px-8 py-1">
                <Link href="/" passHref>
                  <a target="_self">
                    <Image
                      alt="nireeka-logo"
                      src={NireekaLogo}
                      width={200}
                      height={100}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-16 pb-40 ">
            <div className="relative flex flex-col items-center justify-center">
              <input type="hidden" />
              <Link href="/help-center">
                <a>
                  <h1 className="pb-6 text-4xl font-light text-white font-oswald">
                    Help Center
                  </h1>
                </a>
              </Link>
              <SearchHelpCenter />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderHelpCenter;
