import ReactDOM from "react-dom/client";
import React from "react";
import HomePage from "./pages/HomePage/HomePage.jsx";
import NavBar from "./components/NavBar/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <>
      <NavBar />
      <HomePage />;
    </>
  );
};

root.render(<App />);
