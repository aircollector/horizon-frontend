import { useEffect, useState } from "react";
import Dropdown from "components/locale/Dropdown";

const CountiesDropBox = ({ countryData }) => {
  const [isDropdownView, setDropdownView] = useState(false);
  const [myCountry, setMyCountry] = useState("");

  const handleClickContainer = () => {
    setDropdownView((prev) => !prev);
  };

  const getCountry = (country) => {
    setMyCountry(country);
    countryData(country);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  useEffect(() => {}, [myCountry]);

  return (
    <div className="container my-6" onBlur={handleBlurContainer}>
      <label onClick={handleClickContainer}>
        <button className="w-full h-12 py-3 rounded-md border px-3 bg-gray-100 shadow-sm focus:ring-sky-300 focus:border-sky-300">
          국가를 선택하세요 {isDropdownView ? "▲" : "▼"}
        </button>
      </label>
      {isDropdownView && <Dropdown getCountry={getCountry} />}
      {myCountry && (
        <label htmlFor="country">
          국가
          <input
            className="w-full h-12 py-3 rounded-md border px-3 bg-gray-100 shadow-sm focus:ring-sky-300 focus:border-sky-300"
            id="country"
            name="country"
            type="text"
            placeholder={myCountry}
            value={myCountry}
            readOnly
          />
        </label>
      )}
    </div>
  );
};

export default CountiesDropBox;
