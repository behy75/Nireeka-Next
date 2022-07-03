import React from "react";
import { useSelector } from "react-redux";
import LoadingNireeka from "../../Atoms/LoadingNireeka";

function AccountBox({ key, title, amount, bgColor }) {
  return (
    <li key={key} className="col-span-1 flex shadow-sm rounded-md">
      <div
        className={`flex-1 flex items-center justify-between border border-gray-200 ${bgColor} rounded-3xl truncate h-20 w-48 z-50`}
      >
        <div className="flex items-end px-4 py-2 text-sm text-bkack truncate h-full">
          <p className="text-bkack text-sm font-light">{title}</p>
        </div>
        <div className="flex-shrink-0 pr-2">
          <div className="text-bkack inline-flex items-center justify-center rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <p className="text-bkack font-light text-5xl mr-2">{amount}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Account() {
  const state = useSelector((state) => state);
  let { data } = state.userPanel;

  return (
    <main className="flex-1">
      <div className="py-2">
        <div className="flex flex-col justify-center items-start mx-4">
          {data ? (
            <ul
              role="list"
              className="mt-3 w-full grid gap-5 sm:gap-6 grid-cols-2 lg:grid-cols-4"
            >
              <AccountBox
                title="Points"
                bgColor="bg-white"
                amount={data.points}
              />
              <AccountBox
                title="Forum Posts"
                bgColor="bg-white"
                amount={data.forums}
              />
              <AccountBox
                title="Payments"
                bgColor="bg-white"
                amount={data.payments}
              />
              <div className="relative group">
                <AccountBox
                  title="Tickets"
                  bgColor="bg-white"
                  amount={data.tickets.all}
                />
                <div className="absolute flex items-end justify-around invisible group-hover:visible bg-gray-400 w-full h-16 -mt-5 pb-3 z-0 rounded-b-3xl">
                  <div>{`Open ${data.tickets.open}`}</div>
                  <div>|</div>
                  <div>{`Closed ${data.tickets.closed}`}</div>
                </div>
              </div>
            </ul>
          ) : (
            <div className="bg-white font-light text-center text-2xl flex flex-col justify-center items-center w-full p-2 mt-3 rounded-3xl">
              <LoadingNireeka
                colorLoading={"text-gray-700"}
                widthLoading={"w-8"}
                heightLoading={"h-8"}
                borderLoading={"border-4"}
              />
              <div className="text-slate-600">is Loading ...</div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
