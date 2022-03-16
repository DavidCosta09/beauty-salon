import "./styles.scss";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";

const HeaderComponent = ({setMenu}:any) => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__content__header-left">
          <img
            className="header__content__header-left__img"
            src={logo}
            alt="beauty salon"
          />
        </div>
        <img className="header__content__img" onClick={() => setMenu(true)} src={menu} alt="menu"></img>
        <div className="header__content__main">
          <div className="header__content__main__header-right">
            <a href="#/">
              <p className="header__content__main__header-right__text">
                Início
              </p>
            </a>

            <a href="#/sobre">
              <p className="header__content__main__header-right__text">
                Sobre
              </p>
            </a>
            <a href="#/servicos">
              <p className="header__content__main__header-right__text">
                Serviços
              </p>
            </a>
            <a href="#/depoimentos">
              <p className="header__content__main__header-right__text">
                Depoimentos
              </p>
            </a>
            <a href="#/contato">
              <p className="header__content__main__header-right__text">
                Contato
              </p>
            </a>
          </div>
          <div className="header__content__main__line" />
        </div>
      </div>
    </div>
  );
};

export { HeaderComponent };
