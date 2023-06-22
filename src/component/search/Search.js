import React from "react";
import projectArr from "../../projectList.json";

const Search = ({ searching }) => {
  return (
    <div className="contentProject">
      {searching.map((element, index) => {
        for (let i = 0; i < searching.length; i++) {
          if (element === projectArr[i].id) {
            return (
              <div className="project" key={index}>
                <a className="aFalse" href="#">
                  <div className="titleProject">{projectArr[i].name}</div>
                  <img
                    className="imgProject"
                    src={projectArr[i].image}
                    alt={"img" + index}
                  />
                </a>
              </div>
            );
          }
        }
      })}
    </div>
  );
};

export default Search;
