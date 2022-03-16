import { useState } from "react";
import "./styles.scss";
import { MenuComponent } from "../../components/common";
import {
  HeaderComponent,
  AboutUsComponent,
  DepoimentsComponent,
  FooterComponent,
  ServicesPrestation,
  HomePageComponent,
  ContactComponent,
} from "../../components";

const Home = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <HeaderComponent setMenu={setMenu} />
      <HomePageComponent />
      <AboutUsComponent />
      <ServicesPrestation />
      <DepoimentsComponent />
      <ContactComponent />
      <FooterComponent />
      {menu && <MenuComponent menu={menu} setMenu={setMenu} />}
    </>
  );
};

export default Home;
