import React, { useState, useRef } from "react";
import { RiMenuFoldFill } from "react-icons/ri";
import { FaThumbsUp } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Unit from "./Unit";

const CommentSection = ({
  answers,
  onAnswerSubmit,
  onDropdownToggle,
  setRefresh,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const commentRef = useRef();

  const handleDropdownToggle = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  const handleSubmit = () => {
    const answer = commentRef.current.value;
    if (answer.length === 0) {
      withReactContent(Swal).fire({
        title: "Empty Comment!",
        text: "Your comment shouldn't be empty",
        icon: "warning",
        confirmButtonText: "Edit",
      });
    } else {
      onAnswerSubmit(answer);
      commentRef.current.value = "";
    }
  };

  return (
    <>
      <div className="mt-6">
        {answers.map((answer) => (
          <div key={answer._id}>
            <Unit
              setRefresh={setRefresh}
              answer={answer}
              onDropdownToggle={onDropdownToggle}
              handleDropdownToggle={handleDropdownToggle}
              dropdownOpen={dropdownOpen}
            />
          </div>
        ))}
      </div>
      <div className="mt-6">
        <input
          type="text"
          ref={commentRef}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a comment..."
        />
        <button
          onClick={handleSubmit}
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Comment
        </button>
      </div>
    </>
  );
};

export default CommentSection;
