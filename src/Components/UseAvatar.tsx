import React from "react";

const UseAvatar = ({ imageUrl }) => {
  return (
    <div className="mx-auto ">
      <img className=" rounded-full" src={imageUrl} alt="" />
    </div>
  );
};

export default UseAvatar;
