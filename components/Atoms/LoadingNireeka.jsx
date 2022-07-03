import React from "react";

export default function LoadingNireeka({
  colorLoading,
  widthLoading,
  heightLoading,
  borderLoading,
}) {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`spinner-border animate-pulse inline-block rounded-full ${widthLoading} ${heightLoading} ${borderLoading} ${colorLoading}`}
        role="status"
      ></div>
    </div>
  );
}
