import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Details = () => {
  const { userId } = useParams();
  const navigateTo = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigateTo("/home");
        }}
      >
        Back
      </button>
      <div className="component">
        <h3>Details</h3>
        <span>Id is {userId}</span>
      </div>
    </div>
  );
};

export default Details;
