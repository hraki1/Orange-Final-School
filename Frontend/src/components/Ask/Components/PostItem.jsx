import React, { useContext, useState } from "react";
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
import Question from "./Question";

const PostItem = ({ questions, isLoading, homeref }) => {
  const auth = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (questionId) => {
    if (selectedQuestionId === questionId) {
      setDropdownOpen(!dropdownOpen);
    } else {
      setDropdownOpen(true);
    }
    setSelectedQuestionId(questionId);
  };

  const deleteQuestion = async (questionId) => {
    console.log(questionId);
    console.log("delete post");
    try {
      await fetch(`http://localhost:5000/api/question/${questionId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      homeref(Math.random());
      navigate(`/Ask`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePostClick = (questionId) => {
    navigate(`/Addcomments/${questionId}`);
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-4xl mx-auto md:mt-12">
        <div className="col-span-7 md:col-span-4 bg-white p-4 mx-2 md:mx-9">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-xl font-bold text-primary"></h2>
            {auth.isLoggedIn && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-white p-2 rounded hover:bg-primary focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              >
                New Post
              </button>
            )}
          </div>
          {isModalOpen && (
            <ModalForm
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              homeref={homeref}
            />
          )}
        </div>
        {questions.map((question) => (
          <div key={question._id}>
            <Question
              question={question}
              isLoading={isLoading}
              handlePostClick={handlePostClick}
              toggleDropdown={toggleDropdown}
              dropdownOpen={dropdownOpen}
              selectedQuestionId={selectedQuestionId}
              deleteQuestion={deleteQuestion}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PostItem;
