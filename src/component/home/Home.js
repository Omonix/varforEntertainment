import React from "react";
import happyWoman from "../../img/happyWoman.jpg";
import businessLogo from "../../img/busnessDigital.jpg";
import businessman from "../../img/busnessman.jpg";
import busniessmanVanGogh from "../../img/busnessmanVanGogh.jpg";
import developerJS from "../../img/developerJS.jpg";
import pencilDrawingBusiness from "../../img/pencilDrawingBusness.jpg";

const Home = () => {
  const arrImg = [
    {
      name: "Developer javascript",
      link: developerJS,
      height: "150em",
      descript: "Onze développeurs",
    },
    {
      name: "Happy woman",
      link: happyWoman,
      height: "150em",
      descript: "Trois graphistes",
    },
    {
      name: "Pencil drawing of business",
      link: pencilDrawingBusiness,
      height: "150em",
      descript: "Votre design",
    },
    {
      name: "Business logo",
      link: businessLogo,
      height: "150em",
      descript: "Et votre logo",
    },
    {
      name: "Business",
      link: businessman,
      height: "150em",
      descript: "Un site web ou un logiciel de gestion",
    },
    ,
    {
      name: "Businessman by Van Gogh",
      link: busniessmanVanGogh,
      height: "150em",
      descript: "Ou un site web de e-commerce.",
    },
  ];
  return (
    <div>
      <div className="describir">
        Varför est une nouvelle entreprise créée le 25 mai 2023 par Louis
        Blonde, un développpeur français.
      </div>
      <div>
        {arrImg.map((element, index) => {
          return (
            <div key={index} className="imgHomeContainer">
              <img
                className="imgHome"
                height={element.height}
                src={element.link}
                alt={element.name}
              />
              <div>{element.descript}</div>
            </div>
          );
        })}
      </div>
      <div className="describir">
        <div>A propos du fondateur : </div>
        <div>
          <div className="describirLB">
            Louis Blonde est un jeune développeur français de 14 ans. Il n'est
            encore pour l'instant qu'au collège mais souhaite l'année prochaine
            intégrer un lycée spécialisé dans l'informatique et plus
            particulierement dans le développement.
            <br />
            Il crée l'entreprise VARFÖR suite à un projet en 3ème qu'il
            continuera et perfectionera année après année.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
