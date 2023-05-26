import React from "react";
import { Course } from "../../types/Courses";
import { Link } from "react-router-dom";

export const CourseCard: React.FC<Course> = ({ id, title, price }) => {
  // Generate a random color for the course title
  const getRandomColor = () => {
    const colors = [
      "text-red-500",
      "text-blue-500",
      "text-green-500",
      "text-purple-500",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4 flex flex-col items-center bg-white">
      <Link to={`/courses/${id}`}>
        <div
          className="bg-gray-200 w-32 h-32 flex items-center justify-center rounded mb-4"
          style={{ backgroundImage: `url('/placeholder-thumbnail.jpg')` }}
        >
          <span className="text-2xl text-gray-500">{title[0]}</span>
        </div>
        <h2 className={"text-lg  text-black font-bold"}>{title}</h2>
        <p className="text-gray-500">{price}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded mt-4">
          Enroll
        </button>
      </Link>
    </div>
  );
};
