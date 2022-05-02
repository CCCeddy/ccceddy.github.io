let runningTotal = 0;
let buffer = '0';
let previousOperator = null;
let completed = false;
let isPoint = false;

const screen = document.querySelector('.display-num');

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = buffer;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case 'C':
      buffer = '0';
      runningTotal = 0;
      isPoint = false;
      break;
    case 'CE':
      buffer = '0';
      runningTotal = 0;
      isPoint = false;
      break;
    case '.':
      if (isPoint) break;
      else if (!isPoint) {
        buffer = buffer + '.';
        isPoint = true;
      }
      break;
    case '=':
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      isPoint = false;
      completed = true;
      break;
    case '←':
      if (buffer.length === 1) {
        buffer = '0';
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case '+':
    case '-':
    case '×':
    case '÷':
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (completed == true) completed = false;
  isPoint = false;
  if (buffer === '0') {
    return;
  }

  const intBuffer = parseFloat(buffer);
  debugger;
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = symbol;

  buffer = '0';
}

function flushOperation(intBuffer) {
  if (previousOperator === '+') {
    runningTotal += intBuffer;
  } else if (previousOperator === '-') {
    runningTotal -= intBuffer;
  } else if (previousOperator === '÷') {
    runningTotal /= intBuffer;
  } else {
    runningTotal *= intBuffer;
  }
}

function handleNumber(numberString) {
  if (completed == false) {
    if (buffer === '0') {
      buffer = numberString;
    } else {
      buffer += numberString;
    }
  } else {
    completed = false;
    buffer = '0';
    if (buffer === '0') {
      buffer = numberString;
    } else {
      buffer += numberString;
    }
  }
}

function init() {
  document
    .querySelector('.calc-buttons')
    .addEventListener('click', function (event) {
      buttonClick(event.target.innerText);
    });
}

init();

/* ACCOUNT: HBUK8H
PRICE: 13960
PAYBILL: 737700 */
