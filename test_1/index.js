const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {  

    let timer = seconds;
    const hors = () => Math.floor(timer / 3600);
    const minutes = () => Math.floor((timer - hors() * 3600) / 60);

    const buildText = (time, textValue1, textValue2, textValue3) =>
      time % 10 == 1 && time !== 11
        ? textValue1
        : [2, 3, 4].indexOf(time % 10) != -1 && [12, 13, 14].indexOf(time) == -1
        ? textValue2
        : textValue3;

    const intervalId = setInterval(() => {
      timer--;
      timerEl.textContent = `${hors()} ${buildText(
        hors(),
        "час",
        "часа",
        "часов"
      )}, ${minutes()}  ${buildText(minutes(), "минута", "минуты", "минут")}, ${
        timer % 60
      }  ${buildText(timer % 60, "секунда", "секунды", "секунд")}`;

      if (timer === 0) {
        clearInterval(intervalId);
        timerEl.textContent = "Отсчет закончен";
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа

  let input = inputEl.value;
  let filteredInput = input.replace(/[^\d+$]/g, "");
  inputEl.value = filteredInput;
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  console.log(seconds);
  inputEl.value = "";
});
