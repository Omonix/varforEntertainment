import React from "react";
import logoReact from "../../img/logoreact.png";

const Footer = () => {
  return (
    <div className="footerIng">
      <div className="developed">Développé par</div>
      <a
        className="aFalse developed"
        target="_blank"
        href="https://www.instagram.com/louloub0y_okumanchoja/"
      >
        Louloub0y
      </a>
      <div className="developed">with</div>
      <a className="aFalse developed" target="_blank" href="https://react.dev/">
        <img height="45em" className="imgHomeReact" src={logoReact} />
      </a>
      <a className="aFalse developed" target="_blank" href="https://react.dev/">
        React
      </a>
    </div>
  );
};

export default Footer;
