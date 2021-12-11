import React from "react";
import "./App.css";
import ProductCounter from "./Product counter";

const App = () => {
  return (
    <div className="App">
      <ProductCounter product={{ productName: "Апельсин", count: 6 }} />
      <ProductCounter product={{ productName: "Яблоко", count: 15 }} />
      <ProductCounter product={{ productName: "Ананас", count: 3 }} />
      <ProductCounter product={{ productName: "Арбуз", count: 0 }} />
      <ProductCounter product={{ productName: "Дыня" }} />
    </div>
  );
};

export default App;
