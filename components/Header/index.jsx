import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const { pathname } = useRouter();
  const router = useRouter();
  const condition = pathname.includes("/user-panel");
  const condition2 = router.asPath === "/";
  const condition3 = pathname.includes("/help-center");
  if (condition || condition2 || condition3) return <Fragment />;
  console.log("router", router.asPath === "/");

  return (
    <Popover className="relative bg-white">
      <div
        className="absolute inset-0 shadow z-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <Link href="/" className="flex">
            <a>
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-28 ml-6 sm:h-10"
                src="https://nireeka.com/images/logo_nireeka_dark.svg"
                alt=""
              />
            </a>
          </Link>

          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-6">
              <div className="text-sm font-light text-gray-600 border-b-2 border-white hover:border-headerColor2">
                <Link href="/configurator">E-Bikes</Link>{" "}
              </div>

              <div className="text-sm font-light text-gray-600 border-b-2 border-white hover:border-headerColor2">
                <Link href="/">Accessories</Link>
              </div>

              <div className="text-sm font-light text-gray-600 border-b-2 border-white hover:border-headerColor2">
                <Link href="/">Forum</Link>
              </div>

              <div className="text-sm font-light text-gray-600 border-b-2 border-white hover:border-headerColor2">
                <Link href="/user-panel">
                  {/* Support */}
                  User Panel
                </Link>
              </div>
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <div className="text-sm font-light text-gray-500 hover:text-gray-900">
                <Link href="/login">Login</Link>
              </div>

              <div className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-light text-white bg-indigo-600 hover:bg-indigo-700">
                <Link href="/register">Register</Link>
              </div>
            </div>
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
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://nireeka.com/images/logo_nireeka_dark.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <Popover.Group as="nav" className="flex flex-col">
                <div className="text-base font-light mt-2 mb-2 text-gray-500 hover:text-gray-900">
                  <Link href="/configurator">E-Bikes</Link>
                </div>

                <div className="text-base font-light mt-2 mb-2 text-gray-500 hover:text-gray-900">
                  <Link href="/">Accessories</Link>
                </div>

                <div className="text-base font-light mt-2 mb-2 text-gray-500 hover:text-gray-900">
                  <Link href="/">Spare Parts</Link>
                </div>

                <div className="text-base font-light mt-2 mb-2 text-gray-500 hover:text-gray-900">
                  <Link href="/">Forum</Link>
                </div>

                <div className="text-base font-light mt-2 mb-2 text-gray-500 hover:text-gray-900">
                  <Link href="/user-panel">
                    {/* Support */}
                    User Panel
                  </Link>
                </div>

                <div className="text-base font-light mt-2 mb-2 text-gray-500 hover:text-gray-900">
                  <Link href="/login">Login</Link>
                </div>

                <div className="text-base font-light mt-2 mb-2 text-gray-500 hover:text-gray-900">
                  <Link href="/register">Register</Link>
                </div>
              </Popover.Group>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Header;
