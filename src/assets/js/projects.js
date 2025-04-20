/* COUNTER */
const numberChange = document.getElementById('number-change');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');
const incrementBtn = document.getElementById('increment-btn');
let count = 0;

decrementBtn.onclick = function () {
    count--;
    numberChange.textContent = count;
}
resetBtn.onclick = function () {
    count = 0;
    numberChange.textContent = count;
}
incrementBtn.onclick = function () {
    count++
    numberChange.textContent = count;
}

/* RANDOM */
const random01 = document.getElementById('random01');
const btnRandom01 = document.getElementById('btn-random-01');

btnRandom01.onclick = function () {
    random01.textContent = Math.round(Math.random() * 100) + 1;
}

/* CHECKED */

const myCheckbox = document.getElementById('myCheckbox');
const visaBtn = document.getElementById('visaBtn');
const mastercardBtn = document.getElementById('mastercardBtn');
const paypalBtn = document.getElementById('paypalBtn');
const secondMySub = document.getElementById('secondMySub');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

secondMySub.onclick = function () {
    if (myCheckbox.checked) {
        subResult.textContent = `Você clicou!`;
    } else {
        subResult.textContent = `Você não clicou!`;
    }

    if (visaBtn.checked) {
        paymentResult.textContent = `Você está pagando com Visa`;
    } else if (mastercardBtn.checked) {
        paymentResult.textContent = `Você está pagando com Mastercard`;
    } else if (paypalBtn.checked) {
        paymentResult.textContent = `Você está pagando com Paypal`;
    } else {
        paymentResult.textContent = `Selecione um tipo de pagamento!`;
    }
}