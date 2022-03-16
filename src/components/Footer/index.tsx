import "./styles.scss";
import Footer from "../../assets/footer.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Youtube from "../../assets/youtube.png";


const FooterComponent = () => {
  return (
    <div id="/footer" className="footer">
      <div className="footer__content">
         <div className="footer__content__footer-left">
          <img
            className="footer__content__footer-left__img"
            src={Footer}
            alt=""
          />
          <div className="footer__content__footer-left__copy-right">
            <h3 className="footer__content__footer-left__copy-right__text">
              ©2021 Beautysalon.
            </h3>
            <h3 className="footer__content__footer-left__copy-right__text">
              Todos os direitos reservados.
            </h3>
          </div>
        </div>
        <div className="footer__content__footer-right">
          <img
            className="footer__content__footer-right__img"
            src={Instagram}
            alt=""
          />
          <img
            className="footer__content__footer-right__img"
            src={Facebook}
            alt=""
          />
          <img
            className="footer__content__footer-right__img"
            src={Youtube}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export { FooterComponent };
