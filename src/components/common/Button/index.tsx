import "./styles.scss";
import Wpp from "../../../assets/whatsapp.png";

const ButtonComponent = ({ img, text, styles }: any) => {
  return (
    <button className="buttons" style={styles}>
      {img && <img className="buttons__img" src={Wpp} />}
      <span className="buttons__button">{text}</span>
    </button>
  );
};

export { ButtonComponent };
