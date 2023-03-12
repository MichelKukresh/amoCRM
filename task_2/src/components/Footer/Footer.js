import "./Footer.css";

import veber from "../../images/viber.svg";
import whatsapp from "../../images/whatsapp.svg";
import telegramm from "../../images/telegram.svg";

function Footer() {
  return (
    <footer className="Footer">
      <nav className="Footer__navigation">
        <ul className="Footer__lists">
          <li className="Footer__list">
            <h3 className="Footer__lists-title">О компании</h3>
            <a className="Footer__list-link">Партнёрская программа</a>
            <a className="Footer__list-link">Вакансии</a>
          </li>
        </ul>
        <div className="Footer__menu-lists">
          {" "}
          <ul className="Footer__lists">
            <li className="Footer__list">
              <h3 className="Footer__lists-title">Меню</h3>
              <div className="Footer__menu-lists">
                <a className="Footer__list-link Footer__list-link_mobile">
                  Расчёт стоимости
                </a>
                <a className="Footer__list-link Footer__list-link_mobile">
                  Услуги
                </a>
                <a className="Footer__list-link Footer__list-link_mobile">
                  Виджеты
                </a>
                <a className="Footer__list-link Footer__list-link_mobile">
                  Интеграции
                </a>
                <a className="Footer__list-link Footer__list-link_mobile">
                  Наши клиенты
                </a>
                <a className="Footer__list-link Footer__list-link_mobile">
                  Кейсы
                </a>
                <a className="Footer__list-link Footer__list-link_mobile">
                  Благодарственные письма
                </a>
                <a className="Footer__list-link Footer__list-link_mobile">
                  Сертификаты
                </a>
                <a className="Footer__list-link Footer__list-link_mobile">
                  Блог на Youtube
                </a>
                <a className="Footer__list-link Footer__list-link_mobile">
                  Вопрос / Ответ
                </a>{" "}
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="Footer__contacts">
        <ul className="Footer__lists Footer__lists_inversia">
          <li className="Footer__list Footer__lists_inversia ">
            <h3 className="Footer__lists-title">Контакты</h3>
            <a className="Footer__list-link">+7 555 555-55-55</a>
            <a className="Footer__list-link">
              <img className="Footer__messeger" src={telegramm}></img>
              <img className="Footer__messeger" src={veber}></img>
              <img className="Footer__messeger" src={whatsapp}></img>
            </a>
            <a className="Footer__list-link">
              Москва, Путевой проезд 3с1, к 902
            </a>
          </li>
        </ul>
        <span className="Footer__copirite">
          ©WELBEX 2022. Все права защищены. <br />
          <span className="Footer__copirite_politica">
            Политика конфиденциальности
          </span>
        </span>
      </nav>
    </footer>
  );
}

export default Footer;
