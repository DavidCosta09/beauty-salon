import "./styles.scss";
import Close from "../../../assets/close.png";

const MenuComponent = ({ setMenu }: any) => {
  return (
    <div className="menu">
      <div className="menu__content">
        <div className="menu__content__close">
          <img
            className="header__content__close__img"
            onClick={() => setMenu(false)}
            src={Close}
            alt="close"
          ></img>
        </div>
        <div className="menu__content__list">
          <a className="decoration" href="#/">
            <p
              className="menu__content__list__text"
              onClick={() => setMenu(false)}
            >
              Início
            </p>
          </a>

          <a className="decoration" href="#/sobre">
            <p
              className="menu__content__list__text"
              onClick={() => setMenu(false)}
            >
              Sobre
            </p>
          </a>
          <a className="decoration" href="#/servicos">
            <p
              className="menu__content__list__text"
              onClick={() => setMenu(false)}
            >
              Serviços
            </p>
          </a>
          <a className="decoration" href="#/depoimentos">
            <p
              className="menu__content__list__text"
              onClick={() => setMenu(false)}
            >
              Depoimentos
            </p>
          </a>
          <a className="decoration" href="#/contato">
            <p
              className="menu__content__list__text"
              onClick={() => setMenu(false)}
            >
              Contato
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export { MenuComponent };
