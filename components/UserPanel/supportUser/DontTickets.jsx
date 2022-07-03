import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { setTicketStep } from "../../../app/userPanelSlice";

export default function DontTickets() {
  const dispatch = useDispatch();

  return (
    <div className="w-full bg-white rounded-3xl my-5 shadow-sm border border-gray-200 flex flex-col justify-center items-center">
      <div className="my-5 font-light text-xl flex justify-center items-center">
        {`You don't have any tickets.`}
      </div>

      <span className="my-3 font-light text-xs sm:text-sm lg:text-lg xl:text-xl mx-4 flex justify-center items-center">
        <p className="font-light text-xs sm:text-sm lg:text-lg xl:text-xl text-center">
          If you have a question, before opening a new ticket make sure that you
          have checked the help center
          <Link href="/help-center">
            <a
              target="_blank"
              className="ml-1 font-light text-xs sm:text-sm lg:text-lg xl:text-xl text-blue-400 hover:text-blue-600 cursor-pointer"
            >
              here!
            </a>
          </Link>
        </p>
      </span>

      <div
        onClick={() => dispatch(setTicketStep(2))}
        className="mt-6 mb-10 font-light text-white hover:text-nireekaYellow text-lg w-36 h-8 flex justify-center items-center bg-nireekaYellow hover:bg-white rounded-xl cursor-pointer p-3"
      >
        Open New ticket
      </div>
    </div>
  );
}
