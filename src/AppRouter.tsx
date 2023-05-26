import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseList from "./Components/Courses/CourseList";
// import CourseDetails from "./Components/Courses/";
import NotFound from "./NotFound";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/courses" element={<CourseList />} />
        {/* <Route path="/courses/:id" element={<CourseDetails />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
