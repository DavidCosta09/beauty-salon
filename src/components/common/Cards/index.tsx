import "./styles.scss";
import Icon from "../../../assets/icon.png";
import Cortes from "../../../assets/cortes.png";
import Tratamento from "../../../assets/tratamentos.png";

interface ICardsProps {
  text: string;
  title: string;
  icon: "capilar" | "corte" | "tratamento";
}

const CardsComponent = ({ text, title, icon }: ICardsProps) => {
  return (
    <div className="card">
      <div className="cards">
        <div className="cards__card-img">
          <div className="cards__card-img__image">
            <img
              className="cards__card-img__image_image-icon"
              //@ts-ignore
              src={
                (icon === "capilar" && Icon) ||
                (icon === "corte" && Cortes) ||
                (icon === "tratamento" && Tratamento)
              }
              alt=""
            />
          </div>
        </div>

        <div className="cards__card-services">
          <span className="cards__card-services__texts">{title}</span>
          <span className="cards__card-services__paragraphy">{text}</span>
        </div>
      </div>
    </div>
  );
};

export { CardsComponent };
