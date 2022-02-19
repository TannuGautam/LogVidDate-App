import React from "react";
import DateComponent from "./components/DateComponent";
import LoginPage from "./components/LoginPage";
import Video from "./components/Video";
import MainComponent from "./components/MainComponent";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";

const Section = () => {
  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainComponent />}></Route>
          <Route exact path="/loginscreen" element={<LoginPage />}></Route>
          <Route exact path="/videoscreen" element={<Video />}></Route>
          <Route
            exact
            path="/dategeneratorscreen"
            element={<DateComponent />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Section;
