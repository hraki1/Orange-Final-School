import React, { useContext, useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import "../styles/profile.css";
import person from "./Assets/person.jpg";
import { FcLike } from "react-icons/fc";
import { FaComment, FaSave } from "react-icons/fa";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import Details from "./Details";
import LastestPost from "./LastestPost";
import { AuthContext } from "./shared/context/auth-context";

export const Profile = () => {
  const auth = useContext(AuthContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/user/${auth.exsistingUserId}`
        );
        console.log("Fetching user profile...");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        console.log(responseData.user);
        setUser(responseData.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    
    fetchAnswers();
  }, [auth.exsistingUserId]); // Add dependency array here
  
  return (
    <div className="mt-32 w-[80%] m-auto">
      <Details user={user} />
      <LastestPost />
    </div>
  );
};
