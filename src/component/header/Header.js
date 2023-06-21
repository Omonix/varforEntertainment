import React from "react";
import logoImg from "../../img/logoV.jpg";
import { useState } from "react";
import projectArr from "../../projectList.json";

const Header = ({ option }) => {
  const [searchValue, setSearchValue] = useState("");

  const searchInputHandler = (event) => {
    setSearchValue(event.target.value);
  };
  const whatSearch = (theValue) => {
    for (let i = 0; i < projectArr.length; i++) {
      for (let x = 0; x < projectArr[i].name.length; x++) {
        if (projectArr[i].name[x] === theValue[0]) {
          if (
            projectArr[i].name.substring(x, x + theValue.length) === theValue
          ) {
            console.log(projectArr[i].id);
          }
        }
      }
    }
  };
  return (
    <div className="headerIng">
      <div className="containLogo aFalse" href="home">
        <img
          onClick={() => option("home")}
          className="logo"
          height="75em"
          src={logoImg}
          alt="Varför logo"
        />
      </div>
      <div className="searcher">
        <input
          onChange={searchInputHandler}
          className="search"
          type="text"
          placeholder="Chercher un projet"
        />
        <input
          className="buttonSearch"
          type="button"
          value="Rechercher"
          onClick={() => {
            option("search");
            whatSearch(searchValue);
          }}
        />
      </div>
      <div
        onClick={() => option("formula")}
        className="creater aFalse"
        href="formula"
      >
        Créer ma plateforme
      </div>
    </div>
  );
};

export default Header;
