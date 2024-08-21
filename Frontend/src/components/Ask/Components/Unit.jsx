import { RiMenuFoldFill } from "react-icons/ri";
import { FaThumbsUp } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../shared/context/auth-context";

function Unit({
  answer,
  onDropdownToggle,
  handleDropdownToggle,
  dropdownOpen,
  setRefresh,
}) {
  const auth = useContext(AuthContext);
  const [isLiked, setIsLiked] = useState();
  const [numOfVotes, setNumOfVotes] = useState(0);
  const [f, setF] = useState(0);

  useEffect(() => {
    let state;
    const sent = async () => {
      try {
        state = await fetch(`http://localhost:5000/api/answer/${answer._id}`);
        const d = await state.json();
        setNumOfVotes(d.answer.votes.length);
        setRefresh(Math.random());
      } catch (error) {
        console.log(error.message);
      }
    };
    sent();
  }, [f]);

  useEffect(() => {
    let state;
    const sent = async () => {
      if (auth.isLoggedIn) {
        try {
          state = await fetch("http://localhost:5000/api/answer/checkVote", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              answerId: answer._id,
              userId: auth.exsistingUserId,
            }),
          });
          const d = await state.json();
          setIsLiked(d.isClick);
          setRefresh(Math.random());
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    sent();
  }, [f]);

  const clickVote = async () => {

    if (auth.isLoggedIn) {
      try {
       await fetch("http://localhost:5000/api/answer/vote", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            answerId: answer._id,
            userId: auth.exsistingUserId,
          }),
        });
   
        setF(Math.random(0));
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4 relative" key={answer._id}>
      <div className="flex items-center mb-2">
        <img
          src={answer.imageAuther}
          className="w-8 h-8 rounded-full"
          alt="commenter"
        />
        <div className="ml-3">
          <p className="font-semibold">{answer.auther}</p>
          <p className="text-gray-500 text-sm">{answer.CreatedOn}</p>
        </div>
        <div className="relative ml-auto">
          <RiMenuFoldFill
            className="text-gray-600 text-2xl hover:cursor-pointer"
            onClick={() => handleDropdownToggle(answer._id)}
          />
          {dropdownOpen === answer._id && (
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg">
              <ul>
                <li
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => onDropdownToggle(answer._id, "edit")}
                >
                  Edit
                </li>
                <li
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => onDropdownToggle(answer._id, "delete")}
                >
                  Delete
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <p className="text-gray-700 mb-2 py-2">{answer.answer}</p>
      <div className="flex justify-between text-gray-600">
        <button onClick={clickVote} className="flex items-center">
          <FaThumbsUp
            className={`mr-2 text-2xl hover:cursor-pointer ${
              isLiked ? `text-blue-600` : ""
            }`}
          />
          <span>{numOfVotes}</span>
          <span className="ml-2">Vote</span>
        </button>
      </div>
    </div>
  );
}

export default Unit;
