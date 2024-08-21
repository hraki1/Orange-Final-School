import React, { useState, useEffect } from "react";
import PostItem from "./Ask/Components/PostItem";
import LeftSidebar from "./Ask/Components/LeftSidebar";
import RightSidebar from "./Ask/Components/RightSidebar";
import ErrorModal from "./ErrorModal";

export const Ask = () => {
  const [loadedQuestions, setLoadedQuestions] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [homeChange, setHomeChange] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:5000/api/question");
        const responseData = await response.json();
        console.log(responseData);

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedQuestions(responseData.questions.reverse());
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    sendRequest();
  }, [homeChange]);

  function errorHandler() {
    setError(null);
  }

  return (
    <div
      className="bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('/path/to/background-image.jpg')` }}
    >
      <div className="grid grid-cols-7 md:grid-cols-6 gap-2 px-2 bg-gray-50 bg-opacity-80  ">
        <div className="mt-20">
          <LeftSidebar />
        </div>
        <div className="col-span-7 md:col-span-4 bg-white px-4 mx-2 md:mx-9 ">
          {<ErrorModal error={error} onClear={errorHandler} />}
          <PostItem
            questions={loadedQuestions}
            isLoading={isLoading}
            homeref={setHomeChange}
          />
        </div>
        <div className="mt-20"></div>
      </div>
    </div>
  );
};

export default Ask;
