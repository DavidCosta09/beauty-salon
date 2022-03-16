import "./styles.scss";
import { MessageComponent } from "../common";
import Depoiments from "../../utils/depoiments";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

const DepoimentsComponent = () => {
  return (
    <div id="/depoimentos" className="depoiment">
      <div className="depoiment__content">
        <div className="depoiment__content__title">
          <span className="depoiment__content__title__title">
            Depoimentos de quem já passou por aqui
          </span>
        </div>

        <div className="depoiment__content__message">
          {Depoiments.map((item) => (
            <MessageComponent
              key={item.id}
              name={item.name}
              text={item.text}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { DepoimentsComponent };
