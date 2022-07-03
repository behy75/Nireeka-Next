import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

export default function FailedMessage({ MSG }) {
  return (
    <div className="absolute w-11/12 -top-5 rounded-md bg-red-50 py-2 px-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className={"h-5 w-5 text-red-400"}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-light text-red-800">{MSG}</p>
        </div>
      </div>
    </div>
  );
}
