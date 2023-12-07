import React from "react";
import "./loading.css";

const LoadingScreen = () => {
  return (
    <div className="loading-wrapper">
      <div className="overlay">
        <div className="bar"> </div>
        <div className="bar"> </div>
        <div className="bar"> </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
