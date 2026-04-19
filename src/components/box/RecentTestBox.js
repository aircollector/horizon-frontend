import React from "react";
import Flag from "react-world-flags";

const RecentTestBox = ({ iso, name, id }) => {
  return (
    <div className="relative mt-8 flex items-center gap-x-4">
      <Flag
        code={iso}
        className="h-20 w-20 rounded-full bg-gray-50 object-contain"
      />
      <div className="text-sm leading-6">
        <p className="font-semibold text-gray-900 truncate max-w-[60px] sm:max-w-[200px] md:max-w-[250px]">
          {name}
        </p>
        <p className="text-gray-600">IQ {id}</p>
      </div>
    </div>
  );
};

export default RecentTestBox;
