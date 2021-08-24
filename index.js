const inputs = document.querySelectorAll(".input");
const time = document.querySelectorAll(".time p");
const timer = document.querySelector(".timer");

const futureDate = new Date(2021, 7, 26, 4, 00, 00).getTime();

function countDown() {
  const currentTime = new Date().getTime();
  const calc = futureDate - currentTime;

  //   1day = 24
  // 1hr = 60min
  // 1min  = 60s
  // 1s = 1000ms
  const secInDay = 24 * 60 * 60 * 1000;
  const secInHr = 60 * 60 * 1000;
  const secInMin = 60 * 1000;
  const days = Math.floor(calc / secInDay);
  const hours = Math.floor((calc % secInDay) / secInHr);
  const minutes = Math.floor(((calc % secInDay) % secInHr) / secInMin);
  const seconds = Math.floor((((calc % secInDay) % secInHr) % secInMin) / 1000);
  const timeRemaining = [days, hours, minutes, seconds];
  time.forEach((el, index) => {
    el.innerHTML = timeRemaining[index];
  });
  if (currentTime > futureDate) {
    timer.innerHTML = `<div><a href="#">visit site</a></div>`;
  }
}
const count = setInterval(() => {
  countDown();
}, 1000);

let index = 0;

for (index; index < inputs.length; index++) {
  inputs[index].addEventListener("focus", focusF);
  inputs[index].addEventListener("blur", blurF);
}

function focusF() {
  const sibling = this.nextElementSibling;
  sibling.classList.add("active");
}
function blurF() {
  const sibling = this.nextElementSibling;
  if (this.value == "") {
    sibling.classList.remove("active");
  }
}
