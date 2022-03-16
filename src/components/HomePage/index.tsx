import "./styles.scss";
import Home from "../../assets/home.png";
import { ButtonComponent } from "../common";


const HomePageComponent = () => {
  return (
    <div id="/" className="home">
      <div className="home__content">
        <div className="home__content__resume">
          <div className="home__content__resume__history">
            <span className="home__content__resume__history__title-title">
              Saúde natural para os seus cabelos
            </span>
            <p className="home__content__resume__history__title-description">
              Um salão exclusivo em São Paulo, especializado em tratamentos
              naturais.
            </p>
            <ButtonComponent text="Agendar um horário" styles={{width: "218px"}}/>
          </div>

          <img className="home__content__resume__img" src={Home} alt="" />
        </div>
      </div>
    </div>
  );
};

export {HomePageComponent};
