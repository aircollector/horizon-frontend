import React, { useState, useEffect } from "react";
import API_URLS from "apiUrls";

const TestAmount = () => {
  const [testedPeople, setTestedPeople] = useState(0);

  useEffect(() => {
    async function confirm() {
      const response = await fetch(API_URLS.countAll, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setTestedPeople(data.data);
    }

    confirm();
  }, []);

  return (
    <div className="mx-auto px-5 py-4 font-medium text-lg text-center">
      <p>{testedPeople}명이 지난주에 이 테스트를 진행했습니다.</p>
    </div>
  );
};

export default TestAmount;
