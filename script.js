"use strict";
const amountOne = document.querySelector(".amount-one");
const amountTwo = document.querySelector(".amount-two");
const currencyOne = document.querySelector("#currency-one");
const currencyTwo = document.querySelector("#currency-two");
const swap = document.querySelector(".swap");
const rateInfo = document.querySelector(".rate-info");

swap.addEventListener("click", calculate);

function calculate() {
  const requestURL = `https://api.exchangerate.host/convert?from=${currencyOne.value}&to=${currencyTwo.value}&amount=${amountOne.value}&places=2`;
  const request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    rateInfo.textContent = `Exchange rate: ${request.response.info.rate}`;
    amountTwo.value = request.response.result;
  };
}
