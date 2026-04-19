import React from "react";

const ResultBox = ({ number, text }) => {
  return (
    <div className="w-full h-[70%] m-4 py-6 sm:py-8 my-6 flex flex-col justify-center items-center rounded-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-1">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="leading-7 text-gray-600 text-xl sm:text-3xl">
              {text}
            </dt>
            <dd className="order-first text-6xl font-semibold tracking-tight text-gray-800 sm:text-7xl">
              {number}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ResultBox;
