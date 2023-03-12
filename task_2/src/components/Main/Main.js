import "./Main.css";
import red_light from "../../images/red_light.svg";
import redBall from "../../images/redBall.svg";

function Main() {
  return (
    <main className="Main">
      <div>
        <h1 className="Main__title">
          Зарабатывайте <br /> больше
        </h1>
        <h2 className="Main__title Main__title_color-text">c WELBEX</h2>
        <h3 className="Main__title Main__title_span">
          Развиваем и контролируем <br /> продажи за вас
        </h3>
      </div>

      <div className="Main__right-container">
        <div className="Main__present-wrapper">
          <h2 className="Main__present">Вместе с </h2>
          <span className="Main__present Main__span">бесплатной</span>
          <span className="Main__present Main__span">консультацией</span>
          <h2 className="Main__present">мы дарим:</h2>
        </div>

        <div>
          <ul className="Main__intro">
            <li>
              <h2 className="Main__intro-title Main__intro-title_desctop">
                Виджеты
              </h2>
              <h2 className="Main__intro-title Main__intro-title_mobile ">
                Skype Аудит
              </h2>
              <p className="Main__intro-subtitle">30 готовых решений</p>
            </li>

            <li>
              <h2 className="Main__intro-title Main__intro-title_desctop">
                Dashboard
              </h2>

              <h2 className="Main__intro-title Main__intro-title_mobile ">
                30 Виджетов
              </h2>

              <p className="Main__intro-subtitle">
                с показателями вашего бизнеса
              </p>
            </li>

            <li>
              <h2 className="Main__intro-title Main__intro-title_desctop">
                Skype Аудит
              </h2>
              <h2 className="Main__intro-title Main__intro-title_mobile ">
                Dashboard
              </h2>
              <p className="Main__intro-subtitle">
                отдела продаж и CRM системы
              </p>
            </li>

            <li>
              <h2 className="Main__intro-title Main__intro-title_desctop">
                35 дней
              </h2>
              <h2 className="Main__intro-title Main__intro-title_mobile ">
                Месяц AMOCRM
              </h2>
              <p className="Main__intro-subtitle">использования CRM</p>
            </li>
          </ul>
        </div>
        <button className="Main__button">
          <span className="Main__button-text">Получить консультацию</span>
        </button>
      </div>
      <div className="Main__rear-boll"></div>
      <div className="Main__top-boll"></div>
      <div className="Main__bottom-boll"></div>
    </main>
  );
}

export default Main;
