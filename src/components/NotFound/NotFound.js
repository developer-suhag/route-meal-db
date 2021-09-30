import React from "react";
import error from "../../images/404.jpg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={error} alt="" />
    </div>
  );
};

export default NotFound;
