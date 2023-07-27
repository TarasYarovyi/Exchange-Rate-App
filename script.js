"use strict";
const amountOne = document.querySelector(".amount-one");
const amountTwo = document.querySelector(".amount-two");
const currencyOne = document.querySelector("#currency-one");
const currencyTwo = document.querySelector("#currency-two");
const swap = document.querySelector(".swap");
const rateInfo = document.querySelector(".rate-info");

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
swap.addEventListener("click", swapCurrency);

function calculate() {
  fetch(
    `https://api.exchangerate.host/convert?from=${currencyOne.value}&to=${currencyTwo.value}&amount=${amountOne.value}&places=4`
  )
    .then((res) => res.json())
    .then((data) => {
      rateInfo.textContent = `Exchange rate: ${data.info.rate}`;
      amountTwo.value = data.result.toFixed(2);
    });
}
function swapCurrency() {
  [currencyOne.value, currencyTwo.value] = [
    currencyTwo.value,
    currencyOne.value,
  ];
  calculate();
}

calculate();
