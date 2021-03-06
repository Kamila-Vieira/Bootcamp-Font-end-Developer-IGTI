window.addEventListener("load", start);

function start(event) {
  inputFirtNumber = document.querySelector(".first-number");
  inputFirtNumber.addEventListener("input", handleFirstNumberChange);

  inputSecondNumber = document.querySelector(".second-number");
  inputSecondNumber.addEventListener("input", handleSecondNumberChange);

  inputSum = document.querySelector(".sum-result");
  inputSubtract = document.querySelector(".subtract-result");
  inputSubtractReverse = document.querySelector(".subtractReverse-result");
  inputMultiply = document.querySelector(".multiply-result");
  inputDivide = document.querySelector(".divide-result");
  inputDivideReverse = document.querySelector(".divideReverse-result");
  inputSquaredFirstNumber = document.querySelector(
    ".squaredFirstNumber-result"
  );
  inputSquaredSecondNumber = document.querySelector(
    ".squaredSecondNumber-result"
  );
  inputFirstNumberDivisors = document.querySelector(
    ".firstNumberDivisors-result"
  );
  inputSecondNumberDivisors = document.querySelector(
    ".secondNumberDivisors-result"
  );
  inputFactorFirstNumber = document.querySelector(".factorFirstNumber-result");
  inputFactorSecondNumber = document.querySelector(
    ".factorSecondNumber-result"
  );

  var hasNumber = !!event.target.value && event.target.value.trim() !== "";
  if (!hasNumber) {
    clearInputs();
    return;
  }

  calculate();
}

function handleFirstNumberChange() {
  calculate();
}

function handleSecondNumberChange() {
  calculate();
}

function calculate() {
  var a = parseInt(inputFirtNumber.value, 10);
  var b = parseInt(inputSecondNumber.value, 10);

  inputSum.value = sum(a, b);

  inputSubtract.value = subtract(a, b);
  inputSubtractReverse.value = subtract(b, a);

  inputMultiply.value = multiply(a, b);

  inputDivide.value = divide(a, b);
  inputDivideReverse.value = divide(b, a);

  inputSquaredFirstNumber.value = squaredNumber(a);
  inputSquaredSecondNumber.value = squaredNumber(b);

  inputFirstNumberDivisors.value = numberDivisors(a);
  inputSecondNumberDivisors.value = numberDivisors(b);

  inputFactorFirstNumber.value = factorNumber(a);
  inputFactorSecondNumber.value = factorNumber(b);
}
//a)
function sum(a, b) {
  return a + b;
}
//b) e c)
function subtract(a, b) {
  return a - b;
}
//d)
function multiply(a, b) {
  return b * a;
}
//e) e f)
function divide(a, b) {
  if (b === 0) {
    return "Divisão por 0";
  }
  return (a / b).toFixed(2);
}
//g) e h)
function squaredNumber(number) {
  return number ** 2;
}
//i) e j)
function numberDivisors(number) {
  var divisors = [];
  for (var i = 1; i <= number; i++) {
    if (number % i === 0) divisors.push(i);
  }
  return `${divisors.join(", ")} (${divisors.length})`;
}
//k) e l)
function factorNumber(number) {
  if (number > 21) {
    return "Número muito grande!";
  } else if (number === 0 || NaN) {
    return 1;
  } else {
    return number * factorNumber(number - 1);
  }
}

function clearInputs() {
  inputSum.value = "";
  inputSubtract.value = "";
  inputSubtractReverse.value = "";
  inputMultiply.value = "";
  inputDivide.value = "";
  inputDivideReverse.value = "";
  inputSquaredFirstNumber.value = "";
  inputSquaredSecondNumber.value = "";
  inputFirstNumberDivisors.value = "";
  inputSecondNumberDivisors.value = "";
  inputFactorFirstNumber.value = "";
  inputFactorSecondNumber.value = "";
}
