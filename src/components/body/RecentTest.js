import React, { useEffect, useState } from "react";
import RecentTestBox from "components/box/RecentTestBox";
import Loading from "components/loading/Loading";
import API_URLS from "apiUrls";

const RecentTest = () => {
  const [loading, setLoading] = useState(false);
  const [myData, setMyData] = useState([]);

  const loopFetcher = async () => {
    setLoading(true);

    let result = [];

    let my = await fetch(API_URLS.getUsers);
    let data = await my.json();
    let myData;
    data.data.forEach((item) => {
      myData = {
        id: item.iq,
        name: item.name,
        country: item.country,
      };
      result.push(myData);
      setMyData(result);
    });
    setLoading(false);
  };

  useEffect(() => {
    loopFetcher();
  }, []);

  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          최근 테스트 결과
        </h2>
        {loading ? (
          <Loading />
        ) : (
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 grid-rows-6">
            {myData.length >= 1 &&
              myData.map((item) => (
                <RecentTestBox
                  name={item.name}
                  iso={item.country}
                  id={item.id}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentTest;
