import "./Header.css";

import logo from "../../images/logoWelbex.svg";
import veber from "../../images/viber.svg";
import whatsapp from "../../images/whatsapp.svg";
import telegramm from "../../images/telegram.svg";

const itemLink = [
  {
    id: 1,
    title: "Услуги",
    link: "",
  },
  {
    id: 2,
    title: "Виджеты",
    link: "",
  },
  {
    id: 3,
    title: "Интеграции",
    link: "",
  },
  {
    id: 4,
    title: "Кейсы",
    link: "",
  },
  {
    id: 5,
    title: "Сертификаты",
    link: "",
  },
];

function Header() {
  return (
    <header className="Header">
      <div className="Header__menu-container">
        <div className="Header__logo-container ">
          <img className="Header__logo-img" src={logo}></img>
        </div>

        {itemLink?.map((i) => (
          <a className="Header__link" href={i.link} key={i.id}>
            {i.title}
          </a>
        ))}
      </div>

      <div className="Header__contacts-container">
        <span className="Header__number">+7 555 555-55-55</span>
        <img className="Header__messeger" src={telegramm}></img>
        <img className="Header__messeger" src={veber}></img>
        <img src={whatsapp}></img>
      </div>
    </header>
  );
}

export default Header;
