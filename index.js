const displayAdvice = document.querySelector(".advice");
const newAdviceBtn = document.querySelector("button");
const adviceNumber = document.querySelector(".advice-Number");

const getAdvice = () => {
  fetch("  https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceNumber.innerHTML = data.slip.id;
      displayAdvice.innerHTML = data.slip.advice;
    })
    .catch((error) => console.error(error));
};

newAdviceBtn.addEventListener("click", () => {
  getAdvice();
});
