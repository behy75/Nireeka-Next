import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import NireekaLogo from "../../public/images/logo_nireeka_white.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
const backdropStyle = {
  width: "100%",
  position: "fixed",
  height: "100vh",
  backgroundColor: "#00000015",
  top: "0",
  right: "0",
  left: "0",
  bottom: "0",
  zIndex: "1",
};
function Header() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const state = useSelector((state) => state);
  let { isAuth } = state.auth;

  const handleDropDown = () => {
    setOpen(!open);
  };
  const condition = pathname.includes("user-panel");

  if (condition) return <Fragment />;

  return (
    <div className="absolute w-full ">
      <Popover className="relative bg-transparent">
        <div
          className="absolute inset-0 z-30 shadow pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-20">
          <div className="flex items-center justify-between px-4 py-5 mx-auto sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
            <Link href="/">
              <a className="flex">
                <span className="sr-only">Workflow</span>
                <div className="h-8 ml-1 w-52 md:ml-6 sm:h-10">
                  <Image src={NireekaLogo} alt="logo" />
                </div>
              </a>
            </Link>

            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 focus:outline-none">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="flex-row-reverse hidden md:flex-1 md:flex">
              <Popover.Group as="nav" className="flex space-x-6">
                <div className="text-sm font-light text-white cursor-pointer hover:border-b hover:border-red-500">
                  <Link href="/configurator">
                    <a> E-Bikes</a>
                  </Link>{" "}
                </div>

                <div className="relative ">
                  {open ? (
                    <div
                      style={backdropStyle}
                      onClick={() => setOpen(false)}
                    ></div>
                  ) : (
                    ""
                  )}
                  <div
                    className="flex text-sm font-light text-white cursor-pointer hover:border-b hover:border-red-500"
                    onClick={handleDropDown}
                  >
                    Products
                    {open ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  {open ? (
                    <div className="absolute z-20">
                      <div className="py-2 text-sm font-light text-white cursor-pointer hover:border-b hover:border-red-500">
                        <Link href="/">
                          <a>Accessories</a>
                        </Link>
                      </div>
                      <div className="py-1 text-sm font-light text-white cursor-pointer hover:border-b hover:border-red-500">
                        <Link href="/">
                          <a> Spare Parts</a>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="text-sm font-light text-white cursor-pointer hover:border-b hover:border-red-500">
                  <Link href="/help-center">
                    <a>Help Center</a>
                  </Link>
                </div>

                <div className="text-sm font-light text-white cursor-pointer hover:border-b hover:border-red-500">
                  <Link href="/">
                    <a>Forum</a>
                  </Link>
                </div>
                {isAuth ? (
                  <div className="text-sm font-light text-white cursor-pointer hover:border-b hover:border-red-500">
                    <Link href="/user-panel">
                      {/* Support */}
                      <a>User Panel</a>
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="text-sm font-light text-white cursor-pointer hover:border-b hover:border-red-500">
                      <Link href="/login">
                        <a>Login</a>
                      </Link>
                    </div>

                    <div className="text-sm font-light text-white cursor-pointer hover:border-b hover:border-red-500">
                      <Link href="/register">
                        <a>Register</a>
                      </Link>
                    </div>
                  </>
                )}
              </Popover.Group>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden"
          >
            <div className="bg-black divide-y-2 rounded-lg shadow-lg ring-1 ring-white ring-opacity-5 divide-gray-50">
              <div className="px-5 pt-5 pb-6 sm:pb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="w-48 ">
                      <Image src={NireekaLogo} alt="logo" />
                    </div>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-transparent rounded-md hover:text-gray-500 hover:bg-gray-100">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <Popover.Group as="nav" className="flex flex-col">
                  <Link href="/configurator" passHref>
                    <a className="px-1 my-2 font-light text-white cursor-pointer text-md hover:border-b hover:border-red-500">
                      E-Bikes
                    </a>
                  </Link>
                  <Link href="/" passHref>
                    <a className="px-1 my-2 font-light text-white cursor-pointer text-md hover:border-b hover:border-red-500">
                      Accessories
                    </a>
                  </Link>
                  <Link href="/" passHref>
                    <a className="px-1 my-2 font-light text-white cursor-pointer text-md hover:border-b hover:border-red-500">
                      Spare Parts
                    </a>
                  </Link>
                  <Link href="/help-center" passHref>
                    <a className="px-1 my-2 font-light text-white cursor-pointer text-md hover:border-b hover:border-red-500">
                      Help Center
                    </a>
                  </Link>
                  <Link href="/" passHref>
                    <a className="px-1 my-2 font-light text-white cursor-pointer text-md hover:border-b hover:border-red-500">
                      Forum
                    </a>
                  </Link>
                  {isAuth ? (
                    <Link href="/user-panel" passHref>
                      <a className="px-1 my-2 font-light text-white cursor-pointer text-md hover:border-b hover:border-red-500">
                        {/* Support */}
                        User Panel
                      </a>
                    </Link>
                  ) : (
                    <>
                      <Link href="/login" passHref>
                        <a className="px-1 my-2 font-light text-white cursor-pointer text-md hover:border-b hover:border-red-500">
                          Login
                        </a>
                      </Link>
                      <Link href="/register" passHref>
                        <a className="px-1 my-2 font-light text-white cursor-pointer text-md hover:border-b hover:border-red-500">
                          Register
                        </a>
                      </Link>
                    </>
                  )}
                </Popover.Group>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default Header;
