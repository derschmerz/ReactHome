import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Login />
      <Footer />
    </div>
  );
};

export default App;
