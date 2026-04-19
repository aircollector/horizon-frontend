import React, { useState, useEffect } from "react";
import API_URLS from "apiUrls";

const Help = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [emailError, setEmailError] = useState(false);

  const emailRegEx = /^([0-9A-Za-z_.-]+)@([0-9A-Za-z.-]+)\.([A-Za-z.]{2,6})$/;

  const validateEmail = (email) => {
    if (!emailRegEx.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !emailRegEx.test(email)) {
      setEmailError(true);
      return;
    }

    const formData = {
      email,
      title,
      content,
    };

    try {
      const response = await fetch(API_URLS.sendInquires, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("서버 오류");
      }

      alert("문의가 성공적으로 제출되었습니다.");
      setEmail("");
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("전송 실패:", error);
      alert("문의 전송에 실패했습니다.");
    }
  };

  return (
    <div className="w-full min-h-screen overflow-auto py-16">
      <div className="w-[400px] h-full md:w-[600px] md:h-[750px] mx-auto">
        <div className="flex flex-col py-5">
          <h1 className="font-bold text-4xl mx-auto">문의하기</h1>
          <br />
          <div className="flex flex-col justify-center items-center text-center space-y-4">
            <div className="text-lg  text-gray-600">
              귀하의 의견을 존중합니다.
            </div>
            <div className="text-lg text-gray-600">
              제안이나 문의사항이 있으면 언제든지 문의 주세요.
            </div>
            <div className="text-lg text-gray-600">
              회신을 받을 수 있도록 정확한 이메일 주소를 입력바랍니다.
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="py-5">
            <label htmlFor="email">
              이메일
              <input
                className={`w-full py-3 rounded-md border px-3 bg-gray-100 shadow-sm focus:ring-sky-300 focus:border-sky-300 ${
                  emailError ? "border-red-500" : ""
                }`}
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => validateEmail(email)}
              />
              {emailError && (
                <span className="text-red-500">
                  이메일 형식이 올바르지 않습니다.
                </span>
              )}
            </label>
          </div>

          <div className="py-5">
            <label htmlFor="title">
              제목
              <input
                className="w-full py-3 rounded-md border px-3 bg-gray-100 shadow-sm focus:ring-sky-300 focus:border-sky-300"
                id="title"
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </div>

          <div className="py-5">
            <label htmlFor="content">
              내용
              <textarea
                className="w-full h-64 py-3 rounded-md border px-3 bg-gray-100 shadow-sm focus:ring-sky-300 focus:border-sky-300"
                id="content"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </label>
          </div>

          <button
            type="submit"
            className="mx-auto border shadow-md border-blue-600 rounded-md h-14 w-36 bg-blue-600 hover:bg-blue-700 text-white py-3 px-3"
          >
            보내기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Help;
