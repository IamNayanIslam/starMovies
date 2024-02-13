import React from "react";
import ReactDOM from "react-dom/client";
import Starrating from "./Components/Starratting/Starrating.component";

/* import App from './App.jsx'
import './index.css' */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Starrating
      MaxRatting={5}
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <Starrating
      MaxRatting={5}
      // message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
  </React.StrictMode>
);

