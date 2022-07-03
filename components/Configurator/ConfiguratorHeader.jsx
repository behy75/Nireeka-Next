import { Popover } from "@headlessui/react";
import Link from "next/link";
import { useSelector } from "react-redux";
import UserProfile from "../Atoms/UserProfile";

export default function ConfiguratorHeader() {
  const state = useSelector((state) => state);
  let { isAuth } = state.auth;

  return (
    <Popover className="relative bg-white">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Workflow</span>
                <img
                  className="h-4 w-auto sm:h-6"
                  src="https://nireeka.com/images/logo_nireeka_dark.svg"
                  alt="Workflow"
                />
              </a>
            </Link>
          </div>
          {isAuth ? (
            <UserProfile />
          ) : (
            <div className="z-50 flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="/login">
                <a className="whitespace-nowrap text-xs sm:text-sm font-light text-gray-500 hover:text-gray-900 mx-1">
                  Login
                </a>
              </Link>
              <Link href="/register">
                <a className="whitespace-nowrap text-xs sm:text-sm font-light text-gray-500 hover:text-gray-900 mx-1">
                  Register
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Popover>
  );
}
