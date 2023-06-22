import React from "react";
import logoImg from "../../img/logoV.jpg";
import { useState } from "react";
import projectArr from "../../projectList.json";

const Header = ({ option, updateSearchValue }) => {
  const [searchValue, setSearchValue] = useState("");

  const searchInputHandler = (event) => {
    setSearchValue(event.target.value);
  };
  const whatSearch = (theValue) => {
    const arrIdResult = [];
    if (theValue !== "") {
      for (let i = 0; i < projectArr.length; i++) {
        for (let x = 0; x < projectArr[i].name.length; x++) {
          if (projectArr[i].name[x] === theValue[0]) {
            if (
              projectArr[i].name.substring(x, x + theValue.length) === theValue
            ) {
              arrIdResult.push(projectArr[i].id);
            }
          }
        }
      }
    } else {
      for (let y = 0; y < projectArr.length; y++) {
        arrIdResult.push(projectArr[y].id);
      }
    }
    updateSearchValue(arrIdResult);
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
