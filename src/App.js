import { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import Formula from "./component/formula/Formula";
import Home from "./component/home/Home";
import Footer from "./component/footer/Footer";
import Search from "./component/search/Search.js";

const App = () => {
  const [bodyG, setBodyG] = useState("home");
  const changeBodyG = (valueC) => {
    setBodyG(valueC);
  };
  return (
    <div className="body">
      <Header option={changeBodyG} />
      {bodyG === "home" ? (
        <Home />
      ) : bodyG === "formula" ? (
        <Formula />
      ) : bodyG === "search" ? (
        <Search />
      ) : (
        <div>NONE</div>
      )}
      <Footer />
    </div>
  );
};

export default App;
