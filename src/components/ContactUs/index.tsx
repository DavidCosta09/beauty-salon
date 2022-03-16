import "./styles.scss";
import { ButtonComponent } from "../common";
import Mail from "../../assets/mail.png";
import Phone from "../../assets/phone.png";
import Map from "../../assets/map.png";

const ContactComponent = () => {
  return (
    <div id="/contato" className="contact">
      <div className="contact__content">
        <div className="contact__content__contact-left">
          <span className="contact__content__contact-left__text">
            Entre em contato com a gente!
          </span>
          <p className="contact__content__contact-left__text__paragraphy">
            Entre em contato com a Beautysalon, queremos tirar suas dúvidas,
            ouvir suas críticas e sugestões.
          </p>
          <ButtonComponent img text="Entrar em contato" styles={{width: "236px"}}/>
        </div>

        <div className="contact__content__contact-right">
          <div className="contact__content__contact-right__combo">
            <div className="contact__content__contact-right__combo__item">
              <img className="contact__content__contact-right__combo__item__img" src={Phone} alt="" />
              <p className="contact__content__contact-right__combo__item__text">
                11 99845-6754
              </p>
            </div>

            <div className="contact__content__contact-right__combo__item">
              <img className="contact__content__contact-right__combo__item__img" src={Map} alt="" />
              <p className="contact__content__contact-right__combo__item__text">
                R. Amauri Souza, 346
              </p>
            </div>

            <div className="contact__content__contact-right__combo__item">
              <img className="contact__content__contact-right__combo__item__img" src={Mail} alt="" />
              <p className="contact__content__contact-right__combo__item__text">
                contato@beautysalon.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ContactComponent };
