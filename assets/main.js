
const counterCard = document.querySelector('.countercard'); 

/* NUMERO DEL COUNTER */
let Number = document.createElement('div');
counterCard.appendChild(Number);
Number.innerHTML = "0";
Number.setAttribute('class', 'number');

/* BOTTONI DEL COUNTER */
let buttonUp = document.createElement('button');
counterCard.append(buttonUp);
buttonUp.innerHTML = "+";
buttonUp.setAttribute('class', 'button');

let buttonDown = document.createElement('button');
counterCard.append(buttonDown);
buttonDown.innerHTML = "-";
buttonDown.setAttribute('class', 'button');

/* FUNZIONI DEL CONTATORE */
function increase() {
  Number.innerHTML++;
}
buttonUp.addEventListener('click', increase);

function decrease() {
  Number.innerHTML--;
}
buttonDown.addEventListener('click', decrease);


