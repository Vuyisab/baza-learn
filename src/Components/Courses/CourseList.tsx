import React, { useEffect, useState } from "react";
import { Course } from "../../types/Courses";
import { CourseCard } from "./CourseCard";
import { fetchCourses } from "../../services/Courses";
import Loader from "../../loader/Loader";

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchCourses().then((data) => {
        setCourses(data);
        setLoading(false);
      });
    }, 2000); // Simulating a 2-second delay
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center bg-gradient-to-r  bg-slate-700">
      <h1 className="text-2xl font-bold mb-4   bg-clip-text items-center text-white">
        Courses
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
