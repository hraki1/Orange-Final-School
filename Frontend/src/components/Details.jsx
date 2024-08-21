import React from "react";
import { FcLike } from "react-icons/fc";
import { FaComment, FaSave } from "react-icons/fa";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { profileInfo, statistics } from "./Data"; // Import the data
import person from "./Assets/person.jpg"; // Import the image
import { Link } from "react-router-dom";

const ProfileInfo = ({ user }) => (
  <div className="md:flex">
    <div className="md:block flex justify-center items-center">
      <img src={person} alt="" className="h-80 w-80 rounded-full" />
    </div>
    <div className=" md:ml-4 ">
      <h1 className="ml-4 text-2xl font-bold text-center md:text-left">
        {user.name}
      </h1>
      <p className="text-gray-400 ml-4 text-center md:text-left">
        {profileInfo.role}
      </p>
      <div className="flex justify-center items-center md:block">
        <Link to="UpdateProfile">
          <button className="px-5 py-2 bg-primary text-white rounded-lg hover:scale-105 transition-all duration-300 ml-4 mt-4">
            Update
          </button>
        </Link>
      </div>
      {/* Render education details */}
      {profileInfo.education.map((edu, index) => (
        <div
          key={index}
          className="flex justify-center md:justify-start mt-3 ml-4 border-b border-solid w-full pb-3"
        >
          <div>
            <h1 className="text-gray-400">{edu.faculty}</h1>
            <p>{edu.specialization}</p>
          </div>
          <div className="md:ml-8">
            <h1 className="text-gray-400 ml-3 md:ml-0">{edu.date}</h1>
            <p className="text-center">{edu.age}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const StatsCard = ({ icon, label, count, color }) => {
  const IconComponent = React.createElement(icon, {
    size: 30,
    className: `text-4xl ${color}`,
  });
  return (
    <div className="flex items-center">
      {IconComponent}
      <div className="ml-2">
        <h1 className="text-xl font-bold">{label}</h1>
        <h1 className="text-center inline-bloc text-gray-500">{count}</h1>
      </div>
    </div>
  );
};

const Details = ({ user }) => (
  <div>
    <ProfileInfo user={user} />

    <div className="flex flex-wrap gap-2 justify-between mt-6 ml-4">
      {statistics.map((stat, index) => (
        <StatsCard
          key={index}
          icon={
            stat.icon === "FcLike"
              ? FcLike
              : stat.icon === "FaComment"
              ? FaComment
              : stat.icon === "MdOutlineLocalPostOffice"
              ? MdOutlineLocalPostOffice
              : FaSave
          }
          label={stat.label}
          count={stat.count}
          color={stat.color}
        />
      ))}
    </div>
  </div>
);

export default Details;
