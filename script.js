"use strict";

function calculate(amount, curencyA, curencyB) {
  const requestURL = `https://api.exchangerate.host/convert?from=${curencyA}&to=${curencyB}&amount=${amount}`;
  const request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    const response = request.response;
    console.log(response.result);
  };
}
calculate(100, "EUR", "USD");
