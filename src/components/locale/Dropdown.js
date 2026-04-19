import React from "react";
import flag from "components/locale/countries";

const Dropdown = ({ getCountry }) => {
  const setCountry = (country) => {
    getCountry(country);
  };

  return (
    <div>
      {flag.map((item) => {
        return (
          <div
            className="block w-full h-12 py-3 rounded-md border px-3 bg-gray-100 shadow-sm focus:ring-sky-300  focus:border-sky-300 cursor-pointer"
            key={item.iso}
          >
            <div
              key={item.iso}
              onClick={(ev) => {
                setCountry(ev.target.textContent);
              }}
            >
              {item.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dropdown;
