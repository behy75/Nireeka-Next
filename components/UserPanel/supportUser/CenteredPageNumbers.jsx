import React, { useEffect, useState } from "react";
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";

export default function CenteredPageNumbers({ pagesNumber, setPageNumber }) {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);
  const index = [];

  useEffect(() => {
    for (let step = 0; step < pagesNumber; step++) {
      index = [...index, step + 1];
    }
    setPages([...index]);
  }, [pagesNumber]);

  return (
    <nav className="px-4 flex items-center justify-between sm:px-0 mb-2">
      <div className="w-0 flex-1 flex">
        <a
          onClick={() => {
            setPage(page > 1 ? page - 1 : page);
            setPageNumber(page > 1 ? page - 1 : page);
          }}
          className="cursor-pointer border-b-2 border-transparent mb-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
          <ArrowNarrowLeftIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Previous
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {pages.map((item) => (
          <a
            key={item}
            className={
              page === item
                ? "cursor-pointer border-indigo-500 text-indigo-600 border-b-2 mb-4 px-4 inline-flex items-center text-sm font-medium"
                : "cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 mb-4 px-4 inline-flex items-center text-sm font-medium"
            }
            onClick={() => {
              setPage(item);
              setPageNumber(item);
            }}
          >
            {item}
          </a>
        ))}
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        <a
          onClick={() => {
            setPage(page < pagesNumber ? page + 1 : page);
            setPageNumber(page < pagesNumber ? page + 1 : page);
          }}
          className="cursor-pointer border-b-2 border-transparent mb-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
          Next
          <ArrowNarrowRightIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </a>
      </div>
    </nav>
  );
}
