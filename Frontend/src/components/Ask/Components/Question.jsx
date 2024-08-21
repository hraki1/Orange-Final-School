import React, { useContext, useState, useEffect } from "react";
import { FaComment, FaThumbsUp } from "react-icons/fa";
import { IoPerson, IoMenu } from "react-icons/io5";
import { RiMenuFoldFill } from "react-icons/ri";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { FcLike } from "react-icons/fc";

import postImage from "../../Assets/post.jpg";
import personImage from "../../Assets/person.jpg";
import { ModalForm } from "./ModalForm";
import LoadingSpinner from "../../LoadingSpinner";
import { AuthContext } from "../../shared/context/auth-context";

function Question({
  question,
  handlePostClick,
  isLoading,
  dropdownOpen,
  toggleDropdown,
  selectedQuestionId,
  deleteQuestion,
}) {
  const [num, setnum] = useState(0);
  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/answer/question/${question._id}`
        );
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setnum(responseData.answers.length || 0);
        console.log(responseData.answers.length);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchAnswers();
  }, []);

  return (
    <div className="shadow-lg p-4" key={question._id}>
      {isLoading && <LoadingSpinner asOverlay />}
      <div onClick={() => handlePostClick(question._id)}>
        <div className="flex items-center justify-between mb-4 mt-12">
          <div className="flex items-center">
            <img
              src={question.imageAuther}
              alt="author"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-3">
              <h1 className="text-lg font-semibold">{question.auther}</h1>
              <p className="text-gray-500 text-sm">{question.CreatedOn}</p>
            </div>
          </div>
          <div className="relative">
            <RiMenuFoldFill
              className="text-gray-600 text-2xl hover:cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown(question._id);
              }}
            />
            {dropdownOpen && selectedQuestionId === question._id && (
              <div className="absolute bg-white shadow-md rounded-lg mt-2 right-0">
                <ul>
                  <li
                    onClick={() => deleteQuestion(question._id)}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                  >
                    Delete
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-4">{question.title}</h1>
        <p className="text-gray-800 mb-4">{question.body}</p>
        {question.image && (
          <img
            src={`http://localhost:5000/${question.image}`}
            className="w-full rounded-lg mb-4"
            alt="post"
          />
        )}
        <div className="flex justify-between items-center border-t border-gray-200 pt-3 mt-4">
          <div className="flex items-center text-gray-600 px-4">
            <FaComment className="mr-2 text-xl hover:cursor-pointer" />
            <span>Answers {num}</span>
          </div>
          <div className="flex items-center text-gray-600 px-4">
            <FcLike className="mr-2 text-xl hover:cursor-pointer" />
            <span>Like</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
