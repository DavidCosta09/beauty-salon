import "./styles.scss";
import Profile from "../../../assets/profile.png";
import Aspas from "../../../assets/aspas.png";

const MessageComponent = ({text, name, url}:any) => {
  return (
    <div className="message">
      <div className="message__content">
        <div className="message__content__depoiment">
          <p className="message__content__depoiment__txt">
            <img className="message__content__depoiment__txt-img" src={Aspas} />
            {text}
          </p>
        </div>
        <div className="message__content__profile">
          <img className="message__content__profile__img" src={url} alt="" />
          <span className="message__content__profile__name">{name}</span>
        </div>
      </div>
    </div>
  );
};

export { MessageComponent };
