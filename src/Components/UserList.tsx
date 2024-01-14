import React from "react";

const UserList = ({ isLoading, error, data }) => {
  if (isLoading && !error) {
    return (
      <p className="p-4 bg-red-200 text-red-600 text-center mt-10">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="p-4 bg-red-200 text-red-600 text-center mt-10">
        Something went wrong
      </p>
    );
  }
  return (
    <div className="p-4 bg-slate-100">
      {data.map((item) => (
        <p className="p-4 bg-slate-300 m-2 rounded-xl font-bold text-blue-900">
          {item.name}
        </p>
      ))}
    </div>
  );
};

export default UserList;
