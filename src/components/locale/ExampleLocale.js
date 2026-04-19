import React from "react";
import Flag from "react-world-flags";
import countries from "components/locale/countries";

const ExampleLocale = () => {
  return (
    <div>
      {countries.map((item) => (
        <div>
          <div>{item.name}</div>
          <div>{item.code}</div>
          <Flag code={item.iso} style={{ width: "100px", height: "100px" }} />
        </div>
      ))}
    </div>
  );
};

export default ExampleLocale;
