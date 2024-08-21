import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../LoadingSpinner";
import ErrorModal from "../../ErrorModal";
import { AuthContext } from "../../shared/context/auth-context";
import CommentSection from "./Comments"; // قم بتعديل المسار حسب مكان حفظ المكون الجديد
import { FaComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const PostItem = ({ homeref }) => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const questionId = useParams().qid;
  const [isLoading, setIsLoading] = useState(false);
  const [loadedAnswers, setLoadedAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [error, setError] = useState();
  const [refresh, setRefresh] = useState();


  useEffect(() => {
    const fetchQuestion = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/api/question/${questionId}`
        );
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setCurrentQuestion(responseData.question);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchQuestion();
  }, [questionId]);



  useEffect(() => {
    const fetchAnswers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/api/answer/question/${questionId}`
        );
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setLoadedAnswers(responseData.answers);
        console.log(responseData.answers.length);
      } catch (error) {
        // setError(error.message);
      }
      setIsLoading(false);
    };

    fetchAnswers();
  }, [refresh]);


  const handleAnswerSubmit = async (answer) => {
    try {
      await fetch("http://localhost:5000/api/answer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: questionId,
          answer: answer,
          creator: auth.exsistingUserId,
        }),
      });
      setRefresh(Math.random());
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDropdownToggle = async (answerId, action) => {
    if (action === "edit") {
      // Handle edit action
    } else if (action === "delete") {
      try {
        await fetch(`http://localhost:5000/api/answer/${answerId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        homeref(Math.random());
      } catch (error) {
        console.log(error.message);
      }
      // Handle delete action
    }
  };

  return (
    <>
      {currentQuestion && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-4xl mx-auto mt-32 relative">
          {isLoading && <LoadingSpinner asOverlay />}
          {error && <ErrorModal error={error} onClear={() => setError(null)} />}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src={currentQuestion.imageAuther}
                alt="author"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-3">
                <h1 className="text-lg font-semibold">
                  {currentQuestion.auther}
                </h1>
                <p className="text-gray-500 text-sm">
                  {currentQuestion.CreatedOn}
                </p>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-4">{currentQuestion.title}</h1>
          <p className="text-gray-800 mb-4">{currentQuestion.body}</p>
          <img
            src={`http://localhost:5000/${currentQuestion.image}`}
            className="w-full rounded-lg mb-4"
            alt="post"
          />
          <div className="flex justify-between items-center border-t border-gray-200 pt-3 mt-4">
            <div className="flex items-center text-gray-600">
              <FaComment className="mr-2 text-xl hover:cursor-pointer" />{" "}
              <span>predefine</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FcLike className="mr-2 text-xl hover:cursor-pointer" />{" "}
              <span>Like</span>
            </div>
          </div>

          <CommentSection
            answers={loadedAnswers}
            onAnswerSubmit={handleAnswerSubmit}
            onDropdownToggle={handleDropdownToggle}
            setRefresh={setRefresh}
          />
        </div>
      )}
    </>
  );
};

export default PostItem;
