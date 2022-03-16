import "./styles.scss";
import { CardsComponent } from "../common";
import Services from "../../utils/services";

const ServicesPrestation = () => {
  return (
    <div id="/servicos" className="services">
      <div className="services__content">
        <div className="services__content__texts">
          <p className="services__content__texts__texts-title">
            Serviços
          </p>
          <p className="services__content__texts__texts-text">
            Com mais de 10 anos no mercado, o{" "}
            <span className="services__content__texts__texts-text--active">
              Beautysalon
            </span>{" "}
            já conquistou clientes de inúmeros países com seus tratamentos
            exclusivos e totalmente naturais
          </p>
        </div>
        <div className="services__content__card">
          {Services.map(
            (
              item 
            ) => (
              <CardsComponent
                key={item.id}
                title={item.title}
                text={item.text}
                //@ts-ignore
                icon={item.icon}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export { ServicesPrestation };
