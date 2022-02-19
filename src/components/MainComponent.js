import React from "react";
import { Link } from "react-router-dom";

const MainComponent = () => {
  return (
    <div className="home-container">
      <Link to="/loginscreen" className="ldv">
        Login
      </Link>
      <Link to="/dategeneratorscreen" className="ldv">
        Date
      </Link>
      <Link to="/videoscreen" className="ldv">
        Video
      </Link>
    </div>
  );
};

export default MainComponent;
