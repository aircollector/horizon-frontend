import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "contextTest/MyContext";
import { useNavigate } from "react-router-dom";
import API_URLS from "apiUrls";
import { PulseLoader } from "react-spinners";
import CountiesDropBox from "components/locale/CountiesDropBox";

const SendEmail = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://pay.nicepay.co.kr/v1/js/";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const { value, examination } = useContext(MyContext);
  const [checkEmail, setCheckEmail] = useState("");
  const [checkName, setCheckName] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [checkAge, setCheckAge] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [ageError, setAgeError] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [response, setResponse] = useState("");

  const [gender] = useState("MALE");
  const [iq] = useState(value);
  const [language] = useState("kr");
  const [subscriptionYn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const sendData = (event) => {
    setIsLoading(true);
    if (!value) {
      alert("문제를 풀어주세요.");
      navigate("/examination/0");
      return;
    }
    event.preventDefault();

    fetch(`${API_URLS.sendUsers}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        gender,
        age: parseInt(age),
        iq,
        language,
        country,
        examination,
        subscriptionYn,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("네트워크 에러");
        }
        return response.text();
      })
      .then((response) => {
        response = JSON.parse(response);

        if (response.code === 200) {
          setResponse(response.data);

          const { AUTHNICE } = window;

          return AUTHNICE.requestPay({
            clientId: "B2_3ea04f81d0606237a09c34c1c8a12345",
            method: "card",
            orderId: response.data,
            amount: 9900,
            goodsName: "Basic",
            returnUrl: "http://apis.ap-▣▣▣▣-2.elasticbeanstalk.com/▣▣/▣▣/▣▣▣▣",
            fnError: (result) => {
              alert("다시 시도해주세요.");
              return;
            },
          });
        } else if (response.code === -401) {
          alert(response.msg);
          return;
        } else if (response.code === -402) {
          alert(response.msg);
          return;
        }
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("에러: ", error);
        setIsLoading(false);
        return;
      });
  };

  const emailRegEx = /^([0-9A-Za-z_.-]+)@([0-9A-Za-z.-]+)\.([A-Za-z.]{2,6})$/;
  const digitRegEx = /^[0-9]+$/;
  const textRegEx = /^[0-9A-Za-z가-힣.-@?_^()]+$/;

  const RegCheck = (str, type) => {
    let regex;
    switch (type) {
      case 1:
        regex = emailRegEx;
        setEmailError(!str.match(regex));
        break;
      case 2:
        regex = digitRegEx;
        setAgeError(!str.match(regex));
        break;
      case 3:
        regex = textRegEx;
        setNameError(!str.match(regex));
        break;
      default:
        break;
    }
  };

  const handleChangeEmail = (ev) => {
    const value = ev.target.value;
    setEmail(value);
    RegCheck(value, 1);
    setCheckEmail(value);
  };

  const handleChangeName = (ev) => {
    const value = ev.target.value;
    setName(value);
    RegCheck(value, 3);
    setCheckName(value);
  };

  const handleChangeAge = (ev) => {
    const value = ev.target.value;
    setAge(value);
    RegCheck(value, 2);
    setCheckAge(value);
  };

  const handleCountryChange = (country) => {
    setCountry(country);
  };

  return (
    <div className="w-full p-5">
      <CountiesDropBox countryData={handleCountryChange} />
      <form>
        {country && (
          <label htmlFor="email">
            <p>이메일</p>
            <input
              className="w-full h-12 py-3 rounded-md border px-3 bg-gray-100 shadow-sm focus:ring-sky-300 focus:border-sky-300"
              id="email"
              name="email"
              type="text"
              placeholder="example@email.com"
              onChange={handleChangeEmail}
            />
            {emailError && <p style={{ color: "red" }}>잘못된 이메일입니다.</p>}
          </label>
        )}

        {checkEmail && !emailError && (
          <label htmlFor="name">
            <p>이름</p>
            <input
              className="w-full h-12 py-3 rounded-md border px-3 bg-gray-100 shadow-sm focus:ring-sky-300 focus:border-sky-300"
              id="name"
              name="name"
              type="text"
              placeholder="이름을 입력하세요"
              onChange={handleChangeName}
            />
            {nameError && <p style={{ color: "red" }}>잘못된 이름입니다.</p>}
          </label>
        )}
        {checkName && !nameError && (
          <label htmlFor="age">
            <p>나이</p>
            <input
              className="w-full h-12 py-3 rounded-md border px-3 bg-gray-100 shadow-sm focus:ring-sky-300 focus:border-sky-300"
              id="age"
              name="age"
              type="number"
              min="0"
              max="120"
              step="1"
              placeholder="나이를 입력하세요"
              onKeyDown={(ev) => {
                if (
                  !/[0-9]/.test(ev.key) &&
                  ev.key !== "Backspace" &&
                  ev.key !== "Tab"
                ) {
                  ev.preventDefault();
                }
              }}
              onChange={handleChangeAge}
            />
            {ageError && <p style={{ color: "red" }}>잘못된 나이입니다.</p>}
          </label>
        )}
        {name && email && age && country && (
          <button
            className="my-5 w-full border shadow-md border-blue-600 rounded-md h-12 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={(e) => {
              e.preventDefault();
              sendData(e);
            }}
          >
            {isLoading ? (
              <div className="flex justify-center items-center">
                <PulseLoader color="#fff" size={10} />
              </div>
            ) : (
              <p>내 IQ 알아보기</p>
            )}
          </button>
        )}
      </form>
    </div>
  );
};

export default SendEmail;
