import { useState } from "react";

const Formula = () => {
  const [webSoft, setWebSoft] = useState("web");
  const [finished, setFinished] = useState(false);
  const [prixV, setPrixV] = useState(55);
  const changeSL = (v) => {
    setWebSoft(v);
  };
  const [typePlat, setTypePlat] = useState("");
  const [gestCom, setGestCom] = useState("");
  const [sysExploi, setSysExploi] = useState("");
  const [logoQ, setLogoQ] = useState("");

  let retest = "";
  const result = () => {
    let prix = 55;
    if (webSoft === "web") {
      retest = gestCom;
    } else {
      retest = sysExploi;
    }
    const testering = [typePlat, retest, logoQ];
    if (testering[0] === "site") {
      prix += 9000;
    } else if (testering[0] === "logiciel") {
      prix += 7000;
    }
    if (testering[1] === "commerce") {
      prix += 500;
    }
    if (testering[2] === "oui") {
      prix += 2500;
    }
    setPrixV(prix);
    setFinished(true);
  };
  const typePlatHandler = (event) => {
    setTypePlat(event.target.value);
  };
  const gestComHandler = (event) => {
    setGestCom(event.target.value);
  };
  const sysExploiHandler = (event) => {
    setSysExploi(event.target.value);
  };
  const logoQHandler = (event) => {
    setLogoQ(event.target.value);
  };

  return (
    <div>
      {finished === false ? (
        <div>
          <form method="get" action="">
            <div className="former">
              <div>Quel sorte de plateforme voulez-vous ?</div>
              <div className="formeres">
                <input
                  onClick={() => changeSL("web")}
                  onChange={typePlatHandler}
                  type="radio"
                  name="typePlat"
                  value="site"
                />
                <label name="typePlat" for="site">
                  Site web
                </label>
              </div>
              <div className="formeres">
                <input
                  onChange={typePlatHandler}
                  onClick={() => changeSL("soft")}
                  type="radio"
                  name="typePlat"
                  value="logiciel"
                />
                <label name="typePlat" for="logiciel">
                  Logiciel
                </label>
              </div>
            </div>
            {webSoft === "web" ? (
              <div className="former">
                <div>Voulez-vous un site web de gestion ou e-commerce ?</div>
                <div className="formeres">
                  <input
                    onChange={gestComHandler}
                    type="radio"
                    name="gestCom"
                    value="gestion"
                  />
                  <label name="gestCom" for="gestion">
                    De gestion
                  </label>
                </div>
                <div className="formeres">
                  <input
                    onChange={gestComHandler}
                    type="radio"
                    name="gestCom"
                    value="commerce"
                  />
                  <label name="gestCom" for="commerce">
                    De e-commerce
                  </label>
                </div>
              </div>
            ) : (
              <div className="former">
                <div>
                  Voulez-vous un logiciel de gestion sous quel système
                  d'exploitation ?
                </div>
                <div className="formeres">
                  <input
                    onChange={sysExploiHandler}
                    type="radio"
                    name="sysExploi"
                    value="windows"
                  />
                  <label name="sysExploi" for="windows">
                    Windows
                  </label>
                  <input
                    onChange={sysExploiHandler}
                    type="radio"
                    name="sysExploi"
                    value="mac"
                  />
                  <label name="sysExploi" for="mac">
                    mac OS
                  </label>
                </div>
              </div>
            )}
            <div className="former">
              <div>Voulez-vous que l'on vous crée un logo et/ou un style ?</div>
              <div className="formeres">
                <input
                  onChange={logoQHandler}
                  type="radio"
                  name="logoQ"
                  value="oui"
                />
                <label type="logoQ" for="oui">
                  Oui, je veux bien s'il vous plait
                </label>
              </div>
              <div className="formeres">
                <input
                  onChange={logoQHandler}
                  type="radio"
                  name="logoQ"
                  value="non"
                />
                <label type="logoQ" for="non">
                  Non merci, nous en possédons déjà un
                </label>
              </div>
            </div>
          </form>
          <input
            className="buttonSearch buttonSearchForm"
            type="submit"
            onClick={result}
            value="Estimer ma plateforme"
          />
        </div>
      ) : (
        <div>
          <div>Votre plateforme a été estimé à {prixV} €</div>
          <input
            name="mailTo"
            className="buttonSearch"
            type="button"
            value="Commander ma platforme"
            onClick={window.open(
              `mailto:loul0uboypy@gmail.com?subject=Commande de ${typePlat}&body=Votre ${typePlat} à été estimé à ${prixV} €.%0ABonjour, j'aimerai un ${typePlat} ${
                gestCom !== ""
                  ? gestCom === "gestion"
                    ? "de gestion"
                    : "de commerce"
                  : sysExploi === "windows"
                  ? "sur windows"
                  : "sur mac OS"
              } et nous ${
                logoQ === "oui"
                  ? "voudrions avoir un logo et/ou que vous vous occupiez de notre communication de notre platforme."
                  : "ne voulons pas que vous vous occupiez de notre communication de notre platforme."
              }`
            )}
          />
        </div>
      )}
    </div>
  );
};

export default Formula;
