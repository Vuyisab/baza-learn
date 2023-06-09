import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-600">Oops! Page not found</p>
    </div>
  );
};

export default NotFound;
