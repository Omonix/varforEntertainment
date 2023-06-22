import { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import Formula from "./component/formula/Formula";
import Home from "./component/home/Home";
import Footer from "./component/footer/Footer";
import Search from "./component/search/Search.js";

const App = () => {
  const [bodyG, setBodyG] = useState("home");
  const [searchValue, setSearchValue] = useState("");
  const changeBodyG = (valueC) => {
    setBodyG(valueC);
  };
  return (
    <div className="body">
      <Header option={changeBodyG} updateSearchValue={setSearchValue} />
      {bodyG === "home" ? (
        <Home />
      ) : bodyG === "formula" ? (
        <Formula />
      ) : bodyG === "search" ? (
        <Search searching={searchValue} />
      ) : (
        <div>NONE</div>
      )}
      <Footer />
    </div>
  );
};

export default App;
